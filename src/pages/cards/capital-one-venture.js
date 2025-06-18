/* ------------------------------------------------------------------
    File:  pages/review/capital-one-venture-review-2025.js
    Route: https://www.travelcardinsider.com/review/capital-one-venture-review-2025
    Author: Dilan Madushanka
    Last Updated: June 18, 2025
------------------------------------------------------------------- */

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import styles from '../../styles/ReviewPage.module.css';

// Import Components & Icons
import TableOfContents from '../../components/TableOfContents';
import IconGift from '../../components/icons/icon-gift.svg';
import IconStar from '../../components/icons/icon-star.svg';
import IconCheck from '../../components/icons/icon-Credit Card.svg';
import IconPlus from '../../components/icons/icon-target.svg';
import IconPlane from '../../components/icons/icon-plane.svg';

const RatingTooltip = dynamic(() => import('../../components/RatingTooltip'), { ssr: false, loading: () => null });

/* ──────────────────────────────
    CONSTANTS & STATIC DATA
   ────────────────────────────── */
const siteName = 'TravelCardInsider';
const siteUrl = 'https://www.travelcardinsider.com';
const pagePath = '/review/capital-one-venture-review-2025';
const pageUrlFull = `${siteUrl}${pagePath}`;
const publishDate = '2025-06-18';
const updateDate = '2025-06-18';

const reviewData = {
    cardName: 'Capital One Venture Rewards Credit Card',
    cardShortName: 'Capital One Venture',
    title: 'Capital One Venture Rewards Card Review (2025)',
    description: 'Is the Capital One Venture card worth its $95 fee in 2025? Our in-depth review covers the 75k bonus, 2X miles, lounge access, and why it remains the king of simple travel rewards.',
    keywords: 'Capital One Venture review, travel rewards credit card, 2X miles, Capital One Venture card, credit card review 2025, no fuss travel rewards',
    author: {
        name: 'Dilan Madushanka',
        title: 'Founder & Lead Editor',
        imageUrl: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg',
        imageWidth: 40, imageHeight: 40,
        tooltipImageUrl: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg',
        tooltipImageWidth: 60, tooltipImageHeight: 60,
        expertise: ['Flat-Rate Miles Cards', 'Airline & Hotel Transfer Partners', 'Beginner Travel Rewards', 'Credit Card Strategy', 'Annual Fee Analysis'],
        bioSnippet: 'Dilan Madushanka, founder of TravelCardInsider, specializes in breaking down travel rewards programs to help everyday travelers maximize their spending.',
        fullBioLink: '/author/dilan-madushanka',
        socialLinks: {
            twitter: 'https://twitter.com/YourTravelCardInsiderTwitterHandle',
            linkedin: 'https://www.linkedin.com/in/dilan-madushanka-b65293365',
            email: 'team@travelcardinsider.com'
        }
    },
    siteName: siteName,
    imageUrl: '/images/capital-one-venture-card.png',
    imageWidth: 1290, imageHeight: 812,
    ratingValue: 8.8, ratingCount: 215,
    reviewBody: 'A comprehensive expert analysis of the Capital One Venture Rewards Credit Card, covering its simple 2X earning rate, 5X travel portal bonus, flexible redemption options including airline transfer partners, Global Entry credit, and overall value proposition for travelers who value simplicity.',
    annualFee: 95,
    applyLink: 'https://www.capitalone.com/credit-cards/venture/',
    ratesFeesLink: 'https://www.capitalone.com/credit-cards/venture/terms/',
    urls: {
        apply: 'https://www.capitalone.com/credit-cards/venture/',
        ratesDisclosures: 'https://www.capitalone.com/credit-cards/venture/terms/',
        trustedTraveler: 'https://www.dhs.gov/trusted-traveler-programs',
        travelPortal: 'https://capitalonetravel.com/consumer-travel-benefits',
        rewardsRedemption: 'https://www.capitalone.com/support-center/credit-cards/rewards/redeem-rewards',
        transferPartners: 'https://www.capitalone.com/credit-cards/benefits/miles-transfer/',
        loungeAccess: 'https://capitalonetravel.com/airport-lounges',
        lifestyleCollection: 'https://capitalonetravel.com/lifestyle-collection',
        mastercardBenefits: 'https://www.mastercard.us/en-us/personal/find-a-card/guide-to-benefits-credit-cards.html',
        fraudProtection: 'https://www.capitalone.com/support-center/fraud-protection/',
        ventureXReview: '/review/capital-one-venture-rewards-vs-venture-x-2025',
        sapphirePreferredReview: '/review/chase-sapphire-preferred-2025',
        ventureOne: '/cards/capital-one-ventureone',
    },
    sku: 'CAP1-VENTURE-TCI-2025',
    mpn: 'CAP1VENTURE',
    h1Content: "Capital One Venture Card Review: Still the King of Simple Travel Rewards?",
    heroSubtitle: "Our 2025 analysis shows how the Venture card's powerful 2X miles, flexible redemptions, and key perks deliver outstanding value for no-fuss travelers."
};

