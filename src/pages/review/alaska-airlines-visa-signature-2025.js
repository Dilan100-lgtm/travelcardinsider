// File: pages/review/alaska-airlines-visa-signature-2025.js

import React, { useRef, useState } from 'react';

import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/reviews2025.module.css';

const siteUrl = 'https://www.yourtravelcardreviewsite.com'; // IMPORTANT: Update this

const reviewDataNew = {
  cardName: "Alaska Airlines Visa Signature Card",
  issuerName: "Bank of America",
  title: "Alaska Airlines Visa Signature Card 2025 Review: Top Pick for West Coasters?",
  description: "In-depth 2025 review of the Alaska Airlines Visa Signature Card from Bank of America. Explore miles, Companion Fare, checked bags, elite perks, and the $95 annual fee. Is it the top choice for US West Coast travelers?",
  keywords: [ // Changed to an array for easier processing
    "Alaska Airlines Visa Signature review", 
    "Alaska Airlines credit card 2025", 
    "West Coast airline card", 
    "Alaska Companion Fare", 
    "Alaska Airlines miles", 
    "travel credit card $95 fee", 
    "Bank of America Alaska card", 
    "EQM credit card", 
    "best airline card West Coast", 
    "credit card review US"
  ],
  author: { // Assuming same author details as the example
      name: 'Dilan Madushanka',
      title: 'Founder & Lead Editor',
      imageUrl: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg',
      imageWidth: 40,
      imageHeight: 40,
      tooltipImageUrl: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg',
      tooltipImageWidth: 60,
      tooltipImageHeight: 60,
      expertise: [
          'Travel Credit Cards',
          'Rewards Programs',
          'Financial Literacy for Travel',
          'Maximizing Card Benefits',
          'Credit Card Analysis'
      ],
      bioSnippet: 'Dilan Madushanka is the founder and lead editor of TravelCardInsider.com, dedicated to demystifying credit cards and uncovering their real-world value for smarter travel.',
      fullBioLink: '/author/dilan-madushanka',
      fullBio: `Dilan Madushanka is the founder and lead editor of TravelCardInsider.com, a platform dedicated to helping everyday people make smarter decisions with travel and rewards credit cards. With a background in medicine and a deep passion for financial literacy, Dilan turned his real-world experience—navigating travel, budgeting, and rewards programs—into a mission: demystify credit cards and uncover their real-world value.\n\nAfter years of studying the fine print, testing travel benefits firsthand, and comparing hundreds of card offers, Dilan has built a site that goes beyond generic advice. He combines research, real spending scenarios, and hands-on card analysis to help readers maximize rewards and avoid costly mistakes.\n\nExperience matters—and Dilan brings a unique one. A Sri Lankan doctor by training, he took a bold leap into digital entrepreneurship to build a transparent, user-focused credit card resource from scratch. Every guide and review you read is written or edited by him with accuracy, integrity, and a deep sense of purpose.`,
      publishedStats: '6+ in-depth card reviews per week',
      testedStats: 'Over 50 credit card benefits across major brands',
      socialLinks: {
          linkedin: 'www.linkedin.com/in/dilan-madushanka-b65293365', // *** REPLACE with actual URL ***
          twitter: 'https://x.com/team_dilan', // *** REPLACE with actual URL ***
          email: 'team@travelcardinsider.com'
      }
  },
  siteName: "Your Travel Card Review Site", // IMPORTANT: Update this
  pagePath: "/review/alaska-airlines-visa-signature-2025",
  imageUrl: "/darrin-henein-sREvt-W52Tc-unsplash.webp", // IMPORTANT: Update this path
  imageWidth: 760,
  imageHeight: 480,
  siteLogoUrl: "/images/logo.png", // IMPORTANT: Update this path
  publishDate: "2025-05-17",
  updateDate: "2025-05-17",
  ratingValue: 4.4,
  annualFee: 95,
  applyLink: "https://www.yourlink.com/apply-alaska-visa", // IMPORTANT: Update this link
  learnMoreLink: "#sweet-spot-redemptions",
  ratesLink: "https://www.yourlink.com/alaska-visa-rates-fees", // IMPORTANT: Add actual rates & fees link
  h1Content: "The Alaska Airlines Visa Signature Card: My Honest Take for West Coasters in 2025",
  reviewBody: "Our comprehensive 2025 analysis of the Alaska Airlines Visa Signature Card. Uncover its value for West Coast flyers, from the Companion Fare to earning miles and elite status perks.",
  sku: "BOFA-ALASKA-TCI-2025",
  mpn: "BOFAALASKA",
  brandName: "Bank of America Alaska Airlines",
};

