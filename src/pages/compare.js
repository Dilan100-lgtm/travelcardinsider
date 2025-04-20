// File: pages/compare.js

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from '@/components/Header'; // Adjust path if needed
import Footer from '@/components/Footer'; // Adjust path if needed
import CardComparison from '@/components/CardComparison'; // Adjust path if needed
import { useCreditCards } from '@/hooks/useCreditCards'; // Adjust path if needed
import { CreditCard } from '@/hooks/useCreditCards'; // Import the interface

export default function ComparePage() {
  const router = useRouter();
  const { cards: allCards } = useCreditCards(); // Get all cards
  const [cardsToCompare, setCardsToCompare] = useState<CreditCard[]>([]);

  useEffect(() => {
    // Check if router is ready and query params are available
    if (router.isReady && allCards.length > 0) {
      const { cards: cardNames } = router.query; // Get card names from URL query ?cards=Name1&cards=Name2...

      if (cardNames && Array.isArray(cardNames)) {
        // Filter allCards to get the full objects for the selected card names
        const selected = allCards.filter(card => cardNames.includes(card['Card Name']));
        setCardsToCompare(selected);
      } else if (cardNames && typeof cardNames === 'string') {
         // Handle case where only one card name is passed
         const selected = allCards.filter(card => cardNames === card['Card Name']);
         setCardsToCompare(selected);
      }
    }
  }, [router.isReady, router.query, allCards]); // Dependencies for useEffect

  return (
    <>
      <Head>
        <title>Compare Travel Credit Cards | TravelCardInsider</title>
        <meta name="description" content="Side-by-side comparison of selected travel credit cards." />
        {/* Add other necessary Head elements */}
        <link rel="canonical" href="https://www.travelcardinsider.com/compare" />
         <meta name="robots" content="noindex" /> {/* Consider noindexing comparison results pages if they are thin content */}
      </Head>

      <Header />

      <main className="container" style={{ padding: '2rem 1rem' }}> {/* Add some padding */}
        <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Credit Card Comparison</h1>

        {allCards.length === 0 && <p>Loading card data...</p>}

        {allCards.length > 0 && cardsToCompare.length > 0 && (
           // Pass ALL cards for the dropdowns, but ALSO the pre-selected ones
           <CardComparison
             cards={allCards}
             initiallySelectedCards={cardsToCompare} // Pass the cards selected on the previous page
           />
        )}

        {allCards.length > 0 && cardsToCompare.length === 0 && router.isReady && (
             <p style={{textAlign: 'center'}}>No cards selected for comparison. Please go back and select cards.</p>
            // Optionally, provide a link back or render the full comparison tool allowing selection here.
            // Example: Render the tool allowing selection on this page too
            // <CardComparison cards={allCards} />
        )}

      </main>

      <Footer />
    </>
  );
}