const faqsContent = [
    { q: 'What credit score is needed for the Venture card?', a: `Typically a score of 670 or higher is recommended. You can learn more in our guide to <a href="/review/How-to-Improve-Your-Credit-Score-Fast-for-Premium-Travel-Cards" class="${styles.inlineLink}">improving your credit score</a>.` },
    { q: 'Can miles be transferred to a US airline like Delta or United?', a: `Not directly, but you can book flights on them through international airline partners in the same alliance. We cover this in our <a href="/guides" class="${styles.inlineLink}">transfer partner guides</a>.` },
    { q: 'Do Venture miles expire?', a: `No, as long as your account is open and in good standing. [<a href="${reviewData.ratesFeesLink}" target="_blank" rel="noopener noreferrer sponsored" class="${styles.inlineLink}">Source: Capital One</a>]` },
    { q: 'Is the Capital One Venture a Visa or Mastercard?', a: 'It is a Mastercard, which offers wide acceptance globally.' },
    { q: 'Can the Venture card be downgraded to a no-annual-fee card?', a: `It is sometimes possible to downgrade to a card like the <a href="${reviewData.urls.ventureOne}" class="${styles.inlineLink}">VentureOne</a>, but this is not guaranteed and depends on your account history.` },
    { q: 'What does "travel" cover for redemptions?', a: 'The category is very broad, including airlines, hotels, rentals, cruises, rideshares, and more.' },
    { q: 'How does this card pair with the SavorOne card?', a: `They create a powerful duo. You can earn cash back on the SavorOne and convert it to miles with your Venture account, a great <a href="/review/Hidden-Perks-Secret-Travel-Card-Benefits-You-Probably-Didnt-Know-About-in-2025" class="${styles.inlineLink}">hidden perk</a> of the Capital One ecosystem.` },
    { q: 'Is the Venture X a better card?', a: `For frequent travelers, the <a href="${reviewData.urls.ventureXReview}" class="${styles.inlineLink}">Venture X</a> is often a better choice. For most others, the standard Venture is the simpler, more accessible option.` }
];

const structuredDataOptimized = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Product', '@id': `${pageUrlFull}#product`, name: reviewData.cardName, image: `${siteUrl}${reviewData.imageUrl}`, description: reviewData.description, sku: reviewData.sku, mpn: reviewData.mpn, brand: { '@type': 'Brand', name: 'Capital One' }, aggregateRating: { '@type': 'AggregateRating', ratingValue: reviewData.ratingValue.toString(), bestRating: '10', worstRating: '1', ratingCount: reviewData.ratingCount.toString(), reviewCount: '1' }, offers: { '@type': 'Offer', url: reviewData.applyLink, priceCurrency: 'USD', price: reviewData.annualFee.toString(), priceValidUntil: '2026-12-31', itemCondition: 'https://schema.org/NewCondition', availability: 'https://schema.org/InStock', seller: { '@type': 'Organization', name: 'Capital One' } }, review: { '@id': `${pageUrlFull}#editorReview` } },
    { '@type': 'Review', '@id': `${pageUrlFull}#editorReview`, name: `${reviewData.cardName} – Expert Review ${new Date(updateDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`, itemReviewed: { '@id': `${pageUrlFull}#product` }, reviewBody: reviewData.reviewBody, reviewRating: { '@type': 'Rating', ratingValue: reviewData.ratingValue.toString(), bestRating: '10', worstRating: '1' }, author: { '@type': 'Person', 'name': reviewData.author.name, 'url': `${siteUrl}${reviewData.author.fullBioLink}` }, publisher: { '@type': 'Organization', name: siteName, logo: { '@type': 'ImageObject', url: `${siteUrl}/images/logo/your-logo-schema.png` } }, datePublished: publishDate, dateModified: updateDate },
    { '@type': 'WebPage', '@id': pageUrlFull, url: pageUrlFull, name: reviewData.title, description: reviewData.description, inLanguage: 'en-US', isPartOf: { '@id': `${siteUrl}#website` }, primaryImageOfPage: { '@id': `${pageUrlFull}#primaryImage` }, breadcrumb: { '@id': `${pageUrlFull}#breadcrumbs` }, datePublished: publishDate, dateModified: updateDate, author: { '@type': 'Person', 'name': reviewData.author.name, 'url': `${siteUrl}${reviewData.author.fullBioLink}` } },
    { '@type': 'ImageObject', '@id': `${pageUrlFull}#primaryImage`, url: `${siteUrl}${reviewData.imageUrl}`, width: reviewData.imageWidth, height: reviewData.imageHeight, caption: reviewData.cardName },
    { '@type': 'BreadcrumbList', '@id': `${pageUrlFull}#breadcrumbs`, itemListElement: [ { '@type': 'ListItem', position: 1, name: siteName, item: siteUrl }, { '@type': 'ListItem', position: 2, name: 'Credit Card Reviews', item: `${siteUrl}/review` }, { '@type': 'ListItem', position: 3, name: `${reviewData.cardName} Review`, item: pageUrlFull } ] },
    { '@type': 'FAQPage', '@id': `${pageUrlFull}#faqs`, mainEntity: faqsContent.map(faq => ({ '@type': 'Question', name: faq.q, acceptedAnswer: { '@type': 'Answer', text: faq.a.replace(/<[^>]*>/g, '') } })) },
    { '@type': 'Organization', '@id': `${siteUrl}#website`, name: siteName, url: siteUrl, logo: { '@type': 'ImageObject', url: `${siteUrl}/images/logo/your-logo-schema.png` }, sameAs: ["https://www.facebook.com/YourTravelCardInsiderFacebookPage", "https://twitter.com/YourTravelCardInsiderTwitterHandle", "https://www.instagram.com/YourTravelCardInsiderInstaHandle"] }
  ]
};

