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
// * Verify these mappings match categories in your finalcreditcard.json *
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
  onlineShopping: ['online_retail_us', 'online_shopping', 'ecommerce'], // Needs careful mapping
  other: ['other', 'non_bonus', 'everyday_spend'], // Catch-all

  // Keep specific keys if needed by legacy logic or specific cards in JSON
  travel: ['travel', 'flights', 'hotel', 'car_rental', 'transit', 'airlines', /*...*/ ],
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
 */
function getBestMultiplier(card, spendingCategory, annualSpendInCategory) {
    if (!card?.rewards || !Array.isArray(card.rewards)) return card?.rewards?.baseRate || 1;
    const potentialJsonCategories = CATEGORY_MAP[spendingCategory] || [spendingCategory];
    let bestMultiplier = card.rewards.baseRate || 1;
    const matchingRules = card.rewards.filter(r => potentialJsonCategories.some(pc => r.category.toLowerCase().includes(pc.toLowerCase())));
    if (matchingRules.length === 0) {
        const flexRule = card.rewards.find(r => r.category === 'business_top_category');
        if (flexRule) { const highValueFlexCategories = ['flightsHotels', 'dining', 'gasEV', 'advertising_online', 'shipping', 'phoneInternetBills']; if (highValueFlexCategories.includes(spendingCategory)) { bestMultiplier = flexRule.multiplier; } }
        const customRule = card.rewards.find(r => r.category === 'custom_top_category');
        if (customRule) { const citiCustomCategories = { flightsHotels: 'travel', dining: 'restaurants', groceries: 'grocery stores', gasEV: 'gas stations', transitCommuting: 'transit', streaming: 'select streaming services', drugstores: 'drugstores', }; if (Object.keys(citiCustomCategories).includes(spendingCategory)) { bestMultiplier = customRule.multiplier; } }
    } else { bestMultiplier = Math.max(bestMultiplier, ...matchingRules.map(r => r.multiplier)); }
    const winningRule = card.rewards.find(r => r.multiplier === bestMultiplier && potentialJsonCategories.some(pc => r.category.toLowerCase().includes(pc.toLowerCase()))) || card.rewards.find(r => r.category === 'business_top_category' && r.multiplier === bestMultiplier) || card.rewards.find(r => r.category === 'custom_top_category' && r.multiplier === bestMultiplier);
    if (winningRule?.cap) { const capAmount = winningRule.cap.amount_usd; const capPeriod = winningRule.cap.period; let annualCap = capAmount; if (capPeriod === 'month') annualCap = capAmount * 12; if (capPeriod === 'quarter') annualCap = capAmount * 4; if (annualSpendInCategory > annualCap) { const baseRate = card.rewards.baseRate || 1; const effectiveMultiplier = ((annualCap * bestMultiplier) + ((annualSpendInCategory - annualCap) * baseRate)) / annualSpendInCategory; return effectiveMultiplier > 0 ? effectiveMultiplier : baseRate; } }
    return bestMultiplier;
}

/**
 * Estimates the point value (CPP) for a card based on user priority.
 */
function getEstimatedCpp(card, userPriority) {
  const opts = card?.redemptionOptions;
  if (!opts) return AVG_POINT_VALUE_ESTIMATES.default_points;
  if (userPriority === 'cash_back' && opts.cash_back_cpp) return opts.cash_back_cpp;
  if (userPriority === 'rewards' || userPriority === 'travel_perks') { const transferCpp = opts.transfer_partner_average_cpp || 0; const portalCpp = opts.chase_travel_portal_cpp || opts.amex_travel_cpp || opts.cap_one_travel_cpp || opts.travel_statement_credit_cpp || 0; if (transferCpp > 0 && transferCpp >= portalCpp * 0.95) return transferCpp; if (portalCpp > 0) return portalCpp; }
  const possibleCpp = [ opts.transfer_partner_average_cpp, opts.program_cpp, opts.chase_travel_portal_cpp, opts.amex_travel_cpp, opts.cap_one_travel_cpp, opts.travel_statement_credit_cpp, opts.cash_back_cpp, ].filter(cpp => typeof cpp === 'number' && cpp > 0);
  if (possibleCpp.length > 0) return Math.max(...possibleCpp);
  const program = (card?.rewardProgram || '').toLowerCase(); if (program.includes('cash')) return AVG_POINT_VALUE_ESTIMATES.cashback; if (program.includes('miles') || program.includes('avios') || program.includes('aeroplan')) return AVG_POINT_VALUE_ESTIMATES.default_miles;
  return AVG_POINT_VALUE_ESTIMATES.default_points;
}

