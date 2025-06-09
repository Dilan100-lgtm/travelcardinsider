/* ------------------------------------------------------------------
    File:  pages/reviews/capital-one-quicksilver-one-review.js
    Route: https://www.travelcardinsider.com/reviews/capital-one-quicksilver-one-review
------------------------------------------------------------------- */

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import styles from '../../styles/ReviewPage.module.css'; // Assuming you have a shared CSS module

// Dynamically import components that are not needed for server-side rendering
const TableOfContents = dynamic(() => import('../../components/TableOfContents'), { ssr: false });
const IconGift = dynamic(() => import('../../components/icons/icon-gift.svg'), { ssr: false });
const IconStar = dynamic(() => import('../../components/icons/icon-star.svg'), { ssr: false });
const IconCheck = dynamic(() => import('../../components/icons/icon-Credit Card.svg'), { ssr: false });
const IconPlus = dynamic(() => import('../../components/icons/icon-target.svg'), { ssr: false });
const IconPlane = dynamic(() => import('../../components/icons/icon-plane.svg'), { ssr: false });


/* ──────────────────────────────
    CONSTANTS & STATIC DATA
    ────────────────────────────── */

const siteName = 'TravelCardInsider';
const siteUrl = 'https://www.travelcardinsider.com';
const pagePath = '/reviews/capital-one-quicksilver-one-review';
const pageUrlFull = `${siteUrl}${pagePath}`;
const publishDate = '2025-06-08';
const updateDate = '2025-06-08';

const reviewData = {
  cardName        : 'Capital One QuicksilverOne Rewards Credit Card',
  cardShortName   : 'QuicksilverOne',
  title           : 'Capital One QuicksilverOne Review (2025): Rewards for Fair Credit',
  description     : 'Our expert 2025 analysis of the Capital One QuicksilverOne card. Is the unlimited 1.5% cash back worth the annual fee for building credit? We cover its features, fees, and competitors.',
  keywords        : 'Capital One QuicksilverOne review, fair credit credit card, 1.5% cash back, credit building card, QuicksilverOne card 2025, $39 annual fee',
  author: {
      name: 'Dilan Madushanka',
      title: 'Founder & Lead Editor',
      imageUrl: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', // Placeholder
      fullBioLink: '/author/dilan-madushanka',
  },
  imageUrl        : '/quicksilverone-card-art.png', // ACTION: Replace with your actual card image path
  imageWidth      : 1290,
  imageHeight     : 812,
  ratingValue     : 7.2,
  ratingCount     : 94,
  reviewBody      : 'A deep dive into the Capital One QuicksilverOne card, focusing on its role as a credit-building tool with flat-rate rewards. We analyze its annual fee, cash back structure, travel perks, and how it compares to other cards for fair credit.',
  aprRange        : '29.99% (Variable)',
  annualFee       : 39,
  applyLink       : 'https://www.capitalone.com/credit-cards/quicksilverone/', // ACTION: Replace with your affiliate link
  ratesFeesLink   : 'https://www.capitalone.com/credit-cards/quicksilverone/', // ACTION: Replace with your affiliate link for rates & fees

  // --- 10 Citation Sources ---
  source1Url      : 'https://www.capitalone.com/credit-cards/quicksilverone/',
  source1Title    : 'Official Capital One QuicksilverOne Product Page',
  source2Url      : 'https://www.capitalone.com/learn-grow/money-management/what-is-capital-one-travel/',
  source2Title    : 'Capital One Travel Portal Information',
  source3Url      : 'https://www.capitalone.com/creditwise/',
  source3Title    : 'CreditWise from Capital One',
  source4Url      : 'https://www.capitalone.com/credit-cards/preapprove/',
  source4Title    : 'Capital One Pre-Approval Tool',
  source5Url      : 'https://www.discover.com/credit-cards/secured/',
  source5Title    : 'Official Discover it® Secured Credit Card Page',
  source6Url      : 'https://www.petalcard.com/petal-2-card',
  source6Title    : 'Official Petal® 2 Visa® Card Page',
  source7Url      : 'https://www.upstart.com/upgrade-card/',
  source7Title    : 'Official Upgrade Cash Rewards Visa® Page',
  source8Url      : 'https://www.capitalone.com/digital/eno/',
  source8Title    : 'Eno® from Capital One',
  source9Url      : 'https://www.capitalone.com/support-center/credit-cards/rewards-benefits/',
  source9Title    : 'Capital One Rewards Program Terms',
  source10Url     : 'https://www.consumerfinance.gov/credit-cards/credit-card-act/',
  source10Title   : 'Credit CARD Act of 2009',
  
  h1Content       : "Capital One QuicksilverOne Review: Simple Rewards for Building Credit?",
  heroSubtitle    : "Our 2025 analysis breaks down the QuicksilverOne's 1.5% cash back, credit-building features, and whether its benefits justify the annual fee for those with fair credit."
};

