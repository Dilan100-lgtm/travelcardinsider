// File: /components/CardFinder.js
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import styles from '@/styles/CardFinder.module.css'; // Ensure path is correct
import RecommendedCardTile from './RecommendedCardTile'; // Ensure path is correct

// --- Debounce Helper ---
function debounce(func, wait) {
    let timeout;
    const debouncedFunction = function executedFunction(...args) {
      const later = () => { clearTimeout(timeout); func(...args); };
      clearTimeout(timeout); timeout = setTimeout(later, wait);
    };
    debouncedFunction.cancel = () => { clearTimeout(timeout); };
    return debouncedFunction;
}

// --- Constants for Inputs ---
const SPENDING_CATEGORIES = [
    { key: 'flightsHotels', label: 'Flights & Hotels' }, { key: 'dining', label: 'Dining' },
    { key: 'groceries', label: 'Groceries' }, { key: 'gasEV', label: 'Gas & EV Charging' },
    { key: 'transitCommuting', label: 'Transit & Commuting' }, { key: 'streaming', label: 'Streaming' },
    { key: 'phoneInternetBills', label: 'Phone/Internet Bills' }, { key: 'drugstores', label: 'Drugstores' },
    { key: 'onlineShopping', label: 'Online Shopping' }, { key: 'other', label: 'Other Purchases' },
];
const CREDIT_SCORE_OPTIONS = [ { value: 'any', label: 'Any / Unsure'}, { value: 'excellent', label: 'Excellent (720+)' }, { value: 'good', label: 'Good (670-719)' }, { value: 'fair', label: 'Fair (630-669)' }];
const CARD_TYPE_OPTIONS = [ { value: 'any', label: 'Any'}, { value: 'personal', label: 'Personal'}, { value: 'business', label: 'Business'}];
const PRIORITY_OPTIONS = [ { value: 'rewards', label: 'Best Overall Rewards Value'}, { value: 'low_fee', label: 'Lowest Annual Fee Focus'}, { value: 'travel_perks', label: 'Best Travel Perks'}, { value: 'sign_up_bonus', label: 'Highest Sign-up Bonus'}, { value: '0_apr', label: 'Best Intro APR Offer'}];
const AIRLINE_OPTIONS = ['Aeroplan', 'Alaska Mileage Plan', 'American AAdvantage', 'Avios', 'Delta SkyMiles', 'JetBlue TrueBlue', 'Southwest Rapid Rewards', 'United MileagePlus', 'Other'];
const HOTEL_OPTIONS = ['Hilton Honors', 'IHG One Rewards', 'Marriott Bonvoy', 'World of Hyatt', 'Other'];

