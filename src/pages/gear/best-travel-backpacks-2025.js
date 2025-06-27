// File: pages/gear/best-travel-backpacks-2025.js
"use client";

// This version includes the professional 3-image gallery for each backpack
// and preserves 100% of the detailed article content as requested.

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/NoFTFCardsReview.module.css'; // Reusing your site's existing review styles

// ─────────────────────────────────────────────────────────────────────────────
// 🔗 CONFIG
// ─────────────────────────────────────────────────────────────────────────────
const SITE_BASE_URL = 'https://www.travelcardinsider.com';
const PAGE_PATH = '/gear/best-travel-backpacks-2025';
const PAGE_URL = `${SITE_BASE_URL}${PAGE_PATH}`;
const SITE_NAME = 'Travel Card Insider';
const HERO_IMAGE_SRC = '/your-hero-image-backpacks.jpg'; // ❗ Replace with your optimised hero image
const HERO_IMAGE_ALT = 'A collection of high-quality travel backpacks ready for an adventure.';
const DATE_PUBLISHED = '2025-06-27';
const DATE_MODIFIED = '2025-06-27';

// ─────────────────────────────────────────────────────────────────────────────
// 👤 AUTHOR INFO
// ─────────────────────────────────────────────────────────────────────────────
const author = {
    name: 'Dilan Madushanka',
    title: 'Lead Gear Analyst',
    image: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg',
    imageLarge: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg',
    bio: 'A seasoned traveler and gear expert, Dilan specializes in finding the most durable and practical gear for any journey.',
    expertise: ['Travel Backpacks', 'Luggage & Carry-Ons', 'Sustainable Travel', 'Gear Value Analysis'],
    social: {
        linkedin: 'https://www.linkedin.com/in/dilan-madushanka-b65293365',
        twitter: 'https://x.com/team_dilan',
        email: 'team@travelcardinsider.com',
    },
};

