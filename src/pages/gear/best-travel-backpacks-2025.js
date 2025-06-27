// File: pages/gear/best-travel-backpacks-2025.js
"use client"; // 👈 Add this line at the very top

// ❗ Replace image src paths with your optimised, WebP‑or‑AVIF images.
// The paths below are placeholders. Gear images should be high quality.

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/NoFTFCardsReview.module.css'; // Reusing your site's existing review styles
import StarRating from '../../components/StarRating'; // Assuming you have this component for ratings

// ─────────────────────────────────────────────────────────────────────────────
// 🔗 CONFIG
// ─────────────────────────────────────────────────────────────────────────────
const SITE_BASE_URL = 'https://www.travelcardinsider.com';
const PAGE_PATH = '/gear/best-travel-backpacks-2025';
const PAGE_URL = `${SITE_BASE_URL}${PAGE_PATH}`;
const SITE_NAME = 'Travel Card Insider';
const HERO_IMAGE_SRC = '/your-hero-image-backpacks.jpg'; // ❗ Replace with your optimised hero image for backpacks
const HERO_IMAGE_ALT = 'A collection of high-quality travel backpacks ready for an adventure.';
const DATE_PUBLISHED = '2025-06-27'; // ✏️ Adjust to your actual publish date
const DATE_MODIFIED = '2025-06-27'; // ✏️ Update whenever you edit copy

// ─────────────────────────────────────────────────────────────────────────────
// 👤 AUTHOR INFO (You can reuse or create a new one for gear reviews)
// ─────────────────────────────────────────────────────────────────────────────
const author = {
    name: 'Dilan Madushanka',
    title: 'Lead Gear Analyst',
    image: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', // ❗ Your 40x40px web‑optimised headshot
    imageLarge: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', // ❗ Your 60x60px for tooltip
    bio: 'A seasoned traveler and gear expert, Dilan specializes in finding the most durable and practical gear for any journey.',
    expertise: [
        'Travel Backpacks',
        'Packing Cubes',
        'Tech Organizers',
        'Travel Comfort',
    ],
    social: {
        linkedin: 'https://www.linkedin.com/in/dilan-madushanka-b65293365',
        twitter: 'https://x.com/team_dilan',
        email: 'team@travelcardinsider.com',
    },
};

// ─────────────────────────────────────────────────────────────────────────────
// 🎒 TRAVEL GEAR DATA
// ─────────────────────────────────────────────────────────────────────────────
const travelGearData = [
    {
        id: 'peak-design-travel-backpack',
        name: 'Peak Design Travel Backpack 45L',
        category: 'Versatility',
        imageSrc: '/peak-design-backpack.webp', // ❗ Replace
        imageAlt: 'Peak Design Travel Backpack 45L',
        price: '$299.95',
        officialPageLink: 'https://www.peakdesign.com/products/travel-backpack',
        ourTake: "The ultimate all-in-one backpack. Its genius compression system, multitude of access points, and compatibility with Peak Design's packing cubes make it a top choice for photographers and one-bag travelers who demand organization and adaptability.",
        feature: 'Expands from a 30L daypack to a 45L gear-hauler, with weatherproof construction.',
        specs: 'Capacity: 30L to 45L | Weight: 4.5 lbs (2.05 kg) | Materials: Weatherproof 400D nylon canvas shell.',
        buyLink: 'https://www.peakdesign.com/products/travel-backpack',
        learnMoreLink: '/gear/peak-design-travel-backpack-review', // ✏️ Create this internal page later
        ratingValue: 9.2,
        ratingStars: 4.6,
    },
    {
        id: 'osprey-farpoint-40',
        name: 'Osprey Farpoint 40',
        category: 'Carry-On King',
        imageSrc: '/osprey-farpoint-40.webp', // ❗ Replace
        imageAlt: 'Osprey Farpoint 40 backpack',
        price: '$185.00',
        officialPageLink: 'https://www.osprey.com/us/en/product/farpoint-40-FARPNT40.html',
        ourTake: "A legend in the travel community for a reason. It's incredibly comfortable thanks to its harness system, carry-on compliant for most airlines, and durable enough to withstand years of abuse. The stowaway harness is perfect for checking the bag.",
        feature: 'LightWire frame suspension for comfortable carrying and a large panel zip for easy access.',
        specs: 'Capacity: 40L | Weight: 3.4 lbs (1.54 kg) | Materials: bluesign® approved, recycled 450D polyester.',
        buyLink: 'https://www.osprey.com/us/en/product/farpoint-40-FARPNT40.html',
        learnMoreLink: '/gear/osprey-farpoint-40-review', // ✏️ Create this internal page later
        ratingValue: 9.0,
        ratingStars: 4.5,
    },
    {
        id: 'aer-travel-pack-3',
        name: 'AER Travel Pack 3',
        category: 'Urban Explorer',
        imageSrc: '/aer-travel-pack-3.webp', // ❗ Replace
        imageAlt: 'AER Travel Pack 3 backpack',
        price: '$249.00',
        officialPageLink: 'https://www.aersf.com/travel-pack-3-black',
        ourTake: "Sleek, organized, and built for the modern digital nomad. Its thoughtful organization for tech, lay-flat main compartment, and robust materials make it perfect for city hopping and business trips. It looks professional and performs exceptionally.",
        feature: 'Dedicated, padded laptop pocket and a separate compartment for shoes or dirty clothes.',
        specs: 'Capacity: 35L | Weight: 4.12 lbs (1.87 kg) | Materials: 1680D Cordura® ballistic nylon exterior.',
        buyLink: 'https://www.aersf.com/travel-pack-3-black',
        learnMoreLink: '/gear/aer-travel-pack-3-review', // ✏️ Create this internal page later
        ratingValue: 8.9,
        ratingStars: 4.5,
    }
];

