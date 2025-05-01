// File: src/hooks/useCreditCards.ts
import { useEffect, useState } from 'react';
// Rename the default import to avoid naming conflict
import creditCardDataJson from '@/data/creditCards.json';

// Interface for a single credit card (ensure it matches your JSON objects)
export interface CreditCard {
  "Card Name": string; // This is required
  "Issuer": string;
  image?: string;
  ratingValue?: number;
  reviewLink?: string;
  ratesandfees?: string;
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
  applyLink?: string;
}

// Interface describing the structure of the entire creditCards.json file
interface CreditCardDataFile {
  cards: CreditCard[];
}

// Explicitly type the imported data using the interface
const creditCardData: CreditCardDataFile = {
  cards: (creditCardDataJson.cards || []).map((card) => ({
    ...card,
    "Card Name": card["Card Name"] || "",
    "Issuer": card["Issuer"] || "",
    "Card Type": card["Card Type"] || "",
    "Annual Fee": card["Annual Fee"] || "",
    "APR Range (Purchases)": card["APR Range (Purchases)"] || "",
    "Balance Transfer APR": card["Balance Transfer APR"] || "",
    "Penalty APR": card["Penalty APR"] || "",
    "Lounge Access": card["Lounge Access"] || "",
    "Specific Lounge Program": card["Specific Lounge Program"] || "",
    "Travel Insurance": card["Travel Insurance"] || "",
    "Foreign Transaction Fee": card["Foreign Transaction Fee"] || "",
    "Late Payment Fee": card["Late Payment Fee"] || "",
    "Balance Transfer Fee": card["Balance Transfer Fee"] || "",
    "Cash Advance Fee": card["Cash Advance Fee"] || "",
    "Intro APR": card["Intro APR"] || null,
    "Credit Score Requirement": card["Credit Score Requirement"] || "",
    "Airline Benefits": card["Airline Benefits"] || null,
    "Hotel Benefits": card["Hotel Benefits"] || null,
    "Base Earning Rate (pts/$)": card["Base Earning Rate (pts/$)"] || null,
    "Bonus Categories": card["Bonus Categories"] || null,
    "Bonus Category Rates": card["Bonus Category Rates"] || null,
    "Sign-Up Bonus": card["Sign-Up Bonus"] || null,
    "Minimum Spend for Bonus": card["Minimum Spend for Bonus"] || null,
    "Bonus Redemption Value ($)": card["Bonus Redemption Value ($)"] || null,
    "Reward Program": card["Reward Program"] || null,
    "Redemption Rate (cents/pt)": card["Redemption Rate (cents/pt)"] || null,
    "Multipliers Explained": card["Multipliers Explained"] || null,
    image: card.image || undefined,
    ratingValue: card.ratingValue || undefined,
    reviewLink: card.reviewLink || undefined,
    ratesandfees: card.ratesandfees || undefined,
    applyLink: card.applyLink || undefined,
  })),
};

export function useCreditCards(): { cards: CreditCard[] } {
  const [cards, setCards] = useState<CreditCard[]>([]);

  useEffect(() => {
    // Now TypeScript knows creditCardData has a 'cards' property of type CreditCard[]
    setCards(creditCardData.cards || []);
  }, []);

  return { cards };
}