/**
 * Calculates the advanced score for a credit card based on user profile.
 */
export function calculateAdvancedCardScore(card, userProfile) {
  const { spendingProfile, preferences, priority = 'rewards' } = userProfile;
  let scoreComponents = { rewardsValue: 0, loyaltyFit: 0, perksMatch: 0, feeAffordability: 0, signUpBonus: 0, introAPR: 0, };
  let matchedFeatures = [];

  // 1. Rewards Value
  let annualPoints = 0; for (const category in spendingProfile) { const monthlySpend = spendingProfile[category] || 0; if (monthlySpend > 0) { const annualSpend = monthlySpend * 12; const multiplier = getBestMultiplier(card, category, annualSpend); annualPoints += annualSpend * multiplier; } } const estimatedCpp = getEstimatedCpp(card, priority); const annualRewardsValue = Math.round(annualPoints * estimatedCpp); const maxExpectedRewardValueCents = 800 * 100; scoreComponents.rewardsValue = Math.max(0, Math.min(BASE_WEIGHTS.rewardsValue, (annualRewardsValue / maxExpectedRewardValueCents) * BASE_WEIGHTS.rewardsValue)); if (annualRewardsValue > 5000) matchedFeatures.push(`~$${Math.round(annualRewardsValue / 100)}/yr rewards`);

  // 2. Loyalty Fit
   let loyaltyScore = 0; const preferredAirlines = preferences.preferredAirlines || []; const preferredHotels = preferences.preferredHotels || []; let partnerMatchCount = 0; if ((preferredAirlines.length > 0 || preferredHotels.length > 0) && card.transferPartners && Array.isArray(card.transferPartners)) { partnerMatchCount = card.transferPartners.filter(p => (p.type === 'airline' && preferredAirlines.includes(p.program)) || (p.type === 'hotel' && preferredHotels.includes(p.program)) ).length; loyaltyScore = Math.min(BASE_WEIGHTS.loyaltyFit, partnerMatchCount * (BASE_WEIGHTS.loyaltyFit / 2)); } const cardNameLower = (card['Card Name'] || '').toLowerCase(); const rewardProgramLower = (card.rewardProgram || '').toLowerCase(); const directlyMatchesAirline = preferredAirlines.some(a => rewardProgramLower.includes(a.toLowerCase().split(' ')[0]) || cardNameLower.includes(a.toLowerCase().split(' ')[0])); const directlyMatchesHotel = preferredHotels.some(h => rewardProgramLower.includes(h.toLowerCase().split(' ')[0]) || cardNameLower.includes(h.toLowerCase().split(' ')[0])); if (directlyMatchesAirline || directlyMatchesHotel) { loyaltyScore = BASE_WEIGHTS.loyaltyFit; const matchedProgram = preferredAirlines.find(a => rewardProgramLower.includes(a.toLowerCase().split(' ')[0]) || cardNameLower.includes(a.toLowerCase().split(' ')[0])) || preferredHotels.find(h => rewardProgramLower.includes(h.toLowerCase().split(' ')[0]) || cardNameLower.includes(h.toLowerCase().split(' ')[0])); if (matchedProgram) matchedFeatures.push(`Matches ${matchedProgram}`); } else if (partnerMatchCount > 0) { matchedFeatures.push(`${partnerMatchCount} Preferred Transfer Partner${partnerMatchCount > 1 ? 's' : ''}`); } scoreComponents.loyaltyFit = loyaltyScore;

  // 3. Perks Match
   let perksScore = 0; let matchedPerkCount = 0; if (card.perks && Array.isArray(card.perks)) { for (const prefKey in PERK_MAP) { if (preferences[prefKey]) { const targetPerkTypes = Array.isArray(PERK_MAP[prefKey]) ? PERK_MAP[prefKey] : [PERK_MAP[prefKey]]; const cardHasPerk = card.perks.some(p => targetPerkTypes.includes(p.perkType)); if (cardHasPerk) { matchedPerkCount++; const perkName = prefKey.replace(/^wants|^needs/, '').replace(/([A-Z])/g, ' $1').trim(); const specificPerk = card.perks.find(p => targetPerkTypes.includes(p.perkType)); matchedFeatures.push(specificPerk?.description || perkName); } } } perksScore = Math.min(BASE_WEIGHTS.perksMatch, matchedPerkCount * (BASE_WEIGHTS.perksMatch / 2) ); } scoreComponents.perksMatch = perksScore;

  // 4. Fee Affordability [Uses preferNoAnnualFee]
  const annualFee = card['Annual Fee'] || 0;
  let feeBudget = preferences.annualFeeBudget; if (!feeBudget || !Array.isArray(feeBudget) || feeBudget.length !== 2) { feeBudget = [0, 1000]; } const [minFeeBudget, maxFeeBudget] = feeBudget;
  const prefersNoFee = preferences.preferNoAnnualFee === true;
  const isLowFeePriority = preferences.priority === 'low_fee';

  if (annualFee >= minFeeBudget && annualFee <= maxFeeBudget) {
      if (annualFee === 0) {
          scoreComponents.feeAffordability = BASE_WEIGHTS.feeAffordability;
          matchedFeatures.push("No Annual Fee");
      } else {
          const range = maxFeeBudget - minFeeBudget; const feePositionInRange = range > 0 ? (annualFee - minFeeBudget) / range : 0;
          let currentScore = BASE_WEIGHTS.feeAffordability * (1 - feePositionInRange * 0.8);
          // Apply stronger penalty if user checks "preferNoFee" box
          if (prefersNoFee) {
              currentScore *= 0.3; // Heavy penalty for any non-zero fee
              matchedFeatures.push(`$${annualFee} Fee (Note: You prefer no fee)`);
          } else if (isLowFeePriority) {
               currentScore *= 0.6; // Moderate penalty for low_fee priority
               matchedFeatures.push(`$${annualFee} Annual Fee`);
          } else {
               matchedFeatures.push(`$${annualFee} Annual Fee`);
          }
           scoreComponents.feeAffordability = currentScore;
      }
  } else { scoreComponents.feeAffordability = 0; }
  scoreComponents.feeAffordability = Math.max(0, scoreComponents.feeAffordability);


  // 5. Sign-Up Bonus
  let subScore = 0; const signUpBonusValue = card.signUpBonus?.estimated_value_usd || 0; if (signUpBonusValue > 0) { const maxExpectedSubValue = 1000; subScore = Math.max(0, Math.min(BASE_WEIGHTS.signUpBonus, (signUpBonusValue / maxExpectedSubValue) * BASE_WEIGHTS.signUpBonus)); const bonusDesc = card.signUpBonus?.description || `~$${signUpBonusValue} Welcome Bonus`; matchedFeatures.push(bonusDesc); } scoreComponents.signUpBonus = subScore;

  // 6. Intro APR
  let introAprScore = 0; if (preferences.needsIntroAPR && card.introAPR) { if (card.introAPR.type === 'purchase' || card.introAPR.type === 'both') { const duration = card.introAPR.durationMonths || 0; if (duration >= 9) { introAprScore = BASE_WEIGHTS.introAPR; matchedFeatures.push(`0% Intro APR for ${duration} mo`); } } } scoreComponents.introAPR = introAprScore;

  // Adjust Weights Based on Priority
   let adjustedWeights = { ...BASE_WEIGHTS }; const boostFactor = 2.5; const reduceFactor = 0.7; switch (priority) { case 'rewards': adjustedWeights.rewardsValue *= boostFactor; adjustedWeights.loyaltyFit *= reduceFactor; adjustedWeights.perksMatch *= reduceFactor; adjustedWeights.signUpBonus *= reduceFactor; break; case 'sign_up_bonus': adjustedWeights.signUpBonus *= boostFactor; adjustedWeights.rewardsValue *= reduceFactor; adjustedWeights.feeAffordability *= reduceFactor; break; case 'low_fee': adjustedWeights.feeAffordability *= boostFactor; adjustedWeights.rewardsValue *= 1.2; adjustedWeights.signUpBonus *= reduceFactor; adjustedWeights.perksMatch *= reduceFactor; break; case 'travel_perks': adjustedWeights.perksMatch *= boostFactor; adjustedWeights.loyaltyFit *= 1.5; adjustedWeights.rewardsValue *= reduceFactor; adjustedWeights.feeAffordability *= reduceFactor; break; case '0_apr': adjustedWeights.introAPR *= (boostFactor * 2); adjustedWeights.rewardsValue *= reduceFactor; adjustedWeights.signUpBonus *= reduceFactor; adjustedWeights.feeAffordability *= reduceFactor; break; default: break; } const totalWeight = Object.values(adjustedWeights).reduce((sum, w) => sum + w, 0); if (totalWeight > 0) { for (const key in adjustedWeights) { adjustedWeights[key] = Math.max(0, (adjustedWeights[key] / totalWeight) * 100); } }

  // Final Score
   let totalScore = 0; for (const key in scoreComponents) { const baseWeight = BASE_WEIGHTS[key] || 1; const weightAdjustment = adjustedWeights[key] / baseWeight; totalScore += scoreComponents[key] * weightAdjustment; } totalScore = Math.max(0, Math.min(100, Math.round(totalScore)));

  // Net Values
   const netFirstYearValue = Math.round((annualRewardsValue / 100) + signUpBonusValue - annualFee); const ongoingValue = Math.round((annualRewardsValue / 100) - annualFee);
  const uniqueMatchedFeatures = [...new Set(matchedFeatures)].filter(f => f);

  return {
    totalScore, netFirstYearValue, ongoingValue, breakdown: scoreComponents,
    matchedFeatures: uniqueMatchedFeatures.slice(0, 5), // Limit displayed features
  };
}