// --- Function to process citations ---
const processCitedText = (textWithMarkers) => {
    if (!textWithMarkers) return '';
    const citationRegex = /\[CITE:(\d+)\]/g;
    return textWithMarkers.replace(citationRegex, (match, citationNumberStr) => {
        const citationNumber = parseInt(citationNumberStr, 10);
        const url = reviewData[`source${citationNumber}Url`] || '#';
        const title = reviewData[`source${citationNumber}Title`] || 'View Source';
        return `<sup><a href="${url}" target="_blank" rel="noopener noreferrer sponsored" title="${title}">${citationNumber}</a></sup>`;
    });
};

// --- FAQ Content Array ---
const faqsContent = [
    { q: 'What credit score do I need for the QuicksilverOne?', a: `It’s designed for those with "Fair" or "Average" credit, often FICO scores in the low-to-mid 600s, but other factors are also considered [CITE:1]. Use the <a href="${reviewData.source4Url}" target="_blank" rel="noopener noreferrer sponsored">Capital One pre-approval tool</a> to check your odds without a hard inquiry [CITE:4].` },
    { q: 'How soon can I get a credit line increase?', a: 'With responsible use, you can be automatically considered for a higher credit limit in as little as six months [CITE:1].' },
    { q: 'Can I use this card internationally?', a: 'Yes! A key benefit is that it has no foreign transaction fees, saving you the typical 3% on purchases abroad [CITE:1].' },
    { q: 'How is this different from the regular Quicksilver card?', a: 'The QuicksilverOne is for building credit and has a $39 annual fee. The regular Quicksilver is for good-to-excellent credit, has no annual fee, and typically offers a welcome bonus and intro APR.' },
    { q: 'Does using the CreditWise tool hurt my credit score?', a: 'No. Monitoring your score with CreditWise is a "soft" inquiry and does not affect your credit score [CITE:3].' },
    { q: 'What happens to my card as my credit score improves?', a: 'As your score improves with responsible use, Capital One may eventually consider you for an upgrade to a no-annual-fee product like the standard Quicksilver card.' }
];

