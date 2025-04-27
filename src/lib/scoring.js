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

// ****** IMPORTANT ******
// * Verify these mappings match categories in your finalcreditcard.json *
// ************************
// Mapping from simple categories used in UI state to potential JSON categories
const CATEGORY_MAP = {
  // Renamed/Expanded Categories:
  flightsHotels: ['travel', 'flights', 'hotel', 'airlines', 'aircanada', 'alaska_airlines', 'american_airlines', 'british_airways', 'delta_airlines', 'hawaiian_airlines', 'jetblue', 'southwest_airlines', 'hyatt_hotels', 'hilton_hotels', 'travel_portal', 'hotel_capital_one_portal', 'flights_capital_one_portal', 'hotel_chase_portal', 'flights_chase_portal', 'flights_amex_travel', 'hotel_amex_travel'],
  dining: ['dining', 'restaurants'],
  groceries: ['groceries', 'groceries_us', 'supermarkets'],
  gasEV: ['gas', 'gas_us', 'ev_charging'],
  transitCommuting: ['transit', 'commuting', 'rideshare', 'taxi', 'parking', 'tolls'],
  streaming: ['streaming', 'select_streaming_services'],
  phoneInternetBills: ['telecom', 'wireless_phone', 'phone_plans', 'internet', 'cable'],
  drugstores: ['drugstores', 'pharmacies'],
  onlineShopping: ['online_retail_us', 'online_shopping', 'ecommerce'], // Needs careful mapping based on card specifics
  other: ['other', 'non_bonus', 'everyday_spend'], // Catch-all

  // Existing specific categories (if needed by scoring logic elsewhere, keep them)
  travel: ['travel', 'flights', 'hotel', 'car_rental', 'transit', 'airlines', 'aircanada', 'alaska_airlines', 'american_airlines', 'british_airways', 'delta_airlines', 'hawaiian_airlines', 'jetblue', 'southwest_airlines', 'hyatt_hotels', 'hilton_hotels', 'travel_portal', 'hotel_capital_one_portal', 'flights_capital_one_portal', 'hotel_chase_portal', 'car_rental_chase_portal', 'flights_chase_portal', 'flights_amex_travel', 'hotel_amex_travel'],
  gas: ['gas', 'gas_us', 'ev_charging'], // Ensure consistency if 'gas' is used directly elsewhere
  business_top_category: ['business_top_category'], // Special case
  shipping: ['shipping'],
  advertising_online: ['advertising_online'],
  telecom: ['telecom', 'wireless_phone', 'phone_plans', 'internet', 'cable'], // Ensure consistency
  online_grocery: ['online_grocery'],
  office_supplies: ['office_supplies'],
  fitness_clubs: ['fitness_clubs'],
};

// Mapping from user preference keys to standardized perkTypes
const PERK_MAP = {
  wantsLoungeAccess: 'LOUNGE_ACCESS',
  needsRentalCarInsurance: 'RENTAL_CAR_INSURANCE_PRIMARY', // Assuming you add this perkType
  wantsGlobalEntry: 'GLOBAL_ENTRY_TSA_PRECHECK_CREDIT',
  wantsEliteStatusBoost: ['ELITE_STATUS_BOOST', 'HILTON_STATUS', 'TIER_QUALIFYING_BOOST', 'ELITE_NIGHTS'], // Can map to multiple types
  wantsFreeCheckedBag: 'FREE_CHECKED_BAG',
  // needsIntroAPR is handled separately in scoring logic
};

// Mapping from Credit Score UI values to categories in JSON
const CREDIT_SCORE_MAP = {
  excellent: 'Excellent', // Assumes "Excellent (720+)" maps to this
  good: 'Good',       // Assumes "Good (670-719)" maps to this
  fair: 'Fair',         // Add if needed
  poor: 'Poor',         // Add if needed
  any: null            // If user selects 'any'
};


/**
 * Finds the best reward multiplier for a given spending category.
 * Accounts for category mapping and caps.
 * @param {object} card - The card object.
 * @param {string} spendingCategory - The category key from user input (e.g., 'flightsHotels').
 * @param {number} annualSpendInCategory - Estimated annual spend for cap checking.
 * @returns {number} The applicable multiplier.
 */