// ─────────────────────────────────────────────────────────────────────────────
// 🎒 TRAVEL GEAR DATA - WITH 3 IMAGES AND 100% OF YOUR DETAILED CONTENT
// ─────────────────────────────────────────────────────────────────────────────
const travelGearData = [
    {
        id: 'aer-travel-pack-3',
        name: '1. Aer Travel Pack 3: The Blue-Chip Tech Stock',
        images: [ // ❗ Replace with your actual image paths
            { src: '/gear-images/aer-front.webp', alt: 'Aer Travel Pack 3 front view' },
            { src: '/gear-images/aer-open.webp', alt: 'Aer Travel Pack 3 open showing compartments' },
            { src: '/gear-images/aer-lifestyle.webp', alt: 'Aer Travel Pack 3 in a travel setting' },
        ],
        persona: 'The tech-savvy urbanist and business professional.',
        bottomLine: 'A premium investment in organization and professional style. Its durable materials and lifetime warranty deliver exceptional long-term value for the tech-centric traveler.',
        userTestimonial: '"Exactly what I was looking for. I am planning a backpacking trip in Europe... Travel pack 3 is the perfect one. It fits all the essential items without needing a roller." - Ming C., Verified Reviewer [AerSF.com, Customer Reviews]'
    },
    {
        id: 'osprey-farpoint-40',
        name: '2. Osprey Farpoint 40: The Long-Term Growth Fund',
        images: [ // ❗ Replace with your actual image paths
            { src: '/gear-images/osprey-front.webp', alt: 'Osprey Farpoint 40 front view' },
            { src: '/gear-images/osprey-harness.webp', alt: 'Osprey Farpoint 40 showing harness system' },
            { src: '/gear-images/osprey-lifestyle.webp', alt: 'Osprey Farpoint 40 on a traveler\'s back' },
        ],
        persona: 'The comfort-seeking adventurer and world traveler who walks for miles.',
        bottomLine: "Backed by Osprey's legendary \"All Mighty Guarantee,\" the Farpoint 40 offers an unbeatable return on investment for any traveler who prioritizes comfort above all else.",
        userTestimonial: '"This backpack worked great for a 17 day Europe trip with many train rides and stairs. I would pack less next time but it held my overpacking and lots of comfort gear for the plane." - Elise, Verified Buyer'
    },
    {
        id: 'cotopaxi-allpa-35l',
        name: '3. Cotopaxi Allpa 35L: The Socially Responsible Investment',
        images: [ // ❗ Replace with your actual image paths
            { src: '/gear-images/cotopaxi-front.webp', alt: 'Cotopaxi Allpa 35L front view in Del Dia colors' },
            { src: '/gear-images/cotopaxi-clamshell.webp', alt: 'Cotopaxi Allpa 35L open in clamshell layout' },
            { src: '/gear-images/cotopaxi-lifestyle.webp', alt: 'Cotopaxi Allpa 35L in an outdoor setting' },
        ],
        persona: 'The conscious, colorful, and hyper-organized explorer.',
        bottomLine: 'The Allpa 35L is an investment in joyful organization and sustainable design. Its 100% recycled fabrics and lifetime warranty make it a purchase you can feel good about [Cotopaxi.com, Allpa 35L Product Page].',
        userTestimonial: '"I am still in awe over how much stuff I can fit into this backpack and how well organized everything fits. Its compartments separate and are functionally thoughtful. Worth every penny." - Manny M., Verified Buyer'
    },
    {
        id: 'peak-design-travel-backpack',
        name: '4. Peak Design Travel Backpack 45L: The Diversified Mutual Fund',
        images: [ // ❗ Replace with your actual image paths
            { src: '/gear-images/peak-front.webp', alt: 'Peak Design Travel Backpack 45L front view' },
            { src: '/gear-images/peak-expanded.webp', alt: 'Peak Design Travel Backpack showing expansion' },
            { src: '/gear-images/peak-lifestyle.webp', alt: 'Peak Design Travel Backpack with camera cube' },
        ],
        persona: 'The ultimate generalist—photographer one day, business traveler the next.',
        bottomLine: 'Arguably the most versatile travel bag on the market. Its ability to adapt, combined with a lifetime guarantee, provides incredible long-term value for the traveler who does it all.',
        userTestimonial: '"It rained so much in Central America, however the material held up and everything remained dry inside... 10/10 would recommend for regular travel, business travel and to school/work!!!" - Mr. Anderson, Verified Reviewer'
    },
    {
        id: 'tortuga-travel-backpack-pro',
        name: '5. Tortuga Travel Backpack Pro 40L: The Gilt-Edged Bond',
        images: [ // ❗ Replace with your actual image paths
            { src: '/gear-images/tortuga-front.webp', alt: 'Tortuga Travel Backpack Pro 40L front view' },
            { src: '/gear-images/tortuga-hipbelt.webp', alt: 'Tortuga Travel Backpack Pro showing hip belt' },
            { src: '/gear-images/tortuga-lifestyle.webp', alt: 'Tortuga Travel Backpack Pro in a city' },
        ],
        persona: 'The hardcore one-bag purist demanding peak performance.',
        bottomLine: 'While expensive, this is an investment in absolute confidence. For travelers facing unpredictable weather or heavy loads, its extreme durability and comfort provide outstanding value.',
        userTestimonial: '"Love this backpack. The exterior feels rugged and tough like a tank. While the interior is smart and feels luxurious like a Mercedes." - David, Verified Buyer'
    },
    {
        id: 'the-north-face-base-camp-voyager',
        name: '6. The North Face Base Camp Voyager 35L: The High-Yield Stock',
        images: [ // ❗ Replace with your actual image paths
            { src: '/gear-images/tnf-front.webp', alt: 'The North Face Base Camp Voyager 35L front view' },
            { src: '/gear-images/tnf-laptop.webp', alt: 'The North Face Base Camp Voyager showing laptop sleeve' },
            { src: '/gear-images/tnf-lifestyle.webp', alt: 'The North Face Base Camp Voyager at an airport' },
        ],
        persona: 'The rugged weekender and practical adventurer needing a durable, no-fuss bag.',
        bottomLine: 'This pack offers a tremendous return, delivering iconic durability in a travel-friendly format with smart features. It represents excellent value for years of adventure.',
        userTestimonial: '"Comfortable, useful pocket design. Excellent travel backpack for a weekend or as a supplemental bag to a roller... The pocket configuration is great and there is no wasted space." - Ian, Verified Buyer'
    },
    {
        id: 'nomatic-travel-bag-40l',
        name: '7. Nomatic Travel Bag 40L: The Speculative Tech IPO',
        images: [ // ❗ Replace with your actual image paths
            { src: '/gear-images/nomatic-front.webp', alt: 'Nomatic Travel Bag 40L front view' },
            { src: '/gear-images/nomatic-features.webp', alt: 'Nomatic Travel Bag 40L showing multiple features' },
            { src: '/gear-images/nomatic-lifestyle.webp', alt: 'Nomatic Travel Bag 40L carried as a briefcase' },
        ],
        persona: 'The hyper-organized professional who wants a pocket for everything.',
        bottomLine: 'A high-reward investment in a unique organizational system. For those whose packing style aligns with its feature-dense layout, it can be a game-changer. For others, it may feel overly complex.',
        userTestimonial: '"I bought the NOMATIC Travel Bag 40L in 2017, and it\'s been a game-changer! ...What really stands out is NOMATIC\'s lifetime warranty and customer service... If you\'re on the fence, trust me—it\'s worth every penny!" - Carl L., Verified Buyer [Nomatic.com, Customer Reviews]'
    }
];

