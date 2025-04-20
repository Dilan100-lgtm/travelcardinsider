import { useState, useEffect } from 'react';
import creditCardData from '@/data/creditCards.json'; // Adjust path if needed

export interface CreditCard {
  "Card Name": string;
  "Issuer": string;
  "Card Type": string;
  "Annual Fee": string;
  "APR Range (Purchases)": string;
  "Balance Transfer APR": string;
  "Penalty APR": string;
  "Lounge Access": string;
  "Specific Lounge Program": string;
  "Travel Insurance": string;
  "Foreign Transaction Fee": string;
  "Late Payment Fee": string;
  "Balance Transfer Fee": string;
  "Cash Advance Fee": string;
  "Intro APR": string | null;
  "Credit Score Requirement": string;
  "Airline Benefits": string | null;
  "Hotel Benefits": string | null;
  "Base Earning Rate (pts/$)": string | null;
  "Bonus Categories": string | null;
  "Bonus Category Rates": string | null;
  "Sign-Up Bonus": string | null;
  "Minimum Spend for Bonus": string | null;
  "Bonus Redemption Value ($)": string | null;
  "Reward Program": string | null;
  "Redemption Rate (cents/pt)": string | null;
  "Multipliers Explained": string | null;
}

export function useCreditCards(): CreditCard[] {
  const [cards, setCards] = useState<CreditCard[]>([]);

  useEffect(() => {
    setCards(creditCardData.cards);
  }, []);

  return cards;
}