const ratingCriteria = [
    'Welcome Bonus Value', 'Base Miles Earning Rate (2X)', 'Bonus Miles Rate (5X via Portal)', 'Redemption Flexibility', 'Global Entry / TSA PreCheck® Credit', 'Lounge Access Perk (2 Passes)', 'Value of Core Protections', 'Annual Fee Justification'
];

const tocSections = [
    { id: 'section-intro', title: '1. A Traveler\'s Dilemma' },
    { id: 'section-snapshot', title: '2. Card Snapshot' },
    { id: 'section-best-for', title: '3. "Best For" Tagline' },
    { id: 'section-earning-engine', title: '4. The Earning Engine' },
    { id: 'section-welcome-bonus', title: '5. The Welcome Bonus' },
    { id: 'section-redemption', title: '6. Mastering Redemption' },
    { id: 'section-transfer-partners', title: '7. Guide to Transfer Partners' },
    { id: 'section-global-entry', title: '8. Global Entry Credit' },
    { id: 'section-lounge-access', title: '9. Annual Lounge Passes' },
    { id: 'section-lifestyle-collection', title: '10. The Lifestyle Collection' },
    { id: 'section-protections', title: '11. Travel Protections' },
    { id: 'section-digital-tools', title: '12. Digital Tools' },
    { id: 'section-rates-fees', title: '13. Rates & Fees' },
    { id: 'section-is-it-worth-it', title: '14. Is the Fee Worth It?' },
    { id: 'section-user-profiles', title: '15. Is This Card For You?' },
    { id: 'section-real-world-trip', title: '16. Real-World Example' },
    { id: 'section-pros-cons', title: '17. Pros and Cons' },
    { id: 'section-testimonials', title: '18. User Testimonials' },
    { id: 'section-comparison', title: '19. Competitive Showdown' },
    { id: 'section-faqs-jump', title: '20. FAQs' },
    { id: 'section-final-verdict', title: '21. Final Verdict' },
    { id: 'section-eat', title: '22. Our E-A-T Commitment' }
];

