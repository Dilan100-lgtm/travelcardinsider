// pages/author/dilan-madushanka.js

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/AuthorPage.module.css'; // Specific styles for author page
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'; // Example using react-icons

// --- Author Data (Copied for simplicity - consider a central data source) ---
const authorData = {
    name: 'Dilan Madushanka',
    title: 'Founder & Lead Editor',
    credentials: 'MD',
    // *** Use a larger, high-quality image for the profile page ***
    profileImageUrl: '/authors/dilan-madushanka-profile.jpg', // *** REPLACE WITH ACTUAL PATH ***
    profileImageWidth: 150, // Adjust size as needed
    profileImageHeight: 150,
    fullBio: `Dilan Madushanka is the founder and lead editor of TravelCardInsider.com, a platform dedicated to helping everyday people make smarter decisions with travel and rewards credit cards. With a background in medicine and a deep passion for financial literacy, Dilan turned his real-world experience—navigating travel, budgeting, and rewards programs—into a mission: demystify credit cards and uncover their real-world value.\n\nAfter years of studying the fine print, testing travel benefits firsthand, and comparing hundreds of card offers, Dilan has built a site that goes beyond generic advice. He combines research, real spending scenarios, and hands-on card analysis to help readers maximize rewards and avoid costly mistakes.\n\nExperience matters—and Dilan brings a unique one. A Sri Lankan doctor by training, he took a bold leap into digital entrepreneurship to build a transparent, user-focused credit card resource from scratch. Every guide and review you read is written or edited by him with accuracy, integrity, and a deep sense of purpose.`,
    publishedStats: 'Publishes or edits 6+ in-depth card reviews and guides per week.',
    testedStats: 'Personally tested over 50 credit card benefits across brands like Chase, Amex, Capital One, Citi, and more.',
    siteName: 'TravelCardInsider.com',
    socialLinks: {
        linkedin: 'https://www.linkedin.com/in/YOUR_LINKEDIN_PROFILE_URL', // *** REPLACE ***
        twitter: 'https://twitter.com/YOUR_TWITTER_HANDLE', // *** REPLACE ***
        email: 'dilan@travelcardinsider.com'
    }
};
// --- End Author Data ---

function AuthorProfilePage() {
    const pageTitle = `${authorData.name} - Author Profile | ${authorData.siteName}`;
    const description = `Learn more about ${authorData.name}, ${authorData.title} of ${authorData.siteName}. Discover his background, expertise in travel rewards, and commitment to transparent credit card advice.`;

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={description} />
                {/* Add other relevant meta tags: OG, Twitter */}
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={description} />
                {/* Add an OG image specific to the author? */}
                {/* <meta property="og:image" content={authorData.profileImageUrl} /> */}
                <meta property="og:type" content="profile" />
                {/* <meta property="profile:first_name" content="Dilan" /> */}
                {/* <meta property="profile:last_name" content="Madushanka" /> */}

                {/* Preload author profile image */}
                 <link rel="preload" as="image" href={authorData.profileImageUrl} />
            </Head>

            {/* You might want a site header/footer here */}
            {/* <Header /> */}

            <main className={styles.authorPageContainer}>
                <header className={styles.authorHeader}>
                    <div className={styles.authorImageContainer}>
                         <Image
                            src={authorData.profileImageUrl}
                            alt={`${authorData.name} profile picture`}
                            width={authorData.profileImageWidth}
                            height={authorData.profileImageHeight}
                            className={styles.authorProfileImage}
                            priority // Load image quickly
                         />
                    </div>
                    <div className={styles.authorInfo}>
                        <h1 className={styles.authorName}>
                            {authorData.name}
                            {authorData.credentials && <span className={styles.authorCredentials}>, {authorData.credentials}</span>}
                        </h1>
                        <p className={styles.authorTitle}>{authorData.title} at {authorData.siteName}</p>
                        {/* Social Links */}
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
                    <h2>About {authorData.name.split(' ')[0]}</h2> {/* Use first name */}
                    {/* Render fullBio, potentially splitting paragraphs */}
                    {authorData.fullBio.split('\n\n').map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </section>

                <section className={styles.authorStatsSection}>
                    <h2>Experience & Activity</h2>
                    <ul>
                        {authorData.testedStats && <li><span role="img" aria-label="check mark">✅</span> {authorData.testedStats}</li>}
                        {authorData.publishedStats && <li><span role="img" aria-label="pencil">✏️</span> {authorData.publishedStats}</li>}
                         {/* Add more stats if needed */}
                    </ul>
                </section>

                 {/* Optional: Section linking to articles by this author */}
                 {/* <section><h2>Recent Articles by {authorData.name.split(' ')[0]}</h2>...</section> */}

            </main>

            {/* <Footer /> */}
        </>
    );
}

export default AuthorProfilePage;