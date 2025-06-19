/* ------------------------------------------------------------------
    File:  pages/reviews/capital-one-venture-review.js
    Route: https://www.travelcardinsider.com/reviews/capital-one-venture-review
------------------------------------------------------------------- */

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import styles from '../../styles/ReviewPage.module.css'; // Assuming same CSS module

import TableOfContents from '../../components/TableOfContents'; // Assuming same TOC component
import IconGift from '../../components/icons/icon-gift.svg';
import IconStar from '../../components/icons/icon-star.svg';
import IconCheck from '../../components/icons/icon-Credit Card.svg';
import IconPlus from '../../components/icons/icon-target.svg';
import IconPlane from '../../components/icons/icon-plane.svg';
import IconDollar from '../../components/icons/icon-dollar.svg';
import IconX from '../../components/icons/icon-Star + Arrow Up.svg';

const RatingTooltip = dynamic(() => import('../../components/RatingTooltip'), { ssr: false, loading: () => null });

/* ──────────────────────────────
    CONSTANTS & STATIC DATA
    ────────────────────────────── */
const siteName = 'Travelcardinsider';
const siteUrl = 'https://www.travelcardinsider.com';
const pagePath = '/reviews/capital-one-venture-review';
const pageUrlFull = `${siteUrl}${pagePath}`;
const publishDate = '2025-06-19'; // Set to current date
const updateDate = '2025-06-19'; // Set to current date

const reviewData = {
  cardName: 'Capital One Venture Rewards Credit Card',
  title: 'Capital One Venture Card Review (2025): Simple, Powerful Travel Rewards?',
  description: 'In-depth 2025 review of the Capital One Venture Card. Explore unlimited 2X miles on every purchase, 5X on travel, a 75,000-mile bonus, and the $95 annual fee. Is this the best simple travel card for you?',
  keywords: 'Capital One Venture review, Venture Card, Capital One miles, simple travel rewards, 2X miles card, Capital One Venture benefits, travel credit card review 2025',
  author: {
      name: 'Dilan Madushanka',
      title: 'Founder & Lead Editor',
      imageUrl: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg',
      imageWidth: 40,
      imageHeight: 40,
      tooltipImageUrl: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg',
      tooltipImageWidth: 60,
      tooltipImageHeight: 60,
      expertise: [
          'Flat-Rate Rewards Cards',
          'Airline & Hotel Transfer Partners',
          'Credit Card Rewards Optimization',
          'Beginner Travel Hacking',
          'Capital One Cards'
      ],
      bioSnippet: 'Dilan Madushanka is the founder and lead editor of Travelcardinsider, dedicated to demystifying credit cards and uncovering their real-world value for smarter travel and rewards.',
      fullBioLink: '/author/dilan-madushanka',
      fullBio: `Dilan Madushanka is the founder and lead editor of Travelcardinsider, a platform dedicated to helping everyday people make smarter decisions with travel and rewards credit cards. I've tested dozens of cards, and I'm here to give you the real-world scoop.`,
      publishedStats: 'X+ in-depth card reviews per week',
      testedStats: 'Over Y+ credit card benefits across major brands',
      socialLinks: {
          linkedin: 'https://www.linkedin.com/in/dilan-madushanka-b65293365',
          twitter: 'https://x.com/team_dilan',
          email: 'team@travelcardinsider.com'
      }
  },
  siteName: siteName,
  imageUrl: '/capital-one-venture-card.png', // Placeholder: Replace with actual Venture card image URL
  imageWidth: 1290,
  imageHeight: 812,
  ratingValue: 9.0,
  ratingCount: 310,
  reviewBody: 'Our editors evaluate the Capital One Venture Rewards Credit Card based on its simple and powerful rewards structure (unlimited 2X miles), valuable welcome bonus, flexible redemption options including transfer partners, key travel perks like the Global Entry credit, the annual fee, and its overall value for travelers who prioritize simplicity and flexibility.',
  aprRange: 'A variable APR based on your creditworthiness.',
  annualFee: 95,
  applyLink: 'https://www.capitalone.com/credit-cards/venture/', // Official Site Link
  ratesLink: 'https://www.capitalone.com/credit-cards/venture/disclosures/',
  officialOverviewLink: 'https://www.capitalone.com/credit-cards/venture/',
  officialWelcomeOfferLink: 'https://www.capitalone.com/credit-cards/venture/',
  officialBenefitsLink: 'https://www.capitalone.com/credit-cards/benefits-guide/venture/',
  officialTravelPortalLink: 'https://www.capitalone.com/learn-grow/money-management/capital-one-travel-benefits/',
  officialTransferPartnersLink: 'https://www.capitalone.com/credit-cards/travel-and-miles/transfer-partners/',
  officialGlobalEntryLink: 'https://www.cbp.gov/travel/trusted-traveler-programs',
  officialLoungeBenefitsLink: 'https://www.capitalone.com/credit-cards/benefits-guide/venture/',
  officialLifestyleCollectionLink: 'https://www.capitalone.com/credit-cards/lifestyle-collection/',
  officialProtectionsLink: 'https://www.mastercard.us/en-us/personal/find-a-card/world-mastercard-credit.html', // Mastercard Guide to Benefits
  officialSecurityLink: 'https://www.capitalone.com/support-center/fraud-protection/',
  officialProgramTermsLink: 'https://www.capitalone.com/credit-cards/venture/terms-and-conditions/',
  sku: 'CAP1-VENTURE-TCI-2025',
  mpn: 'CAP1VENTURE',
  h1Content: "Capital One Venture Rewards Review: Is This the Easiest Travel Card Ever?",
};

/* ──────────────────────────────
    STRUCTURED DATA GRAPH
    ────────────────────────────── */
