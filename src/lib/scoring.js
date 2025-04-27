// File: /lib/scoring.js

// --- Configuration ---
const BASE_WEIGHTS = {
  rewardsValue: 40,
  loyaltyFit: 15,
  perksMatch: 15,
  feeAffordability: 10,
  signUpBonus: 10,
  introAPR: 5,
};
const AVG_POINT_VALUE_ESTIMATES = {
  'default_points': 0.015, 'default_miles': 0.013, 'cashback': 0.01,
};

// ****** IMPORTANT ******
// * Verify these CATEGORY_MAP mappings match categories in your finalcreditcard.json *
// ************************
const CATEGORY_MAP = {
  // 10 UI Spending Categories:
  flightsHotels: ['travel', 'flights', 'hotel', 'airlines', 'aircanada', 'alaska_airlines', 'american_airlines', 'british_airways', 'delta_airlines', 'hawaiian_airlines', 'jetblue', 'southwest_airlines', 'hyatt_hotels', 'hilton_hotels', 'travel_portal', 'hotel_capital_one_portal', 'flights_capital_one_portal', 'hotel_chase_portal', 'flights_chase_portal', 'flights_amex_travel', 'hotel_amex_travel'],
  dining: ['dining', 'restaurants'],
  groceries: ['groceries', 'groceries_us', 'supermarkets'],
  gasEV: ['gas', 'gas_us', 'ev_charging'],
  transitCommuting: ['transit', 'commuting', 'rideshare', 'taxi', 'parking', 'tolls'],
  streaming: ['streaming', 'select_streaming_services'],
  phoneInternetBills: ['telecom', 'wireless_phone', 'phone_plans', 'internet', 'cable'],
  drugstores: ['drugstores', 'pharmacies'],
  onlineShopping: ['online_retail_us', 'online_shopping', 'ecommerce'], // Needs careful mapping based on JSON data
  other: ['other', 'non_bonus', 'everyday_spend'], // Catch-all

  // Keep specific legacy keys if needed by specific card JSON structures or logic
  travel: ['travel', 'flights', 'hotel', 'car_rental', 'transit', 'airlines', 'aircanada', 'alaska_airlines', 'american_airlines', 'british_airways', 'delta_airlines', 'hawaiian_airlines', 'jetblue', 'southwest_airlines', 'hyatt_hotels', 'hilton_hotels', 'travel_portal', 'hotel_capital_one_portal', 'flights_capital_one_portal', 'hotel_chase_portal', 'car_rental_chase_portal', 'flights_chase_portal', 'flights_amex_travel', 'hotel_amex_travel'],
  gas: ['gas', 'gas_us', 'ev_charging'],
  business_top_category: ['business_top_category'],
  shipping: ['shipping'],
  advertising_online: ['advertising_online'],
  telecom: ['telecom', 'wireless_phone', 'phone_plans', 'internet', 'cable'],
  online_grocery: ['online_grocery'],
  office_supplies: ['office_supplies'],
  fitness_clubs: ['fitness_clubs'],
};