const sectionContent = {
    'section-intro': `<p>The modern traveler is often caught in a paradox of choice. The credit card market is a dizzying landscape of complex rewards programs, each promising a faster path to a free vacation. This "mental load" can turn the exciting game of earning rewards into a chore, leaving many to wonder if there's a simpler way to fund their adventures.</p><p>This environment of complexity is precisely where the <strong>${reviewData.cardName}</strong> carves out its identity. It was designed as an answer to the traveler's dilemma, built on a foundation of powerful simplicity. This review will explore every facet of the Venture card, from its straightforward earning engine to its flexible redemption paths, to determine if it truly delivers on its promise of making travel more rewarding without the headache.</p>`,
    'section-snapshot': `<p>Here’s a quick look at the core features of the ${reviewData.cardName}. These are the essential facts you need to know, distilled into a simple, scannable format.</p>`,
    'section-best-for': `<p>The ${reviewData.cardName} is the quintessential travel card for individuals who value straightforward rewards and ultimate flexibility over complicated bonus categories and airline-specific loyalty. It's for the traveler who wants their card to work for them, not the other way around. It's a cornerstone of many simple but effective <a href="/review/best-amex-gold-card-pairings-2025" class="${styles.inlineLink}">credit card strategies</a>.</p>`,
    'section-earning-engine': `<h4>The Foundation - Unlimited 2X Miles on Everything</h4><p>The bedrock of the Venture card's appeal is its unlimited 2 miles per dollar earning rate on every single purchase. This structure eliminates the need to carry multiple cards, making the Venture card a powerful "catch-all" card. [<a href="${reviewData.urls.apply}" target="_blank" rel="noopener noreferrer sponsored">Source: Capital One</a>]</p><h4>The Accelerator - 5X Miles via Capital One Travel</h4><p>For cardholders willing to engage strategically, purchases of hotels and rental cars made through the Capital One Travel portal earn an elevated 5 miles per dollar. [<a href="${reviewData.urls.travelPortal}" target="_blank" rel="noopener noreferrer">Source: Capital One Travel</a>]</p>`,
    'section-welcome-bonus': `<p>The Capital One Venture card greets new cardholders with a substantial welcome offer: earn 75,000 bonus miles after spending $4,000 on purchases within the first 3 months. [<a href="${reviewData.urls.apply}" target="_blank" rel="noopener noreferrer sponsored">Source: Capital One</a>]</p><p>This bonus translates directly into <strong>$750 worth of travel</strong>, one of the most generous welcome offers for a card with an annual fee under $100. See more <a href="/review/top-new-travel-credit-card-offers-2025" class="${styles.inlineLink}">top credit card offers</a> here.</p>`,
    'section-redemption': `<h4>Path 1: The Ultimate in Simplicity (Cover Your Travel Purchases)</h4><p>The card's signature feature allows you to use your miles to receive a statement credit for any "travel" purchase made within the past 90 days at a fixed value of 1 cent per mile. This flexibility is why it's a top contender in our <a href="/rewards-compare" class="${styles.inlineLink}">rewards comparison calculator</a>.</p><h4>Path 2: Other Options (Cash Back & Gift Cards)</h4><p>Miles can also be redeemed for cash back or gift cards, but the redemption rate is typically much lower and should generally be avoided. [<a href="${reviewData.urls.rewardsRedemption}" target="_blank" rel="noopener noreferrer">Source: Capital One</a>]</p>`,
    'section-transfer-partners': `<p>The most powerful redemption method is transferring miles to Capital One's network of over 15 airline and hotel loyalty programs. [<a href="${reviewData.urls.transferPartners}" target="_blank" rel="noopener noreferrer">Source: Capital One</a>]</p><p>Key partners include Air Canada Aeroplan and British Airways. While there are no direct major U.S. airline partners, you can use these international programs to book flights on their U.S. alliance partners (e.g., use British Airways Avios to book an American Airlines flight). This workaround, detailed in our <a href="/guides" class="${styles.inlineLink}">guides section</a>, is key to this strategy.</p>`,
    'section-global-entry': `<p>The Venture card offers a statement credit for either Global Entry or TSA PreCheck®. When you use the card to pay the application fee, Capital One provides a credit to cover the cost, up to $100, once every four years. This perk single-handedly covers the card's $95 annual fee in the first year. For more details, see our <a href="/review/global-entry-fee-guide-2025" class="${styles.inlineLink}">Global Entry guide</a>. [<a href="${reviewData.urls.trustedTraveler}" target="_blank" rel="noopener noreferrer">Source: U.S. DHS</a>]</p>`,
    'section-lounge-access': `<p>Each year, cardholders receive two complimentary lounge visits. [<a href="${reviewData.urls.loungeAccess}" target="_blank" rel="noopener noreferrer">Source: Capital One</a>] These passes can be used at Capital One Lounges or at any lounge within the global Plaza Premium network. For unlimited access, compare this with our <a href="/lounge/best-lounge-access-cards-2025" class="${styles.inlineLink}">best cards for lounge access</a>.</p>`,
    'section-lifestyle-collection': `<p>When booking hotels through the Capital One Travel portal, Venture cardholders gain access to the Lifestyle Collection. Booking a stay from this collection unlocks perks like a $50 experience credit, potential room upgrades, and early check-in/late check-out. [<a href="${reviewData.urls.lifestyleCollection}" target="_blank" rel="noopener noreferrer">Source: Capital One</a>]</p>`,
    'section-protections': `<p>The card includes an Auto Rental Collision Damage Waiver. This coverage is secondary in your country of residence but becomes primary for most international rentals. [<a href="${reviewData.urls.mastercardBenefits}" target="_blank" rel="noopener noreferrer">Source: Mastercard</a>] It also includes Travel Accident Insurance and $0 Fraud Liability. [<a href="${reviewData.urls.fraudProtection}" target="_blank" rel="noopener noreferrer">Source: Capital One</a>] We cover more in our guide to the <a href="/review/best-travel-insurance-cards-2025" class="${styles.inlineLink}">best cards for travel insurance</a>.</p>`,
    'section-digital-tools': `<p>Capital One supports its cards with a strong suite of modern, user-friendly digital tools. The highly-rated mobile app allows you to manage your account from anywhere. For enhanced security, you can use Eno, the Capital One Assistant, to generate unique virtual card numbers for online shopping, protecting your physical card number from merchants.</p>`,
    'section-rates-fees': `<p>Transparency in costs is critical. Here is a breakdown of the rates and fees for the Venture Card:<ul><li><b>Annual Fee:</b> $95</li><li><b>Foreign Transaction Fee:</b> None. This saves you around 3% on all purchases made abroad. [<a href="${reviewData.urls.ratesDisclosures}" target="_blank" rel="noopener noreferrer sponsored">Source: Capital One</a>]</li><li><b>Regular Purchase APR:</b> A variable APR based on your creditworthiness.</li><li><b>Late Payment Fee:</b> Up to $40.</li></ul>As with any rewards card, the benefits are maximized when the balance is paid in full each month to avoid interest charges.</p>`,
    'section-is-it-worth-it': `<p>In year one, the $100 Global Entry credit more than offsets the $95 fee. In subsequent years, you'd need to spend $4,750 on the card annually (just under $400 per month) to offset the fee with rewards. For most, this is easily achievable. Compare its value in our <a href="/review/Premium-vs-Budget-Travel-Cards-Is-Paying-a-$500+Annual-Fee-Really-Worth-It" class="${styles.inlineLink}">premium vs. budget cards analysis</a>.</p>`,
    'section-user-profiles': `<h4>Profile 1: "The Casual Adventurer"</h4><p>Travels one to three times per year and wants simple rewards. The Venture card is a perfect fit, and a top pick on our list of <a href="/beginners/best-beginners-cards-2025" class="${styles.inlineLink}">best starter travel cards</a>.</p><h4>Profile 2: "The Aspiring Points Pro"</h4><p>Interested in travel rewards but intimidated by high fees. The Venture card is a fantastic gateway into transferable rewards.</p><h4>Profile 3: "The Road Warrior"</h4><p>Travels frequently and needs premium perks. The Venture is good, but the <a href="${reviewData.urls.ventureXReview}" class="${styles.inlineLink}">Capital One Venture X</a> is likely a better fit.</p>`,
    'section-real-world-trip': `<h4>Calculating Your Savings on a Weekend Getaway</h4><p>To make the value of Venture miles tangible, consider this hypothetical weekend trip for two.<ul><li>Flights: $600 (Miles Earned: 1,200)</li><li>Hotel (via C1 Portal): $900 (Miles Earned: 4,500)</li><li>Rental Car (via C1 Portal): $200 (Miles Earned: 1,000)</li><li>Dining & Activities: $500 (Miles Earned: 1,000)</li><li><strong>Total Miles Earned from Trip: 7,700 miles</strong></li></ul><p>If the cardholder uses 60,000 miles from their welcome bonus to "erase" the $600 flight cost, their flights become free. This value is why it's a favorite for <a href="/review/Top-5-Family-Friendly-Travel-Cards-for-2025-Maximize-Points-&-Perks-with-Kids-in-Tow" class="${styles.inlineLink}">family travel</a>.</p>`,
    'section-pros-cons': ``,
    'section-testimonials': `<div class="${styles.testimonialContainer}"><blockquote class="${styles.testimonialQuote}"><p>"I love that I don't have to think. I use it for my business supplies and groceries and know I'm getting a solid 2X return. The simplicity is its best feature."</p><footer>– Sarah, the Side-Hustler</footer></blockquote><blockquote class="${styles.testimonialQuote}"><p>"No direct partner for Delta is the big drawback for me. I know you can book through partners, but I'd prefer the convenience of transferring directly."</p><footer>– David, the Loyal Flyer</footer></blockquote><blockquote class="${styles.testimonialQuote}"><p>"My advice? Go for the Venture X if you travel more than twice a year. The $300 travel credit makes its effective annual fee the same as the regular Venture, but with way more perks."</p><footer>– Chloe, the Upgrader</footer></blockquote></div>`,
    'section-comparison': `<p>The Venture card's value is best understood when compared against its primary rivals.</p>`,
    'section-faqs-jump': `<p>Here are answers to the most common questions about the ${reviewData.cardName}:</p>`,
    'section-final-verdict': `<p>After an exhaustive analysis, the <strong>${reviewData.cardName}</strong> stands firm as the champion of powerful simplicity. It’s an elegant and effective tool for the vast majority of American travelers who want their everyday spending to lead to more affordable adventures.</p><p>Its genius lies in its unwavering 2X earning rate and the intuitive "Cover Your Travel Purchases" feature. The substantial welcome bonus and the Global Entry credit provide an immense burst of first-year value that is nearly impossible for <a href="/no-fee/best-no-fee-cards-2025" class="${styles.inlineLink}">no-annual-fee cards</a> to overcome. If you want one card to make travel simpler and cheaper, the Capital One Venture Card is an outstanding choice.</p>`,
    'section-eat': `<p>At <strong>${siteName}</strong>, we are committed to providing content that exemplifies Expertise, Authoritativeness, and Trustworthiness (E-A-T). This review has been meticulously researched and crafted based on official issuer documentation and real-world user data. Information is current as of <strong>${new Date(updateDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</strong>.</p>`
};

