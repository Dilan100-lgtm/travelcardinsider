// File: /components/CardFinder.js
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import styles from '@/styles/CardFinder.module.css';
import RecommendedCardTile from './RecommendedCardTile';
// Optional: Import libraries for better UI elements
// import Select from 'react-select'; // Example for multi-select
// import Slider from 'rc-slider'; // Example for range slider
// import 'rc-slider/assets/index.css'; // Styles for slider

// --- Debounce Helper ---
function debounce(func, wait) {
  let timeout;
  const debouncedFunction = function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
  // Add a cancel method to the debounced function
  debouncedFunction.cancel = () => {
      clearTimeout(timeout);
  };
  return debouncedFunction;
}

// --- Constants for Inputs ---
const SPENDING_CATEGORIES = ['travel', 'dining', 'groceries', 'gas', 'other'];
const CREDIT_SCORE_OPTIONS = [
    { value: 'any', label: 'Any / Unsure'},
    { value: 'excellent', label: 'Excellent (720+)' },
    { value: 'good', label: 'Good (670-719)' },
    { value: 'fair', label: 'Fair (630-669)' }, // Add if cards support it
    // { value: 'poor', label: 'Poor (<630)' }, // Add if cards support it
];
const CARD_TYPE_OPTIONS = [
    { value: 'any', label: 'Any'},
    { value: 'personal', label: 'Personal'},
    { value: 'business', label: 'Business'},
];
const PRIORITY_OPTIONS = [
    { value: 'rewards', label: 'Best Overall Rewards Value'},
    { value: 'low_fee', label: 'Lowest Annual Fee Focus'},
    { value: 'travel_perks', label: 'Best Travel Perks'},
    { value: 'sign_up_bonus', label: 'Highest Sign-up Bonus'},
    { value: '0_apr', label: 'Best Intro APR Offer'},
];
// Expand lists as needed - match these values to your scoring.js `rewardProgram` checks and JSON data
const AIRLINE_OPTIONS = ['Aeroplan', 'Alaska Mileage Plan', 'American AAdvantage', 'Avios', 'Delta SkyMiles', 'JetBlue TrueBlue', 'Southwest Rapid Rewards', 'United MileagePlus', 'Other'];
const HOTEL_OPTIONS = ['Hilton Honors', 'IHG One Rewards', 'Marriott Bonvoy', 'World of Hyatt', 'Other'];