const pageUrlFull = `${siteUrl}${reviewDataNew.pagePath}`;

// JSON-LD Structured Data - This is correctly defined using reviewDataNew
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "Product",
    "name": reviewDataNew.cardName,
    "brand": {
      "@type": "Brand",
      "name": reviewDataNew.brandName
    },
    "description": reviewDataNew.description,
    "image": `${siteUrl}${reviewDataNew.imageUrl}`,
    "sku": reviewDataNew.sku,
    "mpn": reviewDataNew.mpn,
    "offers": {
        "@type": "Offer",
        "url": reviewDataNew.applyLink,
        "priceCurrency": "USD",
        "price": reviewDataNew.annualFee.toString(),
        "priceSpecification": {
           "@type": "PriceSpecification",
           "price": reviewDataNew.annualFee,
           "priceCurrency": "USD",
           "valueAddedTaxIncluded": "false",
           "billingIncrement": "1",
           "unitText": "ANNUAL"
        },
        "seller": { "@type": "Organization", name: reviewDataNew.issuerName }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": reviewDataNew.ratingValue.toString(),
      "bestRating": "5",
      "worstRating": "1",
      "reviewCount": "1"
    }
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": reviewDataNew.ratingValue.toString(),
    "bestRating": "5",
    "worstRating": "1"
  },
  "headline": reviewDataNew.title,
  "author": {
    "@type": "Person",
    "name": reviewDataNew.author.name
  },
  "publisher": {
    "@type": "Organization",
    "name": reviewDataNew.siteName,
    "logo": {
      "@type": "ImageObject",
      "url": `${siteUrl}${reviewDataNew.siteLogoUrl}`
    }
  },
  "datePublished": reviewDataNew.publishDate,
  "dateModified": reviewDataNew.updateDate,
  "description": reviewDataNew.description, // Schema.org description
  "keywords": reviewDataNew.keywords.join(', '), // Convert array to comma-separated string for meta tag if needed, or use directly if schema supports array
  "mainEntityOfPage": {
     "@type": "WebPage",
     "@id": pageUrlFull
  },
  "image": [
     `${siteUrl}${reviewDataNew.imageUrl}`
   ]
};