// --- Structured Data for SEO ---
const structuredDataOptimized = {
  '@context': 'https://schema.org',
  '@graph'  : [
    {
      '@type'        : 'Product',
      name           : reviewData.cardName,
      image          : `${siteUrl}${reviewData.imageUrl}`,
      description    : reviewData.description, 
      brand          : { '@type': 'Brand', name: 'Capital One' },
      aggregateRating: {
        '@type'    : 'AggregateRating',
        ratingValue : reviewData.ratingValue.toString(),
        bestRating  : '10',
        worstRating : '1',
        ratingCount : reviewData.ratingCount.toString(),
      },
      offers: {
        '@type'            : 'Offer',
        url                : reviewData.applyLink,
        priceCurrency      : 'USD',
        price              : reviewData.annualFee.toString(),
        priceValidUntil    : '2026-12-31',
        availability       : 'https://schema.org/InStock',
        seller: { '@type': 'Organization', name: 'Capital One' },
      },
      review: { '@type': 'Review', '@id': `${pageUrlFull}#editorReview` },
    },
    {
      '@type'         : 'Review',
      '@id'           : `${pageUrlFull}#editorReview`,
      itemReviewed    : { '@type': 'Product', name: reviewData.cardName },
      reviewBody      : reviewData.reviewBody, 
      reviewRating    : {
        '@type'    : 'Rating',
        ratingValue : reviewData.ratingValue.toString(),
        bestRating  : '10',
        worstRating : '1',
      },
      author : { '@type': 'Person', 'name': reviewData.author.name, 'url': `${siteUrl}${reviewData.author.fullBioLink}` },
      publisher : { '@type' : 'Organization', name : siteName },
      datePublished   : publishDate,
      dateModified    : updateDate,
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqsContent.map(faq => ({
        '@type': 'Question', name: faq.q,
        acceptedAnswer: {  '@type': 'Answer', text: faq.a.replace(/\[CITE:(\d+)\]/g, '').replace(/<[^>]*>/g, '') } 
      })),
    },
  ],
};

// --- Table of Contents Sections ---
const tocSections = [
    { id: 'section-snapshot', title: '1. QuicksilverOne At-a-Glance' },
    { id: 'section-who-for', title: '2. Who is the QuicksilverOne For?' },
    { id: 'section-earning', title: '3. The Core Offer: Unlimited 1.5% Cash Back' },
    { id: 'section-annual-fee', title: '4. Is the $39 Annual Fee Worth It?' },
    { id: 'section-credit-building', title: '5. A Tool for Your Credit Journey' },
    { id: 'section-benefits', title: '6. Key Features & Security Tools' },
    { id: 'section-competitors', title: '7. Head-to-Head: QuicksilverOne vs. The Competition' },
    { id: 'section-final-verdict', title: '8. Final Verdict: Our Expert Take for 2025' },
    { id: 'section-faqs-jump', title: '9. Frequently Asked Questions' },
];

/* ──────────────────────────────
    MAIN COMPONENT
    ────────────────────────────── */

