// File: pages/index.js

import React, { useState } from 'react';
import Head from "next/head";
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router'; // Import useRouter
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useCreditCards } from '@/hooks/useCreditCards';
// Removed CardComparison import from here

export default function HomePage() {
  const { cards } = useCreditCards(); // Still needed for card selection UI (if any)
  const [selectedCardsForComparison, setSelectedCardsForComparison] = useState([]); // State for cards chosen TO compare
  const router = useRouter(); // Initialize router

  // --- Selection Logic (Example: Simplified - Adapt as needed) ---
  // Keep a way for users to select cards ON the homepage.
  // This could be checkboxes next to featured cards, a modal selector, etc.
  // For this example, let's assume you update `selectedCardsForComparison` somehow.
  // This function now prepares the data for navigation.

  const handlePrepareComparison = () => {
    if (selectedCardsForComparison.length < 2) {
      alert("Please select at least two cards to compare.");
      return;
    }
    if (selectedCardsForComparison.length > 3) {
        alert("You can only compare up to three cards.");
        return;
    }

    // Get the names (or other unique IDs) of the selected cards
    const cardNamesToCompare = selectedCardsForComparison.map(card => card['Card Name']);

    // Navigate to the compare page, passing card names as query parameters
    router.push({
      pathname: '/compare',
      query: { cards: cardNamesToCompare }, // Pass names as an array
    });
  };

  // --- TEMP: Example selection function (replace with your actual UI interaction) ---
  const handleTempSelectToggle = (card) => {
    const cardName = card['Card Name'];
    if (selectedCardsForComparison.some(c => c['Card Name'] === cardName)) {
      setSelectedCardsForComparison(prev => prev.filter(c => c['Card Name'] !== cardName));
    } else if (selectedCardsForComparison.length < 3) {
      setSelectedCardsForComparison(prev => [...prev, card]);
    } else {
       alert("You can select a maximum of 3 cards for comparison.");
    }
  };
  // --- End Example ---


  return (
    <>
      <Head>
        {/* Keep all your Head content */}
        <title>TravelCardInsider - Best Travel Credit Cards 2025</title>
        {/* ... other head elements */}
      </Head>

      <Header />

      <main>
        {/* Keep Hero sections */}
        {/* ... */}

        {/* Featured Cards Section - MODIFY to add selection capability */}
        <section id="featured-cards" aria-labelledby="featured-cards-heading">
          <h2 id="featured-cards-heading" className="H2_featured-cards">Top Travel Credit Cards</h2>
          <div className="card-grid">
            {/* Example: Adding checkboxes to featured cards */}
            {cards.slice(0, 3).map(card => { // Display first 3 cards as an example
               const isSelected = selectedCardsForComparison.some(c => c['Card Name'] === card['Card Name']);
               return (
                   <div className="featured-card" key={card['Card Name']}>
                       {/* Keep Image and Description */}
                       <Image /* ...props... */ src={card['image'] || "/placeholder-card.png"} alt={card['Card Name']} width={400} height={250} />
                       <div className="featured-card__description">
                           <h3>{card['Card Name']}</h3>
                           <p>{card['Sign-Up Bonus']?.substring(0, 100) || 'Details inside.'}...</p>
                           {/* Links */}
                           <Link href={`/reviews/${card['Card Name'].toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="cta-button">Learn More</Link>
                           <a href={`#`} /* Add Apply link */ className="Apply-button" target="_blank" rel="noopener sponsored">Apply Now</a>

                           {/* --- Example Checkbox --- */}
                           <div style={{ marginTop: '10px' }}>
                             <input
                               type="checkbox"
                               id={`compare-select-${card['Card Name']}`}
                               checked={isSelected}
                               onChange={() => handleTempSelectToggle(card)}
                               disabled={!isSelected && selectedCardsForComparison.length >= 3}
                             />
                             <label htmlFor={`compare-select-${card['Card Name']}`}> Compare ({selectedCardsForComparison.length}/3)</label>
                           </div>
                           {/* --- End Example Checkbox --- */}
                       </div>
                   </div>
               )
            })}
          </div>
          {/* Add a button to trigger comparison navigation */}
           <div style={{ textAlign: 'center', margin: '2rem 0' }}>
             <button
               onClick={handlePrepareComparison}
               className="cta-button submit" // Use your existing button styles
               disabled={selectedCardsForComparison.length < 2}
             >
               Compare Selected Cards ({selectedCardsForComparison.length})
             </button>
           </div>
        </section>

        {/* REMOVED the comparison section that previously held the component */}
        {/* <section id="compare" ... > ... </section> */}

        {/* Keep Reviews Section */}
        <section className="reviews-container" aria-labelledby="reviews-heading">
            {/* ... your reviews mapping logic ... */}
        </section>

      </main>

      <Footer />
    </>
  );
}