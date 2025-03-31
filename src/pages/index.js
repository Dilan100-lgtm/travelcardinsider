// File: pages/index.js
import React from 'react';
import Head from "next/head";
import Header from "../components/Header";

export default function HomePage() {
  return (
    <>
      <Head>
        {/* Original <title> and meta tags */}
        <title>TravelCardInsider - Best Travel Credit Cards 2024</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Original CSS link */}
        <link rel="stylesheet" href="main.css" />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
<script type="application/ld+json">
{`
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://travelcardinsider.vercel.app/#website",
      "url": "https://travelcardinsider.vercel.app/",
      "name": "TravelCardInsider",
      "publisher": {
        "@id": "https://travelcardinsider.vercel.app/#organization"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://travelcardinsider.vercel.app/#organization",
      "name": "TravelCardInsider",
      "url": "https://travelcardinsider.vercel.app/",
      "logo": {
        "@type": "ImageObject",
        "@id": "https://travelcardinsider.vercel.app/#logo",
        "url": "https://travelcardinsider.vercel.app/6.jpg"
      }
    },
    {
      "@type": "Article",
      "@id": "https://travelcardinsider.vercel.app/#article",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://travelcardinsider.vercel.app/"
      },
      "headline": "Top Travel Credit Cards for 2025",
      "description": "Compare top travel credit cards, learn about rewards, perks, and how to maximize your points in 2025.",
      "image": "https://travelcardinsider.vercel.app/6.jpg",
      "datePublished": "2025-01-01T00:00:00+00:00",
      "dateModified": "2025-01-01T00:00:00+00:00",
      "author": {
        "@type": "Organization",
        "@id": "https://travelcardinsider.vercel.app/#organization",
        "name": "TravelCardInsider"
      },
      "publisher": {
        "@id": "https://travelcardinsider.vercel.app/#organization"
      },
      "inLanguage": "en"
    },
    {
      "@type": "Product",
      "@id": "https://travelcardinsider.vercel.app/#chaseSapphirePreferred",
      "name": "Chase Sapphire Preferred",
      "image": "https://travelcardinsider.vercel.app/sapphire_preferred_card.png",
      "description": "Travel rewards card with 60,000-point welcome bonus, 2X on travel & dining, $95 annual fee.",
      "brand": {
        "@type": "Brand",
        "name": "Chase"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "250",
        "bestRating": "5"
      },
      "offers": {
        "@type": "Offer",
        "price": "95",
        "priceCurrency": "USD",
        "url": "https://www.chase.com/apply?partner=example",
        "description": "Annual fee"
      },
      "review": {
        "@type": "Review",
        "name": "Review of Chase Sapphire Preferred",
        "reviewBody": "The Chase Sapphire Preferred remains one of the top picks for 2025, offering a generous bonus and flexible travel rewards at a moderate annual fee.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "4.8",
          "bestRating": "5"
        },
        "author": {
          "@type": "Organization",
          "@id": "https://travelcardinsider.vercel.app/#organization",
          "name": "TravelCardInsider"
        }
      }
    },
    {
      "@type": "Product",
      "@id": "https://travelcardinsider.vercel.app/#amexPlatinum",
      "name": "Amex Platinum",
      "image": "https://travelcardinsider.vercel.app/ntb-amex-platinum-card.png",
      "description": "Luxury travel card with 5X points on flights, lounge access, and premium benefits. High annual fee.",
      "brand": {
        "@type": "Brand",
        "name": "American Express"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.6",
        "ratingCount": "180",
        "bestRating": "5"
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
      "@id": "https://travelcardinsider.vercel.app/#ventureX",
      "name": "Capital One Venture X",
      "image": "https://travelcardinsider.vercel.app/venturex-cg-static-card-1000x630-2.avif",
      "description": "Earn unlimited 2X miles on purchases, $300 annual travel credit, and lounge access for a mid-range annual fee.",
      "brand": {
        "@type": "Brand",
        "name": "Capital One"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.7",
        "ratingCount": "95",
        "bestRating": "5"
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

      {/* ===== BODY CONTENT BELOW ===== */}
     
        {/* ===== HEADER SECTION ===== */}
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
                  <img
                    className="img1"
                    src="sapphire_preferred_card.png"
                    alt="Chase Sapphire Preferred Card"
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
                  <img
                    className="img2"
                    src="ntb-amex-platinum-card.png"
                    alt="Amex Platinum Card"
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
                  <img
                    className="img3"
                    src="venturex-cg-static-card-1000x630-2.avif"
                    alt="Capital One Venture X"
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

              {/* 
                We can't literally run onsubmit="compareCards(event)" in React,
                so we'll preserve the text as a data attribute plus a comment
                to keep your original content fully intact.
              */}
              <form
                /* onSubmit event preserved as comment: onsubmit="compareCards(event)" */
                data-onsubmit="compareCards(event)"
                onSubmit={(e) => {
                  // Prevent actual form submission to keep the page stable
                  e.preventDefault();
                }}
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

              {/* Comparison Result Display */}
              <div id="comparison-result" className="comparison-result">
                <h3>Comparison Result</h3>
                <p id="result-text">Select two cards to compare.</p>
              </div>
            </div>
          </section>

         <section className="reviews-container">
  <h2>Top Credit Card Reviews & News (2025)</h2>
  <div className="reviews-grid">
    {[
      {
        img: "AdobeStock_560041735_result.webp",
        alt: "Top New Travel Credit Card Offers of 2025",
        title: "Top New Travel Credit Card Offers of 2025",
        desc: "Breaking news on the latest card launches and exclusive sign-up bonuses.",
      },
      {
        img: "AdobeStock_758160258_result.webp",
        alt: "The Ultimate Guide to Lounge Access in 2025",
        title: "VIP Airport Lounge Access in 2025",
        desc: "How to get premium perks and comfort while traveling.",
      },
      {
        img: "AdobeStock_947404358_result.webp",
        alt: "Top 5 Family-Friendly Travel Cards for 2025",
        title: "5 Family-Friendly Travel Cards for 2025",
        desc: "Kid-friendly perks and money-saving benefits for your family vacations.",
      },
      {
        img: "AdobeStock_964630446_result.webp",
        alt: "Improve Your Credit Score Fast for Premium Cards",
        title: "Boost Your Credit Score for Premium Cards",
        desc: "Actionable tips to qualify for the best travel rewards cards.",
      },
      {
        img: "AdobeStock_323303711_result.webp",
        alt: "Redeeming Points for Luxury Travel on a Budget",
        title: "Redeem for Luxury Travel on a Budget",
        desc: "Stretch your points and miles for a premium travel experience.",
      },
      {
        img: "AdobeStock_265601656_result.webp",
        alt: "Hidden Perks: Secret Travel Card Benefits",
        title: "Secret Travel Card Benefits",
        desc: "Little-known perks you might already have but never used.",
      },
      {
        img: "AdobeStock_446734479.webp",
        alt: "The Best No Annual Fee Travel Cards",
        title: "The Best No Annual Fee Travel Cards",
        desc: "Earn rewards without worrying about recurring charges.",
      },
      {
        img: "AdobeStock_241382254_result.webp",
        alt: "Is Paying a $500+ Annual Fee Really Worth It?",
        title: "Is a $500+ Annual Fee Worth It?",
        desc: "A cost-benefit breakdown of premium travel credit cards.",
      },
    ].map((review, index) => (
      <div className="card" key={index}>
        <img className="review_img" src={review.img} alt={review.alt} />
        <h3>{review.title}</h3>
        <p>{review.desc}</p>
        <a href="#" className="cta-button">
          Read Review
        </a>
      </div>
    ))}
  </div>
</section>

          {/* Footer Section */}
          <footer>
            {/* ========== FOOTER START ========== */}
            <footer className="site-footer">
              <div className="footer-inner">
                {/* TOP SECTION: FOOTER COLUMNS */}
                <div className="footer-columns">
                  {/* COLUMN 1: ABOUT US */}
                  <div className="footer-col">
                    <h3>About Us</h3>
                    <p>
                      We specialize in in-depth travel credit card reviews,
                      helping you find the best rewards and perks for your
                      next adventure.
                    </p>
                  </div>

                  {/* COLUMN 2: QUICK LINKS */}
                  <div className="footer-col">
                    <h3>Quick Links</h3>
                    <ul>
                      <li className="footlink">
                        <a href="/about">About</a>
                      </li>
                      <li className="footlink">
                        <a href="/blog">Blog</a>
                      </li>
                      <li className="footlink">
                        <a href="/compare">Compare Cards</a>
                      </li>
                      <li className="footlink">
                        <a href="/contact">Contact Us</a>
                      </li>
                    </ul>
                  </div>

                  {/* COLUMN 3: LEGAL */}
                  <div className="footer-col">
                    <h3>Legal</h3>
                    <ul>
                      <li className="footlink">
                        <a href="/privacy-policy">Privacy Policy</a>
                      </li>
                      <li className="footlink">
                        <a href="/terms-of-service">Terms of Service</a>
                      </li>
                      <li className="footlink">
                        <a href="/affiliate-disclosure">Affiliate Disclosure</a>
                      </li>
                    </ul>
                  </div>

                  {/* COLUMN 4: SOCIAL MEDIA */}
                  <div className="footer-col">
                    <h3>Connect</h3>
                    <ul>
                      <li className="footlink">
                        <a
                          href="https://www.facebook.com/YourPage"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Follow us on Facebook"
                        >
                          <img
                            className="imgf"
                            src="icons8-facebook-24.png"
                            alt="Facebook"
                          />
                        </a>
                      </li>
                      <li className="footlink">
                        <a
                          href="https://www.instagram.com/YourProfile"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Follow us on Instagram"
                        >
                          <img
                            className="imgf"
                            src="icons8-instagram-24.png"
                            alt="Instagram"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* end .footer-columns */}

                {/* DISCLAIMER OR AFFILIATE DISCLOSURE SECTION */}
                <div className="footer-disclaimer">
                  <p>
                    Disclaimer: This site is for informational purposes only.
                    We may receive compensation when you click links to partner
                    sites, but our editorial opinions remain our own. All offers
                    are subject to change or withdrawal at any time. We strive
                    to keep information accurate but cannot guarantee
                    completeness or timeliness.
                  </p>
                </div>
              </div>
              {/* end .footer-inner */}

              {/* BOTTOM STRIP: COPYRIGHT */}
              <div className="footer-bottom">
                <p>&copy; 2025 TravelCardInsider. All rights reserved.</p>
              </div>
            </footer>
            {/* ========== FOOTER END ========== */}
          </footer>
        </main>
        {/* Original script reference */}
        
      
    </>
  );
}
