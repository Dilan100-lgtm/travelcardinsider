// File: /components/CardFinder.js
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import styles from '@/styles/CardFinder.module.css'; // Reuse/update styles
import RecommendedCardTile from './RecommendedCardTile'; // Import the new tile component
// Optional: Import libraries for better UI elements
// import Select from 'react-select'; // Example for multi-select
// import Slider from 'rc-slider'; // Example for range slider
// import 'rc-slider/assets/index.css'; // Styles for slider

// --- Debounce Helper ---
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// --- Constants for Inputs ---
const SPENDING_CATEGORIES = ['travel', 'dining', 'groceries', 'gas', 'other'];
const CREDIT_SCORE_OPTIONS = [
    { value: 'any', label: 'Any / Unsure'},
    { value: 'excellent', label: 'Excellent (720+)' },
    { value: 'good', label: 'Good (670-719)' },
    { value: 'fair', label: 'Fair (630-669)' }, // Add if cards support it
];
const CARD_TYPE_OPTIONS = [
    { value: 'any', label: 'Any'},
    { value: 'personal', label: 'Personal'},
    { value: 'business', label: 'Business'},
];
const PRIORITY_OPTIONS = [
    { value: 'rewards', label: 'Best Overall Rewards Value'},
    { value: 'low_fee', label: 'Lowest Annual Fee'},
    { value: 'travel_perks', label: 'Best Travel Perks'},
    { value: 'sign_up_bonus', label: 'Highest Sign-up Bonus'},
    { value: '0_apr', label: 'Best Intro APR Offer'},
];
const AIRLINE_OPTIONS = ['Delta SkyMiles', 'United MileagePlus', 'American AAdvantage', 'Southwest Rapid Rewards', 'JetBlue TrueBlue', 'Alaska Mileage Plan', 'Aeroplan', 'Avios', 'Other']; // Add more
const HOTEL_OPTIONS = ['Marriott Bonvoy', 'Hilton Honors', 'World of Hyatt', 'IHG One Rewards', 'Other']; // Add more


