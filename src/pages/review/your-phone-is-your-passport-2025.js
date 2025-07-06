// File: pages/reviews/your-phone-is-your-passport-2025.js
"use client"; // 👈 Add this line at the very top

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/NoFTFCardsReview.module.css'; // Reusing your excellent, existing styles

// ─────────────────────────────────────────────────────────────────────────────
// 🔗 CONFIG
// ─────────────────────────────────────────────────────────────────────────────
const SITE_BASE_URL = 'https://www.travelcardinsider.com';
const PAGE_PATH = '/reviews/your-phone-is-your-passport-2025';
const PAGE_URL = `${SITE_BASE_URL}${PAGE_PATH}`;
const SITE_NAME = 'Travel Card Insider';
const HERO_IMAGE_SRC = '/images/phone-and-passport-hero.webp'; // ❗ Replace with your optimised hero image
const HERO_IMAGE_ALT = 'A smartphone displaying a digital passport next to a physical passport, symbolizing modern travel.';
const DATE_PUBLISHED = '2025-07-07'; // ✏️ Adjust to your actual publish date
const DATE_MODIFIED = '2025-07-07'; // ✏️ Update whenever you edit copy

// ─────────────────────────────────────────────────────────────────────────────
// 👤 AUTHOR INFO
// ─────────────────────────────────────────────────────────────────────────────
const author = {
  name: 'Dilan Madushanka',
  title: 'Lead Travel Tech Analyst',
  image: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', // ❗ Your 40x40px web‑optimised headshot
  imageLarge: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', // ❗ Your 60x60px for tooltip
  bio: 'Dilan is a leading expert in the intersection of travel and technology, focusing on how digital tools and financial products can enhance the travel experience and provide critical safety nets for globetrotters.',
  social: {
    linkedin: 'https://www.linkedin.com/in/dilan-madushanka-b65293365',
    twitter: 'https://x.com/team_dilan',
    email: 'team@travelcardinsider.com',
  },
};


// ─────────────────────────────────────────────────────────────────────────────
// 🧠 HELPERS - JSON-LD SCHEMA
// ─────────────────────────────────────────────────────────────────────────────
function generateJsonLD() {
    const breadcrumbsSchema = {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_BASE_URL, },
          { '@type': 'ListItem', position: 2, name: 'Guides', item: `${SITE_BASE_URL}/guides`, },
          { '@type': 'ListItem', position: 3, name: 'Your Phone is Your Passport: The Credit Card Perk That Can Save Your Trip', item: PAGE_URL, },
        ],
      };

    const articleSchema = {
        '@type': 'NewsArticle',
        mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
        headline: 'Your Phone is Your Passport: The Little-Known Credit Card Perk That Can Save Your Trip in 2025',
        description: 'Discover how credit card cell phone protection can save your trip from disaster. We review the top cards from Amex, Chase, Capital One, and Wells Fargo for this essential travel benefit.',
        image: [`${SITE_BASE_URL}${HERO_IMAGE_SRC}`],
        author: {
          '@type': 'Person',
          name: author.name,
          url: author.social.linkedin || SITE_BASE_URL,
        },
        publisher: {
          '@type': 'Organization',
          name: SITE_NAME,
          logo: {
            '@type': 'ImageObject',
            url: `${SITE_BASE_URL}/images/travel-card-insider-logo-120.png`, // ❗ Ensure this logo exists
          },
        },
        datePublished: DATE_PUBLISHED,
        dateModified: DATE_MODIFIED,
    };

    return JSON.stringify(
        {
          '@context': 'https://schema.org',
          '@graph': [
            articleSchema,
            breadcrumbsSchema,
          ],
        },
        null,
        2
      );
}