/**
 * Filters cards based on non-scoring criteria like credit score and card type.
 */
export function filterCards(cards, userProfile) {
  const { creditScoreRange, cardType } = userProfile; const targetScoreCategory = CREDIT_SCORE_MAP[creditScoreRange] || null; return cards.filter(card => { if (cardType && cardType !== 'any') { const cardActualType = (card['Card Type'] || 'Personal').toLowerCase(); if (cardActualType !== cardType.toLowerCase()) { return false; } } if (targetScoreCategory && card.creditScoreRequirement && Array.isArray(card.creditScoreRequirement)) { const cardRequires = card.creditScoreRequirement; if (!cardRequires.includes(targetScoreCategory)) { const scoreLevels = ['poor', 'fair', 'good', 'excellent']; const userLevelIndex = scoreLevels.indexOf(creditScoreRange); const minRequiredLevel = cardRequires[0]; const minRequiredIndex = scoreLevels.indexOf(minRequiredLevel?.toLowerCase()); if (userLevelIndex === 2 && minRequiredIndex === 3) { /* Allow Good -> Excellent */ } else { return false; } } } else if (targetScoreCategory === 'fair' || targetScoreCategory === 'poor') { if (card.creditScoreRequirement?.includes('Good') || card.creditScoreRequirement?.includes('Excellent')) { if (!card.creditScoreRequirement.includes(targetScoreCategory)) { return false; } } } return true; });
}