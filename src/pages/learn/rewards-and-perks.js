// src/pages/learn/rewards-and-perks.js
import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header'; // Use your existing Header
import Footer from '@/components/Footer'; // Use your existing Footer
import styles from '@/styles/RewardsAndPerks.module.css'; // Import CSS Module for this page

const RewardsAndPerksPage = () => {
  return (
    <>
      <Head>
        {/* Use title from provided HTML, update year if needed */}
        <title>The Ultimate Guide to Travel Credit Cards Rewards & Perks 2025 | TravelCardInsider</title>
        {/* Create a suitable description */}
        <meta
          name="description"
          content="Learn all about travel credit card rewards and perks. Understand points, miles, sign-up bonuses, lounge access, and how to choose the best card."
        />
      </Head>

      <Header /> {/* Render the shared header */}

      {/* Main Content Wrapper */}
      <main className={styles.pageContainer}>
        <article className={styles.contentArticle}>
          {/* Content extracted from the main body of the HTML */}
          <h1 className={styles.title}>The Ultimate Guide to Travel Credit Cards</h1>
          <p>
            Travel credit cards have revolutionized the way we approach vacations, business trips, and everyday spending. By offering a variety of rewards, ranging from airline miles to exclusive travel perks, these cards are a must-have tool for travelers seeking to maximize their spending. This guide provides a complete breakdown of rewards and perks to help you understand, choose, and make the most of your travel credit cards.
          </p>
          <hr className={styles.separator} />

          <h2 className={styles.sectionTitle}>What Are Travel Credit Card Rewards?</h2>
          <p>
            Travel credit card rewards allow you to earn points, miles, or cash back on everyday purchases, redeemable for travel-related expenses or other benefits. Unlike traditional credit cards, travel cards are tailored for frequent flyers, hotel lovers, and adventurers.
          </p>
          <ul className={styles.list}>
            <li><strong>Points:</strong> Flexible rewards tied to proprietary programs like Chase Ultimate Rewards or American Express Membership Rewards. You can redeem these points for travel, gift cards, or statement credits.</li>
            <li><strong>Miles:</strong> Airline-specific rewards used to book flights or upgrades. For example, 50,000 miles might cover a round-trip domestic flight.</li>
            <li><strong>Cash Back:</strong> While not exclusive to travel cards, cash back options can offset travel expenses or cover incidentals like meals and baggage fees.</li>
          </ul>
          <hr className={styles.separator} />

          <h2 className={styles.sectionTitle}>Why Choose a Travel Credit Card?</h2>
          <p>
            Travel credit cards are ideal for individuals who travel frequently or plan to do so in the future. Their benefits often far outweigh their costs when used strategically.
          </p>
          <h3 className={styles.subHeading}>Key Benefits:</h3>
          <ol className={styles.list}>
            <li>
              <strong>Reward Points or Miles:</strong>
              <ul className={styles.nestedList}>
                <li>Earn points on every purchase and bonus points in specific categories like dining, travel, or groceries.</li>
                <li>Example: The Chase Sapphire Preferred® offers 5x points on travel booked through Chase and 3x points on dining.</li>
              </ul>
            </li>
            <li>
              <strong>Sign-Up Bonuses:</strong>
              <ul className={styles.nestedList}>
                <li>Many travel cards provide lucrative bonuses when you meet a minimum spending requirement.</li>
                <li>Example: The Platinum Card® from American Express offers 80,000 Membership Rewards® points after spending $6,000 in the first six months—enough for a round-trip business-class ticket in many cases.</li>
              </ul>
            </li>
            <li>
              <strong>Exclusive Travel Perks:</strong>
              <ul className={styles.nestedList}>
                <li>Lounge access, complimentary upgrades, and discounts elevate your travel experience.</li>
                <li>Example: The Capital One Venture X Rewards Card provides unlimited access to Priority Pass lounges and Capital One Lounges.</li>
              </ul>
            </li>
            <li>
              <strong>No Foreign Transaction Fees:</strong>
              <ul className={styles.nestedList}>
                <li>Save 1–3% on every international purchase.</li>
                <li>Example: The Bank of America® Travel Rewards Credit Card has no foreign transaction fees and earns unlimited 1.5x points on every dollar spent.</li>
              </ul>
            </li>
            <li>
              <strong>Travel Protections:</strong>
              <ul className={styles.nestedList}>
                <li>Cards often include trip cancellation insurance, lost luggage reimbursement, and emergency assistance.</li>
              </ul>
            </li>
          </ol>
          <hr className={styles.separator} />

          <h2 className={styles.sectionTitle}>Key Features of Travel Credit Cards</h2>
          <p>
            To maximize your travel rewards, it's essential to understand the key features of travel credit cards.
          </p>
          <h3 className={styles.subHeading}>1. Earning Rates:</h3>
          <p>
            Travel credit cards reward users based on their spending habits. Two common earning structures include:
          </p>
          <ul className={styles.list}>
            <li>
              <strong>Category-Based Rewards:</strong>
              <ul className={styles.nestedList}>
                <li>Earn higher points on categories like travel, dining, and groceries.</li>
                <li>Example: The American Express® Gold Card offers 4x points on dining and groceries and 3x points on flights booked via Amex Travel.</li>
              </ul>
            </li>
            <li>
              <strong>Flat-Rate Rewards:</strong>
              <ul className={styles.nestedList}>
                <li>Earn the same rewards on every purchase.</li>
                <li>Example: The Capital One Venture Rewards Card offers 2x miles on all purchases.</li>
              </ul>
            </li>
          </ul>

          <h3 className={styles.subHeading}>2. Redemption Options:</h3>
          <p>
            One of the most significant advantages of travel cards is flexibility in redemption.
          </p>
          <ul className={styles.list}>
            <li>
              <strong>Travel Bookings:</strong>
              <ul className={styles.nestedList}>
                <li>Redeem points or miles directly for flights, hotels, car rentals, and cruises.</li>
                <li>Example: Use Chase Ultimate Rewards points for a $750 travel credit when booking through their portal.</li>
              </ul>
            </li>
            <li>
              <strong>Transfer to Partners:</strong>
              <ul className={styles.nestedList}>
                <li>Convert points to airline or hotel loyalty programs for maximum value.</li>
                <li>Example: Transfer Amex Membership Rewards points to Delta SkyMiles or Hilton Honors at a 1:1 ratio.</li>
              </ul>
            </li>
            <li>
              <strong>Statement Credits:</strong>
              <ul className={styles.nestedList}>
                <li>Offset travel expenses, including baggage fees and in-flight purchases.</li>
              </ul>
            </li>
            <li>
              <strong>Gift Cards or Merchandise:</strong>
              <ul className={styles.nestedList}>
                <li>While an option, this often yields a lower redemption value compared to travel rewards.</li>
              </ul>
            </li>
          </ul>

          <h3 className={styles.subHeading}>3. Sign-Up Bonuses:</h3>
          <p>
            Sign-up bonuses can provide a significant boost to your rewards balance.
          </p>
          <ul className={styles.list}>
            <li>Example: The Chase Sapphire Preferred® offers 60,000 bonus points after spending $4,000 in the first three months, equivalent to $750 in travel rewards.</li>
          </ul>
          <p className={styles.tip}><strong>Pro Tip:</strong> Plan large purchases during the initial months to hit the spending requirement quickly.</p>

          <h3 className={styles.subHeading}>4. Annual Fees:</h3>
          <p>
            Premium travel cards come with annual fees ranging from $95 to over $695. However, the benefits often justify the cost.
          </p>
          <ul className={styles.list}>
            <li>Example: The Platinum Card® from American Express charges a $695 annual fee but includes perks like $200 in airline fee credits and complimentary lounge access.</li>
          </ul>

          <h3 className={styles.subHeading}>5. Foreign Transaction Fees:</h3>
          <p>
            Many travel credit cards waive foreign transaction fees, making them perfect for international travelers.
          </p>
          <ul className={styles.list}>
            <li>Example: The Capital One Venture Rewards Card has no foreign transaction fees, saving you 1–3% on every purchase abroad.</li>
          </ul>

          <h3 className={styles.subHeading}>6. Travel Protections:</h3>
          <p>Look for cards that offer:</p>
          <ul className={styles.list}>
            <li>Trip Cancellation/Interruption Insurance: Covers prepaid expenses like flights and hotels if your trip is canceled for covered reasons.</li>
            <li>Rental Car Insurance: Offers collision coverage on rental cars.</li>
            <li>Lost Luggage Reimbursement: Covers the cost of lost or delayed baggage.</li>
          </ul>
          <hr className={styles.separator} />

          <h2 className={styles.sectionTitle}>Exclusive Travel Perks</h2>
          <p>
            Travel credit cards come packed with perks that make every journey more comfortable.
          </p>
          <ol className={styles.list}>
            <li>
              <strong>Lounge Access:</strong>
              <ul className={styles.nestedList}>
                <li>Escape the crowds with complimentary airport lounge access.</li>
                <li>Example: The Platinum Card® from Amex offers access to Centurion Lounges, Delta Sky Clubs®, and Priority Pass lounges.</li>
              </ul>
            </li>
            <li>
              <strong>Global Entry/TSA PreCheck Credits:</strong>
              <ul className={styles.nestedList}>
                <li>Skip long security lines with up to $100 reimbursement for Global Entry or TSA PreCheck application fees.</li>
              </ul>
            </li>
            <li>
              <strong>Free Checked Bags:</strong>
              <ul className={styles.nestedList}>
                <li>Airline cards often provide complimentary checked bags for you and your travel companions.</li>
                <li>Example: The Delta SkyMiles® Gold American Express Card offers the first checked bag free for up to nine companions.</li>
              </ul>
            </li>
            <li>
              <strong>Priority Boarding:</strong>
              <ul className={styles.nestedList}>
                <li>Secure overhead bin space with early boarding privileges.</li>
              </ul>
            </li>
            <li>
              <strong>In-Flight Discounts:</strong>
              <ul className={styles.nestedList}>
                <li>Save on food, beverages, and Wi-Fi when using your travel credit card.</li>
              </ul>
            </li>
          </ol>
          <hr className={styles.separator} />

          <h2 className={styles.sectionTitle}>How to Choose the Best Travel Credit Card</h2>
          <p>Here’s how to determine the best card for your needs:</p>
          <ol className={styles.list}>
            <li>
              <strong>Travel Goals:</strong>
              <ul className={styles.nestedList}>
                <li>Earn free flights? → Choose an airline card.</li>
                <li>Stay at luxury hotels? → Opt for a hotel-branded card.</li>
                <li>Gain flexibility? → Select a general travel card like the Chase Sapphire Reserve®.</li>
              </ul>
            </li>
            <li>
              <strong>Spending Habits:</strong>
              <ul className={styles.nestedList}>
                <li>Analyze your spending categories. Cards like the Amex Gold Card are great for foodies (4x points on dining and groceries).</li>
              </ul>
            </li>
            <li>
              <strong>Loyalty Preferences:</strong>
              <ul className={styles.nestedList}>
                <li>If you frequently fly with a specific airline or stay at certain hotel chains, choose a co-branded card to maximize rewards.</li>
              </ul>
            </li>
            <li>
              <strong>Budget:</strong>
              <ul className={styles.nestedList}>
                <li>If you’re fee-averse, consider no-annual-fee options like the Discover it® Miles.</li>
              </ul>
            </li>
          </ol>
          <hr className={styles.separator} />

          <h2 className={styles.sectionTitle}>Maximizing Travel Credit Card Rewards</h2>
          <ol className={styles.list}>
            <li>
              <strong>Use Your Card for Everyday Purchases:</strong>
              <ul className={styles.nestedList}>
                <li>Pay for groceries, dining, and travel expenses with your card to earn maximum points.</li>
              </ul>
            </li>
            <li>
              <strong>Combine Rewards Programs:</strong>
              <ul className={styles.nestedList}>
                <li>Use multiple cards to earn rewards in different categories. Pair the Chase Freedom Flex® (5x rotating categories) with the Chase Sapphire Preferred® for travel redemptions.</li>
              </ul>
            </li>
            <li>
              <strong>Redeem Points Strategically:</strong>
              <ul className={styles.nestedList}>
                <li>Transfer points to travel partners for premium cabin flights or luxury hotel stays.</li>
              </ul>
            </li>
          </ol>
          <hr className={styles.separator} />

          <h2 className={styles.sectionTitle}>Common Mistakes to Avoid</h2>
          <ol className={styles.list}>
            <li>
              <strong>Carrying a Balance:</strong>
              <ul className={styles.nestedList}>
                <li>Pay your balance in full to avoid high-interest charges that negate rewards.</li>
              </ul>
            </li>
            <li>
              <strong>Missing the Welcome Bonus:</strong>
              <ul className={styles.nestedList}>
                <li>Plan large purchases to meet spending requirements.</li>
              </ul>
            </li>
            <li>
              <strong>Redeeming Points for Low Value:</strong>
              <ul className={styles.nestedList}>
                <li>Avoid redeeming points for gift cards or merchandise.</li>
              </ul>
            </li>
          </ol>
          <hr className={styles.separator} />

          <h2 className={styles.sectionTitle}>Popular Travel Credit Cards in 2025</h2>
          <p>Here’s a quick comparison of some top travel credit cards:</p>
          {/* Table */}
          <div className={styles.tableWrapper}>
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>Card Name</th>
                  <th>Rewards Rate</th>
                  <th>Key Perks</th>
                  <th>Annual Fee</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Chase Sapphire Reserve®</td>
                  <td>3x Travel & Dining</td>
                  <td>Lounge access, $300 travel credit</td>
                  <td>$550</td>
                </tr>
                <tr>
                  <td>The Platinum Card® from Amex</td>
                  <td>5x Flights & Hotels</td>
                  <td>Centurion lounges, $200 airline credit</td>
                  <td>$695</td>
                </tr>
                <tr>
                  <td>Capital One Venture Rewards</td>
                  <td>2x All Purchases</td>
                  <td>No foreign transaction fees</td>
                  <td>$95</td>
                </tr>
                {/* Add more rows if needed */}
              </tbody>
            </table>
          </div>
          <hr className={styles.separator} />

          <h2 className={styles.sectionTitle}>Final Thoughts</h2>
          <p>
            Travel credit cards are invaluable tools for earning rewards and enhancing your travel experience. By understanding their features, maximizing their perks, and choosing the right card, you can save money, enjoy premium experiences, and make every trip memorable.
          </p>

        </article>
      </main>

       {/* Render the shared footer */}
    </>
  );
};

export default RewardsAndPerksPage;