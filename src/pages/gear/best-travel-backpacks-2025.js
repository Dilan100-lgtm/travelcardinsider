// File: pages/gear/best-travel-backpacks-2025.js
"use client";

// This file has been updated to display a single, comprehensive article
// based on your provided text, ensuring 100% content preservation.

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/NoFTFCardsReview.module.css'; // Reusing existing review styles

// ─────────────────────────────────────────────────────────────────────────────
// 🔗 CONFIG
// ─────────────────────────────────────────────────────────────────────────────
const SITE_BASE_URL = 'https://www.travelcardinsider.com';
const PAGE_PATH = '/gear/best-travel-backpacks-2025';
const PAGE_URL = `${SITE_BASE_URL}${PAGE_PATH}`;
const SITE_NAME = 'Travel Card Insider';
const HERO_IMAGE_SRC = '/your-hero-image-backpacks.jpg'; // ❗ Replace with your optimised hero image for backpacks
const HERO_IMAGE_ALT = 'A collection of high-quality travel backpacks ready for an adventure.';
const DATE_PUBLISHED = '2025-06-27';
const DATE_MODIFIED = '2025-06-27'; // ✏️ Update whenever you edit copy

// ─────────────────────────────────────────────────────────────────────────────
// 👤 AUTHOR INFO (You can reuse or create a new one for gear reviews)
// ─────────────────────────────────────────────────────────────────────────────
const author = {
    name: 'Dilan Madushanka',
    title: 'Lead Gear Analyst',
    image: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg',
    imageLarge: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg',
    bio: 'A seasoned traveler and gear expert, Dilan specializes in finding the most durable and practical gear for any journey.',
    expertise: [
        'Travel Backpacks',
        'Luggage & Carry-Ons',
        'Sustainable Travel',
        'Gear Value Analysis',
    ],
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
                url: `${SITE_BASE_URL}/images/travel-card-insider-logo-120.png`,
            },
        },
        datePublished: DATE_PUBLISHED,
        dateModified: DATE_MODIFIED,
    };

    return JSON.stringify(
        {
            '@context': 'https://schema.org',
            '@graph': [articleSchema, breadcrumbsSchema],
        },
        null,
        2
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// 🌐 COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
function BestTravelBackpacksPage2025() {
    // Tooltip logic for author section (reused from your component)
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
                {/* Core SEO */}
                <title>The 2025 Travel Backpack Portfolio: Expert Review | {SITE_NAME}</title>
                <meta name="description" content="An expert review of 2025’s top backpacks, analyzing comfort, security, style, and overall value to help you make a smart travel investment." />
                <meta name="viewport" content="width=device-width,initial-scale=1" />
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                <meta name="keywords" content="best travel backpacks 2025, travel backpack review, backpack portfolio, one-bag travel, aer travel pack, osprey farpoint, cotopaxi allpa, peak design" />
                <link rel="canonical" href={PAGE_URL} />

                {/* Open Graph */}
                <meta property="og:type" content="article" />
                <meta property="og:title" content={`The 2025 Travel Backpack Portfolio: Expert Review | ${SITE_NAME}`} />
                <meta property="og:description" content="A strategic review of 2025's best travel backpacks, analyzed as long-term assets for efficiency, comfort, and value." />
                <meta property="og:url" content={PAGE_URL} />
                <meta property="og:site_name" content={SITE_NAME} />
                <meta property="og:image" content={`${SITE_BASE_URL}${HERO_IMAGE_SRC}`} />
                <meta property="og:image:alt" content={HERO_IMAGE_ALT} />
                <meta property="og:locale" content="en_US" />
                <meta property="article:published_time" content={DATE_PUBLISHED} />
                <meta property="article:modified_time" content={DATE_MODIFIED} />
                <meta property="article:author" content={author.name} />
                <meta property="article:section" content="Travel Gear" />
                
                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`The 2025 Travel Backpack Portfolio: Expert Review | ${SITE_NAME}`} />
                <meta name="twitter:description" content="A strategic review of 2025's best travel backpacks, analyzed as long-term assets for efficiency, comfort, and value." />
                <meta name="twitter:image" content={`${SITE_BASE_URL}${HERO_IMAGE_SRC}`} />
                {author.social.twitter && <meta name="twitter:creator" content={`@${author.social.twitter.split('/').pop()}`} />}
                
                {/* JSON‑LD Schema */}
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: generateJsonLD() }} />
            </Head>

            <main className={styles.reviewContainer}>
                <header className={styles.reviewHeader}>
                    <h1>The 2025 Travel Backpack Portfolio: An Expert Review of 7 Must-Have Packs</h1>
                    
                    {/* --- AUTHOR SECTION (Reused from your component) --- */}
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

                <article className={styles.reviewSection} style={{ maxWidth: '800px', margin: '2rem auto' }}>
                    
                    {/* Part I */}
                    <section>
                        <h2>Part I: The Anatomy of a Sound Travel Investment</h2>
                        <p>Choosing a travel backpack in 2025 is a strategic investment in your travel efficiency and comfort. The right pack is a durable asset; the wrong one is a liability, costing you in physical pain or surprise airline fees. This review analyzes 2025’s top backpacks not just on features, but on their long-term value. We'll break down the core pillars of a smart investment: comfort, security, style, and overall value.</p>
                        
                        <h3>The Comfort Equation</h3>
                        <p>Comfort is your most valuable asset. It’s a science of ergonomic design and load distribution. Today's market is dominated by two philosophies: hiking-derived suspension systems and streamlined urban harnesses. Hiking-style packs, like the Osprey Farpoint 40, use robust hip belts to transfer up to 80% of the weight from your shoulders to your hips—a game-changer for long walks. Urban packs, like the Aer Travel Pack 3, prioritize a sleek profile for shorter journeys between airports and hotels.</p>
                        <p>Your first step is to honestly assess your travel style. If you walk a lot, prioritize suspension. If you mainly use transport, an organized urban pack is a better fit.</p>

                        <h3>Fortress on Your Back</h3>
                        <p>Modern security is a multi-layered system. It starts with a rugged, weather-resistant shell, like the durable tarpaulin on The North Face Base Camp Voyager or the waterproof sailcloth on the Tortuga Travel Backpack Pro. Next is access control. Lockable YKK zippers are standard, but leaders like Cotopaxi and Peak Design add anti-theft loops to deter pickpockets. Finally, intelligent design adds another layer. The Aer Travel Pack 3 has a hidden pocket for a smart tracker, a brilliant security boost. Be mindful of carry-on compliance; some bags push the size limits, creating a risk on stricter international airlines.</p>

                        <h3>Style and Function</h3>
                        <p>A backpack's look reflects its function. Aer perfects the sleek, urban minimalist aesthetic. Cotopaxi’s Del Día collection offers vibrant, one-of-a-kind designs that champion sustainability. Brands like The North Face and Osprey have a rugged, utilitarian look that signals adventure-readiness. Peak Design and Nomatic offer a tech-inspired, hybrid style for creatives and hyper-organized professionals.</p>
                        
                        <h3>The Value Proposition</h3>
                        <p>True value is the total cost of ownership, weighing price against durability and warranty. A strong lifetime warranty from brands like Osprey, Peak Design, and Tortuga is a financial safety net. Versatility is a value multiplier. The Peak Design Travel Backpack’s ability to change size makes it three bags in one, lowering its cost-per-use.</p>
                    </section>

                    {/* Part II */}
                    <section>
                        <h2>Part II: The 2025 Elite Seven Portfolio: In-Depth Reviews</h2>
                        
                        <div className={styles.cardDetailSection}>
                            <h4>1. Aer Travel Pack 3: The Blue-Chip Tech Stock</h4>
                            <ul>
                                <li><strong>Persona:</strong> The tech-savvy urbanist and business professional.</li>
                                <li><strong>Bottom Line:</strong> A premium investment in organization and professional style. Its durable materials and lifetime warranty deliver exceptional long-term value for the tech-centric traveler.</li>
                                <li><strong>User Testimonial:</strong> "Exactly what I was looking for. I am planning a backpacking trip in Europe... Travel pack 3 is the perfect one. It fits all the essential items without needing a roller." - Ming C., Verified Reviewer</li>
                            </ul>
                        </div>

                        <div className={styles.cardDetailSection}>
                            <h4>2. Osprey Farpoint 40: The Long-Term Growth Fund</h4>
                            <ul>
                                <li><strong>Persona:</strong> The comfort-seeking adventurer and world traveler who walks for miles.</li>
                                <li><strong>Bottom Line:</strong> Backed by Osprey's legendary "All Mighty Guarantee," the Farpoint 40 offers an unbeatable return on investment for any traveler who prioritizes comfort above all else.</li>
                                <li><strong>User Testimonial:</strong> "This backpack worked great for a 17 day Europe trip with many train rides and stairs. I would pack less next time but it held my overpacking and lots of comfort gear for the plane." - Elise, Verified Buyer</li>
                            </ul>
                        </div>

                        <div className={styles.cardDetailSection}>
                            <h4>3. Cotopaxi Allpa 35L: The Socially Responsible Investment</h4>
                            <ul>
                                <li><strong>Persona:</strong> The conscious, colorful, and hyper-organized explorer.</li>
                                <li><strong>Bottom Line:</strong> The Allpa 35L is an investment in joyful organization and sustainable design. Its 100% recycled fabrics and lifetime warranty make it a purchase you can feel good about.</li>
                                <li><strong>User Testimonial:</strong> "I am still in awe over how much stuff I can fit into this backpack and how well organized everything fits. Its compartments separate and are functionally thoughtful. Worth every penny." - Manny M., Verified Buyer</li>
                            </ul>
                        </div>

                        <div className={styles.cardDetailSection}>
                            <h4>4. Peak Design Travel Backpack 45L: The Diversified Mutual Fund</h4>
                            <ul>
                                <li><strong>Persona:</strong> The ultimate generalist—photographer one day, business traveler the next.</li>
                                <li><strong>Bottom Line:</strong> Arguably the most versatile travel bag on the market. Its ability to adapt, combined with a lifetime guarantee, provides incredible long-term value for the traveler who does it all.</li>
                                <li><strong>User Testimonial:</strong> "It rained so much in Central America, however the material held up and everything remained dry inside... 10/10 would recommend for regular travel, business travel and to school/work!!!" - Mr. Anderson, Verified Reviewer</li>
                            </ul>
                        </div>

                        <div className={styles.cardDetailSection}>
                            <h4>5. Tortuga Travel Backpack Pro 40L: The Gilt-Edged Bond</h4>
                            <ul>
                                <li><strong>Persona:</strong> The hardcore one-bag purist demanding peak performance.</li>
                                <li><strong>Bottom Line:</strong> While expensive, this is an investment in absolute confidence. For travelers facing unpredictable weather or heavy loads, its extreme durability and comfort provide outstanding value.</li>
                                <li><strong>User Testimonial:</strong> "Love this backpack. The exterior feels rugged and tough like a tank. While the interior is smart and feels luxurious like a Mercedes." - David, Verified Buyer</li>
                            </ul>
                        </div>

                        <div className={styles.cardDetailSection}>
                            <h4>6. The North Face Base Camp Voyager 35L: The High-Yield Stock</h4>
                            <ul>
                                <li><strong>Persona:</strong> The rugged weekender and practical adventurer needing a durable, no-fuss bag.</li>
                                <li><strong>Bottom Line:</strong> This pack offers a tremendous return, delivering iconic durability in a travel-friendly format with smart features. It represents excellent value for years of adventure.</li>
                                <li><strong>User Testimonial:</strong> "Comfortable, useful pocket design. Excellent travel backpack for a weekend or as a supplemental bag to a roller... The pocket configuration is great and there is no wasted space." - Ian, Verified Buyer</li>
                            </ul>
                        </div>

                        <div className={styles.cardDetailSection}>
                            <h4>7. Nomatic Travel Bag 40L: The Speculative Tech IPO</h4>
                            <ul>
                                <li><strong>Persona:</strong> The hyper-organized professional who wants a pocket for everything.</li>
                                <li><strong>Bottom Line:</strong> A high-reward investment in a unique organizational system. For those whose packing style aligns with its feature-dense layout, it can be a game-changer. For others, it may feel overly complex.</li>
                                <li><strong>User Testimonial:</strong> "I bought the NOMATIC Travel Bag 40L in 2017, and it's been a game-changer! ...What really stands out is NOMATIC's lifetime warranty and customer service... If you're on the fence, trust me—it's worth every penny!" - Carl L., Verified Buyer</li>
                            </ul>
                        </div>
                    </section>

                    {/* Part III */}
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