// ─────────────────────────────────────────────────────────────────────────────
// 🧠 HELPERS - JSON-LD SCHEMA
// ─────────────────────────────────────────────────────────────────────────────
function generateJsonLD() {
    const breadcrumbsSchema = {
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_BASE_URL, },
            { '@type': 'ListItem', position: 2, name: 'Travel Gear', item: `${SITE_BASE_URL}/gear`, },
            { '@type': 'ListItem', position: 3, name: 'The 2025 Travel Backpack Portfolio', item: PAGE_URL, },
        ],
    };

    const articleSchema = {
        '@type': 'Article',
        mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
        headline: 'The 2025 Travel Backpack Portfolio: An Expert Review of 7 Must-Have Packs',
        description: 'An expert review of 2025’s top backpacks, analyzing comfort, security, style, and overall value to help you make a smart travel investment.',
        image: [`${SITE_BASE_URL}${HERO_IMAGE_SRC}`],
        author: { '@type': 'Person', name: author.name, url: author.social.linkedin || SITE_BASE_URL, },
        publisher: { '@type': 'Organization', name: SITE_NAME, logo: { '@type': 'ImageObject', url: `${SITE_BASE_URL}/images/travel-card-insider-logo-120.png`, }, },
        datePublished: DATE_PUBLISHED,
        dateModified: DATE_MODIFIED,
    };

    return JSON.stringify({ '@context': 'https://schema.org', '@graph': [articleSchema, breadcrumbsSchema] }, null, 2);
}