// ─────────────────────────────────────────────────────────────────────────────
// 🌐 COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
function CellPhoneProtectionReviewPage() {
    return (
        <>
            <Head>
                {/* Core SEO */}
                <title>Credit Card Cell Phone Protection: A Traveler's Guide (2025) | {SITE_NAME}</title>
                <meta
                name="description"
                content="Our 2025 guide to the best credit cards for cell phone insurance. See how this perk can save your trip and compare top cards from Amex, Capital One, Chase, and Wells Fargo."
                />
                <meta name="viewport" content="width=device-width,initial-scale=1" />
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                <meta name="keywords" content="credit card cell phone protection, travel insurance, smartphone insurance, best credit cards for travel, chase ink preferred, amex platinum, capital one venture x, wells fargo autograph" />
                <link rel="canonical" href={PAGE_URL} />

                {/* Open Graph */}
                <meta property="og:type" content="article" />
                <meta property="og:title" content={`Your Phone is Your Passport: The Ultimate Guide to Credit Card Cell Phone Protection | ${SITE_NAME}`} />
                <meta property="og:description" content="A shattered phone can ruin your trip. Learn how the right credit card offers complimentary cell phone insurance, turning a catastrophe into an inconvenience." />
                <meta property="og:url" content={PAGE_URL} />
                <meta property="og:site_name" content={SITE_NAME} />
                <meta property="og:image" content={`${SITE_BASE_URL}${HERO_IMAGE_SRC}`} />
                <meta property="og:image:alt" content={HERO_IMAGE_ALT} />
                <meta property="og:locale" content="en_US" />
                <meta property="article:published_time" content={DATE_PUBLISHED} />
                <meta property="article:modified_time" content={DATE_MODIFIED} />
                <meta property="article:author" content={author.name} />
                <meta property="article:section" content="Travel Guides" />
                <meta property="article:tag" content="Cell Phone Protection" />
                <meta property="article:tag" content="Credit Card Benefits" />
                <meta property="article:tag" content="Travel Tech" />
                <meta property="article:tag" content="2025" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`The Traveler's Guide to Credit Card Cell Phone Insurance (2025) - ${SITE_NAME}`} />
                <meta name="twitter:description" content="Don't let a broken phone derail your vacation. Our guide breaks down the essential credit card perk of cell phone protection." />
                <meta name="twitter:image" content={`${SITE_BASE_URL}${HERO_IMAGE_SRC}`} />
                {author.social.twitter && <meta name="twitter:creator" content={`@${author.social.twitter.split('/').pop()}`} />}
                
                {/* JSON‑LD Schema */}
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: generateJsonLD() }} />
            </Head>

            <main className={styles.reviewContainer}>
                <header className={styles.reviewHeader}>
                  <h1>Your Phone is Your Passport: The Little-Known Credit Card Perk That Can Save Your Trip in 2025</h1>
                </header>
                
                <div className={styles.heroSection}>
                    <Image
                        src={HERO_IMAGE_SRC}
                        alt={HERO_IMAGE_ALT}
                        layout="responsive"
                        width={900}
                        height={450}
                        objectFit="cover"
                        priority
                        className={styles.heroImage}
                    />
                </div>
                
                <article>
                    <section className={styles.reviewSection}>
                        <p>In the world of travel, some disasters are bigger than others. A missed flight is a headache. Bad weather is a disappointment. But a shattered or stolen smartphone? It’s a full-blown catastrophe.</p>
                        <p>Imagine you’re navigating the bustling streets of Tokyo, relying on your phone for maps, your train pass, and to translate the menu for dinner. One slip, one moment of distraction, and your $1,200 lifeline is gone. In an instant, you're not just disconnected; you're digitally stranded. Your boarding passes, hotel confirmations, digital wallet, and connection to everyone back home—vanished.</p>
                        <p>This single point of failure is the modern traveler’s nightmare. The cost isn't just the price of a new device; it's the chaos that follows. But what if a feature you already have could turn this travel nightmare into a mere inconvenience? Check out our list of the <Link href="/reviews/best-travel-credit-cards-2025"><a>best travel credit cards for 2025</a></Link> to learn more.</p>
                        <p>Enter the hero of travel perks: complimentary cell phone protection, offered by a growing number of US credit cards. As card issuers compete for your loyalty in 2025, they’re moving beyond points and miles to offer tangible, real-world value. This insurance is a prime example, a powerful benefit hiding in the fine print that can reimburse you for the repair or replacement of your phone. But not all policies are created equal. Understanding how to unlock this value is the key to traveling with true peace of mind.</p>
                    </section>
                    
                    <section id="how-it-works" className={styles.reviewSection}>
                        <h2>How It Really Works: The Rules of the Game</h2>
                        <p>Getting this "free" insurance isn't automatic. It's governed by a few critical rules you need to know before you travel.</p>
                        <p>First and foremost, you must pay your monthly cell phone bill with the eligible credit card. This is the non-negotiable golden rule. Partial payments don't count, and coverage typically doesn't start the moment you pay. Protection usually kicks in on the first day of the month after your payment posts. To be safe, set your eligible card to autopay your wireless bill and leave it.</p>
                        <p>So, what’s covered? Generally, policies reimburse you for two main events: physical damage that impairs your phone's function and outright theft. For a theft claim, you'll almost certainly need to file a police report, often within 48 hours of the incident <a href="https://www.wellsfargo.com/credit-cards/autograph-visa/guide-to-benefits/" target="_blank" rel="noopener noreferrer sponsored">[Link to Official Source]</a>.</p>
                        <p>What’s almost never covered is simply losing your phone—what insurers call "mysterious disappearance." However, a crucial evolution in policy language has created a powerful exception. Some cards, notably from Capital One and Wells Fargo, now cover "involuntary and accidental parting."</p>
                        <p>This is a game-changer. It’s defined as an unintended separation where the phone's location is known, but it's impractical to get it back. Think of it this way: a phone that vanishes from your pocket is lost and not covered. A phone you watch tumble from a ski lift into deep powder or slip from your grasp into a lake is a case of "involuntary parting." You know where it is, but it’s gone for good. For adventurous travelers, this specific language provides a far superior safety net.</p>
                    </section>
                    
                    <section id="top-picks" className={styles.reviewSection}>
                        <h2>The 2025 Contenders: A Breakdown for Every Traveler</h2>
                        <p>Choosing the right card means balancing the insurance policy against the card's annual fee and overall rewards. Here’s a look at the top picks for US travelers this year.</p>

                        <h3>For the Luxury Globetrotter: The Platinum Card® from American Express</h3>
                        <p>The Amex Platinum remains a status symbol for a reason. Its phone protection is robust, offering up to $800 per claim with a low $50 deductible. Its standout feature is its policy explicitly stating it covers a "Cracked Screen" <a href="https://global.americanexpress.com/card-benefits/detail/cell-phone-protection/platinum" target="_blank" rel="noopener noreferrer sponsored">[Link to Official Source]</a>, removing the ambiguity found elsewhere. While the $695 annual fee is steep, serious travelers who maximize the unparalleled lounge access and suite of travel credits will find it more than pays for itself. Read our full <Link href="/cards/amex-platinum-review"><a>review of the Amex Platinum card</a></Link>.</p>

                        <h3>For the Savvy Strategist: Capital One Venture X Rewards Credit Card</h3>
                        <p>The Venture X is the modern answer to the premium travel card. It matches the Amex Platinum’s coverage ($800 per claim, $50 deductible) but at a more accessible $395 annual fee—which is almost entirely erased by a $300 annual travel credit and 10,000 anniversary miles. Its ace in the hole is the "involuntary and accidental parting" coverage, making it the top choice for adventurers and families, as it protects every phone line on the monthly bill <a href="https://www.capitalone.com/credit-cards/venture-x/" target="_blank" rel="noopener noreferrer sponsored">[Link to Official Source]</a>. Explore our in-depth <Link href="/cards/capital-one-venture-x-review"><a>Capital One Venture X review</a></Link> for more details.</p>

                        <h3>For the Entrepreneur & Road Warrior: Ink Business Preferred® Credit Card</h3>
                        <p>For anyone who can qualify for a business card (including freelancers and sole proprietors), the Ink Business Preferred is in a league of its own. It boasts a market-leading $1,000 per claim, with up to three claims per year for a massive $3,000 potential annual max. The $100 deductible is a small price for such superior limits. Better yet, the card earns 3X points on phone services, so you’re richly rewarded for the very act that activates your best-in-class insurance <a href="https://creditcards.chase.com/business-credit-cards/ink/business-preferred" target="_blank" rel="noopener noreferrer sponsored">[Link to Official Source]</a>.</p>

                        <h3>For the Budget-Conscious Adventurer: Wells Fargo Autograph℠ Card</h3>
                        <p>This no-annual-fee powerhouse is a fan favorite for good reason. It offers solid protection ($600 per claim) with the lowest deductible on the market at just $25. It also includes the valuable "involuntary parting" coverage. The one catch is that its policy excludes cosmetic screen damage unless it impacts the phone’s functionality <a href="https://www.wellsfargo.com/credit-cards/autograph-visa/guide-to-benefits/" target="_blank" rel="noopener noreferrer sponsored">[Link to Official Source]</a>. This means if you file a claim for a cracked screen, you'll need to show it's more than just a cosmetic issue.</p>
                    </section>

                    <section id="filing-a-claim" className={styles.reviewSection}>
                        <h2>Navigating a Claim: From Disaster to Deposit</h2>
                        <p>Knowing you're covered is one thing; getting your money back is another. The claims process, handled by third-party administrators, requires prompt action and meticulous documentation. Our <Link href="/guides/how-to-file-a-credit-card-insurance-claim"><a>guide on filing a claim</a></Link> walks you through the process step-by-step.</p>
                        <p>If your phone is damaged or stolen, notify the benefits administrator immediately (usually within 60 days) and file a police report within 48 hours for theft. You will need to submit an arsenal of documents, including your credit card statement showing the phone bill payment, the phone bill itself, and a repair estimate or receipt for the replacement device.</p>
                        <p>Real-world experiences show that a well-documented claim can be surprisingly smooth. One Capital One Venture X user who cracked their camera had their claim for a $238 repair approved in less than 24 hours. A business owner with the Ink Business Preferred card saw a nearly $700 iPhone replacement for their daughter’s phone become a manageable $100 deductible. The key in both cases was providing every required document upfront.</p>
                    </section>
                    
                    <section id="final-verdict" className={styles.reviewSection}>
                        <h2>The Final Verdict: Insure Your Lifeline Wisely</h2>
                        <p>In 2025, your smartphone is your most critical piece of travel gear. Relying on luck to protect it is no longer a viable strategy. Credit card cell phone protection has become an essential, high-value benefit that transforms a card from a simple payment tool into a powerful instrument for risk management. To learn more about other hidden benefits, check out our guide on <Link href="/learn/understanding-credit-card-perks"><a>understanding credit card perks</a></Link>.</p>
                        <p>Whether you're a luxury traveler best served by the Amex Platinum's clear-cut screen coverage, a family who needs the multi-line protection of the Venture X, or a business owner leveraging the massive limits of the Ink Business Preferred, there is a card that fits your needs. Even no-fee cards like the Wells Fargo Autograph provide a robust safety net that far outweighs forgoing a carrier's autopay discount.</p>
                        <p>Before your next trip, take a moment to review your wallet. Are you paying your phone bill with the right card? If not, you’re leaving one of your most valuable travel benefits on the table. Make the switch, and travel with the confidence that when the unexpected happens, your lifeline is insured.</p>
                    </section>
                </article>

                <footer className={styles.reviewFooter}>
                    <p className={styles.disclaimer}>
                      <strong>Disclaimer:</strong> The terms and coverage limits for credit card benefits are subject to change. Cardholders should always consult their official Guide to Benefits for the most current and complete information. You can find general benefit information on the official network pages for <a href="https://www.mastercard.us/en-us/personal/find-a-card/card-benefits.html" target="_blank" rel="noopener noreferrer sponsored">Mastercard</a> and <a href="https://usa.visa.com/support/consumer/card-benefits.html" target="_blank" rel="noopener noreferrer sponsored">Visa</a>.
                    </p>
                </footer>
            </main>
        </>
    );
}

export default CellPhoneProtectionReviewPage;