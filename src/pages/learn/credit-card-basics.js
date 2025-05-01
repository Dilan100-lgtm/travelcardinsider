// src/pages/learn/credit-card-basics.js
import React from 'react';
import Head from 'next/head';
import Image from 'next/image'; // Import Next.js Image component
import Header from '@/components/Header'; // Use your existing Header
import Footer from '@/components/Footer'; // Use your existing Footer
import styles from '@/styles/CreditCardBasics.module.css'; // Import CSS Module for this page

const CreditCardBasicsPage = () => {
  return (
    <>
      <Head>
        {/* Create a title based on the content */}
        <title>Travel Credit Card Basics Guide 2025 | TravelCardInsider</title>
        {/* Create a suitable description */}
        <meta
          name="description"
          content="Understand the basics of travel credit cards, including rewards programs, key features like sign-up bonuses and annual fees, exclusive perks, and how to choose the right card."
        />
      </Head>

      <Header /> {/* Render the shared header */}

      {/* Main Content Wrapper */}
      <main className={styles.pageContainer}>
        <article className={styles.contentArticle}>
          {/* Hero Image */}
          <div className={styles.hero}>
             {/* Use Next.js Image component for optimization */}
             {/* Ensure the image path is correct relative to the 'public' directory */}
            <Image
              className={styles.heroImage} // Apply specific styles if needed
              src="/AdobeStock_964630446.jpeg" // Assuming this path is correct in /public
              alt="Abstract background representing travel and finance" // Descriptive alt text
              width={1200} // Provide width
              height={400} // Provide height
              layout="responsive" // Makes image scale with container
              priority // Load image faster if it's above the fold
            />
          </div>

          {/* Content extracted from the main body of the HTML */}
          {/* Note: Original H1s are converted to H2s for better semantics */}
          <h2 className={styles.sectionTitle}>1. What is a Travel Credit Card?</h2>
          <p>
            A travel credit card is a type of credit card specifically designed to reward users with travel-related perks. These perks can include airline miles, hotel points, travel insurance, lounge access, and discounts on travel bookings.
          </p>
          <p><strong>Key Purpose:</strong> To help frequent travelers earn rewards and enjoy exclusive travel benefits.</p>
          <p><strong>Popular Types:</strong></p>
          <ul className={styles.list}>
            <li><strong>Airline Credit Cards:</strong> Earn miles with specific airlines.</li>
            <li><strong>Hotel Credit Cards:</strong> Earn points for free or discounted hotel stays.</li>
            <li><strong>General Travel Cards:</strong> Flexible points redeemable for a variety of travel expenses.</li>
          </ul>

          <h2 className={styles.sectionTitle}>2. Why Choose a Travel Credit Card?</h2>
          <p>
            Travel credit cards offer substantial value for people who travel frequently, providing benefits that can offset the annual fee.
          </p>
          <p><strong>Key Benefits:</strong></p>
          <ul className={styles.list}>
            <li>
              <strong>Reward Points or Miles:</strong> Earn points on purchases to redeem for flights, hotels, or car rentals.
            </li>
            <li>
              <strong>Sign-Up Bonuses:</strong> Many cards offer large bonuses when you meet a minimum spending requirement within the first few months.
            </li>
            <li>
              <strong>Travel Perks:</strong>
              <ul className={styles.nestedList}>
                <li>Free checked bags.</li>
                <li>Priority boarding.</li>
                <li>Airport lounge access.</li>
                <li>Global Entry or TSA PreCheck credits.</li>
              </ul>
            </li>
            <li><strong>No Foreign Transaction Fees:</strong> Save money when spending internationally.</li>
            <li><strong>Travel Insurance:</strong> Coverage for trip cancellations, lost luggage, and travel emergencies.</li>
          </ul>

          <h2 className={styles.sectionTitle}>3. Key Features of Travel Credit Cards</h2>
          <p>
            To choose the right travel credit card, understand its core features and how they align with your travel needs.
          </p>
          {/* Note: Original H2s are converted to H3s */}
          <h3 className={styles.subHeading}>a. Rewards Program</h3>
          <p>Cards either offer:</p>
          <ul className={styles.list}>
            <li><strong>Fixed Rewards:</strong> Points or miles on specific spending categories like dining, travel, or groceries.</li>
            <li><strong>Flat-Rate Rewards:</strong> A set rate (e.g., 1.5x points on all purchases).</li>
          </ul>
          <p><em>Example:</em> Earn 3x points on travel and dining with the Chase Sapphire Reserve®.</p>

          <h3 className={styles.subHeading}>b. Redemption Options</h3>
          <p>Redeem points or miles for:</p>
          <ul className={styles.list}>
            <li>Flights.</li>
            <li>Hotel stays.</li>
            <li>Travel expenses like rental cars or cruises.</li>
            <li>Statement credits or cashback (less common).</li>
          </ul>
          <p className={styles.tip}><strong>Tip:</strong> Cards offering transferable points (e.g., Amex Membership Rewards) provide the most flexibility.</p>

          <h3 className={styles.subHeading}>c. Sign-Up Bonus</h3>
          <p>One of the most lucrative features of travel credit cards.</p>
          <p><em>Example:</em> Earn 60,000 bonus points after spending $4,000 in the first 3 months.</p>

          <h3 className={styles.subHeading}>d. Annual Fees</h3>
          <p>Cards with higher fees typically offer premium perks like lounge access or larger rewards.</p>
          <p className={styles.tip}><strong>Tip:</strong> Calculate if the rewards and perks outweigh the fee.</p>

          <h3 className={styles.subHeading}>e. Foreign Transaction Fees</h3>
          <p>Many travel cards waive foreign transaction fees, saving you 1%-3% on every international purchase.</p>

          <h3 className={styles.subHeading}>f. Travel Protections</h3>
          <p>Look for:</p>
          <ul className={styles.list}>
            <li>Trip cancellation/interruption insurance.</li>
            <li>Lost or delayed baggage reimbursement.</li>
            <li>Emergency medical and travel assistance.</li>
            <li>Rental car collision insurance.</li>
          </ul>

          <h2 className={styles.sectionTitle}>4. How to Choose the Best Travel Credit Card</h2>
          <p>Here are factors to consider before selecting a travel credit card:</p>
          <h3 className={styles.subHeading}>a. Travel Goals</h3>
          <p>Are you looking to:</p>
          <ul className={styles.list}>
            <li>Earn free flights? → Choose an airline card.</li>
            <li>Stay at luxury hotels? → Choose a hotel card.</li>
            <li>Gain flexibility? → Opt for a general travel card with transferable points.</li>
          </ul>

          <h3 className={styles.subHeading}>b. Spending Habits</h3>
          <p>Analyze where you spend most:</p>
          <ul className={styles.list}>
            <li>Dining and travel? → Look for cards with bonus categories like 3x or 5x points.</li>
            <li>Everyday purchases? → Choose a card with a flat-rate earning system.</li>
          </ul>

          <h3 className={styles.subHeading}>c. Loyalty</h3>
          <p>If you’re loyal to a specific airline or hotel chain, choose co-branded cards to maximize rewards.</p>

          <h3 className={styles.subHeading}>d. Budget</h3>
          <p>Select a card with an annual fee that fits your budget. Some cards with no annual fees still offer decent rewards, though premium cards come with extra perks.</p>

          <h2 className={styles.sectionTitle}>5. Maximizing Your Travel Credit Card</h2>
          <p>To get the most value, follow these tips:</p>
          <h3 className={styles.subHeading}>a. Earn Maximum Points</h3>
          <ul className={styles.list}>
            <li>Use your card for all purchases in bonus categories (e.g., dining, travel).</li>
            <li>Meet the spending requirement to unlock the welcome bonus.</li>
          </ul>

          <h3 className={styles.subHeading}>b. Redeem Points for Maximum Value</h3>
          <ul className={styles.list}>
            <li>Use points for travel rather than cashback for better value.</li>
            <li>Look for sweet spots like transferring points to partner airlines or booking business-class flights.</li>
          </ul>

          <h3 className={styles.subHeading}>c. Pair Multiple Cards</h3>
          <p>Use a combination of cards to earn points across categories:</p>
          <ul className={styles.list}>
            <li>One card for travel and dining.</li>
            <li>Another for groceries or everyday purchases.</li>
          </ul>

          <h3 className={styles.subHeading}>d. Take Advantage of Perks</h3>
          <p>Use lounge access, travel credits, and Global Entry/TSA PreCheck reimbursements.</p>

          <h2 className={styles.sectionTitle}>6. Common Travel Credit Card Mistakes</h2>
          <p>Avoid these mistakes to ensure you're making the most of your travel credit card:</p>
          <ul className={styles.list}>
            <li>Not Paying Off Balances: Interest charges will negate the rewards value.</li>
            <li>Missing the Welcome Bonus: Plan large purchases during the bonus period.</li>
            <li>Ignoring Annual Fees: Only pay fees if the perks justify the cost.</li>
            <li>Redeeming Points for Poor Value: Avoid using points for low-value rewards like gift cards or merchandise.</li>
          </ul>

          <h2 className={styles.sectionTitle}>7. Travel Credit Card Glossary</h2>
          <ul className={styles.list}>
            <li><strong>Annual Fee:</strong> The yearly cost to own the card.</li>
            <li><strong>APR (Annual Percentage Rate):</strong> The interest rate charged on balances carried over.</li>
            <li><strong>Foreign Transaction Fee:</strong> A fee charged for purchases made outside your home country.</li>
            <li><strong>Lounge Access:</strong> Access to airport lounges for relaxation, food, and drinks.</li>
            <li><strong>Transferable Points:</strong> Points that can be transferred to travel partners for greater redemption options.</li>
          </ul>

          <h2 className={styles.sectionTitle}>8. Examples of Popular Travel Credit Cards</h2>
          <h3 className={styles.subHeading}>Premium Travel Cards:</h3>
          <ul className={styles.list}>
            <li><strong>Chase Sapphire Reserve®:</strong> Best for luxury travelers with high rewards on dining and travel.</li>
            <li><strong>The Platinum Card® from American Express:</strong> Perfect for frequent flyers with top-tier perks.</li>
          </ul>

          <h3 className={styles.subHeading}>No Annual Fee Cards:</h3>
          <ul className={styles.list}>
            <li><strong>Bank of America® Travel Rewards Credit Card:</strong> Ideal for budget-conscious travelers.</li>
            <li><strong>Discover it® Miles:</strong> Unlimited 1.5x miles with no annual fee.</li>
          </ul>

          <h3 className={styles.subHeading}>Airline Cards:</h3>
          <ul className={styles.list}>
            <li><strong>Delta SkyMiles® Gold American Express Card:</strong> Excellent for Delta frequent flyers.</li>
            <li><strong>United Explorer Card:</strong> Great for United Airlines travelers.</li>
          </ul>

          <h3 className={styles.subHeading}>Hotel Cards:</h3>
          <ul className={styles.list}>
            <li><strong>Hilton Honors American Express Aspire Card:</strong> Fantastic perks for Hilton hotel stays.</li>
            <li><strong>World of Hyatt Credit Card:</strong> Valuable for Hyatt enthusiasts.</li>
          </ul>

        </article>
      </main>

      <Footer /> {/* Render the shared footer */}
    </>
  );
};

export default CreditCardBasicsPage;