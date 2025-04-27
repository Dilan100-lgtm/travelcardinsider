// File: /components/CardFinder.js (or similar)
import React, { useState, useEffect, useCallback } from 'react'; // Add useEffect, useCallback
import styles from '@/styles/CardFinder.module.css';
// import cardsData from '@/data/finalcreditcard.json'; // REMOVE THIS LINE

// --- Debounce Helper (optional but recommended) ---
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

export default function CardFinder() {
  const [spendingProfile, setSpendingProfile] = useState({
    travel: '', // Use empty strings for potentially empty inputs
    dining: '',
    groceries: '',
    gas: '',
    other: '',
  });
  const [preferences, setPreferences] = useState({
    preferNoAnnualFee: false,
    preferPremiumBenefits: false, // Keep simple prefs for now
    preferCashBack: false,
    // --- Add state for NEW inputs here later ---
    // preferredAirlines: [],
    // annualFeeBudget: [0, 1000],
    // creditScoreRange: '',
    // etc.
  });
  const [aiSuggestions, setAiSuggestions] = useState([]);
  const [matchedCardsResult, setMatchedCardsResult] = useState([]); // State for API results
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


  // --- Function to fetch matched cards ---
  const fetchMatchedCards = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      // Convert spending profile values to numbers for API
      const numericSpendingProfile = Object.entries(spendingProfile).reduce((acc, [key, value]) => {
        acc[key] = Number(value) || 0; // Default to 0 if empty or invalid
        return acc;
      }, {});

      const response = await fetch('/api/cardfinder', { // Call your new API
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          spendingProfile: numericSpendingProfile,
          preferences,
          // Pass other preference states here later
        }),
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.statusText}`);
      }

      const data = await response.json();
      setMatchedCardsResult(data.matchedCards || []);
    } catch (err) {
      console.error("Failed to fetch matched cards:", err);
      setError('Could not load card recommendations. Please try again.');
      setMatchedCardsResult([]); // Clear results on error
    } finally {
      setIsLoading(false);
    }
  }, [spendingProfile, preferences]); // Dependencies: trigger fetch on change

  // --- Debounced fetcher ---
  const debouncedFetchMatchedCards = useCallback(debounce(fetchMatchedCards, 500), [fetchMatchedCards]); // 500ms debounce

  // --- Effect to trigger fetch ---
  useEffect(() => {
    // Check if any spending value is entered to avoid fetching on initial load
    const hasSpendingInput = Object.values(spendingProfile).some(val => val !== '');
    if (hasSpendingInput) {
       debouncedFetchMatchedCards();
    } else {
       // Optionally clear results if all spending is zeroed out
       setMatchedCardsResult([]);
    }
  }, [spendingProfile, preferences, debouncedFetchMatchedCards]); // Rerun when inputs change

  const handleSpendChange = (field, value) => {
     // Basic validation: allow only numbers (or empty string)
    const numericValue = value.replace(/[^0-9]/g, '');
    setSpendingProfile({ ...spendingProfile, [field]: numericValue });
  };

  const handlePreferenceChange = (field) => {
    setPreferences({ ...preferences, [field]: !preferences[field] });
  };

  // --- AI Suggestion Function (Update later in Phase 3) ---
  const generateAiSuggestions = async () => {
     // Will be updated to call the real AI API
     setIsLoading(true); // Reuse loading state or add a specific one
     try {
         // Call /api/gpt-card-finder (or your chosen name)
         const response = await fetch('/api/gpt-card-finder', { // Use the correct API route name
             method: 'POST',
             headers: { 'Content-Type': 'application/json' },
             body: JSON.stringify({
                 spendingProfile: Object.entries(spendingProfile).reduce((acc, [key, value]) => {
                     acc[key] = Number(value) || 0;
                     return acc;
                 }, {}),
                 preferences,
                 // IMPORTANT: Send matchedCardsResult too for better context!
                 recommendedCards: matchedCardsResult
             })
         });
         if (!response.ok) throw new Error('AI suggestion failed');
         const data = await response.json();
         setAiSuggestions(data.suggestions || ["AI feature coming soon!"]); // Use real suggestions
     } catch (err) {
         console.error("AI suggestion error:", err);
         setAiSuggestions(["Could not get AI suggestions at this time."]);
     } finally {
         setIsLoading(false);
     }
  };


  // --- Render Logic ---
  return (
    <div className={styles.finderContainer}>
      <h1>Find Your Best Travel Card</h1>

      {/* Spending Input Section (Existing - OK) */}
      <section className={styles.inputSection}>
         {/* ... your spending input map ... make sure values are strings */}
         <h2>Monthly Spending</h2>
         {['travel', 'dining', 'groceries', 'gas', 'other'].map(category => (
           <div key={category} className={styles.inputGroup}>
             <label htmlFor={category}>{category.charAt(0).toUpperCase() + category.slice(1)}</label>
             <input
               type="text" // Use text to allow empty input easily
               inputMode="numeric" // Hint for mobile keyboards
               pattern="[0-9]*" // Basic pattern validation
               id={category}
               value={spendingProfile[category]}
               onChange={e => handleSpendChange(category, e.target.value)}
               placeholder="0"
             />
           </div>
         ))}
      </section>

      {/* Preference Section (Existing - OK for now, enhance later) */}
      <section className={styles.preferenceSection}>
        <h2>Preferences</h2>
         {/* ... your preference checkbox map ... */}
         {/* Example: Update label formatting */}
          {Object.keys(preferences).map(pref => (
            <div key={pref} className={styles.checkboxGroup} style={{ flexDirection: 'row', alignItems: 'center', gap: '0.5rem'}}>
              <input
                type="checkbox"
                id={pref}
                checked={preferences[pref]}
                onChange={() => handlePreferenceChange(pref)}
                style={{ width: 'auto', marginBottom: 0 }} // Adjust style for row layout
              />
              {/* Improved Label Generation */}
              <label htmlFor={pref} style={{ marginBottom: 0, textTransform: 'capitalize' }}>
                {pref.replace(/^prefer/, '').replace(/([A-Z])/g, ' $1').trim()}
              </label>
            </div>
         ))}
      </section>

      {/* Results Section (Updated) */}
      <section className={styles.resultsSection}>
        <h2>Top Matches</h2>
        {isLoading && <p>Finding best cards...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {!isLoading && !error && matchedCardsResult.length === 0 && <p>Enter your spending to see recommendations.</p>}
        {!isLoading && !error && matchedCardsResult.length > 0 && (
          matchedCardsResult.map((match, idx) => (
            // --- Premium Card Result Component (Build this) ---
            <div key={match.cardId || idx} className={styles.cardResult}>
              {/* Add Image later */}
              <h3>{match.name} (Score: {match.score})</h3>
              <p>Annual Fee: ${match.annualFee ?? 'N/A'}</p>
              {/* Display Key Features */}
              {match.keyFeatures && match.keyFeatures.length > 0 && (
                  <p><strong>Why it matches:</strong> {match.keyFeatures.join(', ')}</p>
              )}
              {/* Add Review Link */}
              {match.reviewUrl && (
                 <a href={match.reviewUrl} target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px', backgroundColor: '#6b7280' }}>Read Review</a>
              )}
              <a href={match.applyUrl || '#'} target="_blank" rel="noopener noreferrer">Apply Now</a>
               {/* Optional: Show Score Breakdown */}
               {/* {match.scoreBreakdown && <pre>{JSON.stringify(match.scoreBreakdown, null, 2)}</pre>} */}
            </div>
            // --- End Premium Card Result Component ---
          ))
        )}
      </section>

      {/* AI Button and Section (Existing - Updated Function) */}
      <button onClick={generateAiSuggestions} className={styles.aiButton} disabled={isLoading || matchedCardsResult.length === 0}>
         {isLoading ? 'Processing...' : 'Get AI Recommendations'}
      </button>

      {aiSuggestions.length > 0 && (
        <section className={styles.aiSection}>
           {/* ... existing AI suggestions list ... */}
           <h2>AI Suggestions</h2>
            <ul>
             {aiSuggestions.map((suggestion, idx) => (
               <li key={idx}>{suggestion}</li>
             ))}
            </ul>
        </section>
      )}
    </div>
  );
}