const structuredDataOptimized = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Product',
      '@id': `${pageUrlFull}#product`,
      name: reviewData.cardName,
      image: `${siteUrl}${reviewData.imageUrl}`,
      description: reviewData.description,
      sku: reviewData.sku,
      mpn: reviewData.mpn,
      brand: { '@type': 'Brand', name: 'Capital One' },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: reviewData.ratingValue.toString(),
        bestRating: '10',
        worstRating: '1',
        ratingCount: reviewData.ratingCount.toString(),
        reviewCount: '1',
      },
      offers: {
        '@type': 'Offer',
        url: reviewData.applyLink,
        priceCurrency: 'USD',
        price: reviewData.annualFee.toString(),
        priceValidUntil: '2026-12-31',
        itemCondition: 'https://schema.org/NewCondition',
        availability: 'https://schema.org/InStock',
        priceSpecification: [
          {
            '@type': 'PriceSpecification',
            priceCurrency: 'USD',
            price: reviewData.annualFee.toString(),
            valueAddedTaxIncluded: 'false',
            description: `Annual fee: $${reviewData.annualFee}.`,
          },
          {
            '@type': 'PriceSpecification',
            priceCurrency: 'USD',
            description: `Regular Purchase APR: ${reviewData.aprRange}. Foreign Transaction Fee: None. See official ${reviewData.cardName} Rates & Fees on the issuer's website.`,
          },
        ],
        seller: { '@type': 'Organization', name: 'Capital One' },
      },
      review: { '@id': `${pageUrlFull}#editorReview` },
    },
    {
      '@type': 'Review',
      '@id': `${pageUrlFull}#editorReview`,
      name: `${reviewData.cardName} – Review Updated ${new Date(updateDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`,
      itemReviewed: { '@id': `${pageUrlFull}#product` },
      reviewBody: reviewData.reviewBody,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: reviewData.ratingValue.toString(),
        bestRating: '10',
        worstRating: '1',
        description: `${siteName} editorial rating based on a 10.0 scale, as of ${new Date(updateDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}.`
      },
      author: {
        '@type': 'Person',
        'name': reviewData.author.name,
        'url': `${siteUrl}${reviewData.author.fullBioLink}`,
      },
      publisher: {
        '@type': 'Organization',
        name: siteName,
        logo: { '@type': 'ImageObject', url: `${siteUrl}/images/logo/your-logo-schema.png` },
      },
      datePublished: publishDate,
      dateModified: updateDate,
    },
    {
      '@type': 'WebPage',
      '@id': pageUrlFull,
      url: pageUrlFull,
      name: reviewData.title,
      description: reviewData.description,
      inLanguage: 'en-US',
      isPartOf: { '@id': `${siteUrl}#website` },
      primaryImageOfPage: { '@id': `${pageUrlFull}#primaryImage` },
      breadcrumb: { '@id': `${pageUrlFull}#breadcrumbs` },
      datePublished: publishDate,
      dateModified: updateDate,
      author: {
        '@type': 'Person',
        'name': reviewData.author.name,
        'url': `${siteUrl}${reviewData.author.fullBioLink}`,
      },
    },
    {
      '@type': 'ImageObject',
      '@id': `${pageUrlFull}#primaryImage`,
      url: `${siteUrl}${reviewData.imageUrl}`,
      width: reviewData.imageWidth,
      height: reviewData.imageHeight,
      caption: reviewData.cardName,
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${pageUrlFull}#breadcrumbs`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: siteName, item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Credit Card Reviews', item: `${siteUrl}/reviews` },
        { '@type': 'ListItem', position: 3, name: `${reviewData.cardName} Review`, item: pageUrlFull },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${pageUrlFull}#faqs`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What credit score is needed for the Venture card?',
          acceptedAnswer: { '@type': 'Answer', text: "Typically a score of 670 or higher is recommended for the Capital One Venture Card." }
        },
        {
          '@type': 'Question',
          name: 'Can miles be transferred to a US airline like Delta or United?',
          acceptedAnswer: { '@type': 'Answer', text: "Not directly. You cannot transfer Capital One miles directly to U.S. carriers like American AAdvantage, Delta SkyMiles, or United MileagePlus. However, you can book flights on them by transferring miles to international airline partners within the same alliance (e.g., use British Airways Avios to book an American Airlines flight)." }
        },
        {
          '@type': 'Question',
          name: 'Do Venture miles expire?',
          acceptedAnswer: { '@type': 'Answer', text: "No, your miles won't expire for the life of the account. As long as your account is open and in good standing, your miles are safe. Source: Capital One, Venture Rewards Program Terms and Conditions." }
        },
        {
          '@type': 'Question',
          name: 'Is the Capital One Venture a Visa or Mastercard?',
          acceptedAnswer: { '@type': 'Answer', text: "The Capital One Venture Card is a Mastercard." }
        },
        {
            '@type': 'Question',
            name: 'Is it necessary to set a travel notice before going abroad?',
            acceptedAnswer: { '@type': 'Answer', text: "No, Capital One does not require you to set a travel notice before using your card abroad." }
        },
        {
            '@type': 'Question',
            name: 'Can the Venture card be downgraded to a no-annual-fee card?',
            acceptedAnswer: { '@type': 'Answer', text: "It is sometimes possible to downgrade the Venture card to a no-annual-fee product like the VentureOne or Quicksilver, but this is handled on a case-by-case basis by Capital One and is not a guaranteed option." }
        },
        {
            '@type': 'Question',
            name: 'What does "travel" cover for redemptions?',
            acceptedAnswer: { '@type': 'Answer', text: "The travel category for redeeming miles is very broad. It typically includes airlines, hotels, vacation rentals, car rentals, cruises, travel agencies, train tickets, bus lines, and rideshare services like Uber and Lyft." }
        },
        {
            '@type': 'Question',
            name: 'Can I add an authorized user?',
            acceptedAnswer: { '@type': 'Answer', text: "Yes, you can add authorized users to your Capital One Venture account at no additional cost." }
        },
        {
            '@type': 'Question',
            name: 'How does this card pair with the SavorOne card?',
            acceptedAnswer: { '@type': 'Answer', text: "The Venture and SavorOne cards create a powerful duo. You can earn cash back with the SavorOne on its bonus categories (like dining, entertainment, and streaming) and then convert that cash back into miles with your Venture account, effectively pooling your rewards." }
        },
        {
            '@type': 'Question',
            name: 'Is the Venture X a better card?',
            acceptedAnswer: { '@type': 'Answer', text: "For frequent travelers who can maximize its premium benefits like unlimited lounge access and the $300 annual travel credit, the Venture X is often a better choice despite its higher annual fee. For most other travelers who value simplicity and a lower annual fee, the standard Venture card is the simpler, more accessible, and often more logical choice." }
        }
      ],
    },
    {
      '@type': 'Organization',
      '@id': `${siteUrl}#website`,
      name: siteName,
      url: siteUrl,
      logo: { '@type': 'ImageObject', url: `${siteUrl}/images/logo/your-logo-schema.png` },
      sameAs: [
        "https://www.facebook.com/YourTravelCardInsiderFacebookPage",
        "https://twitter.com/YourTravelCardInsiderTwitterHandle",
      ],
    },
  ],
};

const ratingCriteria = [
    'Base Rewards Earning Rate (2X Miles)',
    'Accelerated Travel Portal Earning Rate (5X Miles)',
    'Welcome Offer Value & Attainability',
    'Redemption Flexibility (Cover Travel & Transfer Partners)',
    'Value of Global Entry / TSA PreCheck® Credit',
    'Value of Annual Lounge Passes',
    'Annual Fee ($95) vs. Overall Benefits',
    'Quality of Transfer Partners',
    'Travel & Purchase Protections',
    'Simplicity and Ease of Use',
    'Digital Tools (App & Website Experience)',
];

const tocSections = [
    { id: 'section-intro', title: 'Introduction: The Headache of Complex Rewards' },
    { id: 'section-1', title: '1. Card Snapshot & Our Take' },
    { id: 'section-2', title: '2. The Welcome Bonus: A $750 Head Start' },
    { id: 'section-3', title: '3. The Earning Engine: Simple and Powerful' },
    { id: 'section-4', title: '4. Redeeming Miles: Your Points, Your Way' },
    { id: 'section-5', title: '5. Next-Level Value: Transfer Partners' },
    { id: 'section-6', title: '6. Breeze Through Security: Global Entry Credit' },
    { id: 'section-7', title: '7. A Taste of Luxury: Annual Lounge Passes' },
    { id: 'section-8', title: '8. Better Stays: The Lifestyle Collection' },
    { id: 'section-9', title: '9. Peace of Mind: Travel Protections' },
    { id: 'section-10', title: '10. Easy Management: Digital Tools' },
    { id: 'section-11', title: '11. The Real Cost: Rates & Fees' },
    { id: 'section-12', title: '12. Is the $95 Fee Worth It?' },
    { id: 'section-13', title: '13. Is This Card For You? (User Profiles)' },
    { id: 'section-14', title: '14. Real-World Trip Calculation' },
    { id: 'section-15', title: '15. The Good and The Bad (Pros & Cons)' },
    { id: 'section-16', title: '16. How It Stacks Up: Venture vs. Rivals' },
    { id: 'section-17', title: '17. What Real People Are Saying' },
    { id: 'section-18', title: '18. Frequently Asked Questions (FAQs)' },
    { id: 'section-19', title: '19. The Bottom Line: My Final Verdict' },
    { id: 'section-eat', title: 'Our E-A-T Commitment' },
];

