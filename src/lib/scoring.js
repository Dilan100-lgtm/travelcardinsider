// File: /lib/scoring.js

// --- Configuration ---
// Define base weights for scoring factors (sum to 100)
const BASE_WEIGHTS = {
  rewardsValue: 40,
  loyaltyFit: 15,
  perksMatch: 15,
  feeAffordability: 10,
  signUpBonus: 10, // Base weight, can be adjusted by user priority
  introAPR: 5,
  // Credit score is a filter, not typically weighted in the score itself
};

// Rough estimates - refine these based on your research!
const AVG_POINT_VALUE_ESTIMATES = {
  'default_points': 0.015, // 1.5 cpp general travel points
  'default_miles': 0.013, // 1.3 cpp airline miles
  'cashback': 0.01,       // 1.0 cpp cashback
};

// Mapping from simple categories used in UI state to potential JSON categories
const CATEGORY_MAP = {
  travel: ['travel', 'flights', 'hotel', 'car_rental', 'transit', 'airlines', 'aircanada', 'alaska_airlines', 'american_airlines', 'british_airways', 'delta_airlines', 'hawaiian_airlines', 'jetblue', 'southwest_airlines', 'hyatt_hotels', 'hilton_hotels', 'travel_portal', 'hotel_capital_one_portal', 'flights_capital_one_portal', 'hotel_chase_portal', 'car_rental_chase_portal', 'flights_chase_portal', 'flights_amex_travel', 'hotel_amex_travel'],
  dining: ['dining', 'restaurants'],
  groceries: ['groceries', 'groceries_us'],
  gas: ['gas', 'gas_us'],
  other: ['other'],
  // Add mappings for business categories if needed
  business_top_category: ['business_top_category'], // Special case
  shipping: ['shipping'],
  advertising_online: ['advertising_online'],
  telecom: ['telecom', 'wireless_phone', 'phone_plans'],
  drugstores: ['drugstores'],
  streaming: ['streaming'],
  online_grocery: ['online_grocery'],
  office_supplies: ['office_supplies'],
  fitness_clubs: ['fitness_clubs'],
  online_retail_us: ['online_retail_us'],
};

// Mapping from user preference keys to standardized perkTypes
const PERK_MAP = {
  wantsLoungeAccess: 'LOUNGE_ACCESS',
  needsRentalCarInsurance: 'RENTAL_CAR_INSURANCE_PRIMARY', // Assuming you add this perkType
  wantsGlobalEntry: 'GLOBAL_ENTRY_TSA_PRECHECK_CREDIT',
  wantsEliteStatusBoost: ['ELITE_STATUS_BOOST', 'HILTON_STATUS', 'TIER_QUALIFYING_BOOST', 'ELITE_NIGHTS'], // Can map to multiple types
  wantsFreeCheckedBag: 'FREE_CHECKED_BAG',
};

// Mapping from Credit Score UI values to categories in JSON
const CREDIT_SCORE_MAP = {
  excellent: 'Excellent', // Assumes "Excellent (720+)" maps to this
  good: 'Good',         // Assumes "Good (670-739)" maps to this
  fair: 'Fair',           // Add if needed
  poor: 'Poor',           // Add if needed
  any: null               // If user selects 'any'
};


/**
 * Finds the best reward multiplier for a given spending category.
 * Accounts for category mapping and caps.
 * @param {object} card - The card object.
 * @param {string} spendingCategory - The category key from user input (e.g., 'travel').
 * @param {number} annualSpendInCategory - Estimated annual spend for cap checking.
 * @returns {number} The applicable multiplier.
 */
