// File: /components/CardFinder.js
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import styles from '@/styles/CardFinder.module.css'; // Ensure this path is correct
import RecommendedCardTile from './RecommendedCardTile'; // Ensure this path is correct

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
// UPDATED Spending Categories (10 fields)
const SPENDING_CATEGORIES = [
    { key: 'flightsHotels', label: 'Flights & Hotels' },
    { key: 'dining', label: 'Dining' },
    { key: 'groceries', label: 'Groceries' },
    { key: 'gasEV', label: 'Gas & EV Charging' },
    { key: 'transitCommuting', label: 'Transit & Commuting' },
    { key: 'streaming', label: 'Streaming' },
    { key: 'phoneInternetBills', label: 'Phone/Internet Bills' },
    { key: 'drugstores', label: 'Drugstores' },
    { key: 'onlineShopping', label: 'Online Shopping' },
    { key: 'other', label: 'Other Purchases' },
];
const CREDIT_SCORE_OPTIONS = [
    { value: 'any', label: 'Any / Unsure'},
    { value: 'excellent', label: 'Excellent (720+)' },
    { value: 'good', label: 'Good (670-719)' },
    { value: 'fair', label: 'Fair (630-669)' },
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
// Match these values to scoring.js CATEGORY_MAP/logic and JSON data
const AIRLINE_OPTIONS = ['Aeroplan', 'Alaska Mileage Plan', 'American AAdvantage', 'Avios', 'Delta SkyMiles', 'JetBlue TrueBlue', 'Southwest Rapid Rewards', 'United MileagePlus', 'Other'];
const HOTEL_OPTIONS = ['Hilton Honors', 'IHG One Rewards', 'Marriott Bonvoy', 'World of Hyatt', 'Other'];


export default function CardFinder() {
  // --- State Management ---
  const [spendingProfile, setSpendingProfile] = useState(
      SPENDING_CATEGORIES.reduce((acc, cat) => ({ ...acc, [cat.key]: '' }), {})
  );
  const [annualFeeRange, setAnnualFeeRange] = useState({ min: '0', max: '695' }); // Separate state for fee range
  const [preferences, setPreferences] = useState({
    creditScoreRange: 'good',
    cardType: 'personal',
    priority: 'rewards',
    // annualFeeBudget removed from here
    preferredAirlines: [],
    preferredHotels: [],
    needsIntroAPR: false,
    wantsLoungeAccess: false,
    needsRentalCarInsurance: false,
    wantsGlobalEntry: false,
    wantsEliteStatusBoost: false,
    wantsFreeCheckedBag: false,
  });

  // AI, Results, Loading, Error States
  const [aiSuggestions, setAiSuggestions] = useState({ bestPick: null, runnerUps: [] });
  const [matchedCardsResult, setMatchedCardsResult] = useState([]);
  const [lastRefreshed, setLastRefreshed] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [error, setError] = useState(null);
  const [aiError, setAiError] = useState(null);

  // --- API Call Logic ---
  const fetchMatchedCards = useCallback(async (currentPrefs, currentSpending, currentFeeRange) => {
    if (!currentPrefs.creditScoreRange) return;

    setIsLoading(true);
    setError(null);
    setMatchedCardsResult([]);
    setAiSuggestions({ bestPick: null, runnerUps: [] }); // Clear AI on new fetch
    setAiError(null);

    try {
      const numericSpendingProfile = Object.entries(currentSpending).reduce((acc, [key, value]) => {
        acc[key] = Number(value) || 0;
        return acc;
      }, {});

      // Construct preferences FOR THE API, including the fee range as an array
      const apiPreferences = {
          ...currentPrefs,
          annualFeeBudget: [ // Convert fee range state to number array
              Number(currentFeeRange.min) || 0,
              Number(currentFeeRange.max) || 1000 // Default max if invalid
          ]
      };
       // Ensure min <= max
       if (apiPreferences.annualFeeBudget[0] > apiPreferences.annualFeeBudget[1]) {
           apiPreferences.annualFeeBudget[0] = apiPreferences.annualFeeBudget[1];
       }

      const userProfile = {
          spendingProfile: numericSpendingProfile,
          preferences: apiPreferences, // Send constructed preferences
      };

      const response = await fetch('/api/cardfinder', { // Ensure API path is correct
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userProfile),
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(`API Error ${response.status}: ${errData.error || response.statusText}`);
      }

      const data = await response.json();
      setMatchedCardsResult(data.matchedCards || []);
      setLastRefreshed(data.lastRefreshed);
      if (data.matchedCards && data.matchedCards.length === 0) {
          setError("No cards matched your specific criteria. Try adjusting your preferences or fee range.");
      }
    } catch (err) {
      console.error("Failed to fetch matched cards:", err);
      setError(`Could not load recommendations. ${err.message}`);
      setMatchedCardsResult([]);
    } finally {
      setIsLoading(false);
    }
  }, []); // Dependencies: fetchMatchedCards is stable due to useCallback

  // Debounced fetcher - passes current state values at time of call
  const debouncedFetchMatchedCards = useMemo(() =>
    debounce((prefs, spending, feeRange) => fetchMatchedCards(prefs, spending, feeRange), 600),
    [fetchMatchedCards] // Recreate debounce wrapper only if fetchMatchedCards identity changes (it shouldn't)
  );

  // Effect to trigger fetch on input changes
  useEffect(() => {
    const hasSpendingInput = Object.values(spendingProfile).some(val => Number(val) > 0);
    const hasRequiredPrefs = !!preferences.creditScoreRange;

    if (hasSpendingInput && hasRequiredPrefs) {
        // Pass all relevant current state parts to the debounced function
        debouncedFetchMatchedCards(preferences, spendingProfile, annualFeeRange);
    } else {
        setMatchedCardsResult([]);
        setLastRefreshed(null);
        setError(null);
        setAiSuggestions({ bestPick: null, runnerUps: [] });
        setAiError(null);
    }
      // Cleanup debounce timer on component unmount or dependency change
      return () => {
        if (debouncedFetchMatchedCards && typeof debouncedFetchMatchedCards.cancel === 'function') {
            debouncedFetchMatchedCards.cancel();
        }
      };
  // Include all state variables that trigger the fetch as dependencies
  }, [spendingProfile, preferences, annualFeeRange, debouncedFetchMatchedCards]);

  // --- Input Handlers ---
  const handleSpendChange = (field, value) => {
    const numericValue = value.replace(/[^0-9]/g, '').slice(0, 6);
    setSpendingProfile(prev => ({ ...prev, [field]: numericValue }));
  };

  const handleFeeRangeChange = (field, value) => {
     const numericValue = value.replace(/[^0-9]/g, '').slice(0, 4);
     setAiSuggestions({ bestPick: null, runnerUps: [] }); // Clear AI on fee change
     setAiError(null);
     setAnnualFeeRange(prev => ({ ...prev, [field]: numericValue }));
  };

  const handlePreferenceChange = (field, value) => {
    setAiSuggestions({ bestPick: null, runnerUps: [] }); // Clear AI on preference change
    setAiError(null);
    setPreferences(prev => ({ ...prev, [field]: value }));
  };

  const handleMultiSelectChange = (field, value) => {
      setAiSuggestions({ bestPick: null, runnerUps: [] }); // Clear AI on loyalty change
      setAiError(null);
      setPreferences(prev => {
          const currentSelection = prev[field] || [];
          const newSelection = currentSelection.includes(value)
              ? currentSelection.filter(item => item !== value)
              : [...currentSelection, value];
          return { ...prev, [field]: newSelection };
      });
  };

  // --- AI Suggestion Function ---
  const generateAiSuggestions = useCallback(async () => {
      if (!matchedCardsResult || matchedCardsResult.length === 0) return;

      setIsAiLoading(true);
      setAiSuggestions({ bestPick: null, runnerUps: [] });
      setAiError(null);

      try {
        const numericSpendingProfile = Object.entries(spendingProfile).reduce((acc, [key, value]) => {
             acc[key] = Number(value) || 0;
             return acc;
           }, {});

        // Construct preferences for AI API, including fee range array
        const aiApiPreferences = {
            ...preferences,
             annualFeeBudget: [
                Number(annualFeeRange.min) || 0,
                Number(annualFeeRange.max) || 1000
             ]
        };
         if (aiApiPreferences.annualFeeBudget[0] > aiApiPreferences.annualFeeBudget[1]) {
            aiApiPreferences.annualFeeBudget[0] = aiApiPreferences.annualFeeBudget[1];
         }

        // Send top 3 cards for AI context
        const topCardsForAI = matchedCardsResult.slice(0, 3).map(c => ({
             name: c.name, score: c.score, annualFee: c.annualFee, bonusValue: c.bonusValue,
             matchedFeatures: c.matchedFeatures, keyPerks: c.keyPerks, rewardHighlights: c.rewardHighlights
        }));

        const response = await fetch('/api/gpt-card-finder', { // Ensure API path is correct
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            spendingProfile: numericSpendingProfile,
            preferences: aiApiPreferences, // Send combined preferences
            recommendedCards: topCardsForAI,
          }),
        });
        if (!response.ok) {
            const errData = await response.json().catch(() => ({}));
            throw new Error(`AI API Error ${response.status}: ${errData.error || response.statusText}`);
        }
        const data = await response.json();
        if (data.suggestions && data.suggestions.bestPick) {
            setAiSuggestions(data.suggestions);
        } else {
             throw new Error("AI response was received but malformed.");
        }

      } catch (err) {
        console.error("AI suggestion error:", err);
        setAiError(`Could not get AI suggestions. ${err.message}`);
        setAiSuggestions({ bestPick: null, runnerUps: [] });
      } finally {
        setIsAiLoading(false);
      }
    // Include all dependencies used inside useCallback
    }, [matchedCardsResult, preferences, spendingProfile, annualFeeRange]);

  // --- Render Logic ---
  return (
    <div className={styles.finderContainer}>
        <h1>Find Your Perfect Travel Card</h1>
        <p className={styles.introParagraph}>Get personalized, expert recommendations in seconds. Just tell us how you spend, your preferences, and your acceptable fee range.</p>

      <form onSubmit={(e) => e.preventDefault()} className={styles.finderForm}>

        {/* --- Section 1: Spending --- */}
        <fieldset className={styles.inputSection}>
          <legend>1. Your Monthly Spending ($)</legend>
          <div className={`${styles.gridInputGroup} ${styles.spendingGrid}`}>
              {SPENDING_CATEGORIES.map(category => (
                  <div key={category.key} className={styles.inputGroup}>
                      <label htmlFor={category.key}>{category.label}</label>
                      <input
                          type="text"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          id={category.key}
                          value={spendingProfile[category.key]}
                          onChange={e => handleSpendChange(category.key, e.target.value)}
                          placeholder="e.g., 150"
                          aria-label={`Monthly spending on ${category.label}`}
                          maxLength="6"
                      />
                  </div>
              ))}
          </div>
           <small style={{display: 'block', marginTop: '1rem'}}>Enter your estimated spending per month in each category.</small>
        </fieldset>

        {/* --- Section 2: Profile & Preferences --- */}
        <fieldset className={styles.preferenceSection}>
            <legend>2. Your Profile & Preferences</legend>
             {/* Credit Score */}
             <div className={styles.inputGroup}>
                 <label htmlFor="creditScoreRange">Estimated Credit Score:</label>
                 <select id="creditScoreRange" value={preferences.creditScoreRange} onChange={e => handlePreferenceChange('creditScoreRange', e.target.value)} aria-describedby="creditScoreDesc">
                     {CREDIT_SCORE_OPTIONS.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                 </select>
                 <small id="creditScoreDesc">Helps filter cards you're likely eligible for. Most travel cards require Good or Excellent.</small>
             </div>
             {/* Card Type */}
             <div className={styles.inputGroup}>
                 <label>Card Type:</label>
                 <div className={styles.radioGroup}>
                     {CARD_TYPE_OPTIONS.map(opt => (<label key={opt.value} htmlFor={`cardType-${opt.value}`}><input type="radio" id={`cardType-${opt.value}`} name="cardType" value={opt.value} checked={preferences.cardType === opt.value} onChange={e => handlePreferenceChange('cardType', e.target.value)} /> {opt.label}</label>))}
                 </div>
             </div>
             {/* Primary Goal */}
             <div className={styles.inputGroup}>
                 <label htmlFor="priority">What's Most Important?</label>
                 <select id="priority" value={preferences.priority} onChange={e => handlePreferenceChange('priority', e.target.value)} aria-describedby="priorityDesc">
                     {PRIORITY_OPTIONS.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                 </select>
                 <small id="priorityDesc">This helps weigh scoring factors. Choose what matters most to you.</small>
             </div>
             {/* Loyalty Preferences */}
             <div className={styles.inputGroup}>
                 <label>Preferred Airlines (Optional):</label>
                 <div className={styles.checkboxGrid}>
                     {AIRLINE_OPTIONS.map(airline => (<label key={airline} htmlFor={`airline-${airline}`}><input type="checkbox" id={`airline-${airline}`} value={airline} checked={preferences.preferredAirlines.includes(airline)} onChange={e => handleMultiSelectChange('preferredAirlines', e.target.value)} /> {airline}</label>))}
                 </div>
                 <small>Select airlines you fly often or collect points with.</small>
             </div>
             <div className={styles.inputGroup}>
                 <label>Preferred Hotels (Optional):</label>
                 <div className={styles.checkboxGrid}>
                     {HOTEL_OPTIONS.map(hotel => (<label key={hotel} htmlFor={`hotel-${hotel}`}><input type="checkbox" id={`hotel-${hotel}`} value={hotel} checked={preferences.preferredHotels.includes(hotel)} onChange={e => handleMultiSelectChange('preferredHotels', e.target.value)} /> {hotel}</label>))}
                 </div>
                 <small>Select hotel programs you stay with or collect points with.</small>
             </div>
             {/* Perk Priorities */}
             <div className={styles.inputGroup}>
                 <label>Desired Perks & Features (Select any):</label>
                 <div className={styles.checkboxGrid}>
                     {Object.entries({ wantsLoungeAccess: 'Airport Lounge Access', needsRentalCarInsurance: 'Primary Car Rental Insurance', wantsGlobalEntry: 'Global Entry / TSA PreCheck Credit', wantsEliteStatusBoost: 'Airline/Hotel Status Boosts', wantsFreeCheckedBag: 'Free Checked Bag', needsIntroAPR: 'Intro 0% APR Offer' }).map(([key, label]) => (<label key={key} htmlFor={`perk-${key}`}><input type="checkbox" id={`perk-${key}`} checked={preferences[key]} onChange={e => handlePreferenceChange(key, e.target.checked)} /> {label}</label>))}
                 </div>
                 <small>Select any specific benefits you're looking for.</small>
             </div>
        </fieldset>

        {/* --- Section 3: Annual Fee Preference --- */}
        <fieldset className={`${styles.inputSection} ${styles.feeSection}`}> {/* Use inputSection styles + feeSection specifics */}
            <legend>3. Annual Fee Preference</legend>
            <div className={styles.feeRangeGroup}>
                <div className={styles.inputGroup}>
                    <label htmlFor="minFee">Minimum $</label>
                    <input
                        type="text" // Use text for better control with pattern/inputmode
                        inputMode="numeric"
                        pattern="[0-9]*"
                        id="minFee"
                        value={annualFeeRange.min}
                        onChange={e => handleFeeRangeChange('min', e.target.value)}
                        placeholder="0"
                        aria-label="Minimum acceptable annual fee"
                        maxLength="4"
                    />
                </div>
                 <div className={styles.inputGroup}>
                    <label htmlFor="maxFee">Maximum $</label>
                    <input
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        id="maxFee"
                        value={annualFeeRange.max}
                        onChange={e => handleFeeRangeChange('max', e.target.value)}
                        placeholder="e.g., 695"
                        aria-label="Maximum acceptable annual fee"
                        maxLength="4"
                    />
                </div>
                <small>Enter the range of annual fees you're comfortable with (e.g., $0 to $95, or $0 to $695).</small>
            </div>
        </fieldset>


        {/* --- Section 4: Results --- */}
        <section className={styles.resultsSection} aria-live="polite" aria-atomic="true">
             <div className={styles.resultsHeader}>
               <h2>Your Top Card Matches</h2>
               {lastRefreshed && <span className={styles.lastRefreshed}>Data Refreshed: {new Date(lastRefreshed).toLocaleDateString()}</span>}
             </div>
             {/* Loading State */}
             {isLoading && <div className={styles.loadingIndicator} role="status" aria-label="Loading recommendations"><span></span><span></span><span></span></div>}
             {/* Error State */}
             {error && !isLoading && <p className={styles.errorMessage} role="alert">{error}</p>}
             {/* Initial Prompt State */}
             {!isLoading && !error && matchedCardsResult.length === 0 && !Object.values(spendingProfile).some(val => Number(val) > 0) && (<p>Enter your spending and preferences above to see personalized recommendations.</p>)}
             {/* Results Display */}
             {!isLoading && !error && matchedCardsResult.length > 0 && (
               <div className={styles.resultsGrid}>
                 {matchedCardsResult.map((match) => (
                     <RecommendedCardTile
                         key={match.cardId || match.name} // Use unique ID
                         card={match}
                         // Badge logic could be re-added here if desired, mapping AI names back
                         // badge={determineBadge(match, aiSuggestions)}
                     />
                 ))}
               </div>
             )}
        </section>

         {/* --- Section 5: AI Advisor --- */}
         {/* Show AI button only if results are displayed */}
         {!isLoading && !error && matchedCardsResult.length > 0 && (
             <section className={styles.aiActionSection}>
                   <button
                      type="button"
                      onClick={generateAiSuggestions}
                      className={styles.aiButton}
                      disabled={isAiLoading || isLoading} // Disable while loading either results or AI
                      aria-live="polite"
                   >
                      {isAiLoading ? 'Analyzing Your Matches...' : 'Explain These Results (AI Advisor)'}
                   </button>
                 {/* AI Loading */}
                 {isAiLoading && <div className={styles.loadingIndicator} style={{ margin: '1rem auto', minHeight: '50px' }} role="status" aria-label="Loading AI explanation"><span></span><span></span><span></span></div>}
                 {/* AI Error */}
                 {aiError && !isAiLoading && <p className={styles.errorMessage} role="alert" style={{marginTop: '1rem'}}>{aiError}</p>}
                 {/* AI Suggestions Display */}
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

        {/* --- Section 6: E-E-A-T --- */}
        <section className={styles.eeatSection}>
             <h2>How We Analyze & Recommend Cards</h2>
             <div>
                 <h3>Our Methodology</h3>
                 <p>Finding the right travel card involves more than just looking at points. Our Card Finder uses a sophisticated analysis to give you truly personalized recommendations:</p>
                 <ul>
                     <li><strong>Personalized Spending Analysis:</strong> We calculate potential rewards based on *your* specific monthly spending in categories like travel, dining, groceries, and more.</li>
                     <li><strong>Real-World Point Valuations:</strong> We apply up-to-date, realistic cents-per-point values for each card's rewards program, considering both travel portal redemptions and valuable transfer partners (if you prioritize travel flexibility).</li>
                     <li><strong>Net Value Calculation:</strong> We estimate the card's value by factoring in the calculated rewards, the sign-up bonus value (amortized over the first year), and subtracting the annual fee (within your specified range).</li>
                     <li><strong>Perk Matching:</strong> We score cards based on how well their key benefits (like lounge access, travel credits, free checked bags, rental car insurance) match the perks *you* selected as important.</li>
                     <li><strong>Caps & Limits Awareness:</strong> Our scoring considers known annual caps or limits on bonus category spending to provide a more accurate rewards estimate.</li>
                     <li><strong>User Priority Weighting:</strong> Your chosen priority (e.g., "Lowest Fee Focus", "Best Travel Perks") adjusts the weighting of different factors in the final score, aligning recommendations with what matters most to you.</li>
                 </ul>
                 <p>We prioritize real-world usability and value, not just theoretical maximum rewards or flashy marketing offers. This helps you find the cards that truly fit your lifestyle and travel patterns.</p>
             </div>
             <div>
                 <h3>About TravelCardInsider</h3>
                 <p>TravelCardInsider is an independent credit card comparison and travel rewards platform based in Sri Lanka. Our team includes travel rewards enthusiasts, data analysts, and finance writers with a passion for helping travelers maximize their rewards and save money.</p>
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
             </div>
         </section>

      </form> {/* End Form */}
    </div> // End container
  );
}