// File: pages/index.js

import React from 'react';
import Head from "next/head";
import Image from 'next/image';
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>TravelCardInsider - Best Travel Credit Cards 2025</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        

        {/* ✅ Meta description for SEO */}
        <meta
          name="description"
          content="Compare the best travel credit cards of 2025. Earn more rewards, travel perks, and exclusive bonuses."
        />

        {/* ✅ Preload images for LCP optimization */}
        <link
          rel="preload"
          as="image"
          href="AdobeStock_299190080_result.webp"
          type="image/webp"
        />
        <link
          rel="preload"
          as="image"
          href="/sapphire_preferred_card.png"
          type="image/png"
        />

        {/* ✅ Preload only critical fonts */}
        <link
  rel="preload"
  href="/fonts/Roboto_Condensed-Regular.ttf"
  as="font"
  type="font/ttf"
  crossOrigin="anonymous"
/>
<link
  rel="preload"
  href="/fonts/Roboto_Condensed-bold.ttf"
  as="font"
  type="font/ttf"
  crossOrigin="anonymous"
/>
      
        <link
  rel="preload"
  href="/fonts/playfair-display-regular.woff2"
  as="font"
  type="font/woff2"
  crossOrigin="anonymous"
/>
<link
  rel="preload"
  href="/fonts/playfair-display-bold.woff2"
  as="font"
  type="font/woff2"
  crossOrigin="anonymous"