function getBestMultiplier(card, spendingCategory, annualSpendInCategory) {
  if (!card?.rewards || !Array.isArray(card.rewards)) return card?.rewards?.baseRate || 1;

  const potentialJsonCategories = CATEGORY_MAP[spendingCategory] || [spendingCategory];
  let bestMultiplier = card.rewards.baseRate || 1; // Default to base rate

  // Find matching reward rules, considering potential multiple matches (e.g., 'travel' could match 'travel_portal' and 'travel_other')
  const matchingRules = card.rewards.filter(r =>
    potentialJsonCategories.some(pc => r.category.toLowerCase().includes(pc.toLowerCase()))
  );

  if (matchingRules.length === 0) {
    // Special handling for flexible categories like Amex Biz Gold 'business_top_category'
    const flexRule = card.rewards.find(r => r.category === 'business_top_category');
    if (flexRule) {
       // Basic assumption: if it's a common high spend category, it might get the bonus
       if (['travel', 'dining', 'gas', 'advertising_online', 'shipping', 'telecom'].includes(spendingCategory)) {
          bestMultiplier = flexRule.multiplier;
          // Note: Real accuracy requires knowing the *other* spending categories too. This is an estimate.
       }
    }
     // Special handling for Citi Custom Cash 'custom_top_category'
     const customRule = card.rewards.find(r => r.category === 'custom_top_category');
     if (customRule && ['travel', 'dining', 'groceries', 'gas', 'transit', 'streaming', 'drugstores', 'home_improvement', 'fitness_clubs', 'live_entertainment'].includes(spendingCategory)) {
         // Assume it *could* be the top category, apply the multiplier but respect the cap
         bestMultiplier = customRule.multiplier;
         // Cap check is handled below
     }


  } else {
    // Find the highest multiplier among direct matches
    bestMultiplier = Math.max(bestMultiplier, ...matchingRules.map(r => r.multiplier));
  }


  // --- Check Caps ---
  // Find the specific rule that gave the best multiplier to check its cap
   const winningRule = card.rewards.find(r => r.multiplier === bestMultiplier && potentialJsonCategories.some(pc => r.category.toLowerCase().includes(pc.toLowerCase())))
                     || card.rewards.find(r => r.category === 'business_top_category' && r.multiplier === bestMultiplier) // check flex cats too
                     || card.rewards.find(r => r.category === 'custom_top_category' && r.multiplier === bestMultiplier);

  if (winningRule?.cap) {
    const capAmount = winningRule.cap.amount_usd;
    const capPeriod = winningRule.cap.period; // 'year', 'month', 'quarter'
    let annualCap = capAmount;
    if (capPeriod === 'month') annualCap = capAmount * 12;
    if (capPeriod === 'quarter') annualCap = capAmount * 4;

    // Check if *this* category's spend exceeds the cap
    // Note: More accurate cap checking requires knowing spend in *all* categories the cap applies to.
    // This is a simplified check assuming the cap applies primarily to this category's spend.
    if (annualSpendInCategory > annualCap) {
      // Apply blended rate: (CapAmount * Multiplier + (Spend - CapAmount) * BaseRate) / Spend
       const baseRate = card.rewards.baseRate || 1;
       const effectiveMultiplier = ((annualCap * bestMultiplier) + ((annualSpendInCategory - annualCap) * baseRate)) / annualSpendInCategory;
       return effectiveMultiplier > 0 ? effectiveMultiplier : baseRate; // Return base rate if calculation is off
    }
  }


  return bestMultiplier;
}

/**
 * Estimates the point value (CPP) for a card based on user priority.
 * @param {object} card - The card object.
 * @param {string} userPriority - User's stated priority ('rewards', 'cash_back', etc.).
 * @returns {number} Estimated Cents Per Point (CPP).
 */
