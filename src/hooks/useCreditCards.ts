import { useState, useEffect } from 'react';
import creditCardData from '@/data/creditCards.json'; // Make sure this path is correct

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

interface UseCreditCardsResult {
  cards: CreditCard[];
}

export function useCreditCards(): UseCreditCardsResult {
  const [cards, setCards] = useState<CreditCard[]>([]);

  useEffect(() => {
    if (creditCardData && Array.isArray(creditCardData.cards)) {
      setCards(creditCardData.cards);
    } else {
      console.warn("Card data is not an array or missing 'cards' key.");
    }
  }, []);

  return { cards };
}
