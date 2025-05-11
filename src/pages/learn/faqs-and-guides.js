// src/pages/learn/faqs-and-guides.js
import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header'; // Use your existing Header
import Footer from '@/components/Footer'; // Use your existing Footer
import styles from '@/styles/FaqsAndGuides.module.css'; // Import CSS Module for this page

const FaqsAndGuidesPage = () => {
  // Helper function to safely render potentially nested lists (handles strong tags)
  // This helps preserve exact content including inline formatting like <strong>
  const renderListItem = (content) => {
    // Basic check, adjust if more complex inline elements are needed
    if (typeof content === 'string' && content.includes('<strong>')) {
      const parts = content.split(/<strong>(.*?)<\/strong>/g); // Split by strong tags
      return parts.map((part, index) =>
        index % 2 === 1 ? <strong key={index}>{part}</strong> : part
      );
    }
    return content;
  };


  return (
    <>
      <Head>
        {/* Use title from provided HTML */}
        <title>FAQs and Guides: Comprehensive Answers to Travel Credit Card Questions | TravelCardInsider</title>
        {/* Derive description or use one from HTML if available */}
        <meta
          name="description"
          content="Comprehensive FAQs and guides answering common questions about travel credit cards, points, miles, benefits, and how to choose the right card."
        />
      </Head>

       {/* Render the shared header */}

      {/* Main Content Wrapper */}
      <main className={styles.pageContainer}>
        <article className={styles.contentArticle}>
          {/* Content extracted from the main body of the HTML */}
          <h1 className={styles.title}>FAQs and Guides: Comprehensive Answers to Travel Credit Card Questions</h1>
          <p>
            If you’re exploring the world of travel credit cards, you’ve likely encountered a flood of options, terms, and benefits. Understanding travel credit cards can seem complex, but with the right guidance, you can unlock their full potential. This FAQ and guide section is your one-stop resource for answering common questions and addressing challenges about travel credit cards.
          </p>

          <h2 className={styles.sectionTitle}>What is a Travel Credit Card?</h2>
          <p>
            A travel credit card is a type of credit card specifically designed for earning rewards and enjoying perks related to travel expenses. These cards help users accumulate points, miles, or cashback on purchases, which can be redeemed for flights, hotels, car rentals, and other travel-related expenses.
          </p>

          <h3 className={styles.subHeading}>Popular Types:</h3>
          <ul className={styles.list}>
            <li>Airline Credit Cards: Earn miles for a specific airline.</li>
            <li>Hotel Credit Cards: Accumulate points for stays at hotel chains.</li>
            <li>General Travel Credit Cards: Flexible rewards redeemable for a variety of travel expenses.</li>
          </ul>

          <h3 className={styles.subHeading}>Key Benefits:</h3>
          <ul className={styles.list}>
            <li>Free or discounted travel.</li>
            <li>Complimentary lounge access.</li>
            <li>Travel insurance and protections.</li>
          </ul>

          <h2 className={styles.sectionTitle}>Why Should I Get a Travel Credit Card?</h2>
          <p>
            Travel credit cards are ideal for frequent travelers or those planning significant travel in the near future. Here’s why you should consider one:
          </p>

          <h3 className={styles.subHeading}>Maximize Spending Rewards:</h3>
          <ul className={styles.list}>
            <li>Earn points or miles on daily expenses, such as dining and groceries.</li>
            <li>Example: The American Express® Gold Card offers 4x points on dining.</li>
          </ul>

          <h3 className={styles.subHeading}>Unlock Exclusive Travel Perks:</h3>
          <ul className={styles.list}>
            <li>Lounge access, Global Entry/TSA PreCheck credits, and free checked bags.</li>
            <li>Example: The Platinum Card® from Amex provides access to over 1,400 lounges worldwide.</li>
          </ul>

          <h3 className={styles.subHeading}>Save Money on Foreign Transactions:</h3>
          <ul className={styles.list}>
            <li>Many travel cards waive foreign transaction fees, saving 1%-3% on international purchases.</li>
          </ul>

          <h3 className={styles.subHeading}>Enjoy Travel Protections:</h3>
          <ul className={styles.list}>
            <li>Coverage for trip cancellations, lost baggage, and emergency medical situations.</li>
          </ul>

          <h2 className={styles.sectionTitle}>How Do Travel Credit Card Points and Miles Work?</h2>
          <p>
            Travel credit cards allow users to earn rewards in the form of points or miles, which can then be redeemed for travel expenses.
          </p>

          <h3 className={styles.subHeading}>Key Differences:</h3>
          <h4 className={styles.minorHeading}>Points:</h4>
          <ul className={styles.list}>
            <li>Flexible rewards that can often be transferred to multiple travel partners.</li>
            <li>Example: Chase Ultimate Rewards points can be transferred to United, Hyatt, and other partners.</li>
          </ul>

          <h4 className={styles.minorHeading}>Miles:</h4>
          <ul className={styles.list}>
            <li>Airline-specific rewards that can be used for flights, seat upgrades, and more.</li>
            <li>Example: Delta SkyMiles® are redeemable for flights on Delta and its partners.</li>
          </ul>

          <h2 className={styles.sectionTitle}>What’s the Difference Between Co-Branded and General Travel Cards?</h2>
          <h3 className={styles.subHeading}>Co-Branded Travel Cards:</h3>
          <ul className={styles.list}>
            <li>Tied to specific airlines or hotels.</li>
            <li>Offer brand-specific perks like elite status and free stays.</li>
            <li>Example: Marriott Bonvoy Brilliant® American Express® Card.</li>
          </ul>

          <h3 className={styles.subHeading}>General Travel Cards:</h3>
          <ul className={styles.list}>
            <li>Offer flexible rewards redeemable across multiple travel partners.</li>
            <li>Example: Capital One Venture Rewards Credit Card.</li>
          </ul>

          <h2 className={styles.sectionTitle}>How Do I Redeem Travel Credit Card Rewards?</h2>
          <p>
            Redeeming rewards depends on the card issuer and its travel partners.
          </p>

          <h3 className={styles.subHeading}>Through Issuer Portals:</h3>
          <ul className={styles.list}>
            <li>Use points for flights, hotels, and more via portals like Chase Ultimate Rewards or Amex Travel.</li>
          </ul>

          <h3 className={styles.subHeading}>Transfer to Partners:</h3>
          <ul className={styles.list}>
            <li>Convert points to miles or hotel loyalty points for greater value.</li>
            <li>Example: Transfer Amex Membership Rewards to Delta SkyMiles at a 1:1 ratio.</li>
          </ul>

          <h3 className={styles.subHeading}>Statement Credits:</h3>
          <ul className={styles.list}>
            <li>Redeem points to offset travel purchases directly on your statement.</li>
          </ul>

          <p className={styles.tip}><strong>Pro Tip:</strong> Transferring points to partners often provides the highest redemption value.</p>

          <h2 className={styles.sectionTitle}>What is a Sign-Up Bonus, and How Do I Earn One?</h2>
          <p>
            A sign-up bonus is a reward offered to new cardholders who meet a spending threshold within a specific time frame.
          </p>

          <h3 className={styles.subHeading}>Example:</h3>
          <ul className={styles.list}>
            <li>Earn 60,000 bonus points after spending $4,000 in the first three months with the Chase Sapphire Preferred® Card.</li>
          </ul>

          <h3 className={styles.subHeading}>Tips for Meeting Spending Requirements:</h3>
          <ul className={styles.list}>
            <li>Plan large purchases, such as flights or home improvements.</li>
            <li>Pay bills or tuition with your card (if possible).</li>
            <li>Combine family spending on one card.</li>
          </ul>

           <h2 className={styles.sectionTitle}>How Much Are Points and Miles Worth?</h2>
            <p>
              The value of points and miles varies depending on the redemption method.
            </p>

            <h3 className={styles.subHeading}>Through Travel Portals:</h3>
            <ul className={styles.list}>
              <li>Typically worth $0.01–$0.015 per point.</li>
              <li>Example: 50,000 points = $500–$750 in travel value.</li>
            </ul>

            <h3 className={styles.subHeading}>Transferring to Partners:</h3>
            <ul className={styles.list}>
              <li>Can yield values of $0.02 or more per point, especially for premium flights and hotel stays.</li>
            </ul>

            <h3 className={styles.subHeading}>Cash Back or Gift Cards:</h3>
            <ul className={styles.list}>
              <li>Offers lower value, often around $0.005–$0.01 per point.</li>
            </ul>

            <p className={styles.tip}><strong>Pro Tip:</strong> Use your points for flights and hotels to maximize value.</p>

            <h2 className={styles.sectionTitle}>Are Travel Credit Cards Worth the Annual Fee?</h2>
            <p>
              Travel credit cards with annual fees can provide tremendous value if you take advantage of their perks.
            </p>

            <h3 className={styles.subHeading}>Justifying the Fee:</h3>
            <ul className={styles.list}>
              <li>Add up the value of benefits like lounge access, travel credits, and free hotel nights.</li>
              <li>Compare the total to the annual fee.</li>
            </ul>

            <h3 className={styles.subHeading}>Example:</h3>
            <ul className={styles.list}>
              <li>The Platinum Card® from Amex has a $695 annual fee but offers:
                <ul className={styles.nestedList}> {/* Nested List */}
                  <li>$200 airline credit.</li>
                  <li>$200 Uber credit.</li>
                  <li>Lounge access worth $500+.</li>
                  <li>Total potential value: $1,500+.</li>
                </ul>
              </li>
            </ul>

            <h2 className={styles.sectionTitle}>What Are the Best Cards for Beginners?</h2>
            <p>
              For first-time travel card users, start with a card offering simple earning and redemption options.
            </p>

            <h3 className={styles.subHeading}>Top Picks for Beginners:</h3>
            <ul className={styles.list}>
              <li>Chase Sapphire Preferred®:
                <ul className={styles.nestedList}>
                  <li>5x points on travel booked through Chase.</li>
                  <li>3x points on dining.</li>
                  <li>$95 annual fee.</li>
                </ul>
              </li>
              <li>Discover it® Miles:
                <ul className={styles.nestedList}>
                  <li>Unlimited 1.5x miles with no annual fee.</li>
                </ul>
              </li>
              <li>Bank of America® Travel Rewards Credit Card:
                <ul className={styles.nestedList}>
                  <li>1.5x points on all purchases.</li>
                  <li>No foreign transaction fees.</li>
                </ul>
              </li>
            </ul>

            <h2 className={styles.sectionTitle}>What is a Foreign Transaction Fee?</h2>
            <p>
              Foreign transaction fees are charges (typically 1%-3%) added to purchases made outside your home country.
            </p>

            <h3 className={styles.subHeading}>How to Avoid Them:</h3>
            <ul className={styles.list}>
              <li>Use travel cards with no foreign transaction fees, like the Capital One Venture Rewards Credit Card or Chase Sapphire Reserve®.</li>
            </ul>

            <h2 className={styles.sectionTitle}>How Do Lounge Access Benefits Work?</h2>
            <p>
              Many premium travel cards provide complimentary or discounted access to airport lounges.
            </p>

            <h3 className={styles.subHeading}>Examples:</h3>
            <ul className={styles.list}>
              <li>The Platinum Card® from Amex:
                <ul className={styles.nestedList}>
                  <li>Access to Centurion Lounges, Delta Sky Clubs®, and Priority Pass lounges.</li>
                </ul>
              </li>
              <li>Capital One Venture X Rewards Card:
                <ul className={styles.nestedList}>
                  <li>Complimentary Priority Pass membership.</li>
                </ul>
              </li>
            </ul>

            <p className={styles.tip}><strong>Pro Tip:</strong> Check your card’s terms for guest policies and restrictions.</p>

            <h2 className={styles.sectionTitle}>How Does Travel Insurance on Credit Cards Work?</h2>
            <p>
              Many travel cards include built-in insurance benefits for added peace of mind.
            </p>

            <h3 className={styles.subHeading}>Types of Coverage:</h3>
            <ul className={styles.list}>
               <li>Trip Cancellation/Interruption:
                 <ul className={styles.nestedList}>
                   <li>Reimbursement for non-refundable expenses if your trip is canceled due to covered reasons.</li>
                 </ul>
               </li>
               <li>Lost Luggage:
                 <ul className={styles.nestedList}>
                   <li>Compensation for delayed or lost bags.</li>
                 </ul>
               </li>
               <li>Rental Car Insurance:
                 <ul className={styles.nestedList}>
                   <li>Primary or secondary coverage for damage to rental cars.</li>
                 </ul>
               </li>
               <li>Example: The Chase Sapphire Reserve® provides up to $10,000 in trip cancellation insurance.</li>
            </ul>

            <h2 className={styles.sectionTitle}>Can I Use Travel Credit Cards for Everyday Purchases?</h2>
            <p>
              Absolutely! Many cards reward everyday spending categories like groceries and dining.
            </p>

            <h3 className={styles.subHeading}>Top Everyday Cards:</h3>
            <ul className={styles.list}>
              <li>Amex Gold Card: 4x points on dining and groceries.</li>
              <li>Citi Custom Cash℠ Card: 5% cashback in your top spending category.</li>
            </ul>

            <h2 className={styles.sectionTitle}>How Do Balance Transfers Work with Travel Credit Cards?</h2>
            <p>
              Some travel cards allow you to transfer high-interest debt from another card to a new card with a lower or 0% introductory APR.
            </p>

            <h3 className={styles.subHeading}>Example:</h3>
            <ul className={styles.list}>
              <li>Citi® Diamond Preferred® Card offers 0% APR for 18 months on balance transfers.</li>
            </ul>

            <h2 className={styles.sectionTitle}>What Happens to My Points If I Close My Card?</h2>
            <p>
              Closing a credit card can lead to forfeiture of rewards, depending on the issuer.
            </p>

            <h3 className={styles.subHeading}>Tips to Avoid Losing Points:</h3>
            <ul className={styles.list}>
              <li>Transfer points to travel partners before canceling.</li>
              <li>Redeem points for travel or statement credits.</li>
            </ul>

            <h2 className={styles.sectionTitle}>What Are Common Mistakes to Avoid?</h2>
            <ul className={styles.list}>
              <li><strong>Carrying a Balance:</strong> Interest charges negate the value of rewards.</li>
              <li><strong>Missing Payments:</strong> Hurts your credit score and incurs late fees.</li>
              <li><strong>Overvaluing Points:</strong> Don’t overspend to earn points unless the rewards justify the expense.</li>
              <li><strong>Neglecting Annual Fees:</strong> Ensure the card’s benefits outweigh its costs.</li>
            </ul>

            <h2 className={styles.sectionTitle}>Guides for Getting Started with Travel Credit Cards</h2>
            <h3 className={styles.subHeading}>Step 1: Assess Your Travel Goals</h3>
            <ul className={styles.list}>
              <li>Want free flights? → Choose an airline card.</li>
              <li>Prefer flexibility? → Opt for general travel cards like Chase Sapphire Preferred®.</li>
            </ul>

            <h3 className={styles.subHeading}>Step 2: Analyze Your Spending Habits</h3>
            <ul className={styles.list}>
              <li>Spend heavily on dining? → Go for a card with bonus points in dining categories.</li>
            </ul>

            <h3 className={styles.subHeading}>Step 3: Build Credit First</h3>
            <ul className={styles.list}>
              <li>Start with a no-annual-fee card to establish a good credit history.</li>
            </ul>

            <h3 className={styles.subHeading}>Step 4: Redeem Points Strategically</h3>
            <ul className={styles.list}>
              <li>Use points for premium travel (e.g., first-class flights) for the best value.</li>
            </ul>

            <h3 className={styles.subHeading}>Step 5: Stay Informed</h3>
            <ul className={styles.list}>
              <li>Subscribe to blogs and forums to stay updated on card offers and reward programs.</li>
            </ul>

            <h2 className={styles.sectionTitle}>Conclusion</h2>
            <p>
              Travel credit cards open a world of possibilities, but they require informed usage to unlock their full potential. This comprehensive FAQ and guide serve as your roadmap, addressing every aspect of travel credit cards—from earning rewards to avoiding common pitfalls. By understanding the basics, leveraging advanced strategies, and staying disciplined with credit management, you can maximize your benefits and create memorable travel experiences.
            </p>
        </article>
      </main>

       {/* Render the shared footer */}
    </>
  );
};

export default FaqsAndGuidesPage;