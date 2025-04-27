// File: /components/CardFinder.js
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import styles from '@/styles/CardFinder.module.css'; // Ensure path is correct
import RecommendedCardTile from './RecommendedCardTile';
// --- Import New Libraries ---
import Select from 'react-select';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css'; // Default slider styles

// --- Debounce Helper ---
function debounce(func, wait) {
    let timeout;
    const debounced = function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
    // Add a cancel method for cleanup
    debounced.cancel = () => {
        clearTimeout(timeout);
    };
    return debounced;
}


// --- Constants for Inputs ---
const SPENDING_CATEGORIES = ['travel', 'dining', 'groceries', 'gas', 'other'];
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
    { value: 'low_fee', label: 'Lowest Annual Fee'},
    { value: 'travel_perks', label: 'Best Travel Perks'},
    { value: 'sign_up_bonus', label: 'Highest Sign-up Bonus'},
    { value: '0_apr', label: 'Best Intro APR Offer'},
];
const AIRLINE_OPTIONS_SELECT = [ /* ... (keep as before) ... */ ];
const HOTEL_OPTIONS_SELECT = [ /* ... (keep as before) ... */ ];
const PERK_OPTIONS = [ /* ... (keep as before) ... */ ];


export default function CardFinder() {
    // --- State Management ---
    const [spendingProfile, setSpendingProfile] = useState(
        SPENDING_CATEGORIES.reduce((acc, cat) => ({ ...acc, [cat]: '' }), {})
    );
    const [preferences, setPreferences] = useState({
        creditScoreRange: 'good',
        cardType: 'personal',
        priority: 'rewards',
        annualFeeBudget: [0, 695], // Slider state
        preferredAirlines: [], // Store array of {value, label} for react-select
        preferredHotels: [],   // Store array of {value, label} for react-select
        needsIntroAPR: false,
        wantsLoungeAccess: false,
        needsRentalCarInsurance: false,
        wantsGlobalEntry: false,
        wantsEliteStatusBoost: false,
        wantsFreeCheckedBag: false,
    });
    const [compareList, setCompareList] = useState([]); // State for card IDs to compare
    const [aiSuggestions, setAiSuggestions] = useState([]);
    const [matchedCardsResult, setMatchedCardsResult] = useState([]);
    const [lastRefreshed, setLastRefreshed] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isAiLoading, setIsAiLoading] = useState(false);
    const [error, setError] = useState(null);


    // --- API Call Logic ---
    const fetchMatchedCards = useCallback(async (currentPrefs, currentSpending) => {
        // Don't fetch if required inputs aren't set (e.g., user hasn't touched score yet)
        if (!currentPrefs.creditScoreRange || currentPrefs.creditScoreRange === 'any') {
            // Optionally clear results or show a prompt if score is needed
             setMatchedCardsResult([]);
             setLastRefreshed(null);
             // setError("Please select your estimated credit score range."); // Or handle differently
             return;
        }
         // Check if any spending value is entered
        const hasSpendingInput = Object.values(currentSpending).some(val => val && Number(val) > 0);
         if (!hasSpendingInput) {
            setMatchedCardsResult([]);
            setLastRefreshed(null);
            // setError("Please enter your estimated monthly spending."); // Or handle differently
            return;
         }


        console.log("ANALYTICS EVENT: Fetching Cards Triggered"); // Analytics placeholder
        setIsLoading(true);
        setError(null); // Clear previous errors on new fetch
        try {
            const numericSpendingProfile = Object.entries(currentSpending).reduce((acc, [key, value]) => {
                acc[key] = Number(value) || 0; return acc;
            }, {});

            const apiPreferences = {
                ...currentPrefs,
                preferredAirlines: currentPrefs.preferredAirlines.map(opt => opt.value),
                preferredHotels: currentPrefs.preferredHotels.map(opt => opt.value),
            };

            const userProfile = {
                spendingProfile: numericSpendingProfile,
                preferences: apiPreferences,
                creditScoreRange: currentPrefs.creditScoreRange,
                cardType: currentPrefs.cardType,
                priority: currentPrefs.priority,
            };

            const response = await fetch('/api/cardfinder', {
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
            setCompareList([]); // Clear compare list on new results
        } catch (err) {
            console.error("Failed to fetch matched cards:", err);
            setError(`Could not load recommendations: ${err.message}`);
            setMatchedCardsResult([]);
            setLastRefreshed(null);
        } finally {
            setIsLoading(false);
        }
    // Explicitly list dependencies that should trigger a refetch
    }, []); // Keep dependencies minimal for useCallback, rely on useEffect trigger


    // Debounced fetcher wrapper
    const debouncedFetchMatchedCards = useMemo(() =>
        // Pass the current state values when the debounced function is actually called
        debounce(() => fetchMatchedCards(preferences, spendingProfile), 700), // Increased debounce slightly
        [fetchMatchedCards, preferences, spendingProfile] // Recreate when state references change
    );

    // Effect to trigger the debounced fetch
    useEffect(() => {
        debouncedFetchMatchedCards();
        // Cleanup function to cancel the debounce timer if component unmounts or deps change
        return () => debouncedFetchMatchedCards.cancel();
    }, [spendingProfile, preferences, debouncedFetchMatchedCards]);


    // --- Input Handlers ---
    const handleSpendChange = (field, value) => {
        const numericValue = value.replace(/[^0-9]/g, '');
        setSpendingProfile(prev => ({ ...prev, [field]: numericValue }));
         // Analytics placeholder for spending change
        // console.log('ANALYTICS EVENT: Spending Changed', { field, value: numericValue });
    };

    const handlePreferenceChange = (field, value) => {
        console.log('ANALYTICS EVENT: Preference Changed', { field, value }); // Log general changes
        setPreferences(prev => ({ ...prev, [field]: value }));
    };

    const handleSliderChange = (field, value) => {
        console.log('ANALYTICS EVENT: Slider Changed', { field, value });
        setPreferences(prev => ({ ...prev, [field]: value }));
    };

    const handleReactSelectChange = (field, selectedOptions) => {
        console.log('ANALYTICS EVENT: Select Changed', { field, count: selectedOptions?.length || 0 });
        setPreferences(prev => ({ ...prev, [field]: selectedOptions || [] }));
    };

    const handlePerkCheckboxChange = (field, checked) => {
        console.log('ANALYTICS EVENT: Perk Toggled', { field, checked });
         setPreferences(prev => ({ ...prev, [field]: checked }));
    }

    // Compare Handlers
    const handleCompareChange = (cardId) => {
        setCompareList(prev => {
            const newCompareList = prev.includes(cardId)
                ? prev.filter(id => id !== cardId)
                : [...prev, cardId];
            console.log('ANALYTICS EVENT: Compare Toggled', { cardId, count: newCompareList.length, added: !prev.includes(cardId) });
            return newCompareList;
        });
    };

     const handleCompareClick = () => {
         if (compareList.length < 2) {
             alert("Please select 2 to 5 cards to compare."); // Limit comparison size
             return;
         }
         if (compareList.length > 5) {
              alert("Please select no more than 5 cards to compare.");
              return;
         }
         console.log('ANALYTICS EVENT: Compare Button Clicked', { cardIds: compareList });
         // --- TODO: Implement Compare Drawer/Modal ---
         // Fetch full details for compareList cards if needed
         const cardsToCompare = matchedCardsResult.filter(card => compareList.includes(card.cardId));
         alert(`Implement Comparison View for:\n${cardsToCompare.map(c => c.name).join('\n')}`);
         // Open modal here, passing `cardsToCompare` data
     }


    // --- AI Suggestion Function ---
    const generateAiSuggestions = useCallback(async () => {
        if (!matchedCardsResult || matchedCardsResult.length === 0) return;
        console.log('ANALYTICS EVENT: AI Suggestion Requested'); // Analytics placeholder
        setIsAiLoading(true);
        setAiSuggestions([]);
        setError(null); // Clear previous errors
        try {
            const numericSpendingProfile = Object.entries(spendingProfile).reduce((acc, [key, value]) => {
                acc[key] = Number(value) || 0; return acc;
            }, {});

            // Send simplified card details to AI
            const recommendedCardsForAI = matchedCardsResult.slice(0, 3).map(c => ({
                name: c.name,
                score: c.score,
                keyFeatures: c.matchedFeatures,
                // Optionally add 1-2 very key raw features if needed by prompt
                // annualFee: c.annualFee
            }));


            const response = await fetch('/api/gpt-card-finder', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    spendingProfile: numericSpendingProfile,
                    preferences,
                    recommendedCards: recommendedCardsForAI, // Send formatted data
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


    // --- E-E-A-T Data ---
    const authorInfo = { name: "Dilan P.", bio: "Travel rewards card specialist.", link: "/author-bio" }; // Link to an actual page
    const methodologyLink = "/card-ranking-methodology"; // Link to an actual page


    // --- Styles for react-select ---
    // Optional: Define custom styles here if needed beyond CSS Modules
    const customSelectStyles = {
        control: (provided) => ({ ...provided, minHeight: '44px', borderColor: 'var(--border-color, #d1d5db)', '&:hover': { borderColor: 'var(--border-color, #d1d5db)'}, boxShadow: 'none' }),
        menu: (provided) => ({ ...provided, zIndex: 5 }), // Ensure dropdown is above other elements
        // Add other style overrides if needed
    };


    // --- Render Logic ---
    return (
        <div className={styles.finderContainer}>
             <h1>Find Your Perfect Travel Card</h1>
              <p>Tailored recommendations based on your spending and preferences. Get personalized insights in seconds.</p>

             {/* E-E-A-T Cues */}
             <div className={styles.eeatSection}>
                 <span>Tool by: <a href={authorInfo.link} target="_blank" rel="author">{authorInfo.name}</a></span>
                 <span><a href={methodologyLink} target="_blank" rel="noopener noreferrer">Ranking Methodology</a></span>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className={styles.finderForm}>
                {/* --- Input Sections --- */}
                <fieldset className={styles.inputSection}>
                     <legend>1. Your Monthly Spending ($)</legend>
                      <div className={styles.gridInputGroup}>
                          {SPENDING_CATEGORIES.map(category => (
                              <div key={category} className={styles.inputGroup}>
                                  <label htmlFor={category}>{category.charAt(0).toUpperCase() + category.slice(1)}</label>
                                  <input /* ... spending input ... */
                                    type="text" inputMode="numeric" pattern="[0-9]*" id={category}
                                    value={spendingProfile[category]} onChange={e => handleSpendChange(category, e.target.value)}
                                    placeholder="0" aria-label={`Monthly spending on ${category}`}
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
                         <Select instanceId="creditScoreSelect" options={CREDIT_SCORE_OPTIONS} styles={customSelectStyles}
                            value={CREDIT_SCORE_OPTIONS.find(opt => opt.value === preferences.creditScoreRange)}
                            onChange={selectedOption => handlePreferenceChange('creditScoreRange', selectedOption.value)}
                            classNamePrefix="react-select" aria-describedby="creditScoreDesc" />
                         <small id="creditScoreDesc">Helps filter cards you're likely eligible for.</small>
                    </div>

                     {/* Card Type */}
                      <div className={styles.inputGroup}>
                          <label>Card Type:</label>
                          <div className={styles.radioGroup}>
                              {CARD_TYPE_OPTIONS.map(opt => (
                                  <label key={opt.value} htmlFor={`cardType-${opt.value}`}>
                                      <input type="radio" id={`cardType-${opt.value}`} name="cardType" value={opt.value}
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
                         <Select instanceId="prioritySelect" options={PRIORITY_OPTIONS} styles={customSelectStyles}
                            value={PRIORITY_OPTIONS.find(opt => opt.value === preferences.priority)}
                            onChange={selectedOption => handlePreferenceChange('priority', selectedOption.value)}
                            classNamePrefix="react-select" aria-describedby="priorityDesc" />
                         <small id="priorityDesc">Helps weigh scoring factors.</small>
                     </div>

                    {/* Annual Fee Slider */}
                    <div className={styles.inputGroup}>
                        <label id="annualFeeLabel">Acceptable Annual Fee Range: ${preferences.annualFeeBudget[0]} - ${preferences.annualFeeBudget[1]}</label>
                        <div style={{ padding: '5px 10px' }}> {/* Wider padding */}
                            <Slider range min={0} max={700} step={10} value={preferences.annualFeeBudget}
                                onChange={value => handleSliderChange('annualFeeBudget', value)}
                                trackStyle={{ backgroundColor: 'var(--primary-blue, #2563eb)', height: '6px' }}
                                handleStyle={{ borderColor: 'var(--primary-blue, #2563eb)', height: 18, width: 18, marginTop: -6, backgroundColor: 'var(--primary-blue, #2563eb)', opacity: 1, boxShadow: '0 0 4px rgba(0,0,0,0.2)' }}
                                railStyle={{ backgroundColor: '#e5e7eb', height: '6px' }}
                                ariaLabelledby="annualFeeLabel" // Link label to slider
                            />
                        </div>
                    </div>

                    {/* Preferred Airlines */}
                    <div className={styles.inputGroup}>
                        <label htmlFor="preferredAirlines">Preferred Airlines (Optional):</label>
                        <Select instanceId="preferredAirlinesSelect" isMulti options={AIRLINE_OPTIONS_SELECT} styles={customSelectStyles}
                            value={preferences.preferredAirlines}
                            onChange={selectedOptions => handleReactSelectChange('preferredAirlines', selectedOptions)}
                            classNamePrefix="react-select" placeholder="Select airlines..." />
                    </div>

                     {/* Preferred Hotels */}
                     <div className={styles.inputGroup}>
                         <label htmlFor="preferredHotels">Preferred Hotels (Optional):</label>
                          <Select instanceId="preferredHotelsSelect" isMulti options={HOTEL_OPTIONS_SELECT} styles={customSelectStyles}
                              value={preferences.preferredHotels}
                              onChange={selectedOptions => handleReactSelectChange('preferredHotels', selectedOptions)}
                              classNamePrefix="react-select" placeholder="Select hotels..." />
                     </div>

                    {/* Perk Priorities */}
                    <div className={styles.inputGroup}>
                         <label>Desired Perks (Select any):</label>
                         <div className={styles.checkboxGrid}>
                            {PERK_OPTIONS.map(perk => (
                                <label key={perk.key} htmlFor={`perk-${perk.key}`}>
                                    <input type="checkbox" id={`perk-${perk.key}`}
                                        checked={!!preferences[perk.key]} // Ensure boolean check
                                        onChange={e => handlePerkCheckboxChange(perk.key, e.target.checked)} // Pass checked state
                                    /> {perk.label}
                                </label>
                            ))}
                        </div>
                     </div>
                </fieldset>

                {/* --- Results Section --- */}
                <section className={styles.resultsSection} aria-live="polite"> {/* Announce changes */}
                    <div className={styles.resultsHeader}>
                        <h2>Your Top Matches</h2>
                        {matchedCardsResult.length > 0 && (
                             <button type="button" onClick={handleCompareClick} className={styles.compareButton} disabled={compareList.length < 2 || compareList.length > 5}>
                                Compare ({compareList.length})
                             </button>
                        )}
                        {lastRefreshed && <span className={styles.lastRefreshed}>Data refreshed: {new Date(lastRefreshed).toLocaleDateString()}</span>}
                    </div>

                     {isLoading && <div className={styles.loadingIndicator}><span></span><span></span><span></span></div>}
                     {error && !isLoading && <p className={styles.errorMessage}>{error}</p>}
                     {!isLoading && !error && matchedCardsResult.length === 0 && <p>Enter spending & preferences above to see your personalized card recommendations.</p>}

                    {!isLoading && !error && matchedCardsResult.length > 0 && (
                        <div className={styles.resultsGrid}>
                            {matchedCardsResult.map((match) => (
                               <RecommendedCardTile key={match.cardId} card={match}
                                    isSelected={compareList.includes(match.cardId)}
                                    onCompareChange={handleCompareChange} />
                            ))}
                        </div>
                    )}
                </section>

                {/* --- AI Section --- */}
                <section className={styles.aiActionSection}>
                     <button type="button" onClick={generateAiSuggestions} className={styles.aiButton}
                        disabled={isLoading || isAiLoading || matchedCardsResult.length === 0} aria-live="polite" >
                         {isAiLoading ? 'Getting AI Advice...' : 'Explain These Results (AI)'}
                     </button>
                     {isAiLoading && <div className={styles.loadingIndicator} style={{ margin: '1rem auto' }}><span></span><span></span><span></span></div>}
                     {/* Display AI Error Specifically Here? */}
                     {!isAiLoading && aiSuggestions.length > 0 && (
                         <div className={styles.aiSection}>
                             <h3>AI Advisor Summary</h3>
                             <ul>{aiSuggestions.map((suggestion, idx) => ( <li key={idx}>{suggestion}</li> ))}</ul>
                         </div>
                     )}
                 </section>
            </form>
        </div>
    );
}