function getEstimatedCpp(card, userPriority) {
  const opts = card?.redemptionOptions;
  if (!opts) return AVG_POINT_VALUE_ESTIMATES.default_points; // Default if no options

  // Prioritize based on user preference
  if (userPriority === 'cash_back' && opts.cash_back_cpp) {
    return opts.cash_back_cpp;
  }
  if (userPriority === 'rewards' || userPriority === 'travel_perks') {
     // Prefer transfer partner value if available and higher than portal value
     const transferCpp = opts.transfer_partner_average_cpp || 0;
     const portalCpp = opts.chase_travel_portal_cpp || opts.amex_travel_cpp || opts.cap_one_travel_cpp || opts.travel_statement_credit_cpp || 0;
     if (transferCpp > portalCpp && transferCpp > 0) return transferCpp;
     if (portalCpp > 0) return portalCpp;
  }

  // Fallback logic: Take the best available value or a default
  const possibleCpp = [
    opts.transfer_partner_average_cpp,
    opts.program_cpp, // General program value
    opts.chase_travel_portal_cpp,
    opts.amex_travel_cpp,
    opts.cap_one_travel_cpp,
    opts.travel_statement_credit_cpp,
    opts.cash_back_cpp,
  ].filter(cpp => typeof cpp === 'number' && cpp > 0);

  if (possibleCpp.length > 0) {
    return Math.max(...possibleCpp);
  }

  // Absolute fallback based on program type
  const program = (card?.rewardProgram || '').toLowerCase();
  if (program.includes('cash')) return AVG_POINT_VALUE_ESTIMATES.cashback;
  if (program.includes('miles') || program.includes('avios') || program.includes('aeroplan')) return AVG_POINT_VALUE_ESTIMATES.default_miles;

  return AVG_POINT_VALUE_ESTIMATES.default_points;
}

/**
 * Calculates the advanced score for a credit card based on user profile.
 * @param {object} card - The card object from your JSON data.
 * @param {object} userProfile - Object containing user inputs (spendingProfile, preferences, creditScoreRange, etc.)
 * @returns {object} - Object with totalScore, breakdown, netFirstYearValue, ongoingValue, and matchedFeatures.
 */
