// pages/author/thashmi-ashintha.js

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/AuthorPage.module.css'; // Using the same stylesheet
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

// --- Author Data for Thashmi Ashintha ---
const authorData = {
    name: 'Thashmi Ashintha',
    title: 'Senior Writer & Financial Advisor',
    credentials: 'B.A. Geography',
    profileImageUrl: '/path-to-your-image/thashmi-ashintha.jpg', // *** REPLACE WITH ACTUAL PATH ***
    profileImageWidth: 150,
    profileImageHeight: 150,
    fullBio: `Thashmi Ashintha is a Senior Writer and Financial Advisor at TravelCardInsider.com. As a frequent traveler with a specialisation in Geography, she offers a unique lens on how location, travel logistics, and financial planning intersect. Her passion is to help travelers navigate the world more intelligently, both geographically and financially.\n\nWith a background in financial advising, Thashmi excels at breaking down complex credit card terms and reward ecosystems into simple, actionable strategies. She believes that the right financial choices can unlock transformative travel experiences. Her analysis is always grounded in practicality, aimed at helping readers extract maximum value from their travel rewards.\n\nAt TravelCardInsider, Thashmi is dedicated to creating content that is not only informative but also inspiring. She combines her geographic insights with financial acumen to craft guides that empower readers to travel farther, smarter, and more affordably.`,
    publishedStats: 'Publishes 4+ in-depth guides per week on travel hacking and financial planning.',
    testedStats: 'Personally analyzed over 40 credit card rewards programs for international travel benefits.',
    siteName: 'TravelCardInsider.com',
    socialLinks: {
        linkedin: 'https://linkedin.com/in/your-profile-here', // *** REPLACE ***
        twitter: 'https://x.com/your-handle-here', // *** REPLACE ***
        email: 'thashmi@travelcardinsider.com'
    }
};
// --- End Author Data ---

function ThashmiAshinthaPage() {
    const pageTitle = `${authorData.name} - Author Profile | ${authorData.siteName}`;
    const description = `Learn about ${authorData.name}, ${authorData.title} at ${authorData.siteName}. Discover her expertise in combining geographical insights with financial advice for smarter travel.`;

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={description} />
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={description} />
                <meta property="og:type" content="profile" />
                <link rel="preload" as="image" href={authorData.profileImageUrl} />
            </Head>

            <main className={styles.authorPageContainer}>
                <header className={styles.authorHeader}>
                    <div className={styles.authorImageContainer}>
                         <Image
                            src={authorData.profileImageUrl}
                            alt={`${authorData.name} profile picture`}
                            width={authorData.profileImageWidth}
                            height={authorData.profileImageHeight}
                            className={styles.authorProfileImage}
                            priority
                         />
                    </div>
                    <div className={styles.authorInfo}>
                        <h1 className={styles.authorName}>
                            {authorData.name}
                            {authorData.credentials && <span className={styles.authorCredentials}>, {authorData.credentials}</span>}
                        </h1>
                        <p className={styles.authorTitle}>{authorData.title} at {authorData.siteName}</p>
                        <div className={styles.authorSocialLinks}>
                            {authorData.socialLinks.linkedin && (
                                <a href={authorData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer me" aria-label={`${authorData.name} on LinkedIn`}>
                                    <FaLinkedin />
                                </a>
                            )}
                            {authorData.socialLinks.twitter && (
                                <a href={authorData.socialLinks.twitter} target="_blank" rel="noopener noreferrer me" aria-label={`${authorData.name} on Twitter`}>
                                    <FaTwitter />
                                </a>
                            )}
                             {authorData.socialLinks.email && (
                                <a href={`mailto:${authorData.socialLinks.email}`} aria-label={`Email ${authorData.name}`}>
                                    <FaEnvelope />
                                </a>
                            )}
                        </div>
                    </div>
                </header>

                <section className={styles.authorBioSection}>
                    <h2>About {authorData.name.split(' ')[0]}</h2>
                    {authorData.fullBio.split('\n\n').map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </section>

                <section className={styles.authorStatsSection}>
                    <h2>Experience & Activity</h2>
                    <ul>
                        {authorData.testedStats && <li><span role="img" aria-label="check mark">✅</span> {authorData.testedStats}</li>}
                        {authorData.publishedStats && <li><span role="img" aria-label="pencil">✏️</span> {authorData.publishedStats}</li>}
                    </ul>
                </section>
            </main>
        </>
    );
}

export default ThashmiAshinthaPage;