function CapitalOneQuicksilverOneReviewPage() {

  // --- Data for Tables ---
  const keyFeaturesTableData = [
    { feature: "Annual Fee", details: `<a href="${reviewData.ratesFeesLink}" target="_blank" rel="noopener noreferrer sponsored">$39</a> [CITE:1]` },
    { feature: "Rewards Rate", details: "Unlimited 1.5% cash back on every purchase" },
    { feature: "Bonus Rewards", details: `Unlimited 5% cash back on hotels & rental cars via <a href="${reviewData.source2Url}" target="_blank" rel="noopener noreferrer sponsored">Capital One Travel</a> [CITE:2]` },
    { feature: "Credit Required", details: "Fair / Average" },
    { feature: "Key Perk", details: "Automatic credit line reviews in as little as 6 months [CITE:1]" },
    { feature: "Foreign Fees", details: "None [CITE:1]" },
  ];

  const competitorsTableData = [
      { name: "Capital One QuicksilverOne", fee: "$39 [CITE:1]", rewards: "1.5% flat-rate", feature: "Automatic credit line reviews" },
      { name: "Discover it® Secured", fee: "$0 [CITE:5]", rewards: "2% at Gas/Restaurants; 1% other", feature: "Cashback Match first year" },
      { name: "Petal® 2 Visa®", fee: "$0 [CITE:6]", rewards: "1% up to 1.5% back", feature: "No fees of any kind" },
      { name: "Upgrade Cash Rewards Visa®", fee: "$0 [CITE:7]", rewards: "1.5% back (paid as you pay)", feature: "Functions like a predictable loan" },
  ];

  // --- Content for each section ---
  const sectionContent = {
    'section-intro': `
      <p>The path to building or rebuilding credit can feel frustrating. For those with fair credit, the options often seem like a world away from the flashy perks available to everyone else. Enter the <strong>Capital One QuicksilverOne Rewards Credit Card</strong>. This card was designed specifically for you—the person on a credit journey who wants a straightforward way to earn real rewards [CITE:1].</p>
      <p>This review offers a deep and honest exploration of the QuicksilverOne. We’ll examine its unlimited 1.5% cash back, its credit-building features, and its annual fee to determine if it’s the right financial partner for you. The journey to a better credit score requires reliable tools, and this card aims to be a valuable one.</p>
    `,
    'section-who-for': `
      <p>The Capital One QuicksilverOne is tailored for a specific type of consumer. Does one of these profiles sound like you?</p>
      <ul>
        <li><strong>The Credit Rebuilder:</strong> You’ve hit a few financial bumps and are now focused on improving your fair credit score. For you, a card that reports to all three major credit bureaus and offers automatic credit line reviews is a game-changer [CITE:1].</li>
        <li><strong>The Credit Newbie:</strong> With a limited credit history (a "thin file"), getting approved for a rewards card can be tough. The QuicksilverOne serves as an accessible entry point to establish your credit history while earning cash back.</li>
        <li><strong>The Simplicity Seeker:</strong> You want to earn rewards without the headache of tracking rotating categories. The QuicksilverOne’s flat-rate 1.5% cash back on everything is a perfect, no-fuss solution [CITE:9].</li>
      </ul>
      <p>This card isn't for those who carry a high balance—the APR is steep [CITE:1]. If you have excellent credit, you can likely find a no-annual-fee card with higher rewards.</p>
    `,
    'section-earning': `
      <p>The core of the QuicksilverOne’s appeal is its simple system that offers <strong>unlimited 1.5% cash back on every single purchase, every day</strong> [CITE:1]. This setup removes all the complexity. There are no spending categories to memorize or quarterly offers to activate.</p>
      <p>A huge advantage is that your cash back never expires for the life of the account [CITE:9]. When it’s time to redeem, you can get your rewards as a statement credit or a check, with no minimum redemption amount.</p>
      <p>Beyond the everyday 1.5% rate, the QuicksilverOne offers a fantastic accelerator for your travel fund: <strong>unlimited 5% cash back on hotels and rental cars</strong> booked through Capital One Travel [CITE:2]. For a card in the fair credit category, a 5% return on travel is a really welcome perk.</p>
    `,
    'section-annual-fee': `
      <p>Is the $39 annual fee worth it? Let’s do the math. At a 1.5% cash-back rate, you’d need to spend <strong>$2,600 per year (about $217 per month)</strong> to earn $39 in cash back, effectively canceling out the fee.</p>
      <p>Here’s when paying the fee makes sense:</p>
      <ul>
        <li>You spend more than $2,600 a year on the card.</li>
        <li>You travel internationally and want to avoid the typical 3% foreign transaction fee [CITE:1].</li>
        <li>You value the credit-building features as a worthwhile investment in your financial future.</li>
      </ul>
      <p>Think of the annual fee as the cost of entry for a feature-rich card at a time when other credit options may be limited.</p>
    `,
    'section-credit-building': `
      <p>This is where the QuicksilverOne truly excels. It’s designed to be a partner in your financial progress.</p>
      <ul>
        <li><strong>Automatic Credit Line Reviews:</strong> This is the standout feature. After as little as six months of responsible use (like making on-time payments), Capital One will automatically consider you for a higher credit line [CITE:1]. A higher limit can lower your credit utilization ratio, a major factor in your credit score.</li>
        <li><strong>Reports to All 3 Bureaus:</strong> Capital One reports your payment history to Equifax, Experian, and TransUnion. This ensures your responsible habits are seen and recorded.</li>
        <li><strong>CreditWise® from Capital One:</strong> You get free access to CreditWise, a powerful tool that lets you monitor your credit score and see what’s affecting it [CITE:3].</li>
      </ul>
    `,
    'section-benefits': `
      <p>Beyond rewards, the QuicksilverOne is packed with security and convenience features.</p>
      <ul>
        <li><strong>$0 Fraud Liability:</strong> You’re not responsible for unauthorized charges if your card is lost or stolen [CITE:9].</li>
        <li><strong>Security Alerts & Card Lock:</strong> Get instant alerts for suspicious activity and easily lock your card from the mobile app if it’s misplaced.</li>
        <li><strong>Eno® Virtual Card Numbers:</strong> Capital One’s intelligent assistant, Eno, can generate unique virtual card numbers for online shopping, keeping your actual card number private and secure [CITE:8].</li>
        <li><strong>Autopay:</strong> Set up automatic payments to ensure you never miss a due date, which is crucial for building credit and avoiding the late payment fee of up to $40 [CITE:10].</li>
      </ul>
    `,
    'section-competitors': `
      <p>The fair credit market includes a mix of unsecured cards (like QuicksilverOne) and secured cards. The QuicksilverOne’s main trade-off is its $39 annual fee in exchange for a strong, flat-rate rewards program and no need for a deposit. Here's how it compares.</p>
    `,
    'section-final-verdict': `
      <p>The <strong>Capital One QuicksilverOne</strong> is a thoughtfully designed and highly effective tool for its intended audience. It successfully bridges the gap for those with fair credit, offering the experience of a genuine rewards card while providing a clear path to a better financial future.</p>
      <p>Its primary strengths—unlimited 1.5% cash back, automatic credit line reviews, and no foreign transaction fees—are a powerful combination in the credit-building space [CITE:1]. The card’s main hurdles are its $39 annual fee and high APR. However, for the user who pays their balance in full and spends at least $217 a month, the fee becomes a non-issue.</p>
      <p><strong>Final take:</strong> If you have fair credit and are serious about improving it, the QuicksilverOne is one of the best unsecured cards you can get. Its value is not just in the cash back you earn, but in the upward momentum it can provide to your credit score.</p>
    `,
  };

  return (
    <div>
      <Head>
        <title>{reviewData.title} - {siteName}</title>
        <meta name="description" content={reviewData.description} />
        <meta name="keywords" content={reviewData.keywords} />
        <meta name="author" content={reviewData.author.name} />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="canonical" href={pageUrlFull} />
        <meta property="og:title" content={reviewData.title} />
        <meta property="og:description" content={reviewData.description} />
        <meta property="og:url" content={pageUrlFull} />
        <meta property="og:image" content={`${siteUrl}${reviewData.imageUrl}`} />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={publishDate} />
        <meta property="article:modified_time" content={updateDate} />
        <meta property="article:author" content={reviewData.author.name} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={reviewData.title} />
        <meta name="twitter:description" content={reviewData.description} />
        <meta name="twitter:image" content={`${siteUrl}${reviewData.imageUrl}`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataOptimized) }} />
      </Head>

      <main>
        <div className={styles.reviewPageLayout}>
          <div className={styles.mainContentArea}>
            {/* --- Hero Section --- */}
            <section className={styles.heroSection}>
                <div className={styles.heroTextContainer}>
                    <h1 className={styles.heroTitle} dangerouslySetInnerHTML={{ __html: processCitedText(reviewData.h1Content) }}></h1>
                    <p className={styles.reviewedByLine}>
                        Expert review by <Link href={reviewData.author.fullBioLink || '#'} legacyBehavior><a>{reviewData.author.name}</a></Link>
                        . Last updated: {new Date(updateDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                    <p className={styles.heroSubtitle} dangerouslySetInnerHTML={{ __html: processCitedText(reviewData.heroSubtitle) }}></p>
                    <div className={styles.heroCtaContainer}>
                        <a href={reviewData.applyLink} target="_blank" rel="noopener noreferrer sponsored" className={styles.applyNowButton}>
                            Apply on CapitalOne.com
                        </a>
                        <span className={styles.heroApplyButtonDisclaimer}>on Capital One's official site</span>
                    </div>
                </div>
                <div className={styles.heroImageContainer}>
                    <div className={styles.cardImageContainer}>
                      <Image src={reviewData.imageUrl} alt={reviewData.cardName} width={reviewData.imageWidth} height={reviewData.imageHeight} className={styles.heroImage} priority />
                    </div>
                     <div className={styles.ratingSection}>
                        <span className={styles.tciRating}>{siteName} Rating: <strong>{reviewData.ratingValue.toFixed(1)}</strong>/10</span>
                     </div>
                </div>
            </section>
            
            {/* --- Main Review Content --- */}
            <div className={styles.reviewContainer}>
              <article>
                <div dangerouslySetInnerHTML={{ __html: processCitedText(sectionContent['section-intro'])}} />
                
                {tocSections.map(section => {
                    // Render FAQ section later
                    if (section.id === 'section-faqs-jump') return null;

                    return (
                        <section key={section.id} id={section.id} className={styles.reviewSection}>
                            <h2 dangerouslySetInnerHTML={{ __html: processCitedText(section.title) }}></h2>
                            {section.id === 'section-snapshot' && (
                               <div className={styles.tableContainer}>
                                  <table className={`${styles.statsTable} ${styles.highlightTable}`}>
                                      <thead><tr><th>Feature</th><th>Details</th></tr></thead>
                                      <tbody>
                                          {keyFeaturesTableData.map((item, index) => (
                                              <tr key={index}><td data-label="Feature">{item.feature}</td><td data-label="Details" dangerouslySetInnerHTML={{ __html: processCitedText(item.details) }}></td></tr>
                                          ))}
                                      </tbody>
                                  </table>
                              </div>
                            )}

                            <div dangerouslySetInnerHTML={{ __html: processCitedText(sectionContent[section.id] || '') }} />

                            {section.id === 'section-competitors' && (
                                <div className={styles.tableContainer}>
                                    <table className={`${styles.statsTable} ${styles.comparisonTable}`}>
                                        <thead>
                                            <tr>
                                                <th>Card Name</th>
                                                <th>Annual Fee</th>
                                                <th>Rewards Rate</th>
                                                <th>Key Feature</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {competitorsTableData.map((card, index) => (
                                                <tr key={index}>
                                                    <td data-label="Card Name" dangerouslySetInnerHTML={{ __html: processCitedText(card.name) }}></td>
                                                    <td data-label="Annual Fee" dangerouslySetInnerHTML={{ __html: processCitedText(card.fee) }}></td>
                                                    <td data-label="Rewards Rate" dangerouslySetInnerHTML={{ __html: processCitedText(card.rewards) }}></td>
                                                    <td data-label="Key Feature" dangerouslySetInnerHTML={{ __html: processCitedText(card.feature) }}></td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </section>
                    )
                })}

                {/* --- FAQ Section (Rendered After Verdict) --- */}
                <section id="section-faqs-jump" className={`${styles.reviewSection} ${styles.faqSection}`}>
                    <h2 dangerouslySetInnerHTML={{ __html: processCitedText(tocSections.find(s => s.id === 'section-faqs-jump').title) }}></h2>
                    <div className={styles.faqContainer}>
                        {faqsContent.map((faq, index) => (
                            <details key={index} className={styles.faqItem}>
                                <summary className={styles.faqQuestion}>{`${index + 1}. ${faq.q}`}</summary>
                                <div className={styles.faqAnswer}><p dangerouslySetInnerHTML={{ __html: processCitedText(faq.a) }} /></div>
                            </details>
                        ))}
                    </div>
                </section>
              </article>
            </div>
          </div>
          {/* --- Sidebar with Table of Contents --- */}
          <aside className={styles.sidebarArea}>
                <TableOfContents sections={tocSections} />
          </aside>
        </div>
      </main>
    </div>
  );
}

export default CapitalOneQuicksilverOneReviewPage;