// ─────────────────────────────────────────────────────────────────────────────
// 🌐 COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
function BestTravelBackpacksPage2025() {
    // Tooltip logic (reused and unchanged)
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
                {/* All SEO metadata is preserved and updated */}
                <title>The 2025 Travel Backpack Portfolio: Expert Review | {SITE_NAME}</title>
                <meta name="description" content="An expert review of 2025’s top backpacks, analyzing comfort, security, style, and overall value to help you make a smart travel investment." />
                <meta name="viewport" content="width=device-width,initial-scale=1" />
                <link rel="canonical" href={PAGE_URL} />
                <meta property="og:type" content="article" />
                <meta property="og:title" content={`The 2025 Travel Backpack Portfolio: Expert Review | ${SITE_NAME}`} />
                <meta property="og:description" content="A strategic review of 2025's best travel backpacks, analyzed as long-term assets for efficiency, comfort, and value." />
                <meta property="og:url" content={PAGE_URL} />
                <meta property="og:image" content={`${SITE_BASE_URL}${HERO_IMAGE_SRC}`} />
                <meta property="article:published_time" content={DATE_PUBLISHED} />
                <meta property="article:modified_time" content={DATE_MODIFIED} />
                <meta name="twitter:card" content="summary_large_image" />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: generateJsonLD() }} />
            </Head>

            <main className={styles.reviewContainer}>
                <header className={styles.reviewHeader}>
                    <h1>The 2025 Travel Backpack Portfolio: An Expert Review of 7 Must-Have Packs</h1>
                     {/* Author section is preserved */}
                     <div className={styles.authorBioContainer} ref={triggerRef} onMouseEnter={handleMouseEnterTriggerOrTooltip} onMouseLeave={handleMouseLeaveTriggerOrTooltip} tabIndex={0} >
                        <Image src={author.image} alt={`${author.name} headshot`} width={40} height={40} className={styles.authorImageSmall} priority />
                        <div className={styles.authorInfo}>
                            <span className={styles.authorName}>{author.name}</span>
                            <span className={styles.authorTitle}>{author.title}</span>
                            <time dateTime={DATE_MODIFIED} className={styles.authorLastEdited}>Last updated: {new Date(DATE_MODIFIED).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                        </div>
                        {showTooltip && (<div className={styles.authorTooltip} ref={tooltipRef} role="tooltip" onMouseEnter={handleMouseEnterTriggerOrTooltip} onMouseLeave={handleMouseLeaveTriggerOrTooltip} >
                               {/* Full author tooltip content can be added here if needed */}
                        </div>)}
                    </div>
                </header>

                <div className={styles.heroSection}>
                    <Image src={HERO_IMAGE_SRC} alt={HERO_IMAGE_ALT} layout="responsive" width={900} height={450} objectFit="cover" priority className={styles.heroImage} />
                </div>

                <article className={styles.reviewSection}>
                    {/* Part I: Article Introduction is 100% preserved */}
                    <section>
                        <h2>Part I: The Anatomy of a Sound Travel Investment</h2>
                        <p>Choosing a travel backpack in 2025 is a strategic investment in your travel efficiency and comfort. The right pack is a durable asset; the wrong one is a liability, costing you in physical pain or surprise airline fees. This review analyzes 2025’s top backpacks not just on features, but on their long-term value. We'll break down the core pillars of a smart investment: comfort, security, style, and overall value.</p>
                        <h3>The Comfort Equation</h3>
                        <p>Comfort is your most valuable asset. It’s a science of ergonomic design and load distribution. Today's market is dominated by two philosophies: hiking-derived suspension systems and streamlined urban harnesses. Hiking-style packs, like the Osprey Farpoint 40, use robust hip belts to transfer up to 80% of the weight from your shoulders to your hips—a game-changer for long walks [Osprey.com, Farpoint 40 Product Page]. Urban packs, like the Aer Travel Pack 3, prioritize a sleek profile for shorter journeys between airports and hotels [AerSF.com, Travel Pack 3 Product Page].</p>
                        <p>Your first step is to honestly assess your travel style. If you walk a lot, prioritize suspension. If you mainly use transport, an organized urban pack is a better fit.</p>
                        <h3>Fortress on Your Back</h3>
                        <p>Modern security is a multi-layered system. It starts with a rugged, weather-resistant shell, like the durable tarpaulin on The North Face Base Camp Voyager [TheNorthFace.com, Base Camp Voyager Product Page] or the waterproof sailcloth on the Tortuga Travel Backpack Pro [TortugaBackpacks.com, Travel Backpack Pro 40L Product Page]. Next is access control. Lockable YKK zippers are standard, but leaders like Cotopaxi and Peak Design add anti-theft loops to deter pickpockets. Finally, intelligent design adds another layer. The Aer Travel Pack 3 has a hidden pocket for a smart tracker, a brilliant security boost. Be mindful of carry-on compliance; some bags push the size limits, creating a risk on stricter international airlines.</p>
                        <h3>Style and Function</h3>
                        <p>A backpack's look reflects its function. Aer perfects the sleek, urban minimalist aesthetic. Cotopaxi’s Del Día collection offers vibrant, one-of-a-kind designs that champion sustainability [Cotopaxi.com, Del Día Collection]. Brands like The North Face and Osprey have a rugged, utilitarian look that signals adventure-readiness. Peak Design and Nomatic offer a tech-inspired, hybrid style for creatives and hyper-organized professionals.</p>
                        <h3>The Value Proposition</h3>
                        <p>True value is the total cost of ownership, weighing price against durability and warranty. A strong lifetime warranty from brands like Osprey, Peak Design, and Tortuga is a financial safety net [Osprey.com, All Mighty Guarantee]. Versatility is a value multiplier. The Peak Design Travel Backpack’s ability to change size makes it three bags in one, lowering its cost-per-use [PeakDesign.com, Travel Backpack 45L Product Page].</p>
                    </section>
                    
                    {/* Part II: In-Depth Reviews with Image Galleries */}
                    <section>
                        <h2>Part II: The 2025 Elite Seven Portfolio: In-Depth Reviews</h2>
                        {travelGearData.map((item, index) => (
                            <div key={item.id} className={`${styles.cardDetailSection} ${index < travelGearData.length - 1 ? styles.cardSeparator : ''}`}>
                                <h3>{item.name}</h3>
                                
                                {/* === NEW IMAGE GALLERY === */}
                                <div className="gear-image-gallery" style={{ display: 'flex', gap: '1rem', margin: '1.5rem 0', flexWrap: 'wrap', background: '#f9f9f9', padding: '1rem', borderRadius: '8px' }}>
                                    {item.images.map((image, imgIndex) => (
                                        <div key={imgIndex} style={{ flex: '1 1 200px', minWidth: '200px', position: 'relative', height: '200px', borderRadius: '4px', overflow: 'hidden' }}>
                                            <Image
                                                src={image.src}
                                                alt={image.alt}
                                                layout="fill"
                                                objectFit="cover"
                                                className="gear-image"
                                            />
                                        </div>
                                    ))}
                                </div>
                                {/* === END IMAGE GALLERY === */}

                                <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
                                    <li><strong>Persona:</strong> {item.persona}</li>
                                    <li style={{ marginTop: '0.5rem' }}><strong>Bottom Line:</strong> {item.bottomLine}</li>
                                    <li style={{ marginTop: '0.5rem' }}><strong>User Testimonial:</strong> <em style={{ display: 'block', paddingTop: '0.25rem', borderLeft: '3px solid #eee', paddingLeft: '1rem' }}>{item.userTestimonial}</em></li>
                                </ul>
                            </div>
                        ))}
                    </section>

                    {/* Part III: Final Verdict is 100% preserved */}
                    <section>
                        <h2>Part III: The Final Verdict: Your Persona-Based Recommendation</h2>
                        <ul>
                            <li><strong>For the Digital Nomad:</strong> The Aer Travel Pack 3 is your greatest asset for protecting and organizing your mobile office.</li>
                            <li><strong>For the Adventurer Who Walks for Miles:</strong> The Osprey Farpoint 40 or Tortuga Pro 40L are your blue-chip investments in comfort. Choose Osprey for value or Tortuga for maximum durability.</li>
                            <li><strong>For the Versatile Traveler:</strong> The Peak Design Travel Backpack 45L is your diversified mutual fund, ready for any trip you can imagine.</li>
                            <li><strong>For the Style-Conscious Explorer:</strong> The Cotopaxi Allpa 35L perfectly aligns with your values and need for order, combining function with vibrant personality.</li>
                            <li><strong>For the No-Nonsense Weekender:</strong> The North Face Base Camp Voyager 35L offers the best dividend yield—a tough, reliable asset at an accessible price.</li>
                            <li><strong>For the Ultimate Organizer:</strong> The Nomatic Travel Bag 40L is a speculative but potentially high-reward play. If its hyper-compartmentalized system matches your style, the returns in efficiency will be immense.</li>
                        </ul>
                    </section>
                </article>
            </main>
        </>
    );
}

export default BestTravelBackpacksPage2025;