function getBestMultiplier(card, spendingCategory, annualSpendInCategory) {
  if (!card?.rewards || !Array.isArray(card.rewards)) return card?.rewards?.baseRate || 1;

  // Use the CATEGORY_MAP to find potential JSON categories
  const potentialJsonCategories = CATEGORY_MAP[spendingCategory] || [spendingCategory]; // Fallback to key itself
  let bestMultiplier = card.rewards.baseRate || 1; // Default to base rate

  // Find matching reward rules
  const matchingRules = card.rewards.filter(r =>
    potentialJsonCategories.some(pc => r.category.toLowerCase().includes(pc.toLowerCase()))
  );

  if (matchingRules.length === 0) {
    // Special handling for flexible categories
    const flexRule = card.rewards.find(r => r.category === 'business_top_category');
    if (flexRule) {
        // More specific check based on the new categories
        const highValueFlexCategories = ['flightsHotels', 'dining', 'gasEV', 'advertising_online', 'shipping', 'phoneInternetBills'];
        if (highValueFlexCategories.includes(spendingCategory)) {
             bestMultiplier = flexRule.multiplier;
        }
    }
    const customRule = card.rewards.find(r => r.category === 'custom_top_category');
    if (customRule) {
        // Map UI categories to potential Citi Custom Cash categories
        const citiCustomCategories = {
            flightsHotels: 'travel', dining: 'restaurants', groceries: 'grocery stores',
            gasEV: 'gas stations', transitCommuting: 'transit', streaming: 'select streaming services',
            drugstores: 'drugstores', /* Add others like home improvement, fitness, live entertainment if needed */
        };
        if (Object.keys(citiCustomCategories).includes(spendingCategory)) {
            bestMultiplier = customRule.multiplier; // Assume it *could* be the top category
        }
    }
  } else {
    // Find the highest multiplier among direct matches
    bestMultiplier = Math.max(bestMultiplier, ...matchingRules.map(r => r.multiplier));
  }

  // --- Check Caps ---
  // Find the specific rule that gave the best multiplier to check its cap
  const winningRule = card.rewards.find(r => r.multiplier === bestMultiplier && potentialJsonCategories.some(pc => r.category.toLowerCase().includes(pc.toLowerCase())))
                      || card.rewards.find(r => r.category === 'business_top_category' && r.multiplier === bestMultiplier)
                      || card.rewards.find(r => r.category === 'custom_top_category' && r.multiplier === bestMultiplier);

  if (winningRule?.cap) {
    const capAmount = winningRule.cap.amount_usd;
    const capPeriod = winningRule.cap.period; // 'year', 'month', 'quarter'
    let annualCap = capAmount;
    if (capPeriod === 'month') annualCap = capAmount * 12;
    if (capPeriod === 'quarter') annualCap = capAmount * 4;

    // Simplified check (assumes cap applies mainly to this category)
    if (annualSpendInCategory > annualCap) {
      const baseRate = card.rewards.baseRate || 1;
      const effectiveMultiplier = ((annualCap * bestMultiplier) + ((annualSpendInCategory - annualCap) * baseRate)) / annualSpendInCategory;
      return effectiveMultiplier > 0 ? effectiveMultiplier : baseRate;
    }
  }

  return bestMultiplier;
}

/**
 * Estimates the point value (CPP) for a card based on user priority.
 * [Function remains the same as previous version]
 * @param {object} card - The card object.
 * @param {string} userPriority - User's stated priority ('rewards', 'cash_back', etc.).
 * @returns {number} Estimated Cents Per Point (CPP).
 */
function getEstimatedCpp(card, userPriority) {
  // ... (previous getEstimatedCpp logic - no changes needed here) ...
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
      // Give slight preference to transfer partners if close, reflecting flexibility value
      if (transferCpp > 0 && transferCpp >= portalCpp * 0.95) return transferCpp;
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
 * [Fee Affordability logic now uses preferences.annualFeeBudget which is passed via API]
 * @param {object} card - The card object from your JSON data.
 * @param {object} userProfile - Object containing user inputs (spendingProfile, preferences incl. annualFeeBudget array)
 * @returns {object} - Object with totalScore, breakdown, netFirstYearValue, ongoingValue, and matchedFeatures.
 */
export function calculateAdvancedCardScore(card, userProfile) {
  // preferences now includes annualFeeBudget: [min, max] passed from API call
  const { spendingProfile, preferences, priority = 'rewards' } = userProfile;

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
  // Iterate over the potentially new 10 spending categories
  for (const category in spendingProfile) {
    const monthlySpend = spendingProfile[category] || 0;
    if (monthlySpend > 0) {
        const annualSpend = monthlySpend * 12;
        annualSpendTotal += annualSpend;
        // Use the updated getBestMultiplier which references the updated CATEGORY_MAP
        const multiplier = getBestMultiplier(card, category, annualSpend);
        annualPoints += annualSpend * multiplier;
    }
  }
  const estimatedCpp = getEstimatedCpp(card, priority);
  const annualRewardsValue = Math.round(annualPoints * estimatedCpp); // Value in cents
  const maxExpectedRewardValueCents = 800 * 100;
  scoreComponents.rewardsValue = Math.max(0, Math.min(BASE_WEIGHTS.rewardsValue, (annualRewardsValue / maxExpectedRewardValueCents) * BASE_WEIGHTS.rewardsValue));
  if (annualRewardsValue > 50 * 100) matchedFeatures.push(`~$${Math.round(annualRewardsValue / 100)}/yr rewards`);


  // --- 2. Calculate Loyalty Fit ---
  // ... (previous loyaltyFit logic - no changes needed here) ...
  let loyaltyScore = 0;
  const preferredAirlines = preferences.preferredAirlines || [];
  const preferredHotels = preferences.preferredHotels || [];
  let partnerMatchCount = 0;
  if ((preferredAirlines.length > 0 || preferredHotels.length > 0) && card.transferPartners && Array.isArray(card.transferPartners)) {
       partnerMatchCount = card.transferPartners.filter(p =>
         (p.type === 'airline' && preferredAirlines.includes(p.program)) ||
         (p.type === 'hotel' && preferredHotels.includes(p.program))
       ).length;
       loyaltyScore = Math.min(BASE_WEIGHTS.loyaltyFit, partnerMatchCount * (BASE_WEIGHTS.loyaltyFit / 2));
  }
    const cardNameLower = (card['Card Name'] || '').toLowerCase();
    const rewardProgramLower = (card.rewardProgram || '').toLowerCase();
    const directlyMatchesAirline = preferredAirlines.some(a => rewardProgramLower.includes(a.toLowerCase().split(' ')[0]) || cardNameLower.includes(a.toLowerCase().split(' ')[0]));
    const directlyMatchesHotel = preferredHotels.some(h => rewardProgramLower.includes(h.toLowerCase().split(' ')[0]) || cardNameLower.includes(h.toLowerCase().split(' ')[0]));

    if (directlyMatchesAirline || directlyMatchesHotel) {
       loyaltyScore = BASE_WEIGHTS.loyaltyFit;
       const matchedProgram = preferredAirlines.find(a => rewardProgramLower.includes(a.toLowerCase().split(' ')[0]) || cardNameLower.includes(a.toLowerCase().split(' ')[0]))
                            || preferredHotels.find(h => rewardProgramLower.includes(h.toLowerCase().split(' ')[0]) || cardNameLower.includes(h.toLowerCase().split(' ')[0]));
       if (matchedProgram) matchedFeatures.push(`Matches ${matchedProgram}`);
    } else if (partnerMatchCount > 0) {
        matchedFeatures.push(`${partnerMatchCount} Preferred Transfer Partner${partnerMatchCount > 1 ? 's' : ''}`);
    }
  scoreComponents.loyaltyFit = loyaltyScore;


  // --- 3. Calculate Perks Match ---
  // ... (previous perksMatch logic - no changes needed here) ...
   let perksScore = 0;
   let matchedPerkCount = 0;
   if (card.perks && Array.isArray(card.perks)) {
        for (const prefKey in PERK_MAP) {
            if (preferences[prefKey]) { // If user wants this perk
                const targetPerkTypes = Array.isArray(PERK_MAP[prefKey]) ? PERK_MAP[prefKey] : [PERK_MAP[prefKey]];
                const cardHasPerk = card.perks.some(p => targetPerkTypes.includes(p.perkType));
                if (cardHasPerk) {
                    matchedPerkCount++;
                    const perkName = prefKey.replace(/^wants|^needs/, '').replace(/([A-Z])/g, ' $1').trim();
                    const specificPerk = card.perks.find(p => targetPerkTypes.includes(p.perkType));
                    matchedFeatures.push(specificPerk?.description || perkName);
                }
            }
        }
         perksScore = Math.min(BASE_WEIGHTS.perksMatch, matchedPerkCount * (BASE_WEIGHTS.perksMatch / 2) );
   }
   scoreComponents.perksMatch = perksScore;


  // --- 4. Calculate Fee Affordability ---
  // This now uses preferences.annualFeeBudget passed from the API call
  const annualFee = card['Annual Fee'] || 0;
  // The feeBudget is now expected as [min, max] in preferences object
  const feeBudget = preferences.annualFeeBudget;
  if (!feeBudget || !Array.isArray(feeBudget) || feeBudget.length !== 2) {
      console.warn(`Missing or invalid feeBudget for card ${card['Card Name']}`);
      // Default to a wide range if missing, or handle as error? Let's default.
      feeBudget = [0, 1000];
  }
  const [minFeeBudget, maxFeeBudget] = feeBudget;
  const prefersNoFee = preferences.priority === 'low_fee'; // Check priority

  // Card fee must be within the user's MIN and MAX range
  if (annualFee >= minFeeBudget && annualFee <= maxFeeBudget) {
      if (annualFee === 0) {
          scoreComponents.feeAffordability = BASE_WEIGHTS.feeAffordability; // Max score for $0 fee
          matchedFeatures.push("No Annual Fee");
      } else {
          // Score based on where the fee falls within the user's acceptable range
          // Example: Higher score if fee is closer to user's min budget
          const range = maxFeeBudget - minFeeBudget;
          // Avoid division by zero if min/max are the same
          const feePositionInRange = range > 0 ? (annualFee - minFeeBudget) / range : 0;
          // Give more points if fee is low within the acceptable range (closer to 0)
          scoreComponents.feeAffordability = BASE_WEIGHTS.feeAffordability * (1 - feePositionInRange * 0.8); // Penalize more as fee approaches max

          // If user prioritizes low fee, penalize non-zero fees more heavily within their range
          if (prefersNoFee) {
              scoreComponents.feeAffordability *= 0.6; // Reduce score significantly if fee > 0 and user wants low fee
          }
          // Add fee to features if non-zero
          matchedFeatures.push(`$${annualFee} Annual Fee`);
      }
  } else {
       scoreComponents.feeAffordability = 0; // Outside user's specified min/max range
  }

  // Ensure score is not negative
  scoreComponents.feeAffordability = Math.max(0, scoreComponents.feeAffordability);


  // --- 5. Calculate Sign-Up Bonus Score ---
  // ... (previous signUpBonus logic - no changes needed here) ...
  let subScore = 0;
  const signUpBonusValue = card.signUpBonus?.estimated_value_usd || 0;
    if (signUpBonusValue > 0) {
        const maxExpectedSubValue = 1000;
        subScore = Math.max(0, Math.min(BASE_WEIGHTS.signUpBonus, (signUpBonusValue / maxExpectedSubValue) * BASE_WEIGHTS.signUpBonus));
        const bonusDesc = card.signUpBonus?.description || `~$${signUpBonusValue} Welcome Bonus`;
        matchedFeatures.push(bonusDesc);
    }
  scoreComponents.signUpBonus = subScore;


  // --- 6. Calculate Intro APR Score ---
  // ... (previous introAPR logic - no changes needed here) ...
   let introAprScore = 0;
   if (preferences.needsIntroAPR && card.introAPR) {
       if (card.introAPR.type === 'purchase' || card.introAPR.type === 'both') {
          const duration = card.introAPR.durationMonths || 0;
          if (duration >= 9) {
              introAprScore = BASE_WEIGHTS.introAPR;
              matchedFeatures.push(`0% Intro APR for ${duration} mo`);
          }
       }
   }
   scoreComponents.introAPR = introAprScore;


  // --- Adjust Weights Based on User Priority ---
  // ... (previous weight adjustment logic - no changes needed here) ...
  let adjustedWeights = { ...BASE_WEIGHTS };
  const boostFactor = 2.5;
  const reduceFactor = 0.7;

  switch (priority) {
      case 'rewards':
          adjustedWeights.rewardsValue *= boostFactor;
          adjustedWeights.loyaltyFit *= reduceFactor;
          adjustedWeights.perksMatch *= reduceFactor;
          adjustedWeights.signUpBonus *= reduceFactor;
          break;
      case 'sign_up_bonus':
          adjustedWeights.signUpBonus *= boostFactor;
          adjustedWeights.rewardsValue *= reduceFactor;
          adjustedWeights.feeAffordability *= reduceFactor;
          break;
      case 'low_fee':
          adjustedWeights.feeAffordability *= boostFactor;
          adjustedWeights.rewardsValue *= 1.2;
          adjustedWeights.signUpBonus *= reduceFactor;
          adjustedWeights.perksMatch *= reduceFactor;
          break;
      case 'travel_perks':
          adjustedWeights.perksMatch *= boostFactor;
          adjustedWeights.loyaltyFit *= 1.5;
          adjustedWeights.rewardsValue *= reduceFactor;
          adjustedWeights.feeAffordability *= reduceFactor;
          break;
      case '0_apr':
           adjustedWeights.introAPR *= (boostFactor * 2);
           adjustedWeights.rewardsValue *= reduceFactor;
           adjustedWeights.signUpBonus *= reduceFactor;
           adjustedWeights.feeAffordability *= reduceFactor;
           break;
       default:
          break;
  }

  // Re-normalize weights
  const totalWeight = Object.values(adjustedWeights).reduce((sum, w) => sum + w, 0);
  if (totalWeight > 0) {
       for (const key in adjustedWeights) {
         adjustedWeights[key] = Math.max(0, (adjustedWeights[key] / totalWeight) * 100);
       }
  }


  // --- Calculate Final Weighted Score ---
  // ... (previous final score calculation - no changes needed here) ...
  let totalScore = 0;
  for (const key in scoreComponents) {
      const baseWeight = BASE_WEIGHTS[key] || 1;
      const weightAdjustment = adjustedWeights[key] / baseWeight;
      totalScore += scoreComponents[key] * weightAdjustment;
  }
  totalScore = Math.max(0, Math.min(100, Math.round(totalScore)));

  // --- Calculate Net Values ---
  // ... (previous net value calculation - no changes needed here) ...
  const netFirstYearValue = Math.round((annualRewardsValue / 100) + signUpBonusValue - annualFee);
  const ongoingValue = Math.round((annualRewardsValue / 100) - annualFee);

  // Filter unique matched features
  const uniqueMatchedFeatures = [...new Set(matchedFeatures)].filter(f => f);

  return {
    totalScore,
    netFirstYearValue,
    ongoingValue,
    breakdown: scoreComponents,
    matchedFeatures: uniqueMatchedFeatures.slice(0, 5), // Limit displayed features
  };
}


/**
 * Filters cards based on non-scoring criteria like credit score and card type.
 * [Function remains the same as previous version]
 * @param {array} cards - Array of all card objects.
 * @param {object} userProfile - User inputs including creditScoreRange, cardType.
 * @returns {array} - Filtered array of cards.
 */
export function filterCards(cards, userProfile) {
  // ... (previous filterCards logic - no changes needed here) ...
  const { creditScoreRange, cardType } = userProfile;
  const targetScoreCategory = CREDIT_SCORE_MAP[creditScoreRange] || null;

  return cards.filter(card => {
    // Filter by Card Type
    if (cardType && cardType !== 'any') {
      const cardActualType = (card['Card Type'] || 'Personal').toLowerCase();
      if (cardActualType !== cardType.toLowerCase()) {
        return false;
      }
    }

    // Filter by Credit Score
    if (targetScoreCategory && card.creditScoreRequirement && Array.isArray(card.creditScoreRequirement)) {
      const cardRequires = card.creditScoreRequirement;

      if (!cardRequires.includes(targetScoreCategory)) {
         const scoreLevels = ['poor', 'fair', 'good', 'excellent'];
         const userLevelIndex = scoreLevels.indexOf(creditScoreRange);
         const minRequiredLevel = cardRequires[0];
         const minRequiredIndex = scoreLevels.indexOf(minRequiredLevel?.toLowerCase());

         if (userLevelIndex === 2 && minRequiredIndex === 3) {
            // Allow Good -> Excellent
         }
         else {
             return false;
         }
      }
    } else if (targetScoreCategory === 'fair' || targetScoreCategory === 'poor') {
        if (card.creditScoreRequirement?.includes('Good') || card.creditScoreRequirement?.includes('Excellent')) {
            if (!card.creditScoreRequirement.includes(targetScoreCategory)) {
                return false;
            }
        }
    }
    return true; // Keep card if it passes filters
  });
}