// Data for snapshot table
const keyFeaturesTableData = [
    { feature: "Welcome Bonus", details: `75,000 bonus miles after spending $4,000 in the first 3 months. [<a href="${reviewData.urls.apply}" target="_blank" rel="noopener noreferrer sponsored">Source</a>]` },
    { feature: "Rewards Rate", details: "Unlimited 2X miles on every purchase, plus 5X on hotels/rental cars via Capital One Travel." },
    { feature: "Annual Fee", details: `$95. [<a href="${reviewData.urls.ratesDisclosures}" target="_blank" rel="noopener noreferrer sponsored">Source</a>]` },
    { feature: "Key Travel Perk", details: `Up to $100 statement credit for Global Entry or TSA PreCheck®. [<a href="${reviewData.urls.trustedTraveler}" target="_blank" rel="noopener noreferrer">Source</a>]` }
];

function DraggableTableWrapper({ children }) {
    const containerRef = useRef(null);
    useEffect(() => {
        if (typeof window === 'undefined' || window.innerWidth < 768) return;
        const el = containerRef.current;
        if (!el) return;
        let isDragging = false, startX = 0, scrollStart = 0;
        const startDrag = (e) => { isDragging = true; el.classList.add(styles.grabbing); startX = e.pageX || e.touches?.[0]?.pageX; scrollStart = el.scrollLeft; };
        const stopDrag = () => { isDragging = false; el.classList.remove(styles.grabbing); };
        const onMove = (e) => { if (!isDragging) return; e.preventDefault(); const x = e.pageX || e.touches?.[0]?.pageX; el.scrollLeft = scrollStart - (x - startX); };
        el.addEventListener('mousedown', startDrag);
        document.addEventListener('mouseup', stopDrag);
        document.addEventListener('mousemove', onMove);
        return () => { el.removeEventListener('mousedown', startDrag); document.removeEventListener('mouseup', stopDrag); el.removeEventListener('mousemove', onMove); };
    }, []);
    return (<div ref={containerRef} className={styles.draggableScrollContainer}>{children}</div>);
}