/>

        <script type="application/ld+json">
          {`
        {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              "@id": "https://www.travelcardinsider.com/#website",
              "url": "https://www.travelcardinsider.com/",
              "name": "TravelCardInsider",
              "description": "Explore the best U.S. travel credit cards in 2025. Compare rewards, benefits, and find your perfect travel companion.",
              "publisher": {
                "@id": "https://www.travelcardinsider.com/#organization"
              },
              "inLanguage": "en-US"
            },
            {
              "@type": "Organization",
              "@id": "https://www.travelcardinsider.com/#organization",
              "name": "TravelCardInsider",
              "url": "https://www.travelcardinsider.com/",
              "logo": {
                "@type": "ImageObject",
                "@id": "https://www.travelcardinsider.com/#logo",
                "url": "https://www.travelcardinsider.com/6.jpg",
                "width": 600,
                "height": 60,
                "caption": "TravelCardInsider Logo"
              },
              "sameAs": [
                "https://www.facebook.com/YourPage",
                "https://www.instagram.com/YourProfile"
              ]
            },
            {
              "@type": "WebPage",
              "@id": "https://www.travelcardinsider.com/#webpage",
              "url": "https://www.travelcardinsider.com/",
              "name": "TravelCardInsider - Best Travel Credit Cards 2025",
              "isPartOf": {
                "@id": "https://www.travelcardinsider.com/#website"
              },
              "about": {
                "@id": "https://www.travelcardinsider.com/#organization"
              },
              "primaryImageOfPage": {
                "@id": "https://www.travelcardinsider.com/6.jpg"
              },
              "datePublished": "2025-01-01T00:00:00+00:00",
              "dateModified": "2025-04-01T00:00:00+00:00",
              "inLanguage": "en-US"
            },
            {
              "@type": "Article",
              "@id": "https://www.travelcardinsider.com/#article",
              "mainEntityOfPage": {
                "@id": "https://www.travelcardinsider.com/#webpage"
              },
              "headline": "Top Travel Credit Cards for 2025",
              "description": "Compare top travel credit cards, learn about rewards, perks, and how to maximize your points in 2025.",
              "image": {
                "@type": "ImageObject",
                "url": "https://www.travelcardinsider.com/6.jpg",
                "width": 1200,
                "height": 630
              },
              "author": {
                "@id": "https://www.travelcardinsider.com/#organization"
              },
              "publisher": {
                "@id": "https://www.travelcardinsider.com/#organization"
              },
              "datePublished": "2025-01-01T00:00:00+00:00",
              "dateModified": "2025-04-01T00:00:00+00:00",
              "inLanguage": "en-US"
            },
            {
              "@type": "Product",
              "@id": "https://www.travelcardinsider.com/#chaseSapphirePreferred",
              "name": "Chase Sapphire Preferred",
              "image": "https://www.travelcardinsider.com/sapphire_preferred_card.png",
              "description": "Travel rewards card with 60,000-point welcome bonus, 2X on travel & dining, $95 annual fee.",
              "brand": {
                "@type": "Brand",
                "name": "Chase"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "250"
              },
              "offers": {
                "@type": "Offer",
                "price": "95",
                "priceCurrency": "USD",
                "url": "https://www.chase.com/apply?partner=example",
                "description": "Annual fee"
              }
            },
            {
              "@type": "Product",
              "@id": "https://www.travelcardinsider.com/#amexPlatinum",
              "name": "Amex Platinum",
              "image": "https://www.travelcardinsider.com/ntb-amex-platinum-card.png",
              "description": "Luxury travel card with 5X points on flights, lounge access, and premium benefits. High annual fee.",
              "brand": {
                "@type": "Brand",
                "name": "American Express"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.6",
                "reviewCount": "180"
              },
              "offers": {
                "@type": "Offer",
                "price": "695",
                "priceCurrency": "USD",
                "url": "https://www.americanexpress.com/apply?partner=example",
                "description": "Annual fee"
              }
            },
            {
              "@type": "Product",
              "@id": "https://www.travelcardinsider.com/#ventureX",
              "name": "Capital One Venture X",
              "image": "https://www.travelcardinsider.com/venturex-cg-static-card-1000x630-2.avif",
              "description": "Earn unlimited 2X miles, $300 travel credit, and lounge access with a mid-tier annual fee.",
              "brand": {
                "@type": "Brand",
                "name": "Capital One"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.7",
                "reviewCount": "95"
              },
              "offers": {
                "@type": "Offer",
                "price": "395",
                "priceCurrency": "USD",
                "url": "https://www.capitalone.com/apply?partner=example",
                "description": "Annual fee"
              }
            }
          ]
        }
        `}
        </script>
      </Head>

      <Header />

      <main>
        <section id="product-overview">
          <div className="img"></div>
        </section>

        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <h1>Unlock the Best Travel Credit Cards for 2025</h1>
            <p>
              Compare top travel credit cards and start earning rewards for
              your next adventure.
            </p>
            <a href="#compare" className="cta-button">
              Compare Now
            </a>
          </div>
          <div className="container">
            <h1>Calculate Your Travel Rewards</h1>
            <p>
              Enter your monthly spending to see how many points you can earn
              with top travel credit cards.
            </p>
            <a href="#Calculate" className="cta-button">
              Calculate
            </a>
          </div>

          <div className="container">
            <h1>Find Best Travel Credit Cards for You</h1>
            <p>
              Find the perfect travel credit card tailored to your spending
              habits and travel goals.
            </p>
            <a href="#Find" className="cta-button">
              Find
            </a>
          </div>
        </section>

        {/* Featured Cards Section */}
        <section id="featured-cards" className="featured-cards_3">
          <div className="container">
            <h1 className="H2_featured-cards">Top Travel Credit Cards</h1>
            <div className="card-grid">
              <div className="card card1">
                <Image
                  className="img1"
                  src="/sapphire_preferred_card.png"
                  alt="Chase Sapphire Preferred Card"
                  width={400}
                  height={250}
                  loading="lazy"
                />
                <div className="Crad_discription1">
                  <h3>Chase Sapphire Preferred</h3>
                  <p>
                    Earn 60,000 points after spending $4,000 in the first 3
                    months.
                  </p>
                  <a href="#" className="cta-button">
                    Learn More
                  </a>
                  <a href="#" className="Apply-button">
                    Apply Now
                  </a>
                </div>
              </div>

              <div className="card card2">
                <Image
                  className="img2"
                  src="/ntb-amex-platinum-card.png"
                  alt="Amex Platinum Card"
                  width={400}
                  height={250}
                  loading="lazy"
                />
                <div className="Crad_discription2">
                  <h3>Amex Platinum</h3>
                  <p>
                    Enjoy 5x points on flights and luxury lounge access
                    worldwide.
                  </p>
                  <a href="#" className="cta-button">
                    Learn More
                  </a>
                </div>
                <a href="#" className="Apply-button">
                  Apply Now
                </a>
              </div>

              <div className="card card3">
                <Image
                  className="img3"
                  src="/venturex-cg-static-card-1000x630-2.avif"
                  alt="Capital One Venture X"
                  width={400}
                  height={250}
                  loading="lazy"
                />
                <div className="Crad_discription3">
                  <h3>Capital One Venture X</h3>
                  <p>
                    Earn unlimited 2x miles and receive a $300 travel credit
                    annually.
                  </p>
                  <a href="#" className="cta-button">
                    Learn More
                  </a>
                  <a href="#" className="Apply-button">
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Tool */}
        <section id="compare" className="comparison">
          <div className="container">
            <h2 className="H2_comparison">Compare Travel Credit Cards</h2>
            <form
              data-onsubmit="compareCards(event)"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="card1">Select Card 1:</label>
              <select id="card1">
                <option value="chase">Chase Sapphire Preferred</option>
                <option value="amex">Amex Platinum</option>
                <option value="venture">Capital One Venture X</option>
              </select>

              <label htmlFor="card2">Select Card 2:</label>
              <select id="card2">
                <option value="chase">Chase Sapphire Preferred</option>
                <option value="amex">Amex Platinum</option>
                <option value="venture">Capital One Venture X</option>
              </select>

              <button className="submit" type="submit">
                Compare
              </button>
            </form>

            <div id="comparison-result" className="comparison-result">
              <h3>Comparison Result</h3>
              <p id="result-text">Select two cards to compare.</p>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="reviews-container">
          <h2>Top Credit Card Reviews & News (2025)</h2>
          <div className="reviews-grid">
            {[
              {
                img: "/AdobeStock_560041735_result.webp",
                alt: "Top New Travel Credit Card Offers of 2025",
                title: "Top New Travel Credit Card Offers of 2025",
                desc: "Breaking news on the latest card launches and exclusive sign-up bonuses.",
                // 🔴 FIXED: corrected link path from /reviews/ -> /review/
                link: "/review/top-new-travel-credit-card-offers-2025",
              },
              {
                img: "/AdobeStock_758160258_result.webp",
                alt: "The Ultimate Guide to Lounge Access in 2025",
                title: "VIP Airport Lounge Access in 2025",
                desc: "How to get premium perks and comfort while traveling.",
                link: "/review/The-Ultimate-Guide-to-Lounge-Access-in-2025-How-to-Get-VIP-Treatment-at-Airports",
                
                // no link provided here, leaving as is
              },
              {
                img: "/AdobeStock_947404358_result.webp",
                alt: "Top 5 Family-Friendly Travel Cards for 2025",
                title: "5 Family-Friendly Travel Cards for 2025",
                desc: "Kid-friendly perks and money-saving benefits for your family vacations.",
                link: "/review/Top-5-Family-Friendly-Travel-Cards-for-2025-Maximize-Points-&-Perks-with-Kids-in-Tow",
              },
              {
                img: "/AdobeStock_964630446_result.webp",
                alt: "Improve Your Credit Score Fast for Premium Cards",
                title: "Boost Your Credit Score for Premium Cards",
                desc: "Actionable tips to qualify for the best travel rewards cards.",
                link: "/review/How-to-Improve-Your-Credit-Score-Fast-for-Premium-Travel-Cards",

              },
              {
                img: "/alex-bertha-Jyg7xHRmXiU-unsplash (1).jpg",
                alt: "Redeeming Points for Luxury Travel on a Budget",
                title: "Redeem for Luxury Travel on a Budget",
                desc: "Stretch your points and miles for a premium travel experience.",
                link: "/review/2025-Points-&-Miles-Trends-Best-Ways-to-Redeem-for-Luxury-Travel-on-a-Budget",
              },
              {
                img: "/AdobeStock_265601656_result.webp",
                alt: "Hidden Perks: Secret Travel Card Benefits",
                title: "Secret Travel Card Benefits",
                desc: "Little-known perks you might already have but never used.",
                link: "/review/Hidden-Perks-Secret-Travel-Card-Benefits-You-Probably-Didnt-Know-About-in-2025",
              },
              {
                img: "/AdobeStock_446734479.webp",
                alt: "The Best No Annual Fee Travel Cards",
                title: "The Best No Annual Fee Travel Cards",
                desc: "Earn rewards without worrying about recurring charges.",
                link: "/review/The-Best-Travel-Cards-with-No-Annual-Fee-Get-Big-Rewards-for-Free",
              },
              {
                img: "/AdobeStock_241382254_result.webp",
                alt: "Is Paying a $500+ Annual Fee Really Worth It?",
                title: "Is a $500+ Annual Fee Worth It?",
                desc: "A cost-benefit breakdown of premium travel credit cards.",
                link: "/review/Premium-vs-Budget-Travel-Cards-Is-Paying-a-$500+Annual-Fee-Really-Worth-It",
              },
            ].map((review, index) => (
              <div className="card" key={index}>
                <Image
                  className="review_img"
                  src={review.img}
                  alt={review.alt}
                  width={500}
                  height={300}
                  loading="lazy"
                />
                <h3>{review.title}</h3>
                <p>{review.desc}</p>
                {/* If link is missing in the array item, this <a> won't appear */}
                {review.link && (
                  <a href={review.link} className="cta-button">
                    Read Review
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Footer Section */}
        
        <Footer />
      </main>
    </>
  );
}