// ─────────────────────────────────────────────────────────────────────────────
// 📊 COMPARISON TABLE DATA
// ─────────────────────────────────────────────────────────────────────────────
const comparisonGearTableData = [
    { name: 'Peak Design Travel Backpack', price: '$299.95', capacity: '30-45L', weight: '4.5 lbs', bestFor: 'Max Versatility' },
    { name: 'Osprey Farpoint 40', price: '$185.00', capacity: '40L', weight: '3.4 lbs', bestFor: 'Comfortable Carry-On' },
    { name: 'AER Travel Pack 3', price: '$249.00', capacity: '35L', weight: '4.12 lbs', bestFor: 'Urban & Tech Travel' }
];

// ─────────────────────────────────────────────────────────────────────────────
// 🧠 HELPERS - JSON-LD SCHEMA
// ─────────────────────────────────────────────────────────────────────────────
function generateJsonLD() {
    const itemListElements = travelGearData.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
            '@type': 'Product',
            name: item.name,
            url: `${SITE_BASE_URL}${item.learnMoreLink}`,
            image: `${SITE_BASE_URL}${item.imageSrc}`,
            description: item.ourTake,
            brand: {
                '@type': 'Brand',
                name: item.name.split(' ')[0], // Simple brand extraction
            },
            offers: {
                '@type': 'Offer',
                priceCurrency: 'USD',
                price: item.price.replace('$', '').trim(),
                url: item.buyLink,
            },
            ...(item.ratingValue && {
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: item.ratingValue,
                bestRating: '10',
                ratingCount: 1, // Represents our single review rating
              },
            })
        },
    }));

    const breadcrumbsSchema = {
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_BASE_URL, },
            { '@type': 'ListItem', position: 2, name: 'Travel Gear', item: `${SITE_BASE_URL}/gear`, },
            { '@type': 'ListItem', position: 3, name: 'Best Travel Backpacks 2025', item: PAGE_URL, },
        ],
    };

    const articleSchema = {
        '@type': 'Article', // Using 'Article' schema type for gear reviews
        mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
        headline: 'Best Travel Backpacks 2025: Find Your Perfect Pack',
        description: 'Discover the best travel backpacks for any trip in 2025. We review top picks for versatility, carry-on compliance, and urban exploration.',
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
                { '@type': 'ItemList', name: 'Best Travel Backpacks 2025', url: PAGE_URL, numberOfItems: travelGearData.length, itemListElement: itemListElements, mainEntityOfPage: PAGE_URL },
            ],
        },
        null,
        2
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// 🌐 COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
function BestTravelBackpacksPage2025() {
    // This is the same tooltip logic from your other page. No changes needed.
    const [showTooltip, setShowTooltip] = useState(false);
    const triggerRef = useRef(null);
    const tooltipRef = useRef(null);
    const tooltipTimeoutIdRef = useRef(null);

    const handleMouseEnterTriggerOrTooltip = useCallback(() => {
        if (tooltipTimeoutIdRef.current) clearTimeout(tooltipTimeoutIdRef.current);
        setShowTooltip(true);
    }, []);

    const handleMouseLeaveTriggerOrTooltip = useCallback(() => {
        tooltipTimeoutIdRef.current = setTimeout(() => {
        let isStillHovering = false;
        if (triggerRef.current && triggerRef.current.matches(':hover')) isStillHovering = true;
        if (tooltipRef.current && tooltipRef.current.matches(':hover')) isStillHovering = true;
        if (!isStillHovering) setShowTooltip(false);
        }, 150);
    }, []);

    useEffect(() => {
        const currentTimeoutId = tooltipTimeoutIdRef.current;
        return () => { if (currentTimeoutId) clearTimeout(currentTimeoutId); };
    }, []);

    useEffect(() => {
        function handleClickOutside(event) {
        if (showTooltip && triggerRef.current && !triggerRef.current.contains(event.target) && tooltipRef.current && !tooltipRef.current.contains(event.target)) {
            setShowTooltip(false);
        }
        }
        if (showTooltip) document.addEventListener("mousedown", handleClickOutside);
        else document.removeEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [showTooltip]);


    return (
        <>
            <Head>
                <title>Best Travel Backpacks (June 2025) | {SITE_NAME}</title>
                <meta name="description" content="Discover the best travel backpacks for any trip in 2025. We review top picks for versatility, carry-on compliance, and urban exploration." />
                <meta name="viewport" content="width=device-width,initial-scale=1" />
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                <meta name="keywords" content="best travel backpacks, travel backpack review, carry-on backpack, one-bag travel, peak design, osprey farpoint, aer travel pack" />
                <link rel="canonical" href={PAGE_URL} />
                <meta property="og:type" content="article" />
                <meta property="og:title" content={`Best Travel Backpacks (June 2025) | ${SITE_NAME}`} />
                <meta property="og:description" content="From cobblestone streets to mountain trails, find the perfect backpack for your next adventure. Our guide breaks down the top packs of 2025." />
                <meta property="og:url" content={PAGE_URL} />
                <meta property="og:site_name" content={SITE_NAME} />
                <meta property="og:image" content={`${SITE_BASE_URL}${HERO_IMAGE_SRC}`} />
                <meta property="og:image:alt" content={HERO_IMAGE_ALT} />
                <meta property="og:locale" content="en_US" />
                <meta property="article:published_time" content={DATE_PUBLISHED} />
                <meta property="article:modified_time" content={DATE_MODIFIED} />
                <meta property="article:author" content={author.name} />
                <meta property="article:section" content="Travel Gear" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`Best Travel Backpacks (2025) - ${SITE_NAME}`} />
                <meta name="twitter:description" content="From cobblestone streets to mountain trails, find the perfect backpack for your next adventure. Our guide breaks down the top packs of 2025." />
                <meta name="twitter:image" content={`${SITE_BASE_URL}${HERO_IMAGE_SRC}`} />
                {author.social.twitter && <meta name="twitter:creator" content={`@${author.social.twitter.split('/').pop()}`} />}
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: generateJsonLD() }} />
            </Head>

            <main className={styles.reviewContainer}>
                <header className={styles.reviewHeader}>
                    <h1>Best Travel Backpacks 2025: Your Guide to the Perfect Pack</h1>
                    
                    <div
                        className={styles.authorBioContainer}
                        ref={triggerRef}
                        onMouseEnter={handleMouseEnterTriggerOrTooltip}
                        onMouseLeave={handleMouseLeaveTriggerOrTooltip}
                        onFocus={handleMouseEnterTriggerOrTooltip} 
                        onBlur={handleMouseLeaveTriggerOrTooltip} 
                        aria-haspopup="true"
                        aria-expanded={showTooltip}
                        tabIndex={0} 
                    >
                        <Image
                            src={author.image}
                            alt={`${author.name} headshot`} 
                            width={40} 
                            height={40} 
                            className={styles.authorImageSmall}
                            priority
                        />
                        <div className={styles.authorInfo}>
                            <span className={styles.authorName}>{author.name}</span> 
                            <span className={styles.authorTitle}>{author.title}</span> 
                            {DATE_MODIFIED && (
                                <time dateTime={DATE_MODIFIED} className={styles.authorLastEdited}>
                                    Last updated: {new Date(DATE_MODIFIED).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                                </time>
                            )}
                        </div>
                        
                        {showTooltip && (
                            <div 
                                className={styles.authorTooltip}
                                ref={tooltipRef}
                                role="tooltip"
                                onMouseEnter={handleMouseEnterTriggerOrTooltip} 
                                onMouseLeave={handleMouseLeaveTriggerOrTooltip}
                            >
                               <div className={styles.authorTooltipHeader}>
                                    <Image
                                      src={author.imageLarge}
                                      alt={`${author.name} headshot`} 
                                      width={60} 
                                      height={60} 
                                      className={styles.authorTooltipImage}
                                    />
                                    <div className={styles.authorTooltipInfo}>
                                        <span className={styles.authorTooltipName}>{author.name}</span> 
                                        <span className={styles.authorTooltipTitle}>{author.title}</span> 
                                    </div>
                                  </div>
                                  {author.expertise && author.expertise.length > 0 && ( 
                                    <div className={styles.authorTooltipExpertise}>
                                        <strong>Expertise</strong>
                                        <ul>
                                            {author.expertise.map(area => <li key={area}>{area}</li>)} 
                                        </ul>
                                    </div>
                                  )}
                                  <p className={styles.authorTooltipBioSnippet}>{author.bio}</p> 
                                  
                                  <div className={styles.authorTooltipFooter}>
                                      <div className={styles.authorTooltipSocials}>
                                           {author.social.linkedin && ( 
                                                <a href={author.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${author.name} on LinkedIn`} className={styles.socialIconLink}>
                                                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                                </a>
                                              )}
                                            {author.social.twitter && ( 
                                                <a href={author.social.twitter} target="_blank" rel="noopener noreferrer" aria-label={`${author.name} on Twitter`} className={styles.socialIconLink}>
                                                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.422.724-.665 1.56-.665 2.452 0 1.697.864 3.198 2.18 4.078-.8-.025-1.555-.247-2.227-.616v.054c0 2.37 1.683 4.333 3.91 4.78-.426.116-.874.174-1.337.174-.31 0-.611-.03-.904-.085.622 1.936 2.421 3.338 4.553 3.377-1.672 1.309-3.781 2.088-6.072 2.088-.394 0-.784-.023-1.169-.069 2.16 1.389 4.723 2.202 7.482 2.202 8.979 0 13.897-7.446 13.897-13.898 0-.21 0-.42-.015-.63.953-.689 1.778-1.56 2.433-2.525z"/></svg>
                                                </a>
                                              )}
                                            {author.social.email && ( 
                                                <a href={`mailto:${author.social.email}`} aria-label={`Email ${author.name}`} className={styles.socialIconLink}>
                                                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>
                                                </a>
                                              )}
                                      </div>
                                      <Link href={`/author/${author.name.toLowerCase().replace(' ', '-')}`} legacyBehavior>
                                         <a className={styles.authorBioLink}>See Full Bio</a>
                                      </Link>
                                  </div>
                            </div>
                        )}
                    </div>
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
                
                <p className={styles.disclaimer}>
                    <strong>Disclaimer:</strong> Prices and specifications are subject to change and are accurate as of {new Date(DATE_MODIFIED).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}. Please verify all details with the manufacturer. This page may contain affiliate links.
                </p>

                <article>
                    <section className={styles.reviewSection}>
                        <h2>The Quest for the Perfect Pack</h2>
                        <p>Your backpack isn't just a bag; it's your mobile base of operations. It protects your valuables, organizes your life, and carries the weight of your journey. The right backpack can make travel seamless, while the wrong one can be a literal pain in the neck.</p>
                        <p>This guide cuts through the noise. We've hauled, packed, and tested dozens of bags to find the best travel backpacks for 2025. Whether you're a digital nomad, a weekend adventurer, or embarking on a trip around the world, we have a recommendation for you.</p>
                    </section>
                    
                    <section id="top-picks" className={styles.reviewSection}>
                        <h2>The 2025 Editor's Picks: Top Travel Backpacks</h2>
                        <p>The "best" backpack is personal. It depends on your travel style, body type, and the gear you carry. Here are our top contenders.</p>
                        
                        {travelGearData.map((item, index) => (
                            <div key={item.id} className={`${styles.cardDetailSection} ${index < travelGearData.length - 1 ? styles.cardSeparator : ''}`}>
                                <div className={styles.cardHeader}>
                                    <div className={styles.cardImageContainer}>
                                        <Image
                                            src={item.imageSrc}
                                            alt={item.imageAlt}
                                            width={150} 
                                            height={150}
                                            objectFit="contain"
                                            loading={index > 1 ? "lazy" : "eager"}
                                        />
                                    </div>
                                    <div className={styles.cardTitleRating}>
                                        <h3>
                                            <Link href={item.learnMoreLink}><a>{item.name}</a></Link>
                                            {' - '}
                                            <span className={styles.categoryLabel}>{item.category}</span>
                                        </h3>
                                        {item.ratingStars && <StarRating rating={item.ratingStars} />} 
                                        {item.ratingValue && <span className={styles.ratingValue}>Our Rating: {item.ratingValue.toFixed(1)}/10</span>}
                                    </div>
                                </div>
                                <ul>
                                    <li><strong>Expert Verdict:</strong> {item.ourTake}</li>
                                    <li><strong>Key Specs:</strong> {item.specs}</li>
                                    <li><strong>Price:</strong> {item.price} (<a href={item.officialPageLink} target="_blank" rel="noopener noreferrer sponsored">Official Product Page</a>)</li>
                                </ul>
                                <div className={styles.cardButtonsContainer}>
                                    <a href={item.buyLink} target="_blank" rel="noopener noreferrer sponsored" className={`${styles.cardButton} ${styles.applyButton}`}>Check Price</a>
                                    <Link href={item.learnMoreLink} legacyBehavior><a className={`${styles.cardButton} ${styles.secondaryButton}`}>Learn More</a></Link>
                                </div>
                            </div>
                        ))}
                    </section>
                    
                    <section id="comparison-table" className={`${styles.reviewSection} ${styles.comparisonTableContainer}`}>
                        <h2>Backpack Showdown: At a Glance</h2>
                        <div className={styles.tableWrapper}>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Backpack Name</th>
                                        <th>Price</th>
                                        <th>Capacity</th>
                                        <th>Weight</th>
                                        <th>Best For...</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {comparisonGearTableData.map((item) => (
                                        <tr key={item.name}>
                                            <td>{item.name}</td>
                                            <td>{item.price}</td>
                                            <td>{item.capacity}</td>
                                            <td>{item.weight}</td>
                                            <td>{item.bestFor}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section id="final-verdict" className={styles.reviewSection}>
                        <h2>Conclusion: Your Adventure Awaits</h2>
                        <p>Choosing the right travel backpack is an investment in your comfort and peace of mind on the road. Consider your needs carefully, and you'll find a companion that will last for years of adventures. Happy travels!</p>
                    </section>
                </article>
            </main>
        </>
    );
}

export default BestTravelBackpacksPage2025;