export default function CardFinder() {
  // --- State Management ---
  const [spendingProfile, setSpendingProfile] = useState(
      SPENDING_CATEGORIES.reduce((acc, cat) => ({ ...acc, [cat]: '' }), {})
  );
  // Consolidate preferences into one object
  const [preferences, setPreferences] = useState({
    // Basic Toggles (can remove if covered by priority/perks)
    // preferNoAnnualFee: false,
    // preferPremiumBenefits: false,
    // preferCashBack: false,

    // Enhanced Inputs
    creditScoreRange: 'good', // Default value
    cardType: 'personal',
    priority: 'rewards',
    annualFeeBudget: [0, 695], // Default Slider Range [min, max]
    preferredAirlines: [], // Array for multi-select
    preferredHotels: [], // Array for multi-select
    needsIntroAPR: false,

    // Perk Priorities
    wantsLoungeAccess: false,
    needsRentalCarInsurance: false, // Example new perk
    wantsGlobalEntry: false,
    wantsEliteStatusBoost: false,
    wantsFreeCheckedBag: false,
  });

  const [aiSuggestions, setAiSuggestions] = useState([]);
  const [matchedCardsResult, setMatchedCardsResult] = useState([]);
  const [lastRefreshed, setLastRefreshed] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [error, setError] = useState(null);


  // --- API Call Logic ---
  const fetchMatchedCards = useCallback(async (currentPrefs, currentSpending) => {
    // Avoid fetch if essential inputs missing (e.g., credit score)
    if (!currentPrefs.creditScoreRange) return;

    setIsLoading(true);
    setError(null);
    try {
      const numericSpendingProfile = Object.entries(currentSpending).reduce((acc, [key, value]) => {
        acc[key] = Number(value) || 0;
        return acc;
      }, {});

      // Combine all state into the userProfile object for the API
      const userProfile = {
          spendingProfile: numericSpendingProfile,
          preferences: currentPrefs, // Send the whole preferences object
          // Ensure preference keys match what API expects
          creditScoreRange: currentPrefs.creditScoreRange,
          cardType: currentPrefs.cardType,
          priority: currentPrefs.priority,
          // Add any other top-level keys needed by the API/scoring
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
    } catch (err) {
      console.error("Failed to fetch matched cards:", err);
      setError(`Could not load recommendations: ${err.message}`);
      setMatchedCardsResult([]);
    } finally {
      setIsLoading(false);
    }
  }, []); // No dependencies here, rely on debounced call

  // Debounced fetcher, passes current state at time of call
  const debouncedFetchMatchedCards = useMemo(() =>
    debounce(() => fetchMatchedCards(preferences, spendingProfile), 600),
    [fetchMatchedCards, preferences, spendingProfile] // Recreate debounce wrapper if state refs change *needed*
  );

  // Effect to trigger fetch on input changes
  useEffect(() => {
    const hasSpendingInput = Object.values(spendingProfile).some(val => val !== '');
    const hasRequiredPrefs = !!preferences.creditScoreRange; // Add more checks if needed

    if (hasSpendingInput && hasRequiredPrefs) {
       debouncedFetchMatchedCards();
    } else {
       setMatchedCardsResult([]); // Clear results if no input/required prefs
       setLastRefreshed(null);
    }
     // Cleanup debounce timer on unmount
     return () => debouncedFetchMatchedCards.cancel?.(); // Assumes debounce returns a cancel method

  }, [spendingProfile, preferences, debouncedFetchMatchedCards]);


  // --- Input Handlers ---
  const handleSpendChange = (field, value) => {
    const numericValue = value.replace(/[^0-9]/g, '');
    setSpendingProfile(prev => ({ ...prev, [field]: numericValue }));
  };

  // Generic handler for most preference changes (checkboxes, radios, selects)
  const handlePreferenceChange = (field, value) => {
    setPreferences(prev => ({ ...prev, [field]: value }));
  };

   // Specific handler for multi-select (example using simple checkboxes)
   const handleMultiSelectChange = (field, value) => {
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
   //     setPreferences(prev => ({ ...prev, [field]: value }));
   // };


  // --- AI Suggestion Function ---
   const generateAiSuggestions = useCallback(async () => {
     if (!matchedCardsResult || matchedCardsResult.length === 0) return; // Don't call if no results

     setIsAiLoading(true);
     setAiSuggestions([]); // Clear previous
     setError(null); // Clear previous errors
     try {
        const numericSpendingProfile = Object.entries(spendingProfile).reduce((acc, [key, value]) => {
             acc[key] = Number(value) || 0;
             return acc;
         }, {});

       const response = await fetch('/api/gpt-card-finder', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({
           spendingProfile: numericSpendingProfile,
           preferences,
           recommendedCards: matchedCardsResult.map(c => ({ name: c.name, score: c.score, keyFeatures: c.matchedFeatures })), // Send key details
         }),
       });
       if (!response.ok) {
           const errData = await response.json().catch(() => ({}));
           throw new Error(`AI Error ${response.status}: ${errData.error || response.statusText}`);
       }
       const data = await response.json();
       setAiSuggestions(data.suggestions || []);
     } catch (err) {
       console.error("AI suggestion error:", err);
       setError(`Could not get AI suggestions: ${err.message}`);
     } finally {
       setIsAiLoading(false);
     }
   }, [matchedCardsResult, preferences, spendingProfile]);

  // --- Render Logic ---
  return (
    <div className={styles.finderContainer}>
      {/* Consider adding Author Bio / Methodology Link here */}
       <h1>Find Your Perfect Travel Card</h1>
       <p>Tailored recommendations based on your spending and preferences.</p>

      <form onSubmit={(e) => e.preventDefault()} className={styles.finderForm}> {/* Use Form */}

        {/* --- Input Sections --- */}
        <fieldset className={styles.inputSection}>
          <legend>1. Your Monthly Spending ($)</legend>
          <div className={styles.gridInputGroup}> {/* Use grid for better layout */}
              {SPENDING_CATEGORIES.map(category => (
                  <div key={category} className={styles.inputGroup}>
                      <label htmlFor={category}>{category.charAt(0).toUpperCase() + category.slice(1)}</label>
                      <input
                          type="text"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          id={category}
                          value={spendingProfile[category]}
                          onChange={e => handleSpendChange(category, e.target.value)}
                          placeholder="0"
                          aria-label={`Monthly spending on ${category}`}
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
                 <small id="creditScoreDesc">Helps filter cards you're likely eligible for.</small>
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
                 <small id="priorityDesc">This helps weigh the scoring factors.</small>
             </div>

             {/* Annual Fee Slider (Example Placeholder - requires rc-slider or similar) */}
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
             </div> */}


             {/* Loyalty Preferences (Example using checkboxes) */}
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
             </div>
              {/* Add similar section for Hotels */}


             {/* Perk Priorities */}
             <div className={styles.inputGroup}>
                 <label>Desired Perks (Select any):</label>
                 <div className={styles.checkboxGrid}>
                     {/* Map over PERK_MAP keys or a dedicated perks list */}
                     {Object.entries({ wantsLoungeAccess: 'Lounge Access', needsRentalCarInsurance: 'Rental Car Insurance', wantsGlobalEntry: 'Global Entry/TSA Credit', wantsEliteStatusBoost: 'Elite Status Boosts', wantsFreeCheckedBag: 'Free Checked Bag', needsIntroAPR: 'Intro 0% APR Offer'}).map(([key, label]) => (
                          <label key={key} htmlFor={`perk-${key}`}>
                             <input
                                 type="checkbox"
                                 id={`perk-${key}`}
                                 checked={preferences[key]}
                                 onChange={e => handlePreferenceChange(key, e.target.checked)} // Use checked property
                             /> {label}
                         </label>
                     ))}
                 </div>
             </div>

        </fieldset>

        {/* --- Results Section --- */}
        <section className={styles.resultsSection}>
            <div className={styles.resultsHeader}>
                <h2>Top Matches</h2>
                {lastRefreshed && <span className={styles.lastRefreshed}>Last data refresh: {new Date(lastRefreshed).toLocaleDateString()}</span>}
            </div>

             {isLoading && <div className={styles.loadingIndicator}><span></span><span></span><span></span></div>}
             {error && !isLoading && <p className={styles.errorMessage}>{error}</p>}
             {!isLoading && !error && matchedCardsResult.length === 0 && <p>Enter your spending and preferences above to see personalized recommendations.</p>}

            {!isLoading && !error && matchedCardsResult.length > 0 && (
              <div className={styles.resultsGrid}>
                {matchedCardsResult.map((match) => (
                   <RecommendedCardTile key={match.cardId} card={match} />
                ))}
              </div>
            )}
        </section>

         {/* --- AI Section --- */}
         <section className={styles.aiActionSection}>
             <button
                 type="button" // Important: prevent form submission
                 onClick={generateAiSuggestions}
                 className={styles.aiButton}
                 disabled={isLoading || isAiLoading || matchedCardsResult.length === 0}
                 aria-live="polite" // Announce loading state changes
             >
                 {isAiLoading ? 'Getting AI Advice...' : 'Explain These Results (AI)'}
             </button>

             {isAiLoading && <div className={styles.loadingIndicator} style={{ margin: '1rem auto' }}><span></span><span></span><span></span></div>}

             {aiSuggestions.length > 0 && !isAiLoading && (
                 <div className={styles.aiSection}>
                     <h3>AI Advisor Summary</h3>
                     <ul>
                         {aiSuggestions.map((suggestion, idx) => (
                             <li key={idx}>{suggestion}</li>
                         ))}
                     </ul>
                 </div>
             )}
         </section>
      </form> {/* End Form */}
    </div> // End container
  );
}