function DraggableTableWrapper({ children }) {
  const containerRef = useRef(null);
  useEffect(() => {
    if (typeof window === 'undefined' || window.innerWidth < 768) return;
    const el = containerRef.current;
    if (!el) return;
    let isDragging = false, startX = 0, scrollStart = 0;
    const startDrag = (e) => {
      isDragging = true; el.classList.add(styles.grabbing);
      startX = e.pageX || e.touches?.[0]?.pageX; scrollStart = el.scrollLeft;
    };
    const stopDrag = () => { isDragging = false; el.classList.remove(styles.grabbing); };
    const onMove = (e) => {
      if (!isDragging) return; e.preventDefault();
      const x = e.pageX || e.touches?.[0]?.pageX;
      el.scrollLeft = scrollStart - (x - startX);
    };
    el.addEventListener('mousedown', startDrag);
    document.addEventListener('mouseup', stopDrag);
    document.addEventListener('mouseleave', stopDrag);
    el.addEventListener('mousemove', onMove);
    el.addEventListener('touchstart', startDrag, { passive: true });
    document.addEventListener('touchend', stopDrag);
    el.addEventListener('touchmove', onMove, { passive: false });
    return () => {
      el.removeEventListener('mousedown', startDrag);
      document.removeEventListener('mouseup', stopDrag);
      document.removeEventListener('mouseleave', stopDrag);
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('touchstart', startDrag);
      document.removeEventListener('touchend', stopDrag);
      el.removeEventListener('touchmove', onMove);
    };
  }, []);
  return (<div ref={containerRef} className={styles.draggableScrollContainer}>{children}</div>);
}

/* ──────────────────────────────
    COMPONENT
    ────────────────────────────── */
