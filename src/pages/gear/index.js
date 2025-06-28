// File: pages/gear/index.js
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/GearPage.module.css'; // IMPROVEMENT: Using our new dedicated stylesheet

// This is where you will list all your gear reviews.
const gearReviews = [
  {
    title: 'Best Travel Backpacks 2025: Your Guide to the Perfect Pack',
    description: 'We review top picks for versatility, carry-on compliance, and urban exploration to help you find the perfect travel companion.',
    link: '/gear/best-travel-backpacks-2025',
    image: '/pexels-olly-837358.webp', // IMPROVEMENT: Use a descriptive path
    author: 'TravelCardInsider',
    publicationDate: '2025-06-28',
  },
  // ✏️ When you write more gear reviews, you will add them here. For example:
  // {
  //   title: 'Noise-Cancelling Headphones for a Peaceful Flight',
  //   description: 'From Bose to Sony, we tested the best noise-cancelling headphones to see which ones truly silence the cabin noise.',
  //   link: '/gear/best-noise-cancelling-headphones-2025',
  //   image: '/images/gear/headphones-hero.jpg',
  //   author: 'TravelCardInsider',
  //   publicationDate: '2025-07-15',
  // },
];

// IMPROVEMENT: Added schema generation for rich results
const generateSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "name": "Travel Gear Reviews & Buying Guides",
        "description": "Expert reviews and guides on the best travel gear, from backpacks and luggage to tech and accessories.",
        "url": "https://www.travelcardinsider.com/gear",
        "mainEntity": {
          "@type": "ItemList",
          "itemListElement": gearReviews.map((review, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
              // We can define each item as an Article for better SEO
              "@type": "Article", 
              "headline": review.title,
              "url": `https://www.travelcardinsider.com${review.link}`,
              "image": `https://www.travelcardinsider.com${review.image}`,
              "datePublished": review.publicationDate,
              "author": { "@type": "Organization", "name": "TravelCardInsider" },
              "publisher": { "@type": "Organization", "name": "TravelCardInsider", "logo": {"@type": "ImageObject", "url": "https://www.travelcardinsider.com/logo.png"} }
            }
          }))
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.travelcardinsider.com/" },
          { "@type": "ListItem", "position": 2, "name": "Gear", "item": "https://www.travelcardinsider.com/gear" }
        ]
      }
    ]
  };
  return JSON.stringify(schema);
};


function TravelGearPage() {
  return (
    <>
      <Head>
        <title>Travel Gear Reviews & Guides 2025 | TravelCardInsider</title>
        <meta name="description" content="Expert reviews and buying guides on the best travel gear, from backpacks and luggage to tech and accessories." />
        <link rel="canonical" href="https://www.travelcardinsider.com/gear" />
        
        {/* --- IMPROVEMENT: Open Graph / Social Media Tags --- */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Travel Gear Reviews & Guides 2025" />
        <meta property="og:description" content="We test and review the gear that makes your journey smoother, so you can travel smarter." />
        <meta property="og:url" content="https://www.travelcardinsider.com/gear" />
        <meta property="og:image" content="https://www.travelcardinsider.com/images/social-gear-preview.jpg" />
        <meta property="og:site_name" content="TravelCardInsider" />

        {/* --- IMPROVEMENT: Twitter Card Tags --- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Travel Gear Reviews & Guides 2025" />
        <meta name="twitter:description" content="We test and review the gear that makes your journey smoother, so you can travel smarter." />
        <meta name="twitter:image" content="https://www.travelcardinsider.com/images/social-gear-preview.jpg" />
        
        {/* --- IMPROVEMENT: Added Structured Data --- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: generateSchema() }}
        />
      </Head>

      <main className={styles.pageContainer}>
        <header className={styles.header}>
          <h1>Travel Gear That Works</h1>
          <p>Expert analysis of the gear that makes your journey smoother. We test so you can travel smarter.</p>
        </header>

        <div className={styles.gearList}>
          {gearReviews.map((review) => (
            // IMPROVEMENT: Using legacyBehavior for the Link component with a nested <a> tag
            <Link key={review.link} href={review.link} legacyBehavior>
              <a className={styles.reviewCardLink}>
                <div className={styles.imageContainer}>
                  <Image
                    src={review.image}
                    alt={`Hero image for ${review.title}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className={styles.content}>
                  <h2>{review.title}</h2>
                  <p>{review.description}</p>
                  <span className={styles.readMore}>Read the Review →</span>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}

export default TravelGearPage;