export default function AlaskaAirlinesVisaSignatureReview2025() {
  const authorRef = useRef(null); // ✅ Add this
  const authorTooltipRef = useRef(null); // ✅ You also reference this
  const [showAuthorBioTooltip, setShowAuthorBioTooltip] = useState(false);

  const handleAuthorMouseEnter = () => setShowAuthorBioTooltip(true);
  const handleAuthorMouseLeave = () => {
    setTimeout(() => setShowAuthorBioTooltip(false), 200);
  };
  const handleAuthorClearTimeout = () => setShowAuthorBioTooltip(true);

  return (
    <>
      <Head>
        {/* Corrected to use reviewDataNew object */}
        <title>{reviewDataNew.title}</title>
        <meta
          name="description"
          content={reviewDataNew.description}
        />
        <meta name="keywords" content={reviewDataNew.keywords.join(', ')} />
        <meta name="author" content={reviewDataNew.author.name} />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href={pageUrlFull} />

        {/* ---- Open Graph (for Facebook, Pinterest, etc.) ---- */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={reviewDataNew.title} />
        <meta property="og:description" content={reviewDataNew.description} />
        <meta property="og:url" content={pageUrlFull} />
        <meta property="og:image" content={`${siteUrl}${reviewDataNew.imageUrl}`} />
        <meta property="og:image:width" content={String(reviewDataNew.imageWidth)} />
        <meta property="og:image:height" content={String(reviewDataNew.imageHeight)} />
        <meta property="og:site_name" content={reviewDataNew.siteName} />
        <meta property="article:publisher" content={`https://www.facebook.com/yourfbprofile`} /> {/* Optional: Link to your Facebook page */}
        <meta property="article:published_time" content={reviewDataNew.publishDate} />
        <meta property="article:modified_time" content={reviewDataNew.updateDate} />
        <meta property="article:author" content={reviewDataNew.author.name} />


        {/* ---- Twitter Card ---- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@YourTwitterHandle" /> {/* Optional: Your Twitter handle */}
        {/* Example of constructing a slightly different title for Twitter if needed, otherwise use reviewDataNew.title */}
        <meta name="twitter:title" content={`${reviewDataNew.cardName} Review (2025) | $${reviewDataNew.annualFee} Fee Justified?`} />
        <meta name="twitter:description" content={`Detailed 2025 review: ${reviewDataNew.cardName}. Companion Fare, free checked bags, EQMs, and value for Alaska loyalists.`} />
        <meta name="twitter:image" content={`${siteUrl}${reviewDataNew.imageUrl}`} />
        <meta name="twitter:creator" content="@AuthorTwitterHandle" /> {/* Optional: Author's Twitter handle */}

        {/* ---- Geo-targeting and Language ---- */}
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="language" content="en-US" />
        <meta name="distribution" content="US" />
        <link rel="alternate" hrefLang="en-us" href={pageUrlFull} />
        
        {/* ---- JSON-LD Structured Data for Google Rich Snippets ---- */}
        {/* This uses the 'structuredData' object defined above, which correctly uses 'reviewDataNew' */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

        {/* <Header /> */} {/* Uncomment if you have a Header component */}

      <main style={{ fontFamily: 'Arial, sans-serif' }}> {/* Example font */}
        <article className={styles.reviewContainer}>
          <header className={styles.reviewHeader}>
            <h1 className={styles.reviewTitle}>
              {/* Corrected to use reviewDataNew */}
              {reviewDataNew.h1Content}
            </h1>
            <div
                    className={styles.authorBioContainer}
                    ref={authorRef}
                    onMouseEnter={() => { handleAuthorClearTimeout(); handleAuthorMouseEnter(); }}
                    onMouseLeave={handleAuthorMouseLeave}
                    onFocus={handleAuthorMouseEnter}
                    onBlur={handleAuthorMouseLeave}
                    aria-haspopup="true"
                    aria-expanded={showAuthorBioTooltip}
                    tabIndex={0}
                >
                    <Image
                        src={reviewDataNew.author.imageUrl}
                        alt={`${reviewDataNew.author.name} headshot`}
                        width={reviewDataNew.author.imageWidth}
                        height={reviewDataNew.author.imageHeight}
                        className={styles.authorImageSmall}
                        priority
                    />
                    <div className={styles.authorInfoBlock}>
                        <div className={styles.authorNameLine}>
                            <span className={styles.authorPrefix}>By</span>
                            <span className={styles.authorName}>{reviewDataNew.author.name}</span>
                        </div>
                        <span className={styles.authorTitle}>{reviewDataNew.author.title}</span>
                        {updateDate && (
                            <time dateTime={updateDate} className={styles.authorLastEdited}>
                                Last updated: {new Date(updateDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                            </time>
                        )}
                        {reviewDataNew.author.socialLinks && (
                            <div className={styles.authorSocialLinks}>
                                {reviewDataNew.author.socialLinks.linkedin && (
                                    <a href={reviewDataNew.author.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.socialIconLink}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                    </a>
                                )}
                                {reviewDataNew.author.socialLinks.twitter && (
                                    <a href={reviewDataNew.author.socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className={styles.socialIconLink}>
                                         <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.422.724-.665 1.56-.665 2.452 0 1.697.864 3.198 2.18 4.078-.8-.025-1.555-.247-2.227-.616v.054c0 2.37 1.683 4.333 3.91 4.78-.426.116-.874.174-1.337.174-.31 0-.611-.03-.904-.085.622 1.936 2.421 3.338 4.553 3.377-1.672 1.309-3.781 2.088-6.072 2.088-.394 0-.784-.023-1.169-.069 2.16 1.389 4.723 2.202 7.482 2.202 8.979 0 13.897-7.446 13.897-13.898 0-.21 0-.42-.015-.63.953-.689 1.778-1.56 2.433-2.525z"/></svg>
                                    </a>
                                )}
                                {reviewDataNew.author.socialLinks.email && (
                                    <a href={`mailto:${reviewDataNew.author.socialLinks.email}`} aria-label="Email" className={styles.socialIconLink}>
                                         <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>
                                    </a>
                                )}
                            </div>
                        )}
                    </div>
                    {showAuthorBioTooltip && (
                        <div
                            className={styles.authorTooltip}
                            ref={authorTooltipRef}
                            role="tooltip"
                            onMouseEnter={handleAuthorClearTimeout}
                            onMouseLeave={handleAuthorMouseLeave}
                            onFocus={handleAuthorMouseEnter}
                            onBlur={handleAuthorMouseLeave}
                        >
                             <div className={styles.authorTooltipHeader}>
                                 <Image
                                    src={reviewDataNew.author.tooltipImageUrl}
                                    alt={`${reviewDataNew.author.name} headshot`}
                                    width={reviewDataNew.author.tooltipImageWidth}
                                    height={reviewDataNew.author.tooltipImageHeight}
                                    className={styles.authorTooltipImage}
                                 />
                                 <div className={styles.authorTooltipInfo}>
                                     <span className={styles.authorTooltipName}>{reviewDataNew.author.name}</span>
                                     <span className={styles.authorTooltipTitle}>{reviewDataNew.author.title}</span>
                                 </div>
                               </div>
                               {reviewDataNew.author.expertise && reviewDataNew.author.expertise.length > 0 && (
                                 <div className={styles.authorTooltipExpertise}>
                                     <strong>Expertise</strong>
                                     <ul>
                                         {reviewDataNew.author.expertise.map(area => <li key={area}>{area}</li>)}
                                     </ul>
                                 </div>
                               )}
                               <p className={styles.authorTooltipBioSnippet}>{reviewDataNew.author.bioSnippet}</p>
                               {reviewDataNew.author.fullBioLink && (
                                   <Link href={reviewDataNew.author.fullBioLink} legacyBehavior>
                                       <a className={styles.authorTooltipBioLink}>
                                           See full bio
                                       </a>
                                   </Link>
                               )}
                               {reviewDataNew.author.socialLinks && (
                                    <div className={styles.authorTooltipSocials}>
                                        {reviewDataNew.author.socialLinks.linkedin && (
                                             <a href={reviewDataNew.author.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.socialIconLink}>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                             </a>
                                         )}
                                         {reviewDataNew.author.socialLinks.twitter && (
                                             <a href={reviewDataNew.author.socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className={styles.socialIconLink}>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.422.724-.665 1.56-.665 2.452 0 1.697.864 3.198 2.18 4.078-.8-.025-1.555-.247-2.227-.616v.054c0 2.37 1.683 4.333 3.91 4.78-.426.116-.874.174-1.337.174-.31 0-.611-.03-.904-.085.622 1.936 2.421 3.338 4.553 3.377-1.672 1.309-3.781 2.088-6.072 2.088-.394 0-.784-.023-1.169-.069 2.16 1.389 4.723 2.202 7.482 2.202 8.979 0 13.897-7.446 13.897-13.898 0-.21 0-.42-.015-.63.953-.689 1.778-1.56 2.433-2.525z"/></svg>
                                             </a>
                                         )}
                                         {reviewDataNew.author.socialLinks.email && (
                                             <a href={`mailto:${reviewDataNew.author.socialLinks.email}`} aria-label="Email" className={styles.socialIconLink}>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>
                                             </a>
                                         )}
                                    </div>
                                )}
                        </div>
                    )}
                </div>

            <div style={{ marginTop: '1rem', marginBottom: '1rem' }}>
              <Image
                // Corrected to use reviewDataNew
                src={reviewDataNew.imageUrl}
                alt={`${reviewDataNew.cardName} from ${reviewDataNew.issuerName}`}
                
                style={{ width: '100%', maxWidth: '1200px', height: 'auto', display: 'block', margin: '0 auto' }} 
                priority 
              />
            </div>

            <p className={styles.reviewDisclaimer}>
              We may receive compensation when you click on links to certain credit card products
              on our site. However, our recommendations remain our own, and offers are subject to
              change. Always verify details with the official issuer. Terms apply to credit card benefits and offers.
            </p>
          </header>

          {/* Table of Contents */}
          <nav className={styles.reviewToc}>
            <h2>Table of Contents</h2>
            <ol>
              {/* Corrected to use reviewDataNew */}
              <li><a href="#introduction">Introduction: The {reviewDataNew.cardName} for West Coasters</a></li>
              <li><a href="#annual-fee-interest">Annual Fee and Interest: Is It Worth It?</a></li>
              <li><a href="#welcome-offer">Welcome Offer in 2025: What You Get</a></li>
              <li><a href="#earning-miles">Earning Miles: Alaska, Gas, Streaming & More</a></li>
              <li><a href="#companion-fare">The Companion Fare Explained</a></li>
              <li><a href="#travel-benefits">Travel Benefits That Add Real Value</a></li>
              <li><a href="#elite-status-perks">Elite Status Perks in 2025</a></li>
              <li><a href="#mileage-plan-changes">What Changed in Alaska Mileage Plan for 2025?</a></li>
              <li><a href="#sweet-spot-redemptions">Sweet Spot Redemptions with Alaska Miles</a></li>
              <li><a href="#card-shortcomings">Where This Card Falls Short (Card Protections)</a></li>
              <li><a href="#final-verdict">Final Verdict: Who Should Get the Alaska Visa?</a></li>
            </ol>
          </nav>

          <section id="introduction" className={styles.reviewSection}>
            {/* Corrected to use reviewDataNew */}
            <h2>I. Introduction: The {reviewDataNew.cardName} for West Coasters</h2>
            <p>If you're eyeing the {reviewDataNew.cardName}, especially as a West Coaster, you want the real story. Is it still a top-tier travel companion in 2025, or are there better options? This review breaks down exactly what you get, what it costs, and who this card genuinely makes sense for – all to help you decide if it deserves a spot in your wallet.</p>
          </section>

          <section id="annual-fee-interest" className={styles.reviewSection}>
            <h2>II. Annual Fee and Interest: Is It Worth It?</h2>
            {/* Corrected to use reviewDataNew */}
            <p>The {reviewDataNew.cardName} comes with a ${reviewDataNew.annualFee} annual fee. This is pretty standard for an airline rewards card. The big question is always: will the benefits you use outweigh this yearly cost? If you can save more than ${reviewDataNew.annualFee} through perks like the Companion Fare or free checked bags, then yes, it can definitely be worth it.</p>
            <p>Now, a crucial heads-up on interest: if you carry a balance, the Annual Percentage Rate (APR) on purchases is a variable 20.24% to 28.24%. Honestly, to get true value from any rewards card, including this one, you should aim to pay your balance in full each month. Interest charges can quickly wipe out the value of any miles you earn. Balance transfers also fall into this APR range, plus a 4% fee. Cash advances? Best to avoid them due to higher APRs and fees.</p>
            <p>One solid gold perk: no foreign transaction fees. This is essential for international travel, saving you around 3% on purchases made abroad. Just be mindful of potential late payment fees (up to $40) and a higher penalty APR if you miss a due date.</p>
          </section>

          <section id="welcome-offer" className={styles.reviewSection}>
            <h2>III. Welcome Offer in 2025: What You Get</h2>
            {/* Corrected to use reviewDataNew */}
            <p>As of early 2025, the typical welcome offer for new {reviewDataNew.cardName} cardholders is quite appealing. You can usually expect to earn 60,000 bonus miles plus Alaska's Famous Companion Fare (this initial one lets a companion fly with you from $99 plus taxes/fees, starting around $23). To qualify, you'll generally need to spend $3,000 or more on purchases within the first 90 days of opening your account.</p>
            <p>Those 60,000 bonus miles are valuable – travel experts often value Alaska miles at 1.3 to 1.5 cents each, making the miles alone worth potentially $780 to $900 towards flights. Getting the Companion Fare upfront is a significant perk, offering immediate savings. Some offers may also include a percentage-off discount code for a future flight, but these often come with specific booking windows, travel dates, and fare restrictions, so its actual value can vary greatly depending on your flexibility.</p>
          </section>

          <section id="earning-miles" className={styles.reviewSection}>
            <h2>IV. Earning Miles: Alaska, Gas, Streaming & More</h2>
            <p>This card lets you rack up miles in a few key ways:</p>
            <ul>
              <li>On Alaska Airlines purchases: Earn a generous 3 miles for every $1 spent on eligible flights, in-flight purchases, and vacation packages.</li>
              <li>On everyday spending: Get 2 miles for every $1 spent on eligible gas, EV charging, cable, streaming services, and local transit (including rideshares, trains, and ferries).</li>
              <li>On all other purchases: Earn 1 mile for every $1 spent.</li>
            </ul>
            {/* Corrected to use reviewDataNew */}
            <p>If you have an eligible Bank of America checking, savings, or investment account, you can get a 10% relationship bonus on all miles earned from card purchases, boosting your earning rates slightly. A significant enhancement for 2025 is the ability to earn 1 Elite Qualifying Mile (EQM) for every $3 spent on your card, up to 30,000 EQMs annually. This offers a tangible way to help you reach Alaska Airlines elite status through your card spending.</p>
             <div className={styles.tableResponsive}>
                {/* Corrected to use reviewDataNew */}
                <h4 style={{textAlign: 'center'}}>Table 1: Earning Miles with the {reviewDataNew.cardName}</h4>
                <table className={`${styles.comparisonTable} ${styles.noStickyFirstCol}`}>
                    <thead>
                        <tr>
                            <th>Spending Category</th>
                            <th>Miles per $1</th>
                            <th>Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Eligible Alaska Airlines purchases (flights, in-flight, vacation packages)</td>
                            <td>3X</td>
                            <td>Core earning for loyal flyers</td>
                        </tr>
                        <tr>
                            <td>Eligible gas, EV charging, cable, streaming services, local transit (rideshares, trains, ferries)</td>
                            <td>2X</td>
                            <td>Broad everyday categories</td>
                        </tr>
                        <tr>
                            <td>All other purchases</td>
                            <td>1X</td>
                            <td>Base earn rate</td>
                        </tr>
                        <tr>
                            <td>Relationship Bonus</td>
                            <td>+10% on earned miles</td>
                            <td>Requires eligible Bank of America account</td>
                        </tr>
                         <tr>
                            <td>Elite Qualifying Miles (EQMs)</td>
                            <td>1 EQM per $3 spent</td>
                            <td>Up to 30,000 EQMs annually; helps achieve elite status</td>
                        </tr>
                    </tbody>
                </table>
            </div>
          </section>

          {/* This inline CTA section was already correctly using reviewDataNew for cardName and applyLink. */}
          {/* Ensured ratesLink from reviewDataNew is used. */}
          <section id="cta-Alaska-Airlines-Visa-Signature-Card" className={styles.ctaSection}> {/* Changed ID to be more CSS friendly */}
              <h2>Interested in the <b>{reviewDataNew.cardName}</b>?</h2>
              <div className={styles.ctaButtons}>
                <a href={reviewDataNew.applyLink} className={`${styles.btn} ${styles.btnApply}`} title="From card issuer's secure site" target="_blank" rel="noopener noreferrer sponsored">Apply Now</a>
                <a href={reviewDataNew.ratesLink} className={`${styles.btn} ${styles.btnRates}`} target="_blank" rel="noopener noreferrer sponsored">See Rates & Fees</a>
              </div>
          </section>

          <section id="companion-fare" className={styles.reviewSection}>
            <h2>V. The Companion Fare Explained</h2>
            {/* Corrected to use reviewDataNew */}
            <p>The Famous Companion Fare is a standout perk of the Alaska Visa. Here's the deal: after your first year's welcome bonus fare, you can earn another one each year around your account anniversary. The main catch? You need to have spent $6,000 or more on the card in the prior year (that’s an average of $500 a month).</p>
            <p>If you meet that spend, you get a discount code. This lets your travel buddy fly with you on a round-trip Alaska Airlines coach ticket for just a $99 base fare, plus taxes and fees (which start from about $23). So, they could be flying for as little as $122 – a huge potential saving, easily offsetting the {reviewDataNew.annualFee} annual fee.</p> {/* Used reviewDataNew.annualFee here */}
            <p>The code usually shows up in your Alaska Mileage Plan account a bit after your card anniversary. You'll typically have 12 months to book the travel, though the trip itself can be later. Plus, there are no blackout dates on Alaska-operated flights when using the code.</p>
            <p>Big news for 2025: starting mid-summer, this Companion Fare will also be usable on select Hawaiian Airlines flights! This is a fantastic boost, especially for West Coast to Hawaii trips. Remember, the cardholder must be traveling or purchasing, and you can’t use miles for the companion’s ticket, but you both earn miles on the flight, and these tickets are eligible for upgrades.</p>
          </section>

          <section id="travel-benefits" className={styles.reviewSection}>
            <h2>VI. Travel Benefits That Add Real Value</h2>
            <p>Beyond the Companion Fare, the card offers other perks that can genuinely save you money and hassle:</p>
            <ul>
              <li><strong>First Free Checked Bag:</strong> This is a big one. The primary cardholder and up to six other guests on the same reservation each get their first checked bag free on flights marketed and operated by Alaska Airlines (and now Hawaiian Airlines, when purchased with the card). With bag fees typically $35 each way, a couple saves $140 on a single roundtrip – easily covering the {reviewDataNew.annualFee} annual fee.</li> {/* Used reviewDataNew.annualFee here */}
              <li><strong>Priority Boarding:</strong> Cardholders and those on their reservation (when the flight is paid for with the card) get to board earlier, making it easier to find overhead bin space.</li>
              <li><strong>20% Back on Inflight Purchases:</strong> Receive a 20% statement credit on purchases of food, beverages, and Wi-Fi aboard Alaska Airlines flights when paying with your card.</li>
              <li><strong>Alaska Lounge+ Discount:</strong> Get a $100 discount on an annual Alaska Lounge+ Membership when purchased with the card. This is most valuable for very frequent flyers.</li>
            </ul>
            <p>The free checked bag benefit, in particular, delivers consistent, easily quantifiable value trip after trip.</p>
             <div className={styles.tableResponsive}>
                <h4 style={{textAlign: 'center'}}>Table 2: Key Travel Perks</h4>
                <table className={styles.comparisonTable}>
                    <thead>
                        <tr>
                            <th>Benefit</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>First Free Checked Bag</td>
                            <td>For cardholder + up to 6 guests on same reservation (Alaska & Hawaiian flights). Potential $35+ savings per person, each way.</td>
                        </tr>
                        <tr>
                            <td>Priority Boarding</td>
                            <td>For cardholder and travel companions on the same reservation.</td>
                        </tr>
                         <tr>
                            <td>Inflight Purchase Rebate</td>
                            <td>20% back as statement credit on food, beverages, Wi-Fi on Alaska flights.</td>
                        </tr>
                        <tr>
                            <td>Alaska Lounge+ Discount</td>
                            <td>$100 off annual membership.</td>
                        </tr>
                        <tr>
                            <td>No Foreign Transaction Fees</td>
                            <td>Saves ~3% on purchases abroad.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
          </section>

          <section id="elite-status-perks" className={styles.reviewSection}>
            <h2>VII. Elite Status Perks in 2025</h2>
            {/* Corrected to use reviewDataNew */}
            <p>Reaching elite status with Alaska Airlines (MVP, MVP Gold, etc.) unlocks valuable benefits like upgrades, bonus miles, and priority services. For 2025, the {reviewDataNew.cardName} plays a more direct role:</p>
            <ul>
              <li><strong>Earn EQMs with Card Spend:</strong> As mentioned, earning 1 EQM for every $3 spent (up to 30,000 EQMs annually) is a significant pathway to help you qualify or requalify for status. For example, MVP status requires 20,000 EQMs.</li>
              <li><strong>Mileage Plan Enhancements:</strong> Alaska's loyalty program itself has seen upgrades for 2025 that benefit elite members and those aspiring to be. This includes earning EQMs on award tickets (based on distance flown on Alaska and partners), and new Milestone Rewards that offer choices of perks at various EQM thresholds (starting at 10,000 EQMs), even between traditional elite tiers.</li>
              <li><strong>Upgrade Prioritization:</strong> For 2025, upgrade waitlists are prioritized based on elite tier and EQMs earned, and MVP members are now eligible for complimentary space-available upgrades for a companion.</li>
            </ul>
            <p>These changes make achieving and enjoying elite status more accessible and rewarding.</p>
          </section>

          <section id="mileage-plan-changes" className={styles.reviewSection}>
            <h2>VIII. What Changed in Alaska Mileage Plan for 2025?</h2>
            <p>Beyond the elite-specific enhancements, Alaska Airlines has made its Mileage Plan more robust overall for 2025:</p>
            <ul>
              <li><strong>Partner Integration:</strong> Alaska's membership in the oneworld Alliance continues to provide global reach. The deepening integration with Hawaiian Airlines (set to join oneworld in 2026) is a major plus, expanding options, especially for West Coast travelers. Remember, the Companion Fare will be usable on select Hawaiian flights from mid-summer 2025.</li>
              <li><strong>Multi-Carrier Redemptions:</strong> A significant upcoming improvement (launching winter 2025, starting with US-Europe) is the ability to combine flights from different global partners on a single award itinerary. This will simplify booking complex international trips using miles.</li>
              <li><strong>Simplified Partner Earning:</strong> When booking flights with many direct partners through alaskaair.com, members earn 100% of the miles flown, with increased mileage bonuses for premium cabin travel on partners in 2025.</li>
            </ul>
            <p>These changes aim to make Mileage Plan more flexible and powerful for redeeming your hard-earned miles globally.</p>
          </section>

          <section id="sweet-spot-redemptions" className={styles.reviewSection}>
            <h2>IX. Sweet Spot Redemptions with Alaska Miles</h2>
            <p>Alaska Mileage Plan miles are widely considered some of the most valuable airline miles, often valued at 1.3 to 1.5 cents apiece. There are several ways to get great value:</p>
            <ul>
              <li><strong>No Blackout Dates on Alaska Flights:</strong> When redeeming miles for Alaska's own flights, you benefit from no blackout dates.</li>
              <li><strong>Partner Awards:</strong> Mileage Plan truly shines with its diverse range of airline partners, especially for international premium cabin travel. Savvy travelers find "sweet spots" on airlines like Starlux to Asia, or LATAM to South America.</li>
              <li><strong>Free Stopovers:</strong> A unique and fantastic feature is the ability to add a free stopover on most one-way award tickets, even on international partner awards. This essentially lets you visit two destinations for the miles of one. For example, you could fly from the US to London on British Airways, have a stopover for a few days, and then continue to another European city, all as part of one award.</li>
            </ul>
            <p>Exploring partner awards and utilizing stopovers are key to maximizing your Alaska miles.</p>
          </section>

          <section id="card-shortcomings" className={styles.reviewSection}>
            <h2>X. Where This Card Falls Short (Card Protections)</h2>
            {/* Corrected to use reviewDataNew */}
            <p>Now, for an area where this card, frankly, doesn't shine: built-in travel and purchase protections. The personal {reviewDataNew.cardName} appears to lack comprehensive, issuer-provided travel insurance benefits like trip cancellation/interruption coverage, significant lost luggage reimbursement, or an auto rental collision damage waiver (CDW). Many other travel cards in the same ${reviewDataNew.annualFee} annual fee range typically include these as standard.</p>
            <p>While you get $0 liability for fraudulent transactions and free FICO score access, the absence of robust travel protections is a notable drawback for a card marketed towards travelers. Alaska Airlines does promote travel insurance you can purchase separately, but this is an added cost and not an automatic card benefit. If strong, automatic travel insurance is a high priority for you, this card likely isn't your best primary option for travel bookings.</p>
          </section>

          <section id="final-verdict" className={styles.reviewSection}>
            <h2>XI. Final Verdict: Who Should Get the Alaska Visa?</h2>
            {/* Corrected to use reviewDataNew */}
            <p>So, after breaking it all down, who is the {reviewDataNew.cardName} genuinely a good fit for in 2025?</p>
            
            <section id="ideal-cardholder" className={styles.reviewSubSection}>
              <h3>A. This card is likely a great choice if:</h3>
              <ul>
                <li>You're a loyal Alaska Airlines flyer, especially if you live on the West Coast.</li>
                <li>You frequently travel with at least one other person and can maximize the annual Companion Fare (and are comfortable with the $6,000 annual spend to earn it after the first year).</li>
                <li>You value free checked bags – the savings here alone can easily offset the annual fee for individuals, couples, or families.</li>
                <li>You're aiming for Alaska Airlines elite status and can leverage the EQMs earned through card spending.</li>
                <li>You appreciate the value and flexibility of Alaska Mileage Plan miles, especially for partner awards and stopovers.</li>
              </ul>
            </section>

            <section id="consider-alternatives" className={styles.reviewSubSection}>
              <h3>B. You might want to reconsider, or look at other options, if:</h3>
              <ul>
                <li>Comprehensive travel insurance and purchase protections baked into your card are essential for your peace of mind. This card is weak here.</li>
                <li>You rarely fly Alaska Airlines or its partners.</li>
                <li>You typically travel solo (the Companion Fare won't be as valuable).</li>
                <li>You don't anticipate spending $6,000 annually on the card to earn the anniversary Companion Fare.</li>
                <li>You tend to carry a credit card balance – the interest charges will likely outweigh the rewards.</li>
              </ul>
            </section>
            
            <section id="editors-essential-takeaways" className={`${styles.reviewSubSection} ${styles.eetaSection || ''}`}>
              <h3>C. Editor's Essential Takeaways (EETA)</h3>
              {/* Corrected to use reviewDataNew */}
              <p>Ultimately, the {reviewDataNew.cardName} continues to offer significant, tangible value for its target audience, particularly with the 2025 enhancements. The Companion Fare and free checked bags are powerful money-savers. Just be sure its strengths align with your travel habits and that you're comfortable with its shortcomings, especially regarding travel protections. For the right West Coast traveler, it remains a very compelling co-branded airline card.</p>
            </section>
          </section>

        </article>
      </main>

      

        {/* <Footer /> */} {/* Uncomment if you have a Header component */}
    </>
  );
}