export function calculateAdvancedCardScore(card, userProfile) {
  const { spendingProfile, preferences, priority = 'rewards', /* add other inputs */ } = userProfile;

  let scoreComponents = {
    rewardsValue: 0,
    loyaltyFit: 0,
    perksMatch: 0,
    feeAffordability: 0,
    signUpBonus: 0,
    introAPR: 0,
  };
  let matchedFeatures = []; // List user-relevant features

  // --- 1. Calculate Estimated Annual Rewards Value ---
  let annualPoints = 0;
  let annualSpendTotal = 0;
  for (const category in spendingProfile) {
    const monthlySpend = spendingProfile[category] || 0;
    if (monthlySpend > 0) {
        const annualSpend = monthlySpend * 12;
        annualSpendTotal += annualSpend;
        const multiplier = getBestMultiplier(card, category, annualSpend);
        annualPoints += annualSpend * multiplier;
    }
  }
  const estimatedCpp = getEstimatedCpp(card, priority);
  const annualRewardsValue = (annualPoints * estimatedCpp) / 100; // Convert points*cpp to dollars

  // Normalize reward value (Example: scale based on $0-$1000 range -> 0-40 points)
  // Adjust the max expected value based on typical outcomes.
  const maxExpectedRewardValue = 1000;
  scoreComponents.rewardsValue = Math.max(0, Math.min(BASE_WEIGHTS.rewardsValue, (annualRewardsValue / maxExpectedRewardValue) * BASE_WEIGHTS.rewardsValue));
  if (annualRewardsValue > 50) matchedFeatures.push(`~$${Math.round(annualRewardsValue)}/yr rewards`);


  // --- 2. Calculate Loyalty Fit ---
  let loyaltyScore = 0;
  const preferredAirlines = preferences.preferredAirlines || [];
  const preferredHotels = preferences.preferredHotels || [];
  if ((preferredAirlines.length > 0 || preferredHotels.length > 0) && card.transferPartners) {
     const partnerMatches = card.transferPartners.filter(p =>
       (p.type === 'airline' && preferredAirlines.includes(p.program)) ||
       (p.type === 'hotel' && preferredHotels.includes(p.program))
     ).length;
     // Simple scoring: 5 points per match, max weight
     loyaltyScore = Math.min(BASE_WEIGHTS.loyaltyFit, partnerMatches * (BASE_WEIGHTS.loyaltyFit / 2)); // Max score for 2+ matches
  }
   // Boost for co-branded cards matching preference
   if (card.rewardProgram && (preferredAirlines.includes(card.rewardProgram) || preferredHotels.includes(card.rewardProgram))) {
      loyaltyScore = BASE_WEIGHTS.loyaltyFit; // Max score if direct co-brand match
      matchedFeatures.push(`Matches ${card.rewardProgram}`);
   }
  scoreComponents.loyaltyFit = loyaltyScore;


  // --- 3. Calculate Perks Match ---
  let perksScore = 0;
  let matchedPerkCount = 0;
  if (card.perks && Array.isArray(card.perks)) {
      for (const prefKey in PERK_MAP) {
          if (preferences[prefKey]) { // If user wants this perk
              const targetPerkTypes = Array.isArray(PERK_MAP[prefKey]) ? PERK_MAP[prefKey] : [PERK_MAP[prefKey]];
              const cardHasPerk = card.perks.some(p => targetPerkTypes.includes(p.perkType)); // Assumes perkType field exists!
              if (cardHasPerk) {
                  matchedPerkCount++;
                  const perkName = prefKey.replace(/^wants|^needs/, '').replace(/([A-Z])/g, ' $1').trim();
                  matchedFeatures.push(perkName);
              }
          }
      }
      // Simple scoring: score based on number of matched priority perks
       perksScore = Math.min(BASE_WEIGHTS.perksMatch, matchedPerkCount * (BASE_WEIGHTS.perksMatch / 2) ); // Max score for 2+ perk matches
  }
  scoreComponents.perksMatch = perksScore;


  // --- 4. Calculate Fee Affordability ---
  const annualFee = card['Annual Fee'] || 0;
  const feeBudget = preferences.annualFeeBudget || [0, 1000]; // Default range if not provided
  if (annualFee <= feeBudget[1]) { // If fee is within budget (check upper bound)
      scoreComponents.feeAffordability = BASE_WEIGHTS.feeAffordability;
      // Optional: Slight penalty if high fee but still within budget?
      // scoreComponents.feeAffordability *= (1 - (annualFee / (feeBudget[1] + 1)));
  } else {
      scoreComponents.feeAffordability = 0; // Outside budget
  }
   // Bonus if user prefers no fee and it has no fee
   if (preferences.preferNoAnnualFee && annualFee === 0) {
       scoreComponents.feeAffordability = BASE_WEIGHTS.feeAffordability; // Ensure max score
       matchedFeatures.push("No Annual Fee");
   }


  // --- 5. Calculate Sign-Up Bonus Score ---
  let subScore = 0;
  const signUpBonusValue = card.signUpBonus?.estimated_value_usd || 0;
   if (signUpBonusValue > 0) {
        // Scale score based on bonus value (e.g., $0-$1000 value -> 0-10 points)
        const maxExpectedSubValue = 1000;
        subScore = Math.max(0, Math.min(BASE_WEIGHTS.signUpBonus, (signUpBonusValue / maxExpectedSubValue) * BASE_WEIGHTS.signUpBonus));
        matchedFeatures.push(`~$${signUpBonusValue} Welcome Bonus`);
   }
  scoreComponents.signUpBonus = subScore;


  // --- 6. Calculate Intro APR Score ---
  let introAprScore = 0;
  if (preferences.needsIntroAPR && card.introAPR) { // Assumes structured introAPR object
      if (card.introAPR.type === 'purchase' && card.introAPR.durationMonths >= 9) { // Example criteria
          introAprScore = BASE_WEIGHTS.introAPR;
          matchedFeatures.push(`Intro APR ${card.introAPR.durationMonths} mo`);
      }
  }
  scoreComponents.introAPR = introAprScore;


  // --- Adjust Weights Based on User Priority ---
  let adjustedWeights = { ...BASE_WEIGHTS };
  if (priority === 'sign_up_bonus') {
    adjustedWeights.signUpBonus = Math.min(50, BASE_WEIGHTS.signUpBonus * 3); // Heavily weight SUB
    adjustedWeights.rewardsValue = Math.max(10, BASE_WEIGHTS.rewardsValue * 0.5); // De-weight others
  } else if (priority === 'low_fee') {
    adjustedWeights.feeAffordability = Math.min(50, BASE_WEIGHTS.feeAffordability * 3);
    adjustedWeights.rewardsValue = Math.max(10, BASE_WEIGHTS.rewardsValue * 0.5);
    adjustedWeights.signUpBonus = Math.max(5, BASE_WEIGHTS.signUpBonus * 0.5);
  } else if (priority === 'travel_perks') {
      adjustedWeights.perksMatch = Math.min(40, BASE_WEIGHTS.perksMatch * 2);
      adjustedWeights.loyaltyFit = Math.min(30, BASE_WEIGHTS.loyaltyFit * 1.5);
      adjustedWeights.rewardsValue = Math.max(10, BASE_WEIGHTS.rewardsValue * 0.6);
  } else if (priority === '0_apr') {
       adjustedWeights.introAPR = Math.min(50, BASE_WEIGHTS.introAPR * 5);
       adjustedWeights.rewardsValue = Math.max(10, BASE_WEIGHTS.rewardsValue * 0.5);
       adjustedWeights.signUpBonus = Math.max(5, BASE_WEIGHTS.signUpBonus * 0.5);
  }
  // Re-normalize weights to sum roughly to 100 (optional but good practice)
  const totalWeight = Object.values(adjustedWeights).reduce((sum, w) => sum + w, 0);
  for (const key in adjustedWeights) {
      adjustedWeights[key] = (adjustedWeights[key] / totalWeight) * 100;
  }


  // --- Calculate Final Weighted Score ---
  let totalScore = 0;
  for (const key in scoreComponents) {
    totalScore += scoreComponents[key] * (adjustedWeights[key] / BASE_WEIGHTS[key]); // Apply weight adjustment factor
  }
  totalScore = Math.max(0, Math.min(100, Math.round(totalScore))); // Clamp score 0-100

  // --- Calculate Net Values ---
  const netFirstYearValue = Math.round((annualRewardsValue + signUpBonusValue) - annualFee);
  const ongoingValue = Math.round(annualRewardsValue - annualFee);

  return {
    totalScore,
    netFirstYearValue,
    ongoingValue,
    breakdown: scoreComponents, // Raw scores before weighting
    matchedFeatures: [...new Set(matchedFeatures)], // Unique features
  };
}


/**
 * Filters cards based on non-scoring criteria like credit score and card type.
 * @param {array} cards - Array of all card objects.
 * @param {object} userProfile - User inputs including creditScoreRange, cardType.
 * @returns {array} - Filtered array of cards.
 */
export function filterCards(cards, userProfile) {
  const { creditScoreRange, cardType } = userProfile;
  const targetScoreCategory = CREDIT_SCORE_MAP[creditScoreRange] || null;

  return cards.filter(card => {
    // Filter by Card Type
    if (cardType && cardType !== 'any') {
      if ((card['Card Type'] || 'Personal').toLowerCase() !== cardType.toLowerCase()) {
        return false;
      }
    }

    // Filter by Credit Score
    if (targetScoreCategory && card.creditScoreRequirement && Array.isArray(card.creditScoreRequirement)) {
      // Assumes card.creditScoreRequirement is like ["Good", "Excellent"]
      if (!card.creditScoreRequirement.includes(targetScoreCategory)) {
        // Allow 'Good' users to potentially match 'Excellent' cards sometimes? Optional relaxation.
         if (!(targetScoreCategory === 'Good' && card.creditScoreRequirement.includes('Excellent'))) {
            return false;
         }
      }
    }

    return true; // Keep card if it passes filters
  });
}