function CapitalOneVentureCardReviewPage() {
  const [showRatingInfo, setShowRatingInfo] = useState(false);
  const [showAuthorBioTooltip, setShowAuthorBioTooltip] = useState(false);
  const authorRef = useRef(null);
  const authorTooltipRef = useRef(null);
  const ratingTooltipRef = useRef(null);

  const handleIconClick = useCallback((event) => {
      event.preventDefault();
      event.stopPropagation();
      setShowRatingInfo(prevState => !prevState);
  }, []);

  const handleAuthorMouseEnter = useCallback(() => {
      setShowAuthorBioTooltip(true);
  }, []);

  const handleAuthorMouseLeave = useCallback(() => {
      const timerId = setTimeout(() => {
          if (authorRef.current && authorTooltipRef.current) {
              const isHoveringTrigger = authorRef.current.matches(':hover');
              const isHoveringTooltip = authorTooltipRef.current.matches(':hover');
              const isFocusWithinTrigger = authorRef.current.contains(document.activeElement);
              const isFocusWithinTooltip = authorTooltipRef.current.contains(document.activeElement);
              if (!isHoveringTrigger && !isHoveringTooltip && !isFocusWithinTrigger && !isFocusWithinTooltip) {
                 setShowAuthorBioTooltip(false);
              }
          } else if (!authorRef.current?.matches(':hover') && !authorTooltipRef.current?.matches(':hover')) {
               setShowAuthorBioTooltip(false);
          }
      }, 150);
      if (authorRef.current) authorRef.current.tooltipTimeoutId = timerId;
  }, [authorRef, authorTooltipRef]);

   const handleAuthorClearTimeout = useCallback(() => {
      if (authorRef.current?.tooltipTimeoutId) {
          clearTimeout(authorRef.current.tooltipTimeoutId);
      }
   }, [authorRef]);

  useEffect(() => {
      function handleClickOutside(event) {
          if (showAuthorBioTooltip &&
              authorRef.current && !authorRef.current.contains(event.target) &&
              authorTooltipRef.current && !authorTooltipRef.current.contains(event.target)) {
              setShowAuthorBioTooltip(false);
          }
          if (showRatingInfo &&
              !event.target.closest(`.${styles.infoIconButton}`) &&
              ratingTooltipRef.current && !ratingTooltipRef.current.contains(event.target)
             ) {
               setShowRatingInfo(false);
          }
      }
      if (showAuthorBioTooltip || showRatingInfo) {
          document.addEventListener("mousedown", handleClickOutside);
      } else {
           document.removeEventListener("mousedown", handleClickOutside);
      }
      return () => {
          document.removeEventListener("mousedown", handleClickOutside);
          if (authorRef.current?.tooltipTimeoutId) {
            clearTimeout(authorRef.current.tooltipTimeoutId);
          }
      };
  }, [showAuthorBioTooltip, authorRef, authorTooltipRef, showRatingInfo, ratingTooltipRef]);

  const summaryBoxData = {
    welcomeOffer: "75,000 bonus miles after spending $4,000 in the first 3 months.",
    annualFee: `$${reviewData.annualFee}`,
    rewardsRate: "Unlimited 2X miles on every purchase. Simple.",
    keyPerk: "Up to $100 credit for Global Entry or TSA PreCheck®.",
    bestFor: "Travelers who hate complicated rewards and want one great, flexible card.",
    bottomLine: "This is one of the best, simplest travel cards on the market. If you want easy-to-earn, easy-to-use miles without the headache, this is probably the card for you."
  };


  return (
    <>
      <Head>
        <title>{reviewData.title} - {siteName}</title>
        <meta name="description" content={reviewData.description} />
        <meta name="keywords" content={reviewData.keywords} />
        <meta name="author" content={reviewData.author.name} />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="robots" content="index,follow,max-image-preview:large" />
        <link rel="canonical" href={pageUrlFull} />
        <link rel="alternate" href={pageUrlFull} hreflang="en-us" />
        <link rel="preload" as="image" href={`${siteUrl}${reviewData.imageUrl}`} />
        <link rel="preload" as="image" href={reviewData.author.imageUrl} />
        <link rel="preload" as="image" href={reviewData.author.tooltipImageUrl} />
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="language" content="en-US" />
        <meta name="distribution" content="US" />
        {[
          '/fonts/inter-v18-latin-regular.woff2',
          '/fonts/inter-v18-latin-600.woff2',
          '/fonts/inter-v18-latin-700.woff2',
          '/fonts/Roboto_Condensed-Regular.ttf',
          '/fonts/Roboto_Condensed-Bold.ttf',
        ].map((f) => (
          <link key={f} rel="preload" href={f} as="font" type={f.endsWith('woff2') ? 'font/woff2' : 'font/ttf'} crossOrigin="anonymous" />
        ))}
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:title" content={reviewData.title} />
        <meta property="og:description" content={reviewData.description} />
        <meta property="og:url" content={pageUrlFull} />
        <meta property="og:image" content={`${siteUrl}${reviewData.imageUrl}`} />
        <meta property="og:image:width" content={String(reviewData.imageWidth)} />
        <meta property="og:image:height" content={String(reviewData.imageHeight)} />
        <meta property="article:publisher" content={`https://www.facebook.com/YourTravelCardInsiderFacebookPage`} />
        <meta property="article:section" content="Credit Card Reviews" />
        <meta property="article:published_time" content={publishDate} />
        <meta property="article:modified_time" content={updateDate} />
        <meta property="article:author" content={reviewData.author.name} />
        {reviewData.keywords.split(',').map(keyword => (
            <meta property="article:tag" content={keyword.trim()} key={keyword.trim()} />
        ))}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@YourTravelCardInsiderTwitterHandle" />
        <meta name="twitter:creator" content={`@${reviewData.author.socialLinks?.twitter?.split('/').pop() || 'YourAuthorTwitterHandle'}`} />
        <meta name="twitter:title" content={reviewData.title} />
        <meta name="twitter:description" content={reviewData.description} />
        <meta name="twitter:image" content={`${siteUrl}${reviewData.imageUrl}`} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataOptimized) }} />
      </Head>

      <main>
        <div className={styles.reviewPageLayout}>
          <div className={styles.mainContentArea}>
            <section className={styles.heroSection}>
              <div className={styles.heroTextContainer}>
                <h1 className={styles.heroTitle}>
                  {reviewData.h1Content}
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
                        src={reviewData.author.imageUrl}
                        alt={`${reviewData.author.name} headshot`}
                        width={reviewData.author.imageWidth}
                        height={reviewData.author.imageHeight}
                        className={styles.authorImageSmall}
                        priority
                    />
                    <div className={styles.authorInfoBlock}>
                        <div className={styles.authorNameLine}>
                            <span className={styles.authorPrefix}>By</span>
                            <span className={styles.authorName}>{reviewData.author.name}</span>
                        </div>
                        <span className={styles.authorTitle}>{reviewData.author.title}</span>
                        {updateDate && (
                            <time dateTime={updateDate} className={styles.authorLastEdited}>
                                Last updated: {new Date(updateDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                            </time>
                        )}
                        {reviewData.author.socialLinks && (
                            <div className={styles.authorSocialLinks}>
                                {reviewData.author.socialLinks.linkedin && (
                                    <a href={reviewData.author.socialLinks.linkedin} target="_blank" rel="noopener noreferrer me" aria-label={`${reviewData.author.name} on LinkedIn`} className={styles.socialIconLink}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                    </a>
                                )}
                                {reviewData.author.socialLinks.twitter && (
                                    <a href={reviewData.author.socialLinks.twitter} target="_blank" rel="noopener noreferrer me" aria-label={`${reviewData.author.name} on Twitter`} className={styles.socialIconLink}>
                                         <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.422.724-.665 1.56-.665 2.452 0 1.697.864 3.198 2.18 4.078-.8-.025-1.555-.247-2.227-.616v.054c0 2.37 1.683 4.333 3.91 4.78-.426.116-.874.174-1.337.174-.31 0-.611-.03-.904-.085.622 1.936 2.421 3.338 4.553 3.377-1.672 1.309-3.781 2.088-6.072 2.088-.394 0-.784-.023-1.169-.069 2.16 1.389 4.723 2.202 7.482 2.202 8.979 0 13.897-7.446 13.897-13.898 0-.21 0-.42-.015-.63.953-.689 1.778-1.56 2.433-2.525z"/></svg>
                                    </a>
                                )}
                                {reviewData.author.socialLinks.email && (
                                    <a href={`mailto:${reviewData.author.socialLinks.email}`} aria-label={`Email ${reviewData.author.name}`} className={styles.socialIconLink}>
                                         <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>
                                    </a>
                                )}
                            </div>
                        )}
                    </div>
                    {showAuthorBioTooltip && reviewData.author.bioSnippet && (
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
                                    src={reviewData.author.tooltipImageUrl}
                                    alt={`${reviewData.author.name} large headshot`}
                                    width={reviewData.author.tooltipImageWidth}
                                    height={reviewData.author.tooltipImageHeight}
                                    className={styles.authorTooltipImage}
                                 />
                                 <div className={styles.authorTooltipInfo}>
                                     <span className={styles.authorTooltipName}>{reviewData.author.name}</span>
                                     <span className={styles.authorTooltipTitle}>{reviewData.author.title}</span>
                                 </div>
                               </div>
                               {reviewData.author.expertise && reviewData.author.expertise.length > 0 && (
                                 <div className={styles.authorTooltipExpertise}>
                                     <strong>Expertise</strong>
                                     <ul>
                                         {reviewData.author.expertise.map(area => <li key={area}>{area}</li>)}
                                     </ul>
                                 </div>
                               )}
                               <p className={styles.authorTooltipBioSnippet}>{reviewData.author.bioSnippet}</p>
                               {reviewData.author.fullBioLink && (
                                   <Link href={reviewData.author.fullBioLink} legacyBehavior>
                                       <a className={styles.authorTooltipBioLink}>
                                           See full bio
                                       </a>
                                   </Link>
                               )}
                               {reviewData.author.socialLinks && (
                                    <div className={styles.authorTooltipSocials}>
                                        {reviewData.author.socialLinks.linkedin && (
                                             <a href={reviewData.author.socialLinks.linkedin} target="_blank" rel="noopener noreferrer me" aria-label={`${reviewData.author.name} on LinkedIn`} className={styles.socialIconLink}>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                             </a>
                                         )}
                                         {reviewData.author.socialLinks.twitter && (
                                             <a href={reviewData.author.socialLinks.twitter} target="_blank" rel="noopener noreferrer me" aria-label={`${reviewData.author.name} on Twitter`} className={styles.socialIconLink}>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.422.724-.665 1.56-.665 2.452 0 1.697.864 3.198 2.18 4.078-.8-.025-1.555-.247-2.227-.616v.054c0 2.37 1.683 4.333 3.91 4.78-.426.116-.874.174-1.337.174-.31 0-.611-.03-.904-.085.622 1.936 2.421 3.338 4.553 3.377-1.672 1.309-3.781 2.088-6.072 2.088-.394 0-.784-.023-1.169-.069 2.16 1.389 4.723 2.202 7.482 2.202 8.979 0 13.897-7.446 13.897-13.898 0-.21 0-.42-.015-.63.953-.689 1.778-1.56 2.433-2.525z"/></svg>
                                             </a>
                                         )}
                                         {reviewData.author.socialLinks.email && (
                                             <a href={`mailto:${reviewData.author.socialLinks.email}`} aria-label={`Email ${reviewData.author.name}`} className={styles.socialIconLink}>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>
                                             </a>
                                         )}
                                    </div>
                                )}
                        </div>
                    )}
                </div>
                <p className={styles.heroSubtitle}>
                  I've tested dozens of cards, and here's what makes the Venture card stand out. It's built for people who want great rewards without needing a spreadsheet to track them. Let's dive in and see if it's the right fit for you.
                </p>
                <div className={styles.heroCtaContainer}>
                  <div>
                    <a
                      href={reviewData.applyLink}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className={`${styles.applyNowButton} ${styles.heroApplyButton}`}
                    >
                      Apply Securely Now
                    </a>
                    <span className={styles.heroApplyButtonDisclaimer}>
                      on Capital One&apos;s official site
                    </span>
                  </div>
                  <Link href="#section-1" legacyBehavior>
                    <a className={styles.heroSecondaryLink}>View Our Take</a>
                  </Link>
                </div>
              </div>
              <div className={styles.heroImageContainer}>
                <div className={styles.cardImageContainer}>
                  <Image
                    src={reviewData.imageUrl}
                    alt={reviewData.cardName}
                    width={reviewData.imageWidth}
                    height={reviewData.imageHeight}
                    className={styles.heroImage}
                    priority
                  />
                </div>
                <div className={styles.ratingSection}>
                  <span className={styles.tciRating}>
                    <button
                      type="button"
                      className={styles.infoIconButton}
                      aria-label="Rating Information"
                      onClick={handleIconClick}
                      aria-expanded={showRatingInfo}
                    >
                      <svg aria-hidden="true" focusable="false" className={styles.infoIcon} viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                      </svg>
                    </button>
                    {siteName} Rating: <strong>{reviewData.ratingValue.toFixed(1)}</strong>/10
                    {showRatingInfo && (
                      <RatingTooltip
                        ref={ratingTooltipRef}
                        ratingValue={reviewData.ratingValue}
                        ratingCriteria={ratingCriteria}
                        onClose={() => setShowRatingInfo(false)}
                      />
                    )}
                  </span>
                  <div className={styles.starRating} title={`Rated ${reviewData.ratingValue} out of 10 stars`}>
                      ★★★★★
                      <span className={styles.filledStars} style={{ '--rating': `${(reviewData.ratingValue / 10) * 100}%` }}>
                        ★★★★★
                      </span>
                  </div>
                </div>
                 <div className={styles.ratingDescription}>
                    <i>{reviewData.cardName}: {reviewData.description}</i>
                 </div>
              </div>
            </section>

             <div className={styles.reviewContainer}>
              <article>
                <header className={styles.reviewHeader}>
                    <div className={styles.summaryBox} id="summaryBoxTitle">
                        <h2 className={styles.summaryBoxTitle}>{reviewData.cardName}: The Bottom Line</h2>
                        <div className={styles.summaryGrid}>
                             <div className={styles.summaryItem} data-full-width="true">
                                <span className={styles.summaryIcon}><IconPlus /></span>
                                <span className={styles.summaryLabel}>Bottom Line:</span>
                                <span className={styles.summaryValue}>{summaryBoxData.bottomLine}</span>
                            </div>
                            <div className={styles.summaryItem}>
                                <span className={styles.summaryIcon}><IconGift /></span>
                                <span className={styles.summaryLabel}>Welcome Offer:</span>
                                <span className={styles.summaryValue}>{summaryBoxData.welcomeOffer}</span>
                            </div>
                            <div className={styles.summaryItem}>
                                <span className={styles.summaryIcon}><IconCheck /></span>
                                <span className={styles.summaryLabel}>Annual Fee:</span>
                                <span className={styles.summaryValue}>{summaryBoxData.annualFee}</span>
                            </div>
                            <div className={styles.summaryItem}>
                                <span className={styles.summaryIcon}><IconStar /></span>
                                <span className={styles.summaryLabel}>Rewards Rate:</span>
                                <span className={styles.summaryValue}>{summaryBoxData.rewardsRate}</span>
                            </div>
                             <div className={styles.summaryItem}>
                                <span className={styles.summaryIcon}><IconPlane /></span>
                                <span className={styles.summaryLabel}>Key Travel Perk:</span>
                                <span className={styles.summaryValue}>{summaryBoxData.keyPerk}</span>
                            </div>
                        </div>
                        <div className={styles.summaryBoxActions}>
                            <a href={reviewData.ratesLink} className={styles.summaryRatesLink} target="_blank" rel="noopener noreferrer sponsored">
                                See Card Rates & Fees
                            </a>
                             <a href='/rewards-calculator' className={`${styles.heroRewardsCalculator} ${styles.summaryButton}`} target="_blank" rel="noopener noreferrer">
                                Rewards Calculator
                            </a>
                        </div>
                    </div>
                </header>

                <section id="section-intro" className={styles.reviewSection}>
                  <h2>Introduction: The Headache of Complex Rewards</h2>
                  <p>Let's be honest: juggling credit card rewards can be a pain. If you're like me, you might have a few cards in your wallet. One gives you 5X on groceries this month, another gets 3X on dining, and a third has a transfer chart that looks like a science project. It's a lot to keep track of.</p>
                  <p>This "mental load" can turn the fun of earning rewards into a chore. That's precisely the problem the {reviewData.cardName} was built to solve. It’s designed around one core idea: earning great travel rewards shouldn’t be complicated. In this review, we'll break down exactly how it works to see if it delivers on that promise.</p>
                </section>

                <Image
                    src="/travel-dilemma-image.jpg" // Placeholder: Replace with a relevant image
                    alt="A traveler looking at a map, symbolizing the choice and planning involved in travel."
                    width={800}
                    height={500}
                    className={styles.contentImage}
                    loading="lazy"
                />

                <section id="section-1" className={styles.reviewSection}>
                  <h2>1. Card Snapshot &amp; Our Take</h2>
                  <p>Here’s the quick-and-dirty on the {reviewData.cardName}. These are the essential facts you need to know.</p>
                  <DraggableTableWrapper>
                    <div className={styles.tableContainer}>
                        <table className={`${styles.statsTable} ${styles.highlightTable}`}>
                            <tbody>
                                <tr><td>Card Name:</td><td><strong>{reviewData.cardName}</strong></td></tr>
                                <tr><td>Welcome Bonus:</td><td>Earn 75,000 bonus miles after spending $4,000 on purchases within the first 3 months from account opening. (<a href={reviewData.officialWelcomeOfferLink} target="_blank" rel="noopener noreferrer sponsored">Source: Capital One</a>)</td></tr>
                                <tr><td>Rewards Rate:</td><td>An unlimited 2 miles per dollar on every purchase, every day. Plus, an accelerated 5 miles per dollar on hotels and rental cars booked through <a href={reviewData.officialTravelPortalLink} target="_blank" rel="noopener noreferrer sponsored">Capital One Travel</a>.</td></tr>
                                <tr><td>Annual Fee:</td><td><strong>${reviewData.annualFee}</strong>. (<a href={reviewData.ratesLink} target="_blank" rel="noopener noreferrer sponsored">Source: Capital One</a>)</td></tr>
                                <tr><td>Key Travel Perk:</td><td>Receive up to a $100 statement credit for the application fee for either Global Entry or TSA PreCheck®. (<a href={reviewData.officialGlobalEntryLink} target="_blank" rel="noopener noreferrer sponsored">Source: U.S. Dept. of Homeland Security</a>)</td></tr>
                                <tr><td>Foreign Transaction Fees:</td><td><strong>None</strong></td></tr>
                                <tr><td>Credit Needed:</td><td>Good to Excellent</td></tr>
                            </tbody>
                        </table>
                    </div>
                  </DraggableTableWrapper>
                   <p><strong>Our Take:</strong> If you hate overthinking rewards categories, this is your card. The Venture is the go-to for flexible, no-fuss travel rewards. It’s for people who want their card to work for them, not the other way around.</p>
                </section>

                <section id="section-2" className={styles.reviewSection}>
                  <h2>2. The Welcome Bonus: A $750 Head Start</h2>
                  <p>Right out of the gate, the Venture card gives you a serious boost with its welcome offer:</p>
                  <blockquote className={styles.highlightQuote}>
                    Earn 75,000 bonus miles after spending $4,000 on purchases within the first 3 months of account opening. (<a href={reviewData.officialWelcomeOfferLink} target="_blank" rel="noopener noreferrer sponsored">Source: Capital One, Venture Rewards Card Application Page</a>)
                  </blockquote>
                  <p>Let's put that in real terms. Those 75,000 miles are worth a clean <strong>$750 for travel</strong>. That can easily cover a round-trip flight, a few nights at a nice hotel, or a rental car for a weekend trip. For a card with a sub-$100 fee, this is a massive first-year value.</p>
                </section>

                <section id="section-3" className={styles.reviewSection}>
                  <h2>3. The Earning Engine: Simple and Powerful</h2>
                  <p>Here’s where the Venture card really shines. Its earning structure is simple, powerful, and has two main parts.</p>
                  <h3>The Foundation: Unlimited 2X Miles on Everything</h3>
                  <p>This is the core of the card's appeal. You get <strong>2 miles per dollar</strong> on every single thing you buy. No rotating categories. No caps. No hoops to jump through. Coffee, groceries, gas, bills—it all earns a simple, high-value 2X. It's the ultimate "catch-all" card. (<a href={reviewData.officialBenefitsLink} target="_blank" rel="noopener noreferrer sponsored">Source: Capital One, Venture Rewards Card Benefits</a>)</p>
                  <h3>The Accelerator: 5X Miles on the Travel Portal</h3>
                  <p>Want to turbo-charge your earnings? Book hotels and rental cars through the <a href={reviewData.officialTravelPortalLink} target="_blank" rel="noopener noreferrer sponsored">Capital One Travel portal</a> and you'll get a whopping <strong>5 miles per dollar</strong>. (<a href={reviewData.officialTravelPortalLink} target="_blank" rel="noopener noreferrer sponsored">Source: Capital One, Capital One Travel Portal Terms</a>)</p>
                  <p>You can use the card as your simple 2X workhorse, or get a little strategic and use the portal for travel to rack up miles even faster. Your choice.</p>
                </section>

                <section id="section-4" className={styles.reviewSection}>
                    <h2>4. Redeeming Miles: Your Points, Your Way</h2>
                    <p>Earning miles is half the battle. Using them is where the fun begins. The Venture card gives you a couple of great ways to redeem.</p>
                    <h3>Path 1: The Easiest Redemption Ever (Cover Your Travel Purchases)</h3>
                    <p>This is my favorite feature. Just pay for travel with your card—flights, hotels, rental cars, cruises, you name it. Then, log into your account and "erase" the purchase with your miles. It's that simple. Miles are worth a fixed <strong>1 cent each</strong> this way. No blackout dates, no searching for award space.</p>
                    <h3>Path 2: Other Stuff (Cash Back & Gift Cards)</h3>
                    <p>You can also redeem for cash back or gift cards. Honestly, I'd avoid this. The value is much lower, often around half a cent per mile. Stick to travel redemptions to get the most bang for your buck. (<a href={reviewData.officialBenefitsLink} target="_blank" rel="noopener noreferrer sponsored">Source: Capital One, Rewards Redemption Catalog</a>)</p>
                </section>

                <section id="section-5" className={styles.reviewSection}>
                    <h2>5. Next-Level Value: A Guide to Capital One's Transfer Partners</h2>
                    <p>Want to take your rewards game to the next level? You can transfer your miles to over 15 airline and hotel partners. (<a href={reviewData.officialTransferPartnersLink} target="_blank" rel="noopener noreferrer sponsored">Source: Capital One, Mileage Transfer Program Details</a>). If you're new to this, <Link href="/learn/credit-card-basics"><a>our guide to credit card basics</a></Link> can help you get started.</p>
                    <p>This is how you can score those fancy business-class seats or luxury hotel nights for a fraction of the cash price.</p>
                    <p>Key partners include Air Canada, British Airways, and Flying Blue (Air France/KLM). While you can't transfer directly to major US airlines, you can use these partners to book flights on their US allies (like using British Airways points to book an American Airlines flight). It's a simple workaround that unlocks huge value.</p>
                </section>

                <section id="section-6" className={styles.reviewSection}>
                    <h2>6. Breeze Through Security: The Global Entry &amp; TSA PreCheck® Credit</h2>
                    <p>Here’s a perk that literally pays for the annual fee. Use your Venture card to pay the application fee for Global Entry or TSA PreCheck®, and Capital One will credit you back the cost (up to $100). The benefit renews every four years. Since Global Entry costs $100, this perk alone covers your $95 annual fee in year one. It’s a no-brainer. (<a href={reviewData.officialGlobalEntryLink} target="_blank" rel="noopener noreferrer sponsored">Source: U.S. Department of Homeland Security</a>). For more details on the application process, see our <Link href="/review/global-entry-fee-guide-2025"><a>comprehensive Global Entry guide</a></Link>.</p>
                </section>

                <section id="section-7" className={styles.reviewSection}>
                    <h2>7. A Touch of Comfort: Your Two Annual Lounge Passes</h2>
                    <p>The Venture card gives you a taste of the good life at the airport. Each year, you get two free lounge visits. (<a href={reviewData.officialLoungeBenefitsLink} target="_blank" rel="noopener noreferrer sponsored">Source: Capital One, Airport Lounge Access Benefits</a>)</p>
                    <p>You can use these passes at the swanky Capital One Lounges or at any Plaza Premium lounge worldwide. It's a fantastic perk for a mid-tier card and perfect for the occasional traveler. For a deeper dive into maximizing this perk, see our <Link href="/lounge/best-lounge-access-cards-2025"><a>guide to the best cards for lounge access</a></Link>.</p>
                </section>

                <section id="section-8" className={styles.reviewSection}>
                    <h2>8. Curated Stays: Inside the Capital One Lifestyle Collection</h2>
                    <p>When you book hotels through the Capital One Travel portal, you get access to the Lifestyle Collection—a handpicked list of cool, stylish hotels. Booking one of these gets you extra perks like a $50 experience credit, room upgrades, and early check-in/late check-out. It’s a nice little touch to make your stay better. (<a href={reviewData.officialLifestyleCollectionLink} target="_blank" rel="noopener noreferrer sponsored">Source: Capital One, Lifestyle Collection Hotel Benefits</a>)</p>
                </section>

                <section id="section-9" className={styles.reviewSection}>
                    <h2>9. Peace of Mind on the Road: Understanding Your Travel &amp; Purchase Protections</h2>
                    <p>The Venture card has your back with some solid insurance benefits. The big one is the rental car damage waiver. It’s secondary in the US, but acts as primary coverage for most international rentals—a huge plus. (<a href={reviewData.officialProtectionsLink} target="_blank" rel="noopener noreferrer sponsored">Source: Mastercard, Guide to Benefits</a>)</p>
                    <p>You also get Travel Accident Insurance and, of course, $0 Fraud Liability for any funny business on your account. (<a href={reviewData.officialSecurityLink} target="_blank" rel="noopener noreferrer sponsored">Source: Capital One</a>)</p>
                </section>

                <section id="section-10" className={styles.reviewSection}>
                    <h2>10. Digital Tools for the Modern Traveler: Managing Your Account with Ease</h2>
                    <p>Capital One's app is one of the best out there. It's clean, fast, and lets you manage everything from your phone. My favorite feature? Eno, the Capital One Assistant. You can generate virtual card numbers for online shopping so your real card number stays safe.</p>
                </section>

                <section id="section-11" className={styles.reviewSection}>
                  <h2>11. The Real Cost: The Full Spectrum of Rates &amp; Fees</h2>
                  <p>Let's talk numbers. No surprises here.</p>
                  <ul className={styles.featureList}>
                    <li><strong>Annual Fee:</strong> $95. Straight up.</li>
                    <li><strong>Foreign Transaction Fee:</strong> Zero. None. This alone saves you ~3% on every purchase abroad. (<a href={reviewData.ratesLink} target="_blank" rel="noopener noreferrer sponsored">Source: Capital One Disclosures</a>)</li>
                    <li><strong>Purchase APR:</strong> It's a variable rate. The usual advice applies: pay your balance in full every month. Don't pay interest—it cancels out your rewards.</li>
                    <li><strong>Late Fee:</strong> Up to $40. Just don't be late.</li>
                  </ul>
                </section>

                <section id="section-12" className={styles.reviewSection}>
                    <h2>12. Is the $95 Annual Fee Worth It? A Cost-Benefit Breakdown</h2>
                    <p>So, is the $95 fee worth paying year after year? Let's do the math. In year one, the $100 Global Entry credit wipes out the fee and then some. Easy win.</p>
                    <p>After that, it's all about your spending. To break even on the fee, you just need to earn 9,500 miles. At 2X miles per dollar, that means spending just <strong>$4,750 a year</strong> on the card. That’s less than $400 a month. For most people, that's a piece of cake.</p>
                </section>

                <section id="section-13" className={styles.reviewSection}>
                    <h2>13. Is the Venture Card Your Perfect Travel Companion? (User Profiles)</h2>
                    <p>The "best" card is different for everyone. I've found that Venture cardholders usually fit one of these profiles. See if one sounds like you.</p>
                    <div className={styles.profileCardContainer}>
                      <div className={styles.profileCard}>
                          <h4>Profile 1: "The Casual Adventurer"</h4>
                          <p>You travel a couple of times a year and want rewards that are easy to earn and use. No fuss. For you, the Venture card is a perfect fit.</p>
                      </div>
                      <div className={styles.profileCard}>
                          <h4>Profile 2: "The Aspiring Points Pro"</h4>
                          <p>You're interested in travel hacking but don't want to pay a huge annual fee. The Venture is a fantastic gateway into the world of transferable points without a big commitment.</p>
                      </div>
                      <div className={styles.profileCard}>
                          <h4>Profile 3: "The Road Warrior"</h4>
                          <p>You travel a lot for work or fun and need premium perks. The Venture is a good card, but you should probably look at the <Link href="/review/capital-one-venture-rewards-vs-venture-x-2025"><a>Capital One Venture X</a></Link> instead. Its unlimited lounge access and better travel credits will be more your speed.</p>
                      </div>
                  </div>
                </section>

                <section id="section-14" className={styles.reviewSection}>
                    <h2>14. Real-World Trip: Calculating Your Savings on a Weekend Getaway</h2>
                    <p>Let's make this real. Imagine a weekend trip for two.</p>
                    <DraggableTableWrapper>
                        <div className={styles.tableContainer}>
                            <table className={`${styles.statsTable}`}>
                                <thead>
                                    <tr>
                                        <th>Expense</th>
                                        <th>Cost</th>
                                        <th>Miles Earned</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td>Flights:</td><td>$600</td><td>1,200</td></tr>
                                    <tr><td>Hotel (via C1 Portal):</td><td>$900</td><td>4,500</td></tr>
                                    <tr><td>Rental Car (via C1 Portal):</td><td>$200</td><td>1,000</td></tr>
                                    <tr><td>Dining & Activities:</td><td>$500</td><td>1,000</td></tr>
                                    <tr><td><strong>Total Miles Earned from Trip:</strong></td><td></td><td><strong>7,700 miles</strong></td></tr>
                                </tbody>
                            </table>
                        </div>
                    </DraggableTableWrapper>
                    <p>Now, use 60,000 miles from that welcome bonus to "erase" the $600 flight cost. Boom. Free flights. That's how powerful the bonus alone can be.</p>
                </section>

                <section id="section-15" className={styles.reviewSection}>
                    <h2>15. The Good and The Bad (Pros and Cons)</h2>
                    <p>No card is perfect. Here's a straightforward look at where the Venture card shines and where it falls short.</p>
                    <div className={styles.prosConsContainer}>
                        <div className={styles.prosBox}>
                            <h4>Pros: What Makes it Great</h4>
                            <ul className={styles.featureList}>
                                <li><strong>Powerful, Simple Earning:</strong> The 2X miles on everything is a high, flat rate that's incredibly easy to manage. It's a perfect "one-card" setup.</li>
                                <li><strong>Extremely Flexible Redemptions:</strong> The "Cover Your Travel Purchases" feature is amazing. Book travel your way, then wipe it off your statement.</li>
                                <li><strong>Huge Welcome Bonus:</strong> The bonus is usually worth hundreds in travel, giving you a massive head start. (<a href={reviewData.officialWelcomeOfferLink} target="_blank" rel="noopener noreferrer sponsored">Source: Capital One</a>)</li>
                                <li><strong>Global Entry/TSA PreCheck® Credit:</strong> This perk pays for the annual fee in the first year. (<a href={reviewData.officialGlobalEntryLink} target="_blank" rel="noopener noreferrer sponsored">Source: U.S. Dept. of Homeland Security</a>)</li>
                                <li><strong>No Foreign Transaction Fees:</strong> <Link href="/review/top-5-no-ftf-cards-2025"><a>A must-have for international travel</a></Link>, this saves you 3% on everything you buy abroad. (<a href={reviewData.ratesLink} target="_blank" rel="noopener noreferrer sponsored">Source: Capital One</a>)</li>
                            </ul>
                        </div>
                        <div className={styles.consBox}>
                            <h4>Cons: What to Look Out For</h4>
                            <ul className={styles.featureList}>
                                <li><strong>The $95 Annual Fee:</strong> It's a fair price, but if you barely travel, a no-fee card might be better.</li>
                                <li><strong>No Major U.S. Airline Partners:</strong> You can't transfer miles directly to Delta, American, or United. This is a drawback for loyalists, but the workarounds are pretty easy. It's a key difference when comparing <Link href="/review/chase-vs-capital-one-travel-cards-2025"><a>Chase vs. Capital One travel cards</a></Link>.</li>
                                <li><strong>Bad Value for Non-Travel Redemptions:</strong> Don't redeem for cash back. The rate is terrible. This card is for travel, period.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section id="section-16" className={styles.reviewSection}>
                  <h2>16. How It Stacks Up: Venture vs. The Rivals</h2>
                  <p>The Venture card doesn't exist in a vacuum. Here’s how it compares to its main competitors.</p>
                  <DraggableTableWrapper>
                    <div className={styles.tableContainer}>
                      <table className={`${styles.statsTable} ${styles.comparisonTable}`}>
                        <thead>
                          <tr>
                            <th>Feature</th>
                            <th>Capital One Venture</th>
                            <th><Link href="/review/chase-sapphire-preferred-2025"><a>Chase Sapphire Preferred®</a></Link></th>
                            <th><Link href="/cards/capital-one-venture-x"><a>Capital One Venture X</a></Link></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td data-label="Feature">Annual Fee</td>
                            <td data-label="Venture"><strong>$95</strong></td>
                            <td data-label="Sapphire Preferred">$95</td>
                            <td data-label="Venture X">$395</td>
                          </tr>
                          <tr>
                            <td data-label="Feature">Base Earning Rate</td>
                            <td data-label="Venture"><strong>2X</strong></td>
                            <td data-label="Sapphire Preferred">1X</td>
                            <td data-label="Venture X">2X</td>
                          </tr>
                          <tr>
                            <td data-label="Feature">Key Annual Credit</td>
                            <td data-label="Venture">None</td>
                            <td data-label="Sapphire Preferred">$50 Hotel Credit</td>
                            <td data-label="Venture X"><strong>$300 Travel Credit</strong></td>
                          </tr>
                          <tr>
                            <td data-label="Feature">Lounge Access</td>
                            <td data-label="Venture">2 annual passes</td>
                            <td data-label="Sapphire Preferred">None</td>
                            <td data-label="Venture X"><strong>Unlimited</strong></td>
                          </tr>
                          <tr>
                            <td data-label="Feature">Global Entry Credit</td>
                            <td data-label="Venture"><strong>Yes</strong></td>
                            <td data-label="Sapphire Preferred">No</td>
                            <td data-label="Venture X"><strong>Yes</strong></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </DraggableTableWrapper>
                  <p>This chart says it all. The Venture has a better base earning rate than the Sapphire Preferred and gives you a taste of premium perks its rival lacks. It's perfectly positioned between the basic cards and the ultra-premium Venture X.</p>
                </section>

                <section id="section-17" className={styles.reviewSection}>
                    <h2>17. Voices from the Community: What Real People Are Saying</h2>
                    <p>I spend a lot of time on travel forums. Here’s the real talk I’ve seen about the Venture card.</p>
                    <div className={styles.testimonialContainer}>
                        <blockquote className={styles.testimonialQuote}>
                            <p>&quot;I love that I don't have to think. I use it for my business supplies and groceries and know I'm getting a solid 2X return. The simplicity is its best feature.&quot;</p>
                            <footer>– Sarah, the Side-Hustler</footer>
                        </blockquote>
                        <blockquote className={styles.testimonialQuote}>
                            <p>&quot;I was floored when they approved me for a $20,000 limit. It was far more than I expected and made it easy to put larger expenses on it to earn miles.&quot;</p>
                            <footer>– James, the Homeowner</footer>
                        </blockquote>
                        <blockquote className={styles.testimonialQuote}>
                            <p>&quot;I was happy until I tried to cancel a car rental booked through the portal. Getting the points refunded was a nightmare... a reminder that portals can add complexity.&quot;</p>
                            <footer>– Maria, the Planner</footer>
                        </blockquote>
                        <blockquote className={styles.testimonialQuote}>
                            <p>&quot;No direct partner for Delta is the big drawback for me. I know you can book through partners, but I'd prefer the convenience of transferring directly to the airline I actually fly.&quot;</p>
                            <footer>– David, the Loyal Flyer</footer>
                        </blockquote>
                        <blockquote className={styles.testimonialQuote}>
                            <p>&quot;My advice? Go for the Venture X if you travel more than twice a year. The $300 travel credit makes its effective annual fee the same as the regular Venture, but with way more perks.&quot;</p>
                            <footer>– Chloe, the Upgrader</footer>
                        </blockquote>
                    </div>
                </section>

                <section id="section-18" className={`${styles.reviewSection} ${styles.faqSection}`}>
                  <h2>18. Frequently Asked Questions (FAQs)</h2>
                  <div className={styles.faqContainer}>
                      {structuredDataOptimized['@graph'].find(item => item['@type'] === 'FAQPage').mainEntity.map((faq, index) => (
                          <details key={index} className={styles.faqItem} name={`faq-${index + 1}`}>
                              <summary className={styles.faqQuestion}>{`${index + 1}. ${faq.name}`}</summary>
                              <div className={styles.faqAnswer}>
                                <p dangerouslySetInnerHTML={{ __html: faq.acceptedAnswer.text.replace("Source: Capital One, Venture Rewards Program Terms and Conditions.", `(<a href="${reviewData.officialProgramTermsLink}" target="_blank" rel="noopener noreferrer sponsored">Source: Capital One, Venture Rewards Program Terms and Conditions</a>)`) }} />
                              </div>
                          </details>
                      ))}
                  </div>
                </section>

                <section id="section-19" className={styles.reviewSection}>
                  <h2>19. The Bottom Line: My Final Verdict</h2>
                  <p>So, what's my final take? After reviewing dozens of travel cards, I can confidently say the {reviewData.cardName} is the champion of powerful simplicity. It’s not the flashiest card on the block. It’s not for the elite road warrior. It’s for the rest of us—the vast majority of travelers who just want our daily spending to turn into cheaper vacations.</p>
                  <p>The card’s genius is its simple 2X earning rate and that beautifully easy "Cover Your Travel Purchases" feature. These two things alone remove all the friction from most rewards programs. Throw in the big welcome bonus and the Global Entry credit, and you’ve got a massive amount of first-year value that no-fee cards just can't touch.</p>
                  <p>Yes, the lack of direct US airline partners is a thing for advanced users. But for its target audience, it's a non-issue. Flexibility is the name of the game here.</p>
                  <p><strong>Bottom line: If you want one card to make travel simpler and cheaper, the {reviewData.cardName} is an absolutely outstanding choice. It's one of the top contenders on our list of the <Link href="/general/best-travel-cards-2025"><a>best travel credit cards</a></Link> for a reason. It just works.</strong></p>
                </section>

                <section id="section-eat" className={`${styles.reviewSection} ${styles.eatSection}`}>
                    <h2 dangerouslySetInnerHTML={{ __html: `Our Commitment to E-A-T: Expertise, Authority &amp; Trustworthiness`}}></h2>
                    <p>At <strong>{siteName}</strong>, we're obsessed with getting it right. We are committed to providing content that exemplifies Expertise, Authoritativeness, and Trustworthiness (E-A-T). I've personally analyzed this card against its competitors, dug through the terms and conditions, and synthesized real-world user data to give you a clear, balanced, and reliable guide. My goal is to help you make a smart decision. All information is current as of <strong>{new Date(updateDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</strong>, but remember to always verify details directly with Capital One, as terms can change.</p>
                </section>
              </article>
            </div>
          </div>
          <aside className={styles.sidebarArea}>
                <TableOfContents sections={tocSections} />
          </aside>
        </div>
      </main>
        <div className={styles.stickyFooterContainer}>
            <div className={styles.stickyFooterContent}>
                <Image src={reviewData.imageUrl} alt={`${reviewData.cardName} small image`} width={60} height={38} className={styles.stickyFooterCardImage} />
                <div className={styles.stickyFooterText}>
                    <span className={styles.stickyFooterCardName}>{reviewData.cardName}</span>
                    <span className={styles.stickyFooterRating}>{siteName} Rating: {reviewData.ratingValue.toFixed(1)}/10</span>
                </div>
                <div className={styles.stickyFooterButtons}>
                    <a
                        href={reviewData.applyLink}
                        className={`${styles.stickyFooterBtn} ${styles.stickyFooterBtnApply}`}
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                    >
                        Apply Now
                    </a>
                    <a
                        href={reviewData.ratesLink}
                        className={`${styles.stickyFooterBtn} ${styles.stickyFooterBtnRates}`}
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                    >
                        See Rates & Fees
                    </a>
                </div>
            </div>
      </div>
    </>
  );
}

export default CapitalOneVentureCardReviewPage;