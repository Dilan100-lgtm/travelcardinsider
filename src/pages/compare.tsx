// File: pages/compare.js
// Simplified version - selection happens entirely within CardComparison

import React from 'react'; // Removed useState, useEffect
import Head from 'next/head';
// Removed useRouter import
import Header from '@/components/Header'; // Adjust path if needed
import Footer from '@/components/Footer'; // Adjust path if needed
import CardComparison from '@/components/CardComparison'; // Adjust path if needed
import { useCreditCards } from '@/hooks/useCreditCards'; // Adjust path if needed
// Removed CreditCard interface import if it's only used in the hook

export default function ComparePage() {
  // const router = useRouter(); // No longer needed
  const { cards: allCards } = useCreditCards(); // Get all cards
  // const [cardsToCompare, setCardsToCompare] = useState<CreditCard[]>([]); // No longer needed

  /* useEffect(() => { // No longer needed - selection happens in the component
     if (router.isReady && allCards.length > 0) {
       const { cards: cardNames } = router.query;
       // ... filtering logic removed ...
     }
   }, [router.isReady, router.query, allCards]); */

  return (
    <>
      <Head>
        <title>Compare Travel Credit Cards | TravelCardInsider</title>
        <meta name="description" content="Side-by-side comparison of selected travel credit cards." />
        {/* Add other necessary Head elements */}
        <link rel="canonical" href="https://www.travelcardinsider.com/compare" />
         <meta name="robots" content="noindex" /> {/* Keep this if desired */}
          {/* Preload critical fonts */}
        <link rel="preload" href="/fonts/Roboto_Condensed-Regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Roboto_Condensed-bold.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/playfair-display-regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/playfair-display-bold.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/PlayfairDisplay-Italic.ttf" as="font" type="font/ttf" crossOrigin="anonymous" /> <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@500;600;700&display=swap"
          rel="stylesheet"
        />     
      </Head>

      <Header />

      <main className="container" style={{ padding: '2rem 1rem' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Credit Card Comparison</h1>

        {/* Show loading state */}
        {allCards.length === 0 && <p style={{ textAlign: 'center' }}>Loading card data...</p>}

        {/* Render comparison tool directly once cards are loaded */}
        {allCards.length > 0 && (
           <CardComparison
             cards={allCards} // Pass all cards for dropdowns
             // No initiallySelectedCards prop needed anymore
           />
        )}
        <div className="cardActions">
  <a href="#" className="applyButton">Apply Now</a>
  <a href="#" className="applyButton">Apply Now</a>
  <a href="#" className="applyButton">Apply Now</a>
</div>

      </main>

      <Footer />
    </>
  );
}