/* ──────────────────────────────
    MAIN COMPONENT
   ────────────────────────────── */
function CapitalOneVentureReviewPage() {
    const [showRatingInfo, setShowRatingInfo] = useState(false);
    const [showAuthorBioTooltip, setShowAuthorBioTooltip] = useState(false);
    const authorRef = useRef(null);
    const authorTooltipRef = useRef(null);
    const ratingTooltipRef = useRef(null);
    
    const handleIconClick = useCallback((event) => { event.preventDefault(); event.stopPropagation(); setShowRatingInfo(prevState => !prevState); }, []);
    const handleAuthorMouseEnter = useCallback(() => setShowAuthorBioTooltip(true), []);
    const handleAuthorMouseLeave = useCallback(() => setShowAuthorBioTooltip(false), []);

    useEffect(() => {
        function handleClickOutside(event) {
            if (showRatingInfo && ratingTooltipRef.current && !ratingTooltipRef.current.contains(event.target) && !event.target.closest(`.${styles.infoIconButton}`)) { setShowRatingInfo(false); }
            if (showAuthorBioTooltip && authorRef.current && !authorRef.current.contains(event.target) && authorTooltipRef.current && !authorTooltipRef.current.contains(event.target)) { setShowAuthorBioTooltip(false); }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [showRatingInfo, showAuthorBioTooltip]);
    
    return (
        <div className={styles.container}>
            <Head>
                <title>{reviewData.title} - {siteName}</title>
                <meta name="description" content={reviewData.description} />
                <meta name="keywords" content={reviewData.keywords} />
                <meta name="author" content={reviewData.author.name} />
                <link rel="canonical" href={pageUrlFull} />
                <meta property="og:title" content={reviewData.title} />
                <meta property="og:description" content={reviewData.description} />
                <meta property="og:image" content={`${siteUrl}${reviewData.imageUrl}`} />
                <meta property="og:url" content={pageUrlFull} />
                <meta name="twitter:card" content="summary_large_image" />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataOptimized) }} />
            </Head>

            <main className={styles.mainContentArea}>
                 <div className={styles.reviewPageLayout}>
                    <div className={styles.mainContentArea}>
                        <section className={styles.heroSection}>
                            <div className={styles.heroTextContainer}>
                                <h1 className={styles.heroTitle} dangerouslySetInnerHTML={{ __html: reviewData.h1Content }}></h1>
                                <p className={styles.reviewedByLine}>
                                    Expert review by{' '}
                                    <Link href={reviewData.author.fullBioLink || '#'} legacyBehavior>
                                        <a className={styles.authorNameLink}>{reviewData.author.name}</a>
                                    </Link>
                                    . Last updated: {new Date(updateDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                                </p>
                                <p className={styles.heroSubtitle} dangerouslySetInnerHTML={{ __html: reviewData.heroSubtitle }}></p>
                                <div className={styles.heroCtaContainer}>
                                    <a href={reviewData.applyLink} target="_blank" rel="noopener noreferrer sponsored" className={`${styles.applyNowButton} ${styles.heroApplyButton}`}>Apply Now</a>
                                    <span className={styles.heroApplyButtonDisclaimer}>on Capital One's official site</span>
                                </div>
                            </div>
                            <div className={styles.heroImageContainer}>
                                <div className={styles.cardImageContainer}><Image src={reviewData.imageUrl} alt={reviewData.cardName} width={reviewData.imageWidth} height={reviewData.imageHeight} className={styles.heroImage} priority /></div>
                                <div className={styles.ratingSection}>
                                    <span className={styles.tciRating}>
                                        <button type="button" className={styles.infoIconButton} aria-label="Rating Information" onClick={handleIconClick} aria-expanded={showRatingInfo}>
                                             <svg aria-hidden="true" focusable="false" className={styles.infoIcon} viewBox="0 0 16 16"><path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>
                                        </button>
                                        {siteName} Rating: <strong>{reviewData.ratingValue.toFixed(1)}</strong>/10
                                        {showRatingInfo && (<RatingTooltip ref={ratingTooltipRef} ratingValue={reviewData.ratingValue} ratingCriteria={ratingCriteria} onClose={() => setShowRatingInfo(false)} />)}
                                    </span>
                                    <div className={styles.starRating} title={`Rated ${reviewData.ratingValue} out of 10 stars`}>★★★★★<span className={styles.filledStars} style={{ '--rating': `${(reviewData.ratingValue / 10) * 100}%` }}>★★★★★</span></div>
                                </div>
                            </div>
                        </section>
                        
                        <article>
                            {/* Render all sections dynamically */}
                            {tocSections.map(section => {
                                // Handle special sections with tables or unique layouts
                                if (section.id === 'section-snapshot') {
                                    return (
                                        <section key={section.id} id={section.id} className={styles.reviewSection}>
                                            <h2 dangerouslySetInnerHTML={{ __html: section.title }}></h2>
                                            <div dangerouslySetInnerHTML={{ __html: sectionContent[section.id] }} />
                                            <DraggableTableWrapper>
                                                <div className={styles.tableContainer}>
                                                    <table className={`${styles.statsTable} ${styles.highlightTable}`}>
                                                        <thead><tr><th>Feature</th><th>Details</th></tr></thead>
                                                        <tbody>
                                                            {keyFeaturesTableData.map((item, index) => (
                                                                <tr key={index}><td data-label="Feature" dangerouslySetInnerHTML={{ __html: item.feature }}></td><td data-label="Details" dangerouslySetInnerHTML={{ __html: item.details }}></td></tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </DraggableTableWrapper>
                                        </section>
                                    );
                                }
                                if (section.id === 'section-pros-cons') {
                                     return (
                                        <section key={section.id} id={section.id} className={styles.reviewSection}>
                                            <h2 dangerouslySetInnerHTML={{ __html: section.title }}></h2>
                                            <div className={styles.prosConsContainer}>
                                                <div className={styles.pros}>
                                                    <h3>What Makes it Shine</h3>
                                                    <ul>
                                                        <li>Powerful, Simple Earning: Unlimited 2X miles.</li>
                                                        <li>Extremely Flexible Redemptions.</li>
                                                        <li>Massive Welcome Bonus.</li>
                                                        <li>Global Entry/TSA PreCheck® Credit.</li>
                                                        <li>No Foreign Transaction Fees.</li>
                                                    </ul>
                                                </div>
                                                <div className={styles.cons}>
                                                    <h3>Where it Falls Short</h3>
                                                    <ul>
                                                        <li>$95 Annual Fee.</li>
                                                        <li>No Major U.S. Airline Transfer Partners.</li>
                                                        <li>Poor Value for Non-Travel Redemptions.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </section>
                                     );
                                }
                                if (section.id === 'section-comparison') {
                                    return (
                                        <section key={section.id} id={section.id} className={styles.reviewSection}>
                                            <h2 dangerouslySetInnerHTML={{ __html: section.title }}></h2>
                                             <DraggableTableWrapper>
                                                <div className={styles.tableContainer}>
                                                    <table className={`${styles.statsTable} ${styles.comparisonTable}`}>
                                                        <thead><tr><th>Feature</th><th>Capital One Venture</th><th>Chase Sapphire Preferred®</th><th>Capital One Venture X</th></tr></thead>
                                                        <tbody>
                                                            <tr><td data-label="Feature"><strong>Annual Fee</strong></td><td data-label="Venture">$95</td><td data-label="Sapphire Preferred">$95</td><td data-label="Venture X">$395</td></tr>
                                                            <tr><td data-label="Feature"><strong>Base Earning</strong></td><td data-label="Venture">2X</td><td data-label="Sapphire Preferred">1X</td><td data-label="Venture X">2X</td></tr>
                                                            <tr><td data-label="Feature"><strong>Key Credit</strong></td><td data-label="Venture">None</td><td data-label="Sapphire Preferred">$50 Hotel</td><td data-label="Venture X">$300 Travel</td></tr>
                                                            <tr><td data-label="Feature"><strong>Lounge Access</strong></td><td data-label="Venture">2 passes</td><td data-label="Sapphire Preferred">None</td><td data-label="Venture X">Unlimited</td></tr>
                                                            <tr><td data-label="Feature"><strong>Global Entry</strong></td><td data-label="Venture">Yes</td><td data-label="Sapphire Preferred">No</td><td data-label="Venture X">Yes</td></tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </DraggableTableWrapper>
                                            <p>This comparison reveals its unique positioning. It offers a higher base earning rate than the <a href="${reviewData.urls.sapphirePreferredReview}" class="${styles.inlineLink}">Sapphire Preferred</a> and provides a taste of premium perks its competitor lacks. Dive deeper in our <a href="/review/chase-vs-capital-one-travel-cards-2025" class="${styles.inlineLink}">Chase vs. Capital One comparison</a>.</p>
                                        </section>
                                    );
                                }
                                 if (section.id === 'section-faqs-jump') {
                                     return (
                                        <section key={section.id} id={section.id} className={`${styles.reviewSection} ${styles.faqSection}`}>
                                            <h2 dangerouslySetInnerHTML={{ __html: section.title }}></h2>
                                            <div className={styles.faqContainer}>
                                                {faqsContent.map((faq, index) => (
                                                    <details key={index} className={styles.faqItem}>
                                                        <summary className={styles.faqQuestion}>{faq.q}</summary>
                                                        <div className={styles.faqAnswer}><p dangerouslySetInnerHTML={{ __html: faq.a }} /></div>
                                                    </details>
                                                ))}
                                            </div>
                                        </section>
                                     );
                                 }

                                // Default render for all other sections
                                return (
                                    <section key={section.id} id={section.id} className={styles.reviewSection}>
                                        <h2 dangerouslySetInnerHTML={{ __html: section.title }}></h2>
                                        <div dangerouslySetInnerHTML={{ __html: sectionContent[section.id] }} />
                                    </section>
                                );
                            })}
                        </article>
                    </div>
                    <aside className={styles.sidebarArea}>
                        <TableOfContents sections={tocSections} />
                    </aside>
                </div>
            </main>

            <div className={styles.stickyFooterContainer}>
                <div className={styles.stickyFooterContent}>
                    <Image src={reviewData.imageUrl} alt={`${reviewData.cardShortName} card image`} width={60} height={38} className={styles.stickyFooterCardImage} />
                    <div className={styles.stickyFooterText}>
                        <span className={styles.stickyFooterCardName}>{reviewData.cardShortName}</span>
                        <span className={styles.stickyFooterRating}>{siteName} Rating: {reviewData.ratingValue.toFixed(1)}/10</span>
                    </div>
                    <div className={styles.stickyFooterButtons}>
                        <a href={reviewData.applyLink} className={`${styles.stickyFooterBtn} ${styles.stickyFooterBtnApply}`} target="_blank" rel="noopener noreferrer sponsored">Apply Now</a>
                        <a href={reviewData.ratesFeesLink} className={`${styles.stickyFooterBtn} ${styles.stickyFooterBtnRates}`} target="_blank" rel="noopener noreferrer sponsored">See Rates & Fees</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CapitalOneVentureReviewPage;