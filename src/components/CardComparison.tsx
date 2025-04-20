// Inside components/CardComparison.tsx

// Define the fields you want to compare here - CONFIRMED LIST WITH >20 ROWS
const fieldsToCompare = [
  // Card Identity & Cost
  { label: 'Card Image', key: 'image', type: 'image' }, // Assuming 'image' key exists
  { label: 'Card Name', key: 'Card Name' },
  { label: 'Issuer', key: 'Issuer' },
  { label: 'Card Type', key: 'Card Type' },
  { label: 'Credit Score Req.', key: 'Credit Score Requirement' },
  { label: 'Annual Fee', key: 'Annual Fee' },
  { label: 'Foreign Transaction Fee', key: 'Foreign Transaction Fee' },

  // Welcome Offer
  { label: 'Sign-Up Bonus', key: 'Sign-Up Bonus' },
  { label: 'Minimum Spend', key: 'Minimum Spend for Bonus' },
  { label: 'Bonus Value ($)', key: 'Bonus Redemption Value ($)' },

  // Earning Rewards
  { label: 'Reward Program', key: 'Reward Program' },
  { label: 'Base Earning Rate', key: 'Base Earning Rate (pts/$)' },
  { label: 'Bonus Categories', key: 'Bonus Categories' },
  { label: 'Category Rates', key: 'Bonus Category Rates' },
  { label: 'Multipliers Explained', key: 'Multipliers Explained' },
  { label: 'Redemption Rate (c/pt)', key: 'Redemption Rate (cents/pt)' },

  // APRs & Fees
  { label: 'Intro APR', key: 'Intro APR' },
  { label: 'Purchase APR', key: 'APR Range (Purchases)' },
  { label: 'Balance Transfer APR', key: 'Balance Transfer APR' },
  { label: 'Balance Transfer Fee', key: 'Balance Transfer Fee' },
  { label: 'Cash Advance Fee', key: 'Cash Advance Fee' },
  { label: 'Late Payment Fee', key: 'Late Payment Fee' },
  { label: 'Penalty APR', key: 'Penalty APR' },

  // Travel & Other Perks
  { label: 'Lounge Access', key: 'Lounge Access' },
  { label: 'Specific Lounge', key: 'Specific Lounge Program' },
  { label: 'Airline Benefits', key: 'Airline Benefits' },
  { label: 'Hotel Benefits', key: 'Hotel Benefits' },
  { label: 'Travel Insurance', key: 'Travel Insurance' },

  // Add/remove/reorder fields as needed
];

// ... rest of the CardComparison.tsx component ...