// --- SVG Icons ---
const BestPickIcon = () => (
    <svg className={`${styles.aiIcon} ${styles.bestPick}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354l-4.615 2.973c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
    </svg>
);
const RunnerUp1Icon = () => ( // Silver Medal Placeholder - Replace with a better SVG if desired
    <svg className={`${styles.aiIcon} ${styles.runnerUp1}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 14.08V18h2v-1.92c1.69-.24 3-1.66 3-3.41 0-1.84-1.48-3.33-3.33-3.33H9.5v2.67H11c.55 0 1 .45 1 1s-.45 1-1 1H9.5v2.08h1.5zm.5-9.41h1v2.67h-1V6.67z"></path>
    </svg>
);
const RunnerUp2Icon = () => ( // Bronze Medal Placeholder - Replace with a better SVG if desired
    <svg className={`${styles.aiIcon} ${styles.runnerUp2}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1.5 14.08V18h1.83c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5H13.5v-1.25c0-.69.56-1.25 1.25-1.25h1.08c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5h-2.5v6.58zm-4.5-2.08V6.67h3.33c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5H9v2.67h1.5z"></path>
    </svg>
);


export default function CardFinder() {
  // --- State Management ---
  const [spendingProfile, setSpendingProfile] = useState( SPENDING_CATEGORIES.reduce((acc, cat) => ({ ...acc, [cat.key]: '' }), {}) );
  const [annualFeeRange, setAnnualFeeRange] = useState({ min: '0', max: '695' });
  const [preferences, setPreferences] = useState({
    creditScoreRange: 'good', cardType: 'personal', priority: 'rewards',
    preferNoAnnualFee: false, // Added state for checkbox
    preferredAirlines: [], preferredHotels: [], needsIntroAPR: false,
    wantsLoungeAccess: false, needsRentalCarInsurance: false, wantsGlobalEntry: false,
    wantsEliteStatusBoost: false, wantsFreeCheckedBag: false,
  });
  const [aiSuggestions, setAiSuggestions] = useState({ bestPick: null, runnerUps: [] });
  const [matchedCardsResult, setMatchedCardsResult] = useState([]);
  const [lastRefreshed, setLastRefreshed] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [error, setError] = useState(null);
  const [aiError, setAiError] = useState(null);

  // --- API Call Logic ---
  const fetchMatchedCards = useCallback(async (currentPrefs, currentSpending, currentFeeRange) => {
     if (!currentPrefs.creditScoreRange) return; setIsLoading(true); setError(null); setMatchedCardsResult([]); setAiSuggestions({ bestPick: null, runnerUps: [] }); setAiError(null); try { const numericSpendingProfile = Object.entries(currentSpending).reduce((acc, [key, value]) => { acc[key] = Number(value) || 0; return acc; }, {}); const apiPreferences = { ...currentPrefs, annualFeeBudget: [ Number(currentFeeRange.min) || 0, Number(currentFeeRange.max) || 1000 ] }; if (apiPreferences.annualFeeBudget[0] > apiPreferences.annualFeeBudget[1]) { apiPreferences.annualFeeBudget[0] = apiPreferences.annualFeeBudget[1]; } const userProfile = { spendingProfile: numericSpendingProfile, preferences: apiPreferences, }; const response = await fetch('/api/cardfinder', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(userProfile), }); if (!response.ok) { const errData = await response.json().catch(() => ({})); throw new Error(`API Error ${response.status}: ${errData.error || response.statusText}`); } const data = await response.json(); setMatchedCardsResult(data.matchedCards || []); setLastRefreshed(data.lastRefreshed); if (data.matchedCards && data.matchedCards.length === 0) { setError("No cards matched your specific criteria. Try adjusting your preferences or fee range."); } } catch (err) { console.error("Failed to fetch matched cards:", err); setError(`Could not load recommendations. ${err.message}`); setMatchedCardsResult([]); } finally { setIsLoading(false); }
  }, []);
  const debouncedFetchMatchedCards = useMemo(() => debounce((prefs, spending, feeRange) => fetchMatchedCards(prefs, spending, feeRange), 600), [fetchMatchedCards] );
  useEffect(() => { const hasSpendingInput = Object.values(spendingProfile).some(val => Number(val) > 0); const hasRequiredPrefs = !!preferences.creditScoreRange; if (hasSpendingInput && hasRequiredPrefs) { debouncedFetchMatchedCards(preferences, spendingProfile, annualFeeRange); } else { setMatchedCardsResult([]); setLastRefreshed(null); setError(null); setAiSuggestions({ bestPick: null, runnerUps: [] }); setAiError(null); } return () => { if (debouncedFetchMatchedCards && typeof debouncedFetchMatchedCards.cancel === 'function') { debouncedFetchMatchedCards.cancel(); } }; }, [spendingProfile, preferences, annualFeeRange, debouncedFetchMatchedCards]);

  // --- Input Handlers ---
  const handleSpendChange = (field, value) => { const numericValue = value.replace(/[^0-9]/g, '').slice(0, 6); setSpendingProfile(prev => ({ ...prev, [field]: numericValue })); };
  const handleFeeRangeChange = (field, value) => { const numericValue = value.replace(/[^0-9]/g, '').slice(0, 4); setAiSuggestions({ bestPick: null, runnerUps: [] }); setAiError(null); setAnnualFeeRange(prev => ({ ...prev, [field]: numericValue })); };
  // Updated handler to properly get checkbox state
  const handlePreferenceChange = (field, value, type = 'value') => {
    setAiSuggestions({ bestPick: null, runnerUps: [] });
    setAiError(null);
    // For checkboxes, the 'value' passed is event.target.checked
    const newValue = type === 'checkbox' ? value : value;
    setPreferences(prev => ({
        ...prev,
        [field]: newValue
    }));
  };
  const handleMultiSelectChange = (field, value) => { setAiSuggestions({ bestPick: null, runnerUps: [] }); setAiError(null); setPreferences(prev => { const currentSelection = prev[field] || []; const newSelection = currentSelection.includes(value) ? currentSelection.filter(item => item !== value) : [...currentSelection, value]; return { ...prev, [field]: newSelection }; }); };

  // --- AI Suggestion Function ---
  const generateAiSuggestions = useCallback(async () => { if (!matchedCardsResult || matchedCardsResult.length === 0) return; setIsAiLoading(true); setAiSuggestions({ bestPick: null, runnerUps: [] }); setAiError(null); try { const numericSpendingProfile = Object.entries(spendingProfile).reduce((acc, [key, value]) => { acc[key] = Number(value) || 0; return acc; }, {}); const aiApiPreferences = { ...preferences, annualFeeBudget: [ Number(annualFeeRange.min) || 0, Number(annualFeeRange.max) || 1000 ] }; if (aiApiPreferences.annualFeeBudget[0] > aiApiPreferences.annualFeeBudget[1]) { aiApiPreferences.annualFeeBudget[0] = aiApiPreferences.annualFeeBudget[1]; } const topCardsForAI = matchedCardsResult.slice(0, 3).map(c => ({ name: c.name, score: c.score, annualFee: c.annualFee, bonusValue: c.bonusValue, matchedFeatures: c.matchedFeatures, keyPerks: c.keyPerks, rewardHighlights: c.rewardHighlights })); const response = await fetch('/api/gpt-card-finder', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ spendingProfile: numericSpendingProfile, preferences: aiApiPreferences, recommendedCards: topCardsForAI, }), }); if (!response.ok) { const errData = await response.json().catch(() => ({})); throw new Error(`AI API Error ${response.status}: ${errData.error || response.statusText}`); } const data = await response.json(); if (data.suggestions && data.suggestions.bestPick) { setAiSuggestions(data.suggestions); } else { throw new Error("AI response was received but malformed."); } } catch (err) { console.error("AI suggestion error:", err); setAiError(`Could not get AI suggestions. ${err.message}`); setAiSuggestions({ bestPick: null, runnerUps: [] }); } finally { setIsAiLoading(false); } }, [matchedCardsResult, preferences, spendingProfile, annualFeeRange]);

  // --- Render Logic ---
  return (
    <div className={styles.finderContainer}>
        <h1>Find Your Perfect Travel Card</h1>
        <p className={styles.introParagraph}>Get personalized, expert recommendations in seconds. Just tell us how you spend, your preferences, and your acceptable fee range.</p>

      <form onSubmit={(e) => e.preventDefault()} className={styles.finderForm}>

        {/* Section 1: Spending */}
        <fieldset className={styles.inputSection}> <legend>1. Your Monthly Spending ($)</legend> <div className={`${styles.gridInputGroup} ${styles.spendingGrid}`}> {SPENDING_CATEGORIES.map(category => ( <div key={category.key} className={styles.inputGroup}><label htmlFor={category.key}>{category.label}</label><input type="text" inputMode="numeric" pattern="[0-9]*" id={category.key} value={spendingProfile[category.key]} onChange={e => handleSpendChange(category.key, e.target.value)} placeholder="e.g., 150" aria-label={`Monthly spending on ${category.label}`} maxLength="6"/></div> ))} </div> <small style={{display: 'block', marginTop: '1rem'}}>Enter your estimated spending per month.</small> </fieldset>

        {/* Section 2: Profile & Preferences */}
        <fieldset className={styles.preferenceSection}> <legend>2. Your Profile & Preferences</legend>
            <div className={styles.inputGroup}><label htmlFor="creditScoreRange">Estimated Credit Score:</label><select id="creditScoreRange" value={preferences.creditScoreRange} onChange={e => handlePreferenceChange('creditScoreRange', e.target.value)} aria-describedby="creditScoreDesc">{CREDIT_SCORE_OPTIONS.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}</select><small id="creditScoreDesc">Most travel cards require Good or Excellent.</small></div>
            <div className={styles.inputGroup}><label>Card Type:</label><div className={styles.radioGroup}>{CARD_TYPE_OPTIONS.map(opt => (<label key={opt.value} htmlFor={`cardType-${opt.value}`}><input type="radio" id={`cardType-${opt.value}`} name="cardType" value={opt.value} checked={preferences.cardType === opt.value} onChange={e => handlePreferenceChange('cardType', e.target.value)} /> {opt.label}</label>))}</div></div>
            <div className={styles.inputGroup}><label htmlFor="priority">What's Most Important?</label><select id="priority" value={preferences.priority} onChange={e => handlePreferenceChange('priority', e.target.value)} aria-describedby="priorityDesc">{PRIORITY_OPTIONS.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}</select><small id="priorityDesc">Helps weigh scoring factors.</small></div>
            {/* No Annual Fee Checkbox */}
            <div className={styles.inputGroup} style={{ borderTop: '1px dashed var(--border-color-light)', paddingTop: '1.5rem', marginTop:'1rem' }}>
                <label htmlFor="preferNoAnnualFee"> {/* Removed redundant styles handled by CSS */}
                     <input
                        type="checkbox"
                        id="preferNoAnnualFee"
                        checked={preferences.preferNoAnnualFee}
                        // Pass event.target.checked directly
                        onChange={e => handlePreferenceChange('preferNoAnnualFee', e.target.checked, 'checkbox')}
                    />
                    Strongly Prefer $0 Annual Fee Cards
                </label>
                <small>Check this if avoiding an annual fee is a high priority.</small>
            </div>
            {/* Loyalty & Perks */}
            <div className={styles.inputGroup}><label>Preferred Airlines (Optional):</label><div className={styles.checkboxGrid}>{AIRLINE_OPTIONS.map(airline => (<label key={airline} htmlFor={`airline-${airline}`}><input type="checkbox" id={`airline-${airline}`} value={airline} checked={preferences.preferredAirlines.includes(airline)} onChange={e => handleMultiSelectChange('preferredAirlines', e.target.value)} /> {airline}</label>))}</div><small>Select airlines you fly often.</small></div>
            <div className={styles.inputGroup}><label>Preferred Hotels (Optional):</label><div className={styles.checkboxGrid}>{HOTEL_OPTIONS.map(hotel => (<label key={hotel} htmlFor={`hotel-${hotel}`}><input type="checkbox" id={`hotel-${hotel}`} value={hotel} checked={preferences.preferredHotels.includes(hotel)} onChange={e => handleMultiSelectChange('preferredHotels', e.target.value)} /> {hotel}</label>))}</div><small>Select hotel programs you stay with.</small></div>
            <div className={styles.inputGroup}><label>Desired Perks & Features (Select any):</label><div className={styles.checkboxGrid}>{Object.entries({ wantsLoungeAccess: 'Airport Lounge Access', needsRentalCarInsurance: 'Primary Car Rental Insurance', wantsGlobalEntry: 'Global Entry / TSA PreCheck Credit', wantsEliteStatusBoost: 'Airline/Hotel Status Boosts', wantsFreeCheckedBag: 'Free Checked Bag', needsIntroAPR: 'Intro 0% APR Offer' }).map(([key, label]) => (<label key={key} htmlFor={`perk-${key}`}><input type="checkbox" id={`perk-${key}`} checked={preferences[key]} onChange={e => handlePreferenceChange(key, e.target.checked, 'checkbox')} /> {label}</label>))}</div><small>Select any specific benefits.</small></div>
        </fieldset>

        {/* Section 3: Annual Fee */}
        <fieldset className={`${styles.inputSection} ${styles.feeSection}`}> <legend>3. Annual Fee Preference</legend> <div className={styles.feeRangeGroup}><div className={styles.inputGroup}><label htmlFor="minFee">Minimum $</label><input type="text" inputMode="numeric" pattern="[0-9]*" id="minFee" value={annualFeeRange.min} onChange={e => handleFeeRangeChange('min', e.target.value)} placeholder="0" aria-label="Minimum acceptable annual fee" maxLength="4"/></div><div className={styles.inputGroup}><label htmlFor="maxFee">Maximum $</label><input type="text" inputMode="numeric" pattern="[0-9]*" id="maxFee" value={annualFeeRange.max} onChange={e => handleFeeRangeChange('max', e.target.value)} placeholder="e.g., 695" aria-label="Maximum acceptable annual fee" maxLength="4"/></div><small>Enter your comfortable fee range (may be overridden if "$0 Fee" box is checked).</small></div> </fieldset>

        {/* Section 4: Results */}
        <section className={styles.resultsSection} aria-live="polite" aria-atomic="true"> <div className={styles.resultsHeader}><h2>Your Top Card Matches</h2>{lastRefreshed && <span className={styles.lastRefreshed}>Data Refreshed: {new Date(lastRefreshed).toLocaleDateString()}</span>}</div> {isLoading && <div className={styles.loadingIndicator} role="status" aria-label="Loading recommendations"><span></span><span></span><span></span></div>} {error && !isLoading && <p className={styles.errorMessage} role="alert">{error}</p>} {!isLoading && !error && matchedCardsResult.length === 0 && !Object.values(spendingProfile).some(val => Number(val) > 0) && (<p>Enter your spending and preferences above to see recommendations.</p>)} {!isLoading && !error && matchedCardsResult.length > 0 && (<div className={styles.resultsGrid}>{matchedCardsResult.map((match) => (<RecommendedCardTile key={match.cardId || match.name} card={match}/>))}</div>)} </section>

         {/* Section 5: AI Advisor */}
         {!isLoading && !error && matchedCardsResult.length > 0 && (
             <section className={styles.aiActionSection}>
                 <button type="button" onClick={generateAiSuggestions} className={styles.aiButton} disabled={isAiLoading || isLoading} aria-live="polite"> {isAiLoading ? 'Analyzing Your Matches...' : 'Explain These Results (AI Advisor)'} </button>
                 {isAiLoading && <div className={styles.loadingIndicator} style={{ margin: '1rem auto', minHeight: '50px' }} role="status" aria-label="Loading AI explanation"><span></span><span></span><span></span></div>}
                 {aiError && !isAiLoading && <p className={styles.errorMessage} role="alert" style={{marginTop: '1rem'}}>{aiError}</p>}
                 {/* AI Suggestions Display with SVGs */}
                 {!isAiLoading && !aiError && aiSuggestions.bestPick && (
                     <div className={styles.aiSection} role="region" aria-labelledby="aiAdvisorHeading">
                         <h3 id="aiAdvisorHeading">AI Advisor Summary</h3>
                         {/* Best Pick */}
                         <div className={styles.aiBestPick}> <BestPickIcon /> <h4>{aiSuggestions.bestPick.name}</h4> <p className={styles.aiExplanation}>{aiSuggestions.bestPick.explanation}</p> </div>
                         {/* Runner Ups */}
                         {aiSuggestions.runnerUps.map((runnerUp, index) => ( <div key={index} className={styles.aiRunnerUp}> {index === 0 ? <RunnerUp1Icon /> : <RunnerUp2Icon />} <h4>{runnerUp.name}</h4> <p className={styles.aiExplanation}>{runnerUp.explanation}</p> </div> ))}
                     </div>
                 )}
             </section>
         )}

        {/* Section 6: E-E-A-T */}
        <section className={styles.eeatSection}> <h2>How We Analyze & Recommend Cards</h2> <div><h3>Our Methodology</h3><p>Finding the right travel card involves more than just looking at points...</p><ul><li><strong>Personalized Spending Analysis:</strong> We calculate potential rewards based on *your* specific monthly spending...</li><li><strong>Real-World Point Valuations:</strong> We apply up-to-date, realistic cents-per-point values...</li><li><strong>Net Value Calculation:</strong> We estimate the card's value by factoring in the calculated rewards, the sign-up bonus value..., and subtracting the annual fee...</li><li><strong>Perk Matching:</strong> We score cards based on how well their key benefits...match the perks *you* selected...</li><li><strong>Caps & Limits Awareness:</strong> Our scoring considers known annual caps or limits...</li><li><strong>User Priority Weighting:</strong> Your chosen priority...adjusts the weighting...</li></ul><p>We prioritize real-world usability and value...</p></div> <div><h3>About TravelCardInsider</h3><p>TravelCardInsider is an independent credit card comparison...</p><p>Our goal is to provide clear, unbiased information...</p></div> <div><h3>Our Data Sources & Update Frequency</h3><p>We strive for accuracy by using publicly available information...</p><ul><li><strong>Point Valuations:</strong> Based on ongoing industry analysis...</li><li><strong>Card Offers & Fees:</strong> We aim to refresh data regularly...</li></ul><p><strong>Always verify the latest terms...</strong></p>{lastRefreshed && <p><strong>Last Data Refresh:</strong> {new Date(lastRefreshed).toLocaleDateString()}</p>}</div> <div className={styles.eeatDisclaimer}><p><strong>Disclaimer:</strong> The information provided... does not constitute financial advice...</p><p><strong>Advertiser Disclosure:</strong> TravelCardInsider may receive compensation... <a href="/advertiser-disclosure" target="_blank" rel="noopener noreferrer">Learn More</a>.</p></div> </section>

      </form> {/* End Form */}
    </div> // End container
  );
}