export default function CardFinder() {
  // --- State Management ---
  const [spendingProfile, setSpendingProfile] = useState(
      SPENDING_CATEGORIES.reduce((acc, cat) => ({ ...acc, [cat]: '' }), {})
  );
  // Consolidate preferences into one object
  const [preferences, setPreferences] = useState({
    creditScoreRange: 'good', // Default value
    cardType: 'personal',
    priority: 'rewards',
    annualFeeBudget: [0, 695], // Default Slider Range [min, max] - TODO: Implement slider or remove if not used
    preferredAirlines: [], // Array for multi-select
    preferredHotels: [], // Array for multi-select
    needsIntroAPR: false, // Moved from perks for clarity

    // Perk Priorities (match keys in scoring.js PERK_MAP)
    wantsLoungeAccess: false,
    needsRentalCarInsurance: false, // Example new perk - ensure 'RENTAL_CAR_INSURANCE_PRIMARY' exists in JSON perkType
    wantsGlobalEntry: false,
    wantsEliteStatusBoost: false,
    wantsFreeCheckedBag: false,
    // preferNoAnnualFee: false, // This is now handled by 'low_fee' priority primarily
  });

  // State for AI suggestions - structured object
  const [aiSuggestions, setAiSuggestions] = useState({ bestPick: null, runnerUps: [] });
  const [matchedCardsResult, setMatchedCardsResult] = useState([]);
  const [lastRefreshed, setLastRefreshed] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [error, setError] = useState(null);
  const [aiError, setAiError] = useState(null); // Separate error state for AI


  // --- API Call Logic ---
  const fetchMatchedCards = useCallback(async (currentPrefs, currentSpending) => {
    // Avoid fetch if essential inputs missing (e.g., credit score)
    if (!currentPrefs.creditScoreRange) return;

    setIsLoading(true);
    setError(null);
    setMatchedCardsResult([]); // Clear previous results immediately
    setAiSuggestions({ bestPick: null, runnerUps: [] }); // Clear AI suggestions on new fetch
    setAiError(null); // Clear AI error

    try {
      const numericSpendingProfile = Object.entries(currentSpending).reduce((acc, [key, value]) => {
        acc[key] = Number(value) || 0;
        return acc;
      }, {});

      // Combine all state into the userProfile object for the API
      const userProfile = {
          spendingProfile: numericSpendingProfile,
          preferences: currentPrefs, // Send the whole preferences object
          // Ensure top-level keys match what API expects (already included in preferences)
          // creditScoreRange: currentPrefs.creditScoreRange,
          // cardType: currentPrefs.cardType,
          // priority: currentPrefs.priority,
      };

      const response = await fetch('/api/cardfinder', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userProfile),
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({})); // Try to get error message
        throw new Error(`API Error ${response.status}: ${errData.error || response.statusText}`);
      }

      const data = await response.json();
      setMatchedCardsResult(data.matchedCards || []);
      setLastRefreshed(data.lastRefreshed); // Store refresh timestamp
      if (data.matchedCards && data.matchedCards.length === 0) {
          setError("No cards matched your specific criteria. Try adjusting your preferences."); // Specific message for no results
      }
    } catch (err) {
      console.error("Failed to fetch matched cards:", err);
      setError(`Could not load recommendations. ${err.message}`);
      setMatchedCardsResult([]);
    } finally {
      setIsLoading(false);
    }
  }, []); // No dependencies here, rely on debounced call

  // Debounced fetcher, passes current state at time of call
  const debouncedFetchMatchedCards = useMemo(() =>
    // Pass the current state directly to the debounced function
    debounce((prefs, spending) => fetchMatchedCards(prefs, spending), 600),
    [fetchMatchedCards] // fetchMatchedCards is stable due to useCallback
  );

  // Effect to trigger fetch on input changes
  useEffect(() => {
    const hasSpendingInput = Object.values(spendingProfile).some(val => Number(val) > 0);
    const hasRequiredPrefs = !!preferences.creditScoreRange; // Ensure credit score is selected

    if (hasSpendingInput && hasRequiredPrefs) {
        // Call debounce with the *current* state values
        debouncedFetchMatchedCards(preferences, spendingProfile);
    } else {
        setMatchedCardsResult([]); // Clear results if no input/required prefs
        setLastRefreshed(null);
        setError(null); // Clear errors if inputs are cleared
        setAiSuggestions({ bestPick: null, runnerUps: [] }); // Clear AI
        setAiError(null);
    }
      // Cleanup debounce timer on component unmount or dependency change
      return () => {
        if (debouncedFetchMatchedCards && typeof debouncedFetchMatchedCards.cancel === 'function') {
            debouncedFetchMatchedCards.cancel();
        }
      };

  }, [spendingProfile, preferences, debouncedFetchMatchedCards]); // Depend on state and the debounced function itself


  // --- Input Handlers ---
  const handleSpendChange = (field, value) => {
    // Allow only digits, max length (e.g., 6 digits for monthly spend)
    const numericValue = value.replace(/[^0-9]/g, '').slice(0, 6);
    setSpendingProfile(prev => ({ ...prev, [field]: numericValue }));
  };

  // Generic handler for most preference changes (checkboxes, radios, selects)
  const handlePreferenceChange = (field, value) => {
    // Clear AI suggestions if core preferences change
    setAiSuggestions({ bestPick: null, runnerUps: [] });
    setAiError(null);
    setPreferences(prev => ({ ...prev, [field]: value }));
  };

    // Specific handler for multi-select (example using simple checkboxes)
    const handleMultiSelectChange = (field, value) => {
        // Clear AI suggestions if loyalty preferences change
        setAiSuggestions({ bestPick: null, runnerUps: [] });
        setAiError(null);
        setPreferences(prev => {
            const currentSelection = prev[field] || [];
            const newSelection = currentSelection.includes(value)
                ? currentSelection.filter(item => item !== value) // Remove if already selected
                : [...currentSelection, value]; // Add if not selected
            return { ...prev, [field]: newSelection };
        });
    };

    // Handler for range slider (example assuming rc-slider)
    // const handleSliderChange = (field, value) => {
    //     // Debounce slider changes if needed, or update on mouse up
    //     setAiSuggestions({ bestPick: null, runnerUps: [] }); // Clear AI on change
    //     setAiError(null);
    //     setPreferences(prev => ({ ...prev, [field]: value }));
    // };


  // --- AI Suggestion Function ---
    const generateAiSuggestions = useCallback(async () => {
      // Ensure we have results from the scoring engine to send to AI
      if (!matchedCardsResult || matchedCardsResult.length === 0) return;

      setIsAiLoading(true);
      setAiSuggestions({ bestPick: null, runnerUps: [] }); // Clear previous
      setAiError(null); // Clear previous AI errors

      try {
        const numericSpendingProfile = Object.entries(spendingProfile).reduce((acc, [key, value]) => {
             acc[key] = Number(value) || 0;
             return acc;
           }, {});

        // Send top 3-5 cards from scoring results for AI context
        const topCardsForAI = matchedCardsResult.slice(0, 3).map(c => ({
            name: c.name,
            score: c.score,
            annualFee: c.annualFee,
            bonusValue: c.bonusValue, // Ensure this is passed from /api/cardfinder
            matchedFeatures: c.matchedFeatures,
            keyPerks: c.keyPerks, // Ensure this is passed from /api/cardfinder
            rewardHighlights: c.rewardHighlights // Ensure this is passed from /api/cardfinder
        }));

        const response = await fetch('/api/gpt-card-finder', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            spendingProfile: numericSpendingProfile,
            preferences,
            recommendedCards: topCardsForAI, // Send detailed top cards
          }),
        });
        if (!response.ok) {
            const errData = await response.json().catch(() => ({}));
            // Use a more specific error message if provided by the API
            throw new Error(`AI API Error ${response.status}: ${errData.error || response.statusText}`);
        }
        const data = await response.json();
        // Ensure the response has the expected structure
        if (data.suggestions && data.suggestions.bestPick) {
            setAiSuggestions(data.suggestions);
        } else {
             throw new Error("AI response was received but malformed.");
        }

      } catch (err) {
        console.error("AI suggestion error:", err);
        // Display the specific error from the catch block
        setAiError(`Could not get AI suggestions. ${err.message}`);
        setAiSuggestions({ bestPick: null, runnerUps: [] }); // Reset on error
      } finally {
        setIsAiLoading(false);
      }
    }, [matchedCardsResult, preferences, spendingProfile]); // Dependencies for useCallback

  // --- Render Logic ---
  return (
    <div className={styles.finderContainer}>
        <h1>Find Your Perfect Travel Card</h1>
        <p className={styles.introParagraph}>Get personalized, expert recommendations in seconds. Just tell us how you spend and what you value most in a travel card.</p>

      <form onSubmit={(e) => e.preventDefault()} className={styles.finderForm}> {/* Use Form */}

        {/* --- Input Sections --- */}
        <fieldset className={styles.inputSection}>
          <legend>1. Your Monthly Spending ($)</legend>
          <div className={styles.gridInputGroup}> {/* Use grid for better layout */}
              {SPENDING_CATEGORIES.map(category => (
                  <div key={category} className={styles.inputGroup}>
                      <label htmlFor={category}>{category.charAt(0).toUpperCase() + category.slice(1)}</label>
                      <input
                          type="text" // Use text but control input with pattern/inputMode
                          inputMode="numeric" // Hint for mobile keyboards
                          pattern="[0-9]*" // Basic pattern validation
                          id={category}
                          value={spendingProfile[category]}
                          onChange={e => handleSpendChange(category, e.target.value)}
                          placeholder="e.g., 500"
                          aria-label={`Monthly spending on ${category}`}
                          maxLength="6" // Prevent excessively long inputs
                      />
                  </div>
              ))}
          </div>
        </fieldset>

        <fieldset className={styles.preferenceSection}>
            <legend>2. Your Profile & Preferences</legend>

             {/* Credit Score */}
             <div className={styles.inputGroup}>
                 <label htmlFor="creditScoreRange">Estimated Credit Score:</label>
                 <select
                     id="creditScoreRange"
                     value={preferences.creditScoreRange}
                     onChange={e => handlePreferenceChange('creditScoreRange', e.target.value)}
                     aria-describedby="creditScoreDesc"
                  >
                     {CREDIT_SCORE_OPTIONS.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                 </select>
                 <small id="creditScoreDesc">Helps filter cards you're likely eligible for. Most travel cards require Good or Excellent.</small>
             </div>

             {/* Card Type */}
              <div className={styles.inputGroup}>
                  <label>Card Type:</label>
                  <div className={styles.radioGroup}>
                      {CARD_TYPE_OPTIONS.map(opt => (
                          <label key={opt.value} htmlFor={`cardType-${opt.value}`}>
                              <input
                                  type="radio"
                                  id={`cardType-${opt.value}`}
                                  name="cardType"
                                  value={opt.value}
                                  checked={preferences.cardType === opt.value}
                                  onChange={e => handlePreferenceChange('cardType', e.target.value)}
                              /> {opt.label}
                          </label>
                      ))}
                  </div>
              </div>


            {/* Primary Goal */}
             <div className={styles.inputGroup}>
                 <label htmlFor="priority">What's Most Important?</label>
                 <select
                     id="priority"
                     value={preferences.priority}
                     onChange={e => handlePreferenceChange('priority', e.target.value)}
                     aria-describedby="priorityDesc"
                  >
                     {PRIORITY_OPTIONS.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                 </select>
                 <small id="priorityDesc">This helps weigh scoring factors. Choose what matters most to you.</small>
             </div>

             {/* Annual Fee Slider (Placeholder - Requires library) */}
             {/* <div className={styles.inputGroup}>
                 <label htmlFor="annualFeeBudget">Acceptable Annual Fee Range: ${preferences.annualFeeBudget[0]} - ${preferences.annualFeeBudget[1]}</label>
                 <Slider
                     range
                     min={0}
                     max={1000} // Adjust max fee
                     step={5}
                     value={preferences.annualFeeBudget}
                     onChange={value => handleSliderChange('annualFeeBudget', value)}
                     ariaLabelGroupForHandles={['Minimum acceptable annual fee', 'Maximum acceptable annual fee']}
                 />
                 <small>Set your budget. Many high-perk cards have fees of $95-$695.</small>
             </div> */}


             {/* Loyalty Preferences */}
             <div className={styles.inputGroup}>
                 <label>Preferred Airlines (Optional):</label>
                 <div className={styles.checkboxGrid}>
                      {AIRLINE_OPTIONS.map(airline => (
                          <label key={airline} htmlFor={`airline-${airline}`}>
                              <input
                                  type="checkbox"
                                  id={`airline-${airline}`}
                                  value={airline}
                                  checked={preferences.preferredAirlines.includes(airline)}
                                  onChange={e => handleMultiSelectChange('preferredAirlines', e.target.value)}
                               /> {airline}
                          </label>
                      ))}
                  </div>
                  <small>Select airlines you fly often or collect points with.</small>
             </div>
              {/* Add similar section for Hotels */}
             <div className={styles.inputGroup}>
                 <label>Preferred Hotels (Optional):</label>
                 <div className={styles.checkboxGrid}>
                      {HOTEL_OPTIONS.map(hotel => (
                          <label key={hotel} htmlFor={`hotel-${hotel}`}>
                              <input
                                  type="checkbox"
                                  id={`hotel-${hotel}`}
                                  value={hotel}
                                  checked={preferences.preferredHotels.includes(hotel)}
                                  onChange={e => handleMultiSelectChange('preferredHotels', e.target.value)}
                               /> {hotel}
                          </label>
                      ))}
                  </div>
                 <small>Select hotel programs you stay with or collect points with.</small>
             </div>


             {/* Perk Priorities */}
             <div className={styles.inputGroup}>
                 <label>Desired Perks & Features (Select any):</label>
                 <div className={styles.checkboxGrid}>
                     {/* Map over PERK_MAP keys or a dedicated perks list */}
                     {Object.entries({
                        wantsLoungeAccess: 'Airport Lounge Access',
                        needsRentalCarInsurance: 'Primary Car Rental Insurance',
                        wantsGlobalEntry: 'Global Entry / TSA PreCheck Credit',
                        wantsEliteStatusBoost: 'Airline/Hotel Status Boosts',
                        wantsFreeCheckedBag: 'Free Checked Bag',
                        needsIntroAPR: 'Intro 0% APR Offer' // Keep APR here as a desired feature toggle
                        }).map(([key, label]) => (
                          <label key={key} htmlFor={`perk-${key}`}>
                              <input
                                  type="checkbox"
                                  id={`perk-${key}`}
                                  // For needsIntroAPR, map to the specific state key
                                  checked={preferences[key]}
                                  onChange={e => handlePreferenceChange(key, e.target.checked)} // Use checked property
                               /> {label}
                          </label>
                      ))}
                  </div>
                  <small>Select any specific benefits you're looking for.</small>
             </div>

        </fieldset>

        {/* --- Results Section --- */}
        <section className={styles.resultsSection} aria-live="polite" aria-atomic="true">
            <div className={styles.resultsHeader}>
              <h2>Your Top Card Matches</h2>
              {lastRefreshed && <span className={styles.lastRefreshed}>Data Refreshed: {new Date(lastRefreshed).toLocaleDateString()}</span>}
            </div>

             {isLoading && (
                <div className={styles.loadingIndicator} role="status" aria-label="Loading recommendations">
                    <span></span><span></span><span></span>
                </div>
             )}
             {error && !isLoading && <p className={styles.errorMessage} role="alert">{error}</p>}
             {!isLoading && !error && matchedCardsResult.length === 0 && !Object.values(spendingProfile).some(val => Number(val) > 0) && (
                <p>Enter your spending and preferences above to see personalized recommendations.</p>
             )}
            {/* Only show grid if not loading, no error, and results exist */}
             {!isLoading && !error && matchedCardsResult.length > 0 && (
               <div className={styles.resultsGrid}>
                 {matchedCardsResult.map((match, index) => {
                     // Determine badge based on AI suggestions (if available and names match)
                     let badge = null;
                     if (aiSuggestions.bestPick?.name === match.name) {
                         badge = "Best Pick";
                     } else if (aiSuggestions.runnerUps?.some(ru => ru.name === match.name)) {
                         // Find which runner-up it is for numbering
                         const runnerUpIndex = aiSuggestions.runnerUps.findIndex(ru => ru.name === match.name);
                         badge = `Runner-Up ${runnerUpIndex + 1}`;
                     } else if (index === 0 && !aiSuggestions.bestPick) {
                          // Fallback: Mark the first card if AI hasn't run or failed
                          // badge = "Top Scorer"; // Optional fallback badge
                     }

                     return (
                         <RecommendedCardTile
                             key={match.cardId || match.name} // Use unique ID if available
                             card={match}
                            // badge={badge} // Pass badge to the tile
                         />
                     );
                 })}
               </div>
             )}
        </section>

         {/* --- AI Section --- */}
         {/* Show AI button only if there are results and not loading */}
         {!isLoading && !error && matchedCardsResult.length > 0 && (
             <section className={styles.aiActionSection}>
                 <button
                     type="button" // Important: prevent form submission
                     onClick={generateAiSuggestions}
                     className={styles.aiButton}
                     disabled={isAiLoading || isLoading} // Disable while scoring or AI is loading
                     aria-live="polite" // Announce loading state changes
                 >
                     {isAiLoading ? 'Analyzing Your Matches...' : 'Explain These Results (AI Advisor)'}
                 </button>

                 {/* AI Loading Indicator */}
                 {isAiLoading && (
                    <div className={styles.loadingIndicator} style={{ margin: '1rem auto', minHeight: '50px' }} role="status" aria-label="Loading AI explanation">
                        <span></span><span></span><span></span>
                    </div>
                 )}

                 {/* AI Error Message */}
                 {aiError && !isAiLoading && <p className={styles.errorMessage} role="alert" style={{marginTop: '1rem'}}>{aiError}</p>}

                 {/* AI Suggestions Display - Show only if not loading and suggestions exist */}
                 {!isAiLoading && !aiError && aiSuggestions.bestPick && (
                     <div className={styles.aiSection} role="region" aria-labelledby="aiAdvisorHeading">
                         <h3 id="aiAdvisorHeading">AI Advisor Summary</h3>

                         {/* Best Pick */}
                         <div className={styles.aiBestPick}>
                              <h4><span>✨</span> {aiSuggestions.bestPick.name}</h4>
                              <p className={styles.aiExplanation}>{aiSuggestions.bestPick.explanation}</p>
                         </div>

                         {/* Runner Ups */}
                         {aiSuggestions.runnerUps.map((runnerUp, index) => (
                             <div key={index} className={styles.aiRunnerUp}>
                                 <h4><span>{index === 0 ? '🥈' : '🥉'}</span> {runnerUp.name}</h4>
                                 <p className={styles.aiExplanation}>{runnerUp.explanation}</p>
                             </div>
                         ))}
                     </div>
                 )}
             </section>
         )}

        {/* --- E-E-A-T Section --- */}
        <section className={styles.eeatSection}>
            <h2>How We Analyze & Recommend Cards</h2>

            <div>
                <h3>Our Methodology</h3>
                <p>Finding the right travel card involves more than just looking at points. Our Card Finder uses a sophisticated analysis to give you truly personalized recommendations:</p>
                <ul>
                    <li><strong>Personalized Spending Analysis:</strong> We calculate potential rewards based on *your* specific monthly spending in categories like travel, dining, groceries, and more.</li>
                    <li><strong>Real-World Point Valuations:</strong> We apply up-to-date, realistic cents-per-point values for each card's rewards program, considering both travel portal redemptions and valuable transfer partners (if you prioritize travel flexibility).</li>
                    <li><strong>Net Value Calculation:</strong> We estimate the card's value by factoring in the calculated rewards, the sign-up bonus value (amortized over the first year), and subtracting the annual fee.</li>
                    <li><strong>Perk Matching:</strong> We score cards based on how well their key benefits (like lounge access, travel credits, free checked bags, rental car insurance) match the perks *you* selected as important.</li>
                    <li><strong>Caps & Limits Awareness:</strong> Our scoring considers known annual caps or limits on bonus category spending to provide a more accurate rewards estimate.</li>
                    <li><strong>User Priority Weighting:</strong> Your chosen priority (e.g., "Lowest Fee Focus", "Best Travel Perks") adjusts the weighting of different factors in the final score, aligning recommendations with what matters most to you.</li>
                </ul>
                <p>We prioritize real-world usability and value, not just theoretical maximum rewards or flashy marketing offers. This helps you find the cards that truly fit your lifestyle and travel patterns.</p>
            </div>

            <div>
                <h3>About TravelCardInsider</h3>
                <p>TravelCardInsider is an independent credit card comparison and travel rewards platform based in Sri Lanka. Our team includes travel rewards enthusiasts, data analysts, and finance writers with a passion for helping travelers maximize their rewards and save money.</p>
                 {/* <p>With over [X] years of combined experience in credit card optimization strategies, we base our recommendations on independent analysis of issuer data, real-world reward valuations, and user-centric redemption strategies.</p> */}
                 <p>Our goal is to provide clear, unbiased information to help you make informed decisions about your travel financing.</p>
            </div>

            <div>
                <h3>Our Data Sources & Update Frequency</h3>
                <p>We strive for accuracy by using publicly available information directly from card issuers' websites and official marketing materials. Key data points like reward rates, fees, and major perks are cross-referenced where possible.</p>
                <ul>
                    <li><strong>Point Valuations:</strong> Based on ongoing industry analysis and common redemption options (updated periodically).</li>
                    <li><strong>Card Offers & Fees:</strong> We aim to refresh data regularly (e.g., monthly or quarterly) and update significant changes to sign-up bonuses or benefits as soon as we become aware of them. However, offers can change rapidly.</li>
                </ul>
                <p><strong>Always verify the latest terms and conditions directly with the card issuer before applying.</strong></p>
                {lastRefreshed && <p><strong>Last Data Refresh:</strong> {new Date(lastRefreshed).toLocaleDateString()}</p>}
            </div>

            <div className={styles.eeatDisclaimer}>
                <p><strong>Disclaimer:</strong> The information provided by the TravelCardInsider Card Finder is for educational and informational purposes only and does not constitute financial advice. Credit card offers change frequently. While we strive for accuracy, we cannot guarantee the completeness or timeliness of the data. Please verify all details, terms, and conditions directly with the card issuer before applying for any financial product.</p>
                <p><strong>Advertiser Disclosure:</strong> TravelCardInsider may receive compensation from card issuers when users apply and are approved for cards through links on our site. This compensation may impact how and where products appear (including, for example, the order in which they appear), but does not influence our editorial content or scoring methodology. We prioritize providing accurate, user-focused recommendations. <a href="/advertiser-disclosure" target="_blank" rel="noopener noreferrer">Learn More</a>.</p>
                {/* Optional: Link to Terms/Privacy */}
                {/* <p><a href="/terms-of-service">Terms of Service</a> | <a href="/privacy-policy">Privacy Policy</a></p> */}
            </div>
        </section>

      </form> {/* End Form */}
    </div> // End container
  );
}