const PERK_MAP = {
  wantsLoungeAccess: 'LOUNGE_ACCESS',
  needsRentalCarInsurance: 'RENTAL_CAR_INSURANCE_PRIMARY',
  wantsGlobalEntry: 'GLOBAL_ENTRY_TSA_PRECHECK_CREDIT',
  wantsEliteStatusBoost: ['ELITE_STATUS_BOOST', 'HILTON_STATUS', 'TIER_QUALIFYING_BOOST', 'ELITE_NIGHTS'],
  wantsFreeCheckedBag: 'FREE_CHECKED_BAG',
};
const CREDIT_SCORE_MAP = {
  excellent: 'Excellent', good: 'Good', fair: 'Fair', poor: 'Poor', any: null
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
    const potentialJsonCategories = CATEGORY_MAP[spendingCategory] || [spendingCategory];
    let bestMultiplier = card.rewards.baseRate || 1;
    const matchingRules = card.rewards.filter(r =>
        potentialJsonCategories.some(pc => r.category.toLowerCase().includes(pc.toLowerCase()))
    );

    if (matchingRules.length === 0) {
        // Handle flexible categories like Amex Biz Gold 'business_top_category'
        const flexRule = card.rewards.find(r => r.category === 'business_top_category');
        if (flexRule) {
            const highValueFlexCategories = ['flightsHotels', 'dining', 'gasEV', 'advertising_online', 'shipping', 'phoneInternetBills'];
            if (highValueFlexCategories.includes(spendingCategory)) {
                 bestMultiplier = flexRule.multiplier;
                 // Note: Real accuracy requires knowing *other* high spend categories too. This is an estimate.
            }
        }
        // Handle Citi Custom Cash 'custom_top_category'
        const customRule = card.rewards.find(r => r.category === 'custom_top_category');
        if (customRule) {
            const citiCustomCategories = {
                flightsHotels: 'travel', dining: 'restaurants', groceries: 'grocery stores',
                gasEV: 'gas stations', transitCommuting: 'transit', streaming: 'select streaming services',
                drugstores: 'drugstores', /* Map other potential categories if needed */
            };
            // Check if the UI category maps to a potential Custom Cash category
            if (Object.keys(citiCustomCategories).includes(spendingCategory)) {
                bestMultiplier = customRule.multiplier; // Assume it *could* be the top category
                // Cap check handled below
            }
        }
    } else {
        // Find the highest multiplier among direct matches
        bestMultiplier = Math.max(bestMultiplier, ...matchingRules.map(r => r.multiplier));
    }

    // --- Check Caps ---
    const winningRule = card.rewards.find(r => r.multiplier === bestMultiplier && potentialJsonCategories.some(pc => r.category.toLowerCase().includes(pc.toLowerCase())))
                        || card.rewards.find(r => r.category === 'business_top_category' && r.multiplier === bestMultiplier)
                        || card.rewards.find(r => r.category === 'custom_top_category' && r.multiplier === bestMultiplier);

    if (winningRule?.cap) {
        const capAmount = winningRule.cap.amount_usd;
        const capPeriod = winningRule.cap.period; // 'year', 'month', 'quarter'
        let annualCap = capAmount;
        if (capPeriod === 'month') annualCap = capAmount * 12;
        if (capPeriod === 'quarter') annualCap = capAmount * 4;

        // Simplified check (assumes cap applies primarily to this category's spend)
        if (annualSpendInCategory > annualCap) {
            const baseRate = card.rewards.baseRate || 1;
            // Apply blended rate: (CapAmount * Multiplier + (Spend - CapAmount) * BaseRate) / Spend
            const effectiveMultiplier = ((annualCap * bestMultiplier) + ((annualSpendInCategory - annualCap) * baseRate)) / annualSpendInCategory;
            // Ensure effective multiplier is valid and not less than base rate due to rounding issues
            return Math.max(baseRate, effectiveMultiplier > 0 ? effectiveMultiplier : baseRate);
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
  if (!opts) return AVG_POINT_VALUE_ESTIMATES.default_points; // Default if no options specified in JSON

  // Prioritize based on user preference
  if (userPriority === 'cash_back' && typeof opts.cash_back_cpp === 'number') {
    return opts.cash_back_cpp;
  }
  if (userPriority === 'rewards' || userPriority === 'travel_perks') {
      const transferCpp = opts.transfer_partner_average_cpp || 0;
      // Check various portal/statement credit options
      const portalCpp = Math.max(
          opts.chase_travel_portal_cpp || 0,
          opts.amex_travel_cpp || 0,
          opts.cap_one_travel_cpp || 0,
          opts.travel_statement_credit_cpp || 0
      );
      // Give slight preference to transfer partners if value is close or higher
      if (transferCpp > 0 && transferCpp >= portalCpp * 0.95) return transferCpp;
      if (portalCpp > 0) return portalCpp;
  }

  // Fallback logic: Take the best available value or a default
  const possibleCpp = [
    opts.transfer_partner_average_cpp,
    opts.program_cpp, // General program value if available
    opts.chase_travel_portal_cpp,
    opts.amex_travel_cpp,
    opts.cap_one_travel_cpp,
    opts.travel_statement_credit_cpp,
    opts.cash_back_cpp,
  ].filter(cpp => typeof cpp === 'number' && cpp > 0); // Filter out invalid/zero values

  if (possibleCpp.length > 0) {
    return Math.max(...possibleCpp); // Return the highest valid CPP found
  }

  // Absolute fallback based on program type if no explicit values found
  const program = (card?.rewardProgram || '').toLowerCase();
  if (program.includes('cash')) return AVG_POINT_VALUE_ESTIMATES.cashback;
  if (program.includes('miles') || program.includes('avios') || program.includes('aeroplan')) return AVG_POINT_VALUE_ESTIMATES.default_miles;

  // Final fallback to default points value
  return AVG_POINT_VALUE_ESTIMATES.default_points;
}

/**
 * Calculates the advanced score for a credit card based on user profile.
 * @param {object} card - The card object from your JSON data.
 * @param {object} userProfile - Object containing user inputs (spendingProfile, preferences incl. annualFeeBudget, preferNoAnnualFee)
 * @returns {object} - Object with totalScore, breakdown, netFirstYearValue, ongoingValue, and matchedFeatures.
 */
export function calculateAdvancedCardScore(card, userProfile) {
  const { spendingProfile, preferences, priority = 'rewards' } = userProfile;
  let scoreComponents = { rewardsValue: 0, loyaltyFit: 0, perksMatch: 0, feeAffordability: 0, signUpBonus: 0, introAPR: 0 };
  let matchedFeatures = [];

  // --- 1. Calculate Estimated Annual Rewards Value ---
  let annualPoints = 0;
  for (const category in spendingProfile) {
      // Ensure category exists in the profile before processing
      if (Object.prototype.hasOwnProperty.call(spendingProfile, category)) {
          const monthlySpend = spendingProfile[category] || 0;
          if (monthlySpend > 0) {
              const annualSpend = monthlySpend * 12;
              const multiplier = getBestMultiplier(card, category, annualSpend);
              annualPoints += annualSpend * multiplier;
          }
      }
  }
  const estimatedCpp = getEstimatedCpp(card, priority);
  const annualRewardsValue = Math.round(annualPoints * estimatedCpp); // Value in cents
  const maxExpectedRewardValueCents = 800 * 100; // Reference value for normalization
  scoreComponents.rewardsValue = Math.max(0, Math.min(BASE_WEIGHTS.rewardsValue, (annualRewardsValue / maxExpectedRewardValueCents) * BASE_WEIGHTS.rewardsValue));
  if (annualRewardsValue > 5000) { // Add feature if reward value is significant (e.g., > $50)
      matchedFeatures.push(`~$${Math.round(annualRewardsValue / 100)}/yr rewards`);
  }

  // --- 2. Calculate Loyalty Fit ---
   let loyaltyScore = 0;
   const preferredAirlines = preferences.preferredAirlines || [];
   const preferredHotels = preferences.preferredHotels || [];
   let partnerMatchCount = 0;
   if ((preferredAirlines.length > 0 || preferredHotels.length > 0) && card.transferPartners && Array.isArray(card.transferPartners)) {
       partnerMatchCount = card.transferPartners.filter(p =>
         (p.type === 'airline' && preferredAirlines.includes(p.program)) ||
         (p.type === 'hotel' && preferredHotels.includes(p.program))
       ).length;
       // Simple scoring: score based on number of matches (max score for 2+)
       loyaltyScore = Math.min(BASE_WEIGHTS.loyaltyFit, partnerMatchCount * (BASE_WEIGHTS.loyaltyFit / 2));
   }
    // Boost score for co-branded cards matching user preferences
    const cardNameLower = (card['Card Name'] || '').toLowerCase();
    const rewardProgramLower = (card.rewardProgram || '').toLowerCase();
    // Check if preferred airline/hotel name part exists in card name or reward program name
    const directlyMatchesAirline = preferredAirlines.some(a => {
        const airlineNamePart = a.toLowerCase().split(' ')[0]; // e.g., "delta" from "Delta SkyMiles"
        return rewardProgramLower.includes(airlineNamePart) || cardNameLower.includes(airlineNamePart);
    });
    const directlyMatchesHotel = preferredHotels.some(h => {
        const hotelNamePart = h.toLowerCase().split(' ')[0]; // e.g., "hilton" from "Hilton Honors"
        return rewardProgramLower.includes(hotelNamePart) || cardNameLower.includes(hotelNamePart);
    });

    if (directlyMatchesAirline || directlyMatchesHotel) {
       loyaltyScore = BASE_WEIGHTS.loyaltyFit; // Max score for direct co-brand match
       // Try to find the matched program name for the feature text
       const matchedProgram = preferredAirlines.find(a => rewardProgramLower.includes(a.toLowerCase().split(' ')[0]) || cardNameLower.includes(a.toLowerCase().split(' ')[0]))
                            || preferredHotels.find(h => rewardProgramLower.includes(h.toLowerCase().split(' ')[0]) || cardNameLower.includes(h.toLowerCase().split(' ')[0]));
       if (matchedProgram) matchedFeatures.push(`Matches ${matchedProgram}`);
    } else if (partnerMatchCount > 0) {
        // Add feature text for transfer partners if no co-brand match
        matchedFeatures.push(`${partnerMatchCount} Preferred Transfer Partner${partnerMatchCount > 1 ? 's' : ''}`);
    }
  scoreComponents.loyaltyFit = loyaltyScore;

  // --- 3. Calculate Perks Match ---
   let perksScore = 0;
   let matchedPerkCount = 0;
   if (card.perks && Array.isArray(card.perks)) {
        for (const prefKey in PERK_MAP) {
            // Check if the user wants this perk (key exists in preferences and is true)
            if (Object.prototype.hasOwnProperty.call(preferences, prefKey) && preferences[prefKey]) {
                const targetPerkTypes = Array.isArray(PERK_MAP[prefKey]) ? PERK_MAP[prefKey] : [PERK_MAP[prefKey]];
                // Check if the card has *any* of the perk types associated with this preference
                const cardHasPerk = card.perks.some(p => targetPerkTypes.includes(p.perkType));
                if (cardHasPerk) {
                    matchedPerkCount++;
                    // Generate a readable name from the preference key (e.g., wantsLoungeAccess -> Lounge Access)
                    const perkName = prefKey.replace(/^wants|^needs/, '').replace(/([A-Z])/g, ' $1').trim();
                    // Try to get a more specific description from the card's perk data
                    const specificPerk = card.perks.find(p => targetPerkTypes.includes(p.perkType));
                    matchedFeatures.push(specificPerk?.description || perkName); // Use specific description or fallback name
                }
            }
        }
        // Simple scoring: score based on number of matched priority perks (max score for 2+)
        perksScore = Math.min(BASE_WEIGHTS.perksMatch, matchedPerkCount * (BASE_WEIGHTS.perksMatch / 2) );
   }
   scoreComponents.perksMatch = perksScore;

  // --- 4. Calculate Fee Affordability --- [Uses preferNoAnnualFee]
  const annualFee = card['Annual Fee'] || 0;
  let feeBudget = preferences.annualFeeBudget;
  if (!feeBudget || !Array.isArray(feeBudget) || feeBudget.length !== 2) { feeBudget = [0, 1000]; }
  const [minFeeBudget, maxFeeBudget] = feeBudget;
  const prefersNoFee = preferences.preferNoAnnualFee === true;
  const isLowFeePriority = preferences.priority === 'low_fee';

  if (annualFee >= minFeeBudget && annualFee <= maxFeeBudget) {
      if (annualFee === 0) {
          scoreComponents.feeAffordability = BASE_WEIGHTS.feeAffordability; // Max score
          matchedFeatures.push("No Annual Fee");
      } else {
          const range = maxFeeBudget - minFeeBudget;
          const feePositionInRange = range > 0 ? (annualFee - minFeeBudget) / range : 0;
          let currentScore = BASE_WEIGHTS.feeAffordability * (1 - feePositionInRange * 0.8); // Base score
          // Apply penalties based on preferences
          if (prefersNoFee) {
              currentScore *= 0.3; // Strong penalty if $0 fee is preferred
              matchedFeatures.push(`$${annualFee} Fee (Note: You prefer no fee)`);
          } else if (isLowFeePriority) {
               currentScore *= 0.6; // Moderate penalty if low fee is priority
               matchedFeatures.push(`$${annualFee} Annual Fee`);
          } else {
               matchedFeatures.push(`$${annualFee} Annual Fee`);
          }
           scoreComponents.feeAffordability = currentScore;
      }
  } else { scoreComponents.feeAffordability = 0; } // Outside range = 0 score
  scoreComponents.feeAffordability = Math.max(0, scoreComponents.feeAffordability); // Ensure non-negative

  // --- 5. Calculate Sign-Up Bonus Score ---
  let subScore = 0;
  const signUpBonusValue = card.signUpBonus?.estimated_value_usd || 0;
  if (signUpBonusValue > 0) {
      const maxExpectedSubValue = 1000; // Reference max bonus value
      subScore = Math.max(0, Math.min(BASE_WEIGHTS.signUpBonus, (signUpBonusValue / maxExpectedSubValue) * BASE_WEIGHTS.signUpBonus));
      // Use bonus description from JSON if available, otherwise format value
      const bonusDesc = card.signUpBonus?.description || `~$${signUpBonusValue} Welcome Bonus`;
      matchedFeatures.push(bonusDesc);
  }
  scoreComponents.signUpBonus = subScore;

  // --- 6. Calculate Intro APR Score ---
  let introAprScore = 0;
  // Check the specific preference toggle `needsIntroAPR`
  if (preferences.needsIntroAPR && card.introAPR) { // Assumes structured introAPR object in JSON
      if (card.introAPR.type === 'purchase' || card.introAPR.type === 'both') {
         const duration = card.introAPR.durationMonths || 0;
         if (duration >= 9) { // Only give score for reasonably long APR periods
             introAprScore = BASE_WEIGHTS.introAPR;
             matchedFeatures.push(`0% Intro APR for ${duration} mo`);
         }
      }
  }
  scoreComponents.introAPR = introAprScore;

  // --- Adjust Weights Based on User Priority ---
   let adjustedWeights = { ...BASE_WEIGHTS };
   const boostFactor = 2.5; const reduceFactor = 0.7;
   switch (priority) {
       case 'rewards': adjustedWeights.rewardsValue *= boostFactor; adjustedWeights.loyaltyFit *= reduceFactor; adjustedWeights.perksMatch *= reduceFactor; adjustedWeights.signUpBonus *= reduceFactor; break;
       case 'sign_up_bonus': adjustedWeights.signUpBonus *= boostFactor; adjustedWeights.rewardsValue *= reduceFactor; adjustedWeights.feeAffordability *= reduceFactor; break;
       case 'low_fee': adjustedWeights.feeAffordability *= boostFactor; adjustedWeights.rewardsValue *= 1.2; adjustedWeights.signUpBonus *= reduceFactor; adjustedWeights.perksMatch *= reduceFactor; break; // Boost fee score heavily
       case 'travel_perks': adjustedWeights.perksMatch *= boostFactor; adjustedWeights.loyaltyFit *= 1.5; adjustedWeights.rewardsValue *= reduceFactor; adjustedWeights.feeAffordability *= reduceFactor; break;
       case '0_apr': adjustedWeights.introAPR *= (boostFactor * 2); adjustedWeights.rewardsValue *= reduceFactor; adjustedWeights.signUpBonus *= reduceFactor; adjustedWeights.feeAffordability *= reduceFactor; break; // Boost APR score heavily
       default: break; // No adjustment for default 'rewards' or unknown priority
   }
   // Re-normalize weights to sum roughly to 100
   const totalWeight = Object.values(adjustedWeights).reduce((sum, w) => sum + w, 0);
   if (totalWeight > 0) {
       for (const key in adjustedWeights) { adjustedWeights[key] = Math.max(0, (adjustedWeights[key] / totalWeight) * 100); }
   }

  // --- Calculate Final Weighted Score ---
   let totalScore = 0;
   for (const key in scoreComponents) {
       if (Object.prototype.hasOwnProperty.call(scoreComponents, key)) {
           const baseWeight = BASE_WEIGHTS[key] || 1; // Avoid division by zero
           const weightAdjustment = adjustedWeights[key] / baseWeight;
           totalScore += scoreComponents[key] * weightAdjustment;
       }
   }
   totalScore = Math.max(0, Math.min(100, Math.round(totalScore))); // Clamp score 0-100

  // --- Calculate Net Values ---
   const netFirstYearValue = Math.round((annualRewardsValue / 100) + signUpBonusValue - annualFee); // Convert rewards value from cents
   const ongoingValue = Math.round((annualRewardsValue / 100) - annualFee);

  // --- Finalize Matched Features ---
  // Filter unique features and remove any null/empty strings
  const uniqueMatchedFeatures = [...new Set(matchedFeatures)].filter(f => f);

  return {
    totalScore,
    netFirstYearValue,
    ongoingValue,
    breakdown: scoreComponents, // Raw scores before weighting (for debugging/detail view)
    matchedFeatures: uniqueMatchedFeatures.slice(0, 5), // Limit displayed features for tile brevity
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
      const cardActualType = (card['Card Type'] || 'Personal').toLowerCase(); // Default to Personal if missing
      if (cardActualType !== cardType.toLowerCase()) {
        return false;
      }
    }

    // Filter by Credit Score Requirement defined in card JSON
    if (targetScoreCategory && card.creditScoreRequirement && Array.isArray(card.creditScoreRequirement)) {
      const cardRequires = card.creditScoreRequirement; // e.g., ["Good", "Excellent"]

      // User needs at least one of the required score levels
      if (!cardRequires.includes(targetScoreCategory)) {
         // Allow 'Good' users to potentially see 'Excellent' cards (common scenario)
         const scoreLevels = ['poor', 'fair', 'good', 'excellent'];
         const userLevelIndex = scoreLevels.indexOf(creditScoreRange);
         const minRequiredLevel = cardRequires[0]; // Assumes requirement array is ordered ['Good', 'Excellent'] or just ['Excellent']
         const minRequiredIndex = scoreLevels.indexOf(minRequiredLevel?.toLowerCase());

         // Allow if user is 'good' (index 2) and card requires 'excellent' (index 3)
         if (userLevelIndex === 2 && minRequiredIndex === 3) {
            // Allow Good -> Excellent exception
         }
         // Add other exceptions here if needed (e.g., Fair -> Good?) - currently strict otherwise
         else {
             return false; // User's score doesn't meet requirement or allowed exception
         }
      }
    // Handle cases where user has Fair/Poor score - be stricter
    } else if (targetScoreCategory === 'fair' || targetScoreCategory === 'poor') {
        // If card explicitly requires Good or Excellent...
        if (card.creditScoreRequirement?.includes('Good') || card.creditScoreRequirement?.includes('Excellent')) {
            // ...only allow it if the card *also* explicitly lists Fair/Poor as acceptable
            if (!card.creditScoreRequirement.includes(targetScoreCategory)) {
                return false;
            }
        }
    }
    // If no target score category (e.g., 'any') or card has no requirement listed, don't filter based on score
    return true; // Keep card if it passes all filters
  });
}