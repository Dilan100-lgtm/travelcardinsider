// File: pages/zeroapr/index.js

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/ZeroAprIndex.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function ZeroAprIndexPage() {
  return (
    <>

      <Head>
        {/* Basic Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Primary SEO Tags */}
        <title>Best 0% APR and Balance Transfer Credit Cards for 2025 | TravelCardInsider</title>
        <meta
          name="description"
          content="Compare the top 0% APR and balance transfer credit cards of 2025. Maximize rewards, enjoy interest-free periods, and simplify your debt payoff with our handpicked selections."
        />
        <meta
          name="keywords"
          content="0% APR, balance transfer, credit cards, best credit cards, interest-free"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.yourdomain.com/0apr-balance-transfer-cards" />

        {/* Open Graph / Social Media */}
        <meta
          property="og:title"
          content="Best 0% APR and Balance Transfer Credit Cards for 2025 | TravelCardInsider"
        />
        <meta
          property="og:description"
          content="Explore our curated list of the top 0% APR and balance transfer credit cards for 2025. Whether you're looking to reduce high-interest debt or enjoy an interest-free vacation, we've got you covered."
        />
        <meta
          property="og:url"
          content="https://www.yourdomain.com/0apr-balance-transfer-cards"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content="https://www.yourdomain.com/images/0apr-hero.jpg"
        />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Best 0% APR and Balance Transfer Credit Cards for 2025 | TravelCardInsider"
        />
        <meta
          name="twitter:description"
          content="Zero in on interest-free credit card offers for 2025. Transfer balances, earn rewards, and save on interest with our expert picks."
        />
        <meta
          name="twitter:image"
          content="https://www.yourdomain.com/images/0apr-hero.jpg"
        />

        {/* Favicons */}
        <link rel="icon" href="https://www.yourdomain.com/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="https://www.yourdomain.com/images/apple-touch-icon.png" />

        {/* Google Fonts Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&family=Playfair+Display:wght@400..900&display=swap"
          rel="stylesheet"
        />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {`{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.yourdomain.com/0apr-balance-transfer-cards"
  },
  "headline": "Best 0% APR and Balance Transfer Credit Cards for 2025",
  "description": "Compare the best 0% APR and balance transfer credit cards for 2025. Find the top cards offering interest-free financing, rewards, and balance transfer perks.",
  "author": {
    "@type": "Organization",
    "name": "TravelCardInsider"
  },
  "datePublished": "2025-01-01",
  "dateModified": "2025-01-01",
  "publisher": {
    "@type": "Organization",
    "name": "TravelCardInsider",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.yourdomain.com/images/logo.png",
      "width": 600,
      "height": 60
    }
  },
  "image": "https://www.yourdomain.com/images/0apr-hero.jpg",
  "keywords": "0% APR, balance transfer, credit cards, best credit cards, interest-free, TravelCardInsider",
  "articleSection": "Finance, Travel, Credit Cards",
  "mainEntity": {
    "@type": "ItemList",
    "name": "Top 10 Best 0% APR & Balance Transfer Credit Cards",
    "itemListOrder": "Unordered",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "CreditCard",
          "name": "Chase Freedom Unlimited®",
          "image": "https://www.yourdomain.com/images/chase_freedom_unlimited_card.png",
          "url": "https://www.yourdomain.com/chase-freedom-unlimited",
          "brand": "Chase",
          "description": "0% intro APR for 15 months, 5% cash back on travel via Chase Ultimate Rewards®, 3% dining & drugstores, 1.5% on all other purchases.",
          "offers": {
            "@type": "Offer",
            "priceCurrency": "USD",
            "price": "0.00",
            "url": "https://www.yourdomain.com/chase-freedom-unlimited-apply",
            "availability": "https://schema.org/InStock",
            "eligibleCustomerType": "https://schema.org/EndUser",
            "interestRate": "0%",
            "annualPercentageRate": "19.99%",
            "annualFee": "0",
            "review": {
              "@type": "Review",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "4.7",
                "bestRating": "5"
              },
              "author": {
                "@type": "Organization",
                "name": "TravelCardInsider"
              }
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.6",
              "reviewCount": "1520"
            }
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "CreditCard",
          "name": "U.S. Bank Altitude® Connect Visa Signature®",
          "image": "https://www.yourdomain.com/images/us_bank_altitude_connect_card.png",
          "url": "https://www.yourdomain.com/us-bank-altitude-connect",
          "brand": "U.S. Bank",
          "description": "0% intro APR for 12 months, 5x points on hotels & car rentals, 4x travel & gas, 2x dining.",
          "offers": {
            "@type": "Offer",
            "priceCurrency": "USD",
            "price": "0.00",
            "url": "https://www.yourdomain.com/us-bank-altitude-connect-apply",
            "availability": "https://schema.org/InStock",
            "eligibleCustomerType": "https://schema.org/EndUser",
            "interestRate": "0%",
            "annualPercentageRate": "20.24%",
            "annualFee": "95",
            "review": {
              "@type": "Review",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "4.5",
                "bestRating": "5"
              },
              "author": {
                "@type": "Organization",
                "name": "TravelCardInsider"
              }
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.4",
              "reviewCount": "1340"
            }
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "CreditCard",
          "name": "Citi Custom Cash® Card",
          "image": "https://www.yourdomain.com/images/citi_custom_cash_card.png",
          "url": "https://www.yourdomain.com/citi-custom-cash",
          "brand": "Citi",
          "description": "5% cash back on your top spend category, 0% intro APR for 15 months, 1% on other purchases.",
          "offers": {
            "@type": "Offer",
            "priceCurrency": "USD",
            "price": "0.00",
            "url": "https://www.yourdomain.com/citi-custom-cash-apply",
            "availability": "https://schema.org/InStock",
            "eligibleCustomerType": "https://schema.org/EndUser",
            "interestRate": "0%",
            "annualPercentageRate": "18.99%",
            "annualFee": "0",
            "review": {
              "@type": "Review",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "4.8",
                "bestRating": "5"
              },
              "author": {
                "@type": "Organization",
                "name": "TravelCardInsider"
              }
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.7",
              "reviewCount": "1675"
            }
          }
        }
      }
    ]
  }
}`}
        </script>
      </Head>
      <Header />

      <main className={styles.mainWrapper}>
        {/* HERO SECTION */}
        <section className="hero">
          <div className="container">
            <h1 className="hero-title">
              Discover the Best 10 0% APR And Balance Transfer Credit Cards of 2025
            </h1>
            <p className="hero-description">
              Compare top-rated travel credit cards, maximize rewards, and unlock exclusive perks for your next adventure. Whether you’re a frequent flyer, luxury traveler, or budget explorer, find the perfect card to suit your needs.
            </p>
            <div className="hero-cta">
              <a href="#compare" className="cta-button cta-primary">
                Compare Now
              </a>
            </div>
            <div className="hero-image">
              <img
                src="AdobeStock_446734479.webp"
                alt="Travel Credit Cards - Unlock Rewards for Your Journey"
              />
            </div>
            <p className="Disclaimer">
              We may receive compensation when you click on links to certain credit card products on our site. However, our editorial opinions remain our own. Offers are subject to change. Always verify terms with the official issuer.
            </p>
          </div>
        </section>

        {/* SCRIPT INCLUSION (if needed) */}
        <script src="0% APR Index.js"></script>

        {/* TABLE SECTION */}
        <section className="card-table-section">
          <div className="table-responsive">
            <table className="card-table">
              <thead>
                <tr>
                  <th>Card Name</th>
                  <th>Intro APR</th>
                  <th>Balance Transfer Fee</th>
                  <th>Rewards</th>
                  <th>Annual Fee</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Chase Freedom Unlimited®
                    <div className="rating">
                      <a href="javascript:void(0);" className="info-icon" title="Our TCI rating info">
                        <svg fill="#000000" width="15px" height="15px" viewBox="0 0 416.979 416.979">
                          <g>
                            <path d="M356.004,61.156c-81.37-81.47-213.377-81.551-294.848-0.182
                              c-81.47,81.371-81.552,213.379-0.181,294.85
                              c81.369,81.47,213.378,81.551,294.849,0.181
                              C437.293,274.636,437.375,142.626,356.004,61.156z M208.554,334.794
                              c-11.028,0-19.968-8.939-19.968-19.968s8.939-19.969,19.968-19.969
                              c11.028,0,19.968,8.939,19.968,19.969
                              C228.521,325.854,219.582,334.794,208.554,334.794z
                              M241.018,214.566c-11.406,6.668-12.381,14.871-12.43,38.508
                              c-0.003,1.563-0.008,3.14-0.017,4.726
                              c-0.071,11.172-9.147,20.18-20.304,20.18
                              c-0.044,0-0.088,0-0.131,0
                              c-11.215-0.071-20.248-9.22-20.178-20.436
                              c0.01-1.528,0.013-3.047,0.016-4.552
                              c0.05-24.293,0.111-54.524,32.547-73.484
                              c26.026-15.214,29.306-25.208,26.254-38.322
                              c-3.586-15.404-17.653-19.396-28.63-18.141
                              c-3.686,0.423-22.069,3.456-22.069,21.642" />
                          </g>
                        </svg>
                      </a>
                      TCI Rating: <span id="rating-value">8.1</span>/10
                    </div>
                    <div>
                      <a href="#" className="apply-btn">Apply Now</a>
                      <p className="APly">From card issuer's secure site</p>
                    </div>
                    <a href="#" className="learn-more-btn">Learn More</a>
                    <a
                      href="https://sites.chase.com/services/creatives/pricingandterms.html/content/dam/pricingandterms/LGC56029.html"
                      className="rate-fees-btn"
                    >
                      See Rates &amp; Fees
                    </a>
                  </td>
                  <td>0% for 15 months</td>
                  <td>3% (within 60 days), 5% thereafter</td>
                  <td>5% travel, 3% dining &amp; drugstores, 1.5% on all else</td>
                  <td>$0</td>
                </tr>
                <tr>
                  <td>
                    U.S. Bank Altitude® Connect Visa Signature® Card
                    <div className="rating">
                      <a href="javascript:void(0);" className="info-icon" title="Our TCI rating info">
                        <svg fill="#000000" width="15px" height="15px" viewBox="0 0 416.979 416.979">
                          <g>
                            <path d="M356.004,61.156c-81.37-81.47-213.377-81.551-294.848-0.182
                              c-81.47,81.371-81.552,213.379-0.181,294.85
                              c81.369,81.47,213.378,81.551,294.849,0.181
                              C437.293,274.636,437.375,142.626,356.004,61.156z M208.554,334.794
                              c-11.028,0-19.968-8.939-19.968-19.968s8.939-19.969,19.968-19.969
                              c11.028,0,19.968,8.939,19.968,19.969
                              C228.521,325.854,219.582,334.794,208.554,334.794z
                              M241.018,214.566c-11.406,6.668-12.381,14.871-12.43,38.508
                              c-0.003,1.563-0.008,3.14-0.017,4.726
                              c-0.071,11.172-9.147,20.18-20.304,20.18
                              c-0.044,0-0.088,0-0.131,0
                              c-11.215-0.071-20.248-9.22-20.178-20.436
                              c0.01-1.528,0.013-3.047,0.016-4.552
                              c0.05-24.293,0.111-54.524,32.547-73.484
                              c26.026-15.214,29.306-25.208,26.254-38.322
                              c-3.586-15.404-17.653-19.396-28.63-18.141
                              c-3.686,0.423-22.069,3.456-22.069,21.642" />
                          </g>
                        </svg>
                      </a>
                      TCI Rating: <span id="rating-value">8.1</span>/10
                    </div>
                    <div className="rating">
                      <a href="javascript:void(0);" className="info-icon" title="Our TCI rating info">
                        <svg fill="#000000" width="15px" height="15px" viewBox="0 0 416.979 416.979">
                          <g>
                            <path d="M356.004,61.156c-81.37-81.47-213.377-81.551-294.848-0.182
                              c-81.47,81.371-81.552,213.379-0.181,294.85
                              c81.369,81.47,213.378,81.551,294.849,0.181
                              C437.293,274.636,437.375,142.626,356.004,61.156z M208.554,334.794
                              c-11.028,0-19.968-8.939-19.968-19.968s8.939-19.969,19.968-19.969
                              c11.028,0,19.968,8.939,19.968,19.969
                              C228.521,325.854,219.582,334.794,208.554,334.794z
                              M241.018,214.566c-11.406,6.668-12.381,14.871-12.43,38.508
                              c-0.003,1.563-0.008,3.14-0.017,4.726
                              c-0.071,11.172-9.147,20.18-20.304,20.18
                              c-0.044,0-0.088,0-0.131,0
                              c-11.215-0.071-20.248-9.22-20.178-20.436
                              c0.01-1.528,0.013-3.047,0.016-4.552
                              c0.05-24.293,0.111-54.524,32.547-73.484
                              c26.026-15.214,29.306-25.208,26.254-38.322
                              c-3.586-15.404-17.653-19.396-28.63-18.141
                              c-3.686,0.423-22.069,3.456-22.069,21.642" />
                          </g>
                        </svg>
                      </a>
                      TCI Rating: <span id="rating-value">8.2</span>/10
                    </div>
                    <div>
                      <a href="#" className="apply-btn">Apply Now</a>
                      <p className="APly">From card issuer's secure site</p>
                    </div>
                    <a href="#" className="learn-more-btn">Learn More</a>
                    <a
                      href="https://onboarding.usbank.com/consumer/cards/8BB5BD89H1/18569/87702/start"
                      className="rate-fees-btn"
                    >
                      See Rates &amp; Fees
                    </a>
                  </td>
                  <td>0% for 12 billing cycles</td>
                  <td>3% (min $5)</td>
                  <td>5x hotels &amp; car rentals, 4x travel &amp; gas, 2x dining</td>
                  <td>$0</td>
                </tr>
                <tr>
                  <td>
                    Citi Custom Cash® Card
                    <div className="rating">
                      <a href="javascript:void(0);" className="info-icon" title="Our TCI rating info">
                        <svg fill="#000000" width="15px" height="15px" viewBox="0 0 416.979 416.979">
                          <g>
                            <path d="M356.004,61.156c-81.37-81.47-213.377-81.551-294.848-0.182
                              c-81.47,81.371-81.552,213.379-0.181,294.85
                              c81.369,81.47,213.378,81.551,294.849,0.181
                              C437.293,274.636,437.375,142.626,356.004,61.156z M208.554,334.794
                              c-11.028,0-19.968-8.939-19.968-19.968s8.939-19.969,19.968-19.969
                              c11.028,0,19.968,8.939,19.968,19.969
                              C228.521,325.854,219.582,334.794,208.554,334.794z
                              M241.018,214.566c-11.406,6.668-12.381,14.871-12.43,38.508
                              c-0.003,1.563-0.008,3.14-0.017,4.726
                              c-0.071,11.172-9.147,20.18-20.304,20.18
                              c-0.044,0-0.088,0-0.131,0
                              c-11.215-0.071-20.248-9.22-20.178-20.436
                              c0.01-1.528,0.013-3.047,0.016-4.552
                              c0.05-24.293,0.111-54.524,32.547-73.484
                              c26.026-15.214,29.306-25.208,26.254-38.322
                              c-3.586-15.404-17.653-19.396-28.63-18.141
                              c-3.686,0.423-22.069,3.456-22.069,21.642" />
                          </g>
                        </svg>
                      </a>
                      TCI Rating: <span id="rating-value">7.5</span>/10
                    </div>
                    <div>
                      <a href="#" className="apply-btn">Apply Now</a>
                      <p className="APly">From card issuer's secure site</p>
                    </div>
                    <a href="#" className="learn-more-btn">Learn More</a>
                    <a
                      href="https://online.citi.com/US/ag/cards/displayterms?app=UNSOL&HKOP=541175b33e25f6837a0d7af4ba29114f264447b80dcde5f6be6db7d02fed5901"
                      className="rate-fees-btn"
                    >
                      See Rates &amp; Fees
                    </a>
                  </td>
                  <td>0% for 15 months</td>
                  <td>5% (min $5)</td>
                  <td>5% on top category (up to $500/month), 1% all else</td>
                  <td>$0</td>
                </tr>
                <tr>
                  <td>
                    Bank of America® Travel Rewards Credit Card
                    <div className="rating">
                      <a href="javascript:void(0);" className="info-icon" title="Our TCI rating info">
                        <svg fill="#000000" width="15px" height="15px" viewBox="0 0 416.979 416.979">
                          <g>
                            <path d="M356.004,61.156c-81.37-81.47-213.377-81.551-294.848-0.182
                              c-81.47,81.371-81.552,213.379-0.181,294.85
                              c81.369,81.47,213.378,81.551,294.849,0.181
                              C437.293,274.636,437.375,142.626,356.004,61.156z M208.554,334.794
                              c-11.028,0-19.968-8.939-19.968-19.968s8.939-19.969,19.968-19.969
                              c11.028,0,19.968,8.939,19.968,19.969
                              C228.521,325.854,219.582,334.794,208.554,334.794z
                              M241.018,214.566c-11.406,6.668-12.381,14.871-12.43,38.508
                              c-0.003,1.563-0.008,3.14-0.017,4.726
                              c-0.071,11.172-9.147,20.18-20.304,20.18
                              c-0.044,0-0.088,0-0.131,0
                              c-11.215-0.071-20.248-9.22-20.178-20.436
                              c0.01-1.528,0.013-3.047,0.016-4.552
                              c0.05-24.293,0.111-54.524,32.547-73.484
                              c26.026-15.214,29.306-25.208,26.254-38.322
                              c-3.586-15.404-17.653-19.396-28.63-18.141
                              c-3.686,0.423-22.069,3.456-22.069,21.642" />
                          </g>
                        </svg>
                      </a>
                      TCI Rating: <span id="rating-value">7.4</span>/10
                    </div>
                    <div>
                      <a href="#" className="apply-btn">Apply Now</a>
                      <p className="APly">From card issuer's secure site</p>
                    </div>
                    <a href="#" className="learn-more-btn">Learn More</a>
                    <a
                      href="https://www.bankofamerica.com/credit-cards/terms-and-conditions/?campaignid=4071156&productoffercode=MG&locale=en_US"
                      className="rate-fees-btn"
                    >
                      See Rates &amp; Fees
                    </a>
                  </td>
                  <td>0% for 15 billing cycles</td>
                  <td>3% (min $10)</td>
                  <td>1.5 points per $1 on all purchases</td>
                  <td>$0</td>
                </tr>
                <tr>
                  <td>
                    Discover it® Miles
                    <div className="rating">
                      <a href="javascript:void(0);" className="info-icon" title="Our TCI rating info">
                        <svg fill="#000000" width="15px" height="15px" viewBox="0 0 416.979 416.979">
                          <g>
                            <path d="M356.004,61.156c-81.37-81.47-213.377-81.551-294.848-0.182
                              c-81.47,81.371-81.552,213.379-0.181,294.85
                              c81.369,81.47,213.378,81.551,294.849,0.181
                              C437.293,274.636,437.375,142.626,356.004,61.156z M208.554,334.794
                              c-11.028,0-19.968-8.939-19.968-19.968s8.939-19.969,19.968-19.969
                              c11.028,0,19.968,8.939,19.968,19.969
                              C228.521,325.854,219.582,334.794,208.554,334.794z
                              M241.018,214.566c-11.406,6.668-12.381,14.871-12.43,38.508
                              c-0.003,1.563-0.008,3.14-0.017,4.726
                              c-0.071,11.172-9.147,20.18-20.304,20.18
                              c-0.044,0-0.088,0-0.131,0
                              c-11.215-0.071-20.248-9.22-20.178-20.436
                              c0.01-1.528,0.013-3.047,0.016-4.552
                              c0.05-24.293,0.111-54.524,32.547-73.484
                              c26.026-15.214,29.306-25.208,26.254-38.322
                              c-3.586-15.404-17.653-19.396-28.63-18.141
                              c-3.686,0.423-22.069,3.456-22.069,21.642" />
                          </g>
                        </svg>
                      </a>
                      TCI Rating: <span id="rating-value">7.0</span>/10
                    </div>
                    <div>
                      <a href="#" className="apply-btn">Apply Now</a>
                      <p className="APly">From card issuer's secure site</p>
                    </div>
                    <a href="#" className="learn-more-btn">Learn More</a>
                    <a
                      href="https://www.discovercard.com/application/website/ratesrewards?srcCde=GJX4&amp;adobe_mc=TS%3D1740315096%7CMCMID%3D39379935660807998981588704922154453327%7CMCORGID%3D0D6C4673527839230A490D45%2540AdobeOrg&amp;sv_session_undefined=true&amp;_gl=1*p1s8lx*_gcl_au*MTYyMTU5ODAxMS4xNzQwMzE1MDcw*_ga*MTk0MTA3MDUwOC4xNzQwMzE1MDcx*_ga_3MJNPV4VSE*MTc0MDMxNTA3MC4xLjEuMTc0MDMxNTA5NC4zNi4wLjA."
                      className="rate-fees-btn"
                    >
                      See Rates &amp; Fees
                    </a>
                  </td>
                  <td>0% for 15 months</td>
                  <td>3% (then up to 5%)</td>
                  <td>1.5x miles on every purchase</td>
                  <td>$0</td>
                </tr>
                <tr>
                  <td>
                    Wells Fargo Active Cash® Card
                    <div className="rating">
                      <a href="javascript:void(0);" className="info-icon" title="Our TCI rating info">
                        <svg fill="#000000" width="15px" height="15px" viewBox="0 0 416.979 416.979">
                          <g>
                            <path d="M356.004,61.156c-81.37-81.47-213.377-81.551-294.848-0.182
                              c-81.47,81.371-81.552,213.379-0.181,294.85
                              c81.369,81.47,213.378,81.551,294.849,0.181
                              C437.293,274.636,437.375,142.626,356.004,61.156z M208.554,334.794
                              c-11.028,0-19.968-8.939-19.968-19.968s8.939-19.969,19.968-19.969
                              c11.028,0,19.968,8.939,19.968,19.969
                              C228.521,325.854,219.582,334.794,208.554,334.794z
                              M241.018,214.566c-11.406,6.668-12.381,14.871-12.43,38.508
                              c-0.003,1.563-0.008,3.14-0.017,4.726
                              c-0.071,11.172-9.147,20.18-20.304,20.18
                              c-0.044,0-0.088,0-0.131,0
                              c-11.215-0.071-20.248-9.22-20.178-20.436
                              c0.01-1.528,0.013-3.047,0.016-4.552
                              c0.05-24.293,0.111-54.524,32.547-73.484
                              c26.026-15.214,29.306-25.208,26.254-38.322
                              c-3.586-15.404-17.653-19.396-28.63-18.141
                              c-3.686,0.423-22.069,3.456-22.069,21.642" />
                          </g>
                        </svg>
                      </a>
                      TCI Rating: <span id="rating-value">7.8</span>/10
                    </div>
                    <div>
                      <a href="#" className="apply-btn">Apply Now</a>
                      <p className="APly">From card issuer's secure site</p>
                    </div>
                    <a href="#" className="learn-more-btn">Learn More</a>
                    <a
                      href="https://www.wellsfargo.com/credit-cards/active-cash/terms/?FPID=0126D7I6F40000&amp;product_code=CC&amp;subproduct_code=AC&amp;cx_nm=CXNAME_CSMPD&amp;sub_channel=SEO&amp;vendor_code=G&amp;refdmn=www.google.com&amp;_gl=1*1isihgp*_gcl_au*OTk5NTUyMzU3LjE3NDAzMTU0NDM.*_ga*NjU1MzIyNC4xNzQwMzE1NDQz*_ga_7JXJJ2JF12*MTc0MDMxNTQ0My4xLjAuMTc0MDMxNTQ0My42MC4wLjA."
                      className="btn btn-rates-fees"
                    >
                      See Rates &amp; Fees
                    </a>
                  </td>
                  <td>0% for 15 months</td>
                  <td>3% (first 120 days), then up to 5%</td>
                  <td>2% cash rewards on every purchase</td>
                  <td>$0</td>
                </tr>
                <tr>
                  <td>
                    Blue Cash Everyday® Card from American Express
                    <div className="rating">
                      <a href="javascript:void(0);" className="info-icon" title="Our TCI rating info">
                        <svg fill="#000000" width="15px" height="15px" viewBox="0 0 416.979 416.979">
                          <g>
                            <path d="M356.004,61.156c-81.37-81.47-213.377-81.551-294.848-0.182
                              c-81.47,81.371-81.552,213.379-0.181,294.85
                              c81.369,81.47,213.378,81.551,294.849,0.181
                              C437.293,274.636,437.375,142.626,356.004,61.156z M208.554,334.794
                              c-11.028,0-19.968-8.939-19.968-19.968s8.939-19.969,19.968-19.969
                              c11.028,0,19.968,8.939,19.968,19.969
                              C228.521,325.854,219.582,334.794,208.554,334.794z
                              M241.018,214.566c-11.406,6.668-12.381,14.871-12.43,38.508
                              c-0.003,1.563-0.008,3.14-0.017,4.726
                              c-0.071,11.172-9.147,20.18-20.304,20.18
                              c-0.044,0-0.088,0-0.131,0
                              c-11.215-0.071-20.248-9.22-20.178-20.436
                              c0.01-1.528,0.013-3.047,0.016-4.552
                              c0.05-24.293,0.111-54.524,32.547-73.484
                              c26.026-15.214,29.306-25.208,26.254-38.322
                              c-3.586-15.404-17.653-19.396-28.63-18.141
                              c-3.686,0.423-22.069,3.456-22.069,21.642" />
                          </g>
                        </svg>
                      </a>
                      TCI Rating: <span id="rating-value">7.7</span>/10
                    </div>
                    <div>
                      <a href="#" className="apply-btn">Apply Now</a>
                      <p className="APly">From card issuer's secure site</p>
                    </div>
                    <a href="#" className="learn-more-btn">Learn More</a>
                    <a
                      href="https://www.americanexpress.com/us/credit-cards/card-application/apply/prospect/terms/blue-cash-everyday-credit-card/25330-10-0#FeeTable"
                      className="btn btn-rates-fees"
                    >
                      See Rates &amp; Fees
                    </a>
                  </td>
                  <td>0% for 15 months</td>
                  <td>$5 or 3% of the transfer</td>
                  <td>3% at supermarkets, gas, and online retail</td>
                  <td>$0</td>
                </tr>
                <tr>
                  <td>
                    Citi® Diamond Preferred® Card
                    <div className="rating">
                      <a href="javascript:void(0);" className="info-icon" title="Our TCI rating info">
                        <svg fill="#000000" width="15px" height="15px" viewBox="0 0 416.979 416.979">
                          <g>
                            <path d="M356.004,61.156c-81.37-81.47-213.377-81.551-294.848-0.182
                              c-81.47,81.371-81.552,213.379-0.181,294.85
                              c81.369,81.47,213.378,81.551,294.849,0.181
                              C437.293,274.636,437.375,142.626,356.004,61.156z M208.554,334.794
                              c-11.028,0-19.968-8.939-19.968-19.968s8.939-19.969,19.968-19.969
                              c11.028,0,19.968,8.939,19.968,19.969
                              C228.521,325.854,219.582,334.794,208.554,334.794z
                              M241.018,214.566c-11.406,6.668-12.381,14.871-12.43,38.508
                              c-0.003,1.563-0.008,3.14-0.017,4.726
                              c-0.071,11.172-9.147,20.18-20.304,20.18
                              c-0.044,0-0.088,0-0.131,0
                              c-11.215-0.071-20.248-9.22-20.178-20.436
                              c0.01-1.528,0.013-3.047,0.016-4.552
                              c0.05-24.293,0.111-54.524,32.547-73.484
                              c26.026-15.214,29.306-25.208,26.254-38.322
                              c-3.586-15.404-17.653-19.396-28.63-18.141
                              c-3.686,0.423-22.069,3.456-22.069,21.642" />
                          </g>
                        </svg>
                      </a>
                      TCI Rating: <span id="rating-value">6.5</span>/10
                    </div>
                    <div>
                      <a href="#" className="apply-btn">Apply Now</a>
                      <p className="APly">From card issuer's secure site</p>
                    </div>
                    <a href="#" className="learn-more-btn">Learn More</a>
                    <a
                      href="https://online.citi.com/US/ag/cards/displayterms?app=UNSOL&HKOP=608d295cca6a832d9455f97709fe858e684350d1359860de82b2b8a07336a954"
                      className="btn btn-rates-fees"
                    >
                      See Rates &amp; Fees
                    </a>
                  </td>
                  <td>0% for 21 months</td>
                  <td>5% (min $5)</td>
                  <td>No rewards program</td>
                  <td>$0</td>
                </tr>
                <tr>
                  <td>
                    Wells Fargo Reflect® Card
                    <div className="rating">
                      <a href="javascript:void(0);" className="info-icon" title="Our TCI rating info">
                        <svg fill="#000000" width="15px" height="15px" viewBox="0 0 416.979 416.979">
                          <g>
                            <path d="M356.004,61.156c-81.37-81.47-213.377-81.551-294.848-0.182
                              c-81.47,81.371-81.552,213.379-0.181,294.85
                              c81.369,81.47,213.378,81.551,294.849,0.181
                              C437.293,274.636,437.375,142.626,356.004,61.156z M208.554,334.794
                              c-11.028,0-19.968-8.939-19.968-19.968s8.939-19.969,19.968-19.969
                              c11.028,0,19.968,8.939,19.968,19.969
                              C228.521,325.854,219.582,334.794,208.554,334.794z
                              M241.018,214.566c-11.406,6.668-12.381,14.871-12.43,38.508
                              c-0.003,1.563-0.008,3.14-0.017,4.726
                              c-0.071,11.172-9.147,20.18-20.304,20.18
                              c-0.044,0-0.088,0-0.131,0
                              c-11.215-0.071-20.248-9.22-20.178-20.436
                              c0.01-1.528,0.013-3.047,0.016-4.552
                              c0.05-24.293,0.111-54.524,32.547-73.484
                              c26.026-15.214,29.306-25.208,26.254-38.322
                              c-3.586-15.404-17.653-19.396-28.63-18.141
                              c-3.686,0.423-22.069,3.456-22.069,21.642" />
                          </g>
                        </svg>
                      </a>
                      TCI Rating: <span id="rating-value">6.6</span>/10
                    </div>
                    <div>
                      <a href="#" className="apply-btn">Apply Now</a>
                      <p className="APly">From card issuer's secure site</p>
                    </div>
                    <a href="#" className="learn-more-btn">Learn More</a>
                    <a
                      href="https://www.wellsfargo.com/credit-cards/reflect-visa/terms/?FPID=013000IGF80000&amp;product_code=CC&amp;subproduct_code=VV&amp;cx_nm=CXNAME_CSMPD&amp;sub_channel=SEO&amp;vendor_code=G&amp;refdmn=www.google.com&amp;_gl=1*z7r3eu*_gcl_au*OTk5NTUyMzU3LjE3NDAzMTU0NDM.*_ga*NjU1MzIyNC4xNzQwMzE1NDQz*_ga_7JXJJ2JF12*MTc0MDMxNTQ0My4xLjEuMTc0MDMxNTgwNS42MC4wLjA."
                      className="btn btn-rates-fees"
                      data-card="Wells Fargo Reflect"
                    >
                      See Rates &amp; Fees
                    </a>
                  </td>
                  <td>0% for 18 months (extendable by 3 months)</td>
                  <td>3% (first 120 days), then up to 5%</td>
                  <td>No rewards program</td>
                  <td>$0</td>
                </tr>
                <tr>
                  <td>
                    U.S. Bank Cash+® Visa Signature® Card
                    <div className="rating">
                      <a href="javascript:void(0);" className="info-icon" title="Our TCI rating info">
                        <svg fill="#000000" width="15px" height="15px" viewBox="0 0 416.979 416.979">
                          <g>
                            <path d="M356.004,61.156c-81.37-81.47-213.377-81.551-294.848-0.182
                              c-81.47,81.371-81.552,213.379-0.181,294.85
                              c81.369,81.47,213.378,81.551,294.849,0.181
                              C437.293,274.636,437.375,142.626,356.004,61.156z M208.554,334.794
                              c-11.028,0-19.968-8.939-19.968-19.968s8.939-19.969,19.968-19.969
                              c11.028,0,19.968,8.939,19.968,19.969
                              C228.521,325.854,219.582,334.794,208.554,334.794z
                              M241.018,214.566c-11.406,6.668-12.381,14.871-12.43,38.508
                              c-0.003,1.563-0.008,3.14-0.017,4.726
                              c-0.071,11.172-9.147,20.18-20.304,20.18
                              c-0.044,0-0.088,0-0.131,0
                              c-11.215-0.071-20.248-9.22-20.178-20.436
                              c0.01-1.528,0.013-3.047,0.016-4.552
                              c0.05-24.293,0.111-54.524,32.547-73.484
                              c26.026-15.214,29.306-25.208,26.254-38.322
                              c-3.586-15.404-17.653-19.396-28.63-18.141
                              c-3.686,0.423-22.069,3.456-22.069,21.642" />
                          </g>
                        </svg>
                      </a>
                      TCI Rating: <span id="rating-value">7.4</span>/10
                    </div>
                    <div>
                      <a href="#" className="apply-btn">Apply Now</a>
                      <p className="APly">From card issuer's secure site</p>
                    </div>
                    <a href="#" className="learn-more-btn">Learn More</a>
                    <a
                      href="https://onboarding.usbank.com/consumer/cards/WRH8D23H2R/8069/86937/start"
                      className="btn btn-rates-fees"
                      data-card="U.S. Bank Cash+"
                    >
                      See Rates &amp; Fees
                    </a>
                  </td>
                  <td>0% for 15 months</td>
                  <td>3% (min $5)</td>
                  <td>5% cash back on two chosen categories</td>
                  <td>$0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* DETAILED CARD SECTIONS */}
        {/* 1. Chase Freedom Unlimited® */}
        <div className="card" id="chase-freedom-unlimited">
          <div className="card-image">
            <img src="freedom_unlimited_card_alt (1).png" alt="Chase Freedom Unlimited®" />
          </div>
          <div className="card-content">
            <h2 className="card-title">Chase Freedom Unlimited®</h2>
            <div className="rating">
              <a href="javascript:void(0);" className="info-icon" title="Our TCI rating info">
                <svg fill="#000000" width="20px" height="20px" viewBox="0 0 416.979 416.979">
                  <g>
                    <path d="M356.004,61.156c-81.37-81.47-213.377-81.551-294.848-0.182
                      c-81.47,81.371-81.552,213.379-0.181,294.85
                      c81.369,81.47,213.378,81.551,294.849,0.181
                      C437.293,274.636,437.375,142.626,356.004,61.156z M208.554,334.794
                      c-11.028,0-19.968-8.939-19.968-19.968s8.939-19.969,19.968-19.969
                      c11.028,0,19.968,8.939,19.968,19.969
                      C228.521,325.854,219.582,334.794,208.554,334.794z
                      M241.018,214.566c-11.406,6.668-12.381,14.871-12.43,38.508
                      c-0.003,1.563-0.008,3.14-0.017,4.726
                      c-0.071,11.172-9.147,20.18-20.304,20.18
                      c-0.044,0-0.088,0-0.131,0
                      c-11.215-0.071-20.248-9.22-20.178-20.436
                      c0.01-1.528,0.013-3.047,0.016-4.552
                      c0.05-24.293,0.111-54.524,32.547-73.484
                      c26.026-15.214,29.306-25.208,26.254-38.322
                      c-3.586-15.404-17.653-19.396-28.63-18.141
                      c-3.686,0.423-22.069,3.456-22.069,21.642" />
                  </g>
                </svg>
              </a>
              TCI Rating: <span id="rating-value">7.5</span>/10
            </div>
            <p className="card-bonus">
              <strong>Welcome Bonus:</strong> Earn an additional 1.5% cash back on everything you buy (up to $20,000 spent in the first year). That’s up to $300 in extra cash back!
            </p>
            <div className="card-earning">
              <strong>Earning Rates:</strong>
              <ul>
                <li>5% cash back on travel purchased through Chase Ultimate Rewards®.</li>
                <li>3% cash back on dining at restaurants and drugstores.</li>
                <li>1.5% cash back on all other purchases.</li>
              </ul>
            </div>
            <div className="card-luxury-features">
              <strong>Key Features:</strong>
              <ul>
                <li>0% Intro APR for 15 months on purchases and balance transfers.</li>
                <li>Points are worth 25% more when redeemed for travel through Chase Ultimate Rewards®.</li>
                <li>No annual fee.</li>
              </ul>
            </div>
            <div className="card-perks">
              <strong>Additional Perks:</strong>
              <ul>
                <li>Trip cancellation/interruption insurance.</li>
                <li>Purchase protection for new purchases.</li>
                <li>Free access to your credit score with Credit Journey.</li>
              </ul>
            </div>
            <div className="card-best-for">
              <strong>Best For:</strong>
              <p>Everyday spenders looking for versatile cash-back rewards and those planning large purchases or balance transfers.</p>
            </div>
          </div>
          <div className="card-actions">
            <a href="#" className="btn btn-apply" data-card="Chase Freedom Unlimited" title="From card issuer's secure site">Apply Now</a>
            <a href="#" className="btn btn-learn-more" data-card="Chase Freedom Unlimited">Learn More</a>
            <a
              href="https://sites.chase.com/services/creatives/pricingandterms.html/content/dam/pricingandterms/LGC56029.html"
              target="_blank"
              className="btn btn-rates-fees"
              data-card="Chase Freedom Unlimited"
            >
              See Rates &amp; Fees
            </a>
          </div>
        </div>

        {/* 2. U.S. Bank Altitude® Connect Visa Signature® Card */}
        <div className="card" id="us-bank-altitude-connect">
          <div className="card-image">
            <img src="photo-altitude-connect-consumer.png" alt="U.S. Bank Altitude® Connect Visa Signature® Card" />
          </div>
          <div className="card-content">
            <h2 className="card-title">U.S. Bank Altitude® Connect Visa Signature® Card</h2>
            <div className="rating">
              <a href="javascript:void(0);" className="info-icon" title="Our TCI rating info">
                <svg fill="#000000" width="20px" height="20px" viewBox="0 0 416.979 416.979">
                  <g>
                    <path d="M356.004,61.156c-81.37-81.47-213.377-81.551-294.848-0.182
                      c-81.47,81.371-81.552,213.379-0.181,294.85
                      c81.369,81.47,213.378,81.551,294.849,0.181
                      C437.293,274.636,437.375,142.626,356.004,61.156z M208.554,334.794
                      c-11.028,0-19.968-8.939-19.968-19.968s8.939-19.969,19.968-19.969
                      c11.028,0,19.968,8.939,19.968,19.969
                      C228.521,325.854,219.582,334.794,208.554,334.794z
                      M241.018,214.566c-11.406,6.668-12.381,14.871-12.43,38.508
                      c-0.003,1.563-0.008,3.14-0.017,4.726
                      c-0.071,11.172-9.147,20.18-20.304,20.18
                      c-0.044,0-0.088,0-0.131,0
                      c-11.215-0.071-20.248-9.22-20.178-20.436
                      c0.01-1.528,0.013-3.047,0.016-4.552
                      c0.05-24.293,0.111-54.524,32.547-73.484
                      c26.026-15.214,29.306-25.208,26.254-38.322
                      c-3.586-15.404-17.653-19.396-28.63-18.141
                      c-3.686,0.423-22.069,3.456-22.069,21.642" />
                  </g>
                </svg>
              </a>
              TCI Rating: <span id="rating-value">8.2</span>/10
            </div>
            <p className="card-bonus">
              <strong>Welcome Bonus:</strong> Earn 50,000 bonus points after spending $2,000 in the first 120 days.
              <br /><em>(Valued at $500 in travel or statement credits).</em>
            </p>
            <div className="card-earning">
              <strong>Earning Rates:</strong>
              <ul>
                <li>5X points on prepaid hotels and car rentals booked directly in the Altitude Rewards Center.</li>
                <li>4X points on travel and gas station purchases.</li>
                <li>2X points on dining, grocery stores, and streaming services.</li>
                <li>1X points on all other purchases.</li>
              </ul>
            </div>
            <div className="card-luxury-features">
              <strong>Key Features:</strong>
              <ul>
                <li>0% Intro APR for 12 months on balance transfers.</li>
                <li>Points never expire as long as the account remains open and in good standing.</li>
                <li>No foreign transaction fees.</li>
                <li>Automatic $30 annual credit for streaming services like Netflix and Spotify.</li>
              </ul>
            </div>
            <div className="card-perks">
              <strong>Additional Perks:</strong>
              <ul>
                <li>Cell phone protection when you pay your monthly bill with the card.</li>
                <li>Travel and emergency assistance services.</li>
                <li>Visa Signature® concierge services.</li>
              </ul>
            </div>
            <div className="card-best-for">
              <strong>Best For:</strong>
              <p>Travelers and commuters who want high rewards on travel, gas, and streaming services, with no foreign transaction fees.</p>
            </div>
          </div>
          <div className="card-actions">
            <a href="#" className="btn btn-apply" data-card="U.S. Bank Altitude Connect" title="From card issuer's secure site">Apply Now</a>
            <a href="#" className="btn btn-learn-more" data-card="U.S. Bank Altitude Connect">Learn More</a>
            <a
              href="https://onboarding.usbank.com/consumer/cards/8BB5BD89H1/18569/87702/start"
              target="_blank"
              className="btn btn-rates-fees"
              data-card="U.S. Bank Altitude Connect"
            >
              See Rates &amp; Fees
            </a>
          </div>
        </div>

        {/* 3. Citi Custom Cash® Card */}
        <div className="card" id="citi-custom-cash">
          <div className="card-image">
            <img src="download.png" alt="Citi Custom Cash® Card" />
          </div>
          <div className="card-content">
            <h2 className="card-title">Citi Custom Cash® Card</h2>
            <div className="rating">
              <a href="javascript:void(0);" className="info-icon" title="Our TCI rating info">
                <svg fill="#000000" width="20px" height="20px" viewBox="0 0 416.979 416.979">
                  <g>
                    <path d="M356.004,61.156c-81.37-81.47-213.377-81.551-294.848-0.182
                      c-81.47,81.371-81.552,213.379-0.181,294.85
                      c81.369,81.47,213.378,81.551,294.849,0.181
                      C437.293,274.636,437.375,142.626,356.004,61.156z M208.554,334.794
                      c-11.028,0-19.968-8.939-19.968-19.968s8.939-19.969,19.968-19.969
                      c11.028,0,19.968,8.939,19.968,19.969
                      C228.521,325.854,219.582,334.794,208.554,334.794z
                      M241.018,214.566c-11.406,6.668-12.381,14.871-12.43,38.508
                      c-0.003,1.563-0.008,3.14-0.017,4.726
                      c-0.071,11.172-9.147,20.18-20.304,20.18
                      c-0.044,0-0.088,0-0.131,0
                      c-11.215-0.071-20.248-9.22-20.178-20.436
                      c0.01-1.528,0.013-3.047,0.016-4.552
                      c0.05-24.293,0.111-54.524,32.547-73.484
                      c26.026-15.214,29.306-25.208,26.254-38.322
                      c-3.586-15.404-17.653-19.396-28.63-18.141
                      c-3.686,0.423-22.069,3.456-22.069,21.642" />
                  </g>
                </svg>
              </a>
              TCI Rating: <span id="rating-value">7.5</span>/10
            </div>
            <p className="card-bonus">
              <strong>Welcome Bonus:</strong> Earn $200 cash back after spending $1,500 on purchases in the first 3 months of account opening.
            </p>
            <div className="card-earning">
              <strong>Earning Rates:</strong>
              <ul>
                <li>5% cash back on your top eligible spend category each billing cycle (up to $500 in spending).</li>
                <li>1% cash back on all other purchases.</li>
              </ul>
            </div>
            <div className="card-luxury-features">
              <strong>Key Features:</strong>
              <ul>
                <li>No annual fee, making it ideal for cost-conscious users.</li>
                <li>0% intro APR on balance transfers and purchases for the first 15 months. After that, a variable APR applies.</li>
                <li>Redeem cash back as a statement credit or direct deposit.</li>
              </ul>
            </div>
            <div className="card-perks">
              <strong>Additional Perks:</strong>
              <ul>
                <li>Automatic category adjustment ensures you maximize cash back in the category you spend the most on each cycle.</li>
                <li>Access to Citi Entertainment® for exclusive events and ticket presales.</li>
                <li>No foreign transaction fees, perfect for travel and international purchases.</li>
              </ul>
            </div>
            <div className="card-best-for">
              <strong>Best For:</strong>
              <p>Individuals who want flexible rewards based on their spending habits and prefer a no-annual-fee card with a strong cash-back program.</p>
            </div>
          </div>
          <div className="card-actions">
            <a href="#" className="btn btn-apply" data-card="Citi Custom Cash" title="From card issuer's secure site">Apply Now</a>
            <a href="#" className="btn btn-learn-more" data-card="Citi Custom Cash">Learn More</a>
            <a
              href="https://online.citi.com/US/ag/cards/displayterms?app=UNSOL&HKOP=541175b33e25f6837a0d7af4ba29114f264447b80dcde5f6be6db7d02fed5901"
              target="_blank"
              className="btn btn-rates-fees"
              data-card="Citi Custom Cash"
            >
              See Rates &amp; Fees
            </a>
          </div>
        </div>

        {/* 4. Bank of America® Travel Rewards Credit Card */}
        <div className="card" id="bofa-travel-rewards">
          <div className="card-image">
            <img src="8blm_trvsigcm_v_250x158.png" alt="Bank of America® Travel Rewards Credit Card" />
          </div>
          <div className="card-content">
            <h2 className="card-title">Bank of America® Travel Rewards Credit Card</h2>
            <div className="rating">
              <a href="javascript:void(0);" className="info-icon" title="Our TCI rating info">
                <svg fill="#000000" width="20px" height="20px" viewBox="0 0 416.979 416.979">
                  <g>
                    <path d="M356.004,61.156c-81.37-81.47-213.377-81.551-294.848-0.182
                      c-81.47,81.371-81.552,213.379-0.181,294.85
                      c81.369,81.47,213.378,81.551,294.849,0.181
                      C437.293,274.636,437.375,142.626,356.004,61.156z M208.554,334.794
                      c-11.028,0-19.968-8.939-19.968-19.968s8.939-19.969,19.968-19.969
                      c11.028,0,19.968,8.939,19.968,19.969
                      C228.521,325.854,219.582,334.794,208.554,334.794z
                      M241.018,214.566c-11.406,6.668-12.381,14.871-12.43,38.508
                      c-0.003,1.563-0.008,3.14-0.017,4.726
                      c-0.071,11.172-9.147,20.18-20.304,20.18
                      c-0.044,0-0.088,0-0.131,0
                      c-11.215-0.071-20.248-9.22-20.178-20.436
                      c0.01-1.528,0.013-3.047,0.016-4.552
                      c0.05-24.293,0.111-54.524,32.547-73.484
                      c26.026-15.214,29.306-25.208,26.254-38.322
                      c-3.586-15.404-17.653-19.396-28.63-18.141
                      c-3.686,0.423-22.069,3.456-22.069,21.642" />
                  </g>
                </svg>
              </a>
              TCI Rating: <span id="rating-value">7.4</span>/10
            </div>
            <p className="card-bonus">
              <strong>Welcome Bonus:</strong> Earn 25,000 online bonus points after making at least $1,000 in purchases in the first 90 days of account opening.
              <br /><em>(Valued at $250 as a statement credit toward travel purchases).</em>
            </p>
            <div className="card-earning">
              <strong>Earning Rates:</strong>
              <ul>
                <li>1.5 points per dollar on every purchase, with no caps or expiration.</li>
                <li>Preferred Rewards members can earn up to 2.62 points per dollar.</li>
              </ul>
            </div>
            <div className="card-luxury-features">
              <strong>Key Features:</strong>
              <ul>
                <li>No annual fee, making it ideal for budget-conscious travelers.</li>
                <li>0% intro APR on purchases for the first 18 billing cycles (variable APR applies thereafter).</li>
                <li>No foreign transaction fees, perfect for international travel.</li>
              </ul>
            </div>
            <div className="card-perks">
              <strong>Additional Perks:</strong>
              <ul>
                <li>Redeem points for travel expenses like flights, hotels, vacation packages, or car rentals.</li>
                <li>Travel insurance and protections, including trip cancellation and delay coverage.</li>
                <li>Access to Bank of America’s Preferred Rewards program for increased earning potential.</li>
              </ul>
            </div>
            <div className="card-best-for">
              <strong>Best For:</strong>
              <p>Travelers looking for a no-annual-fee card with flexible, easy-to-redeem rewards and no foreign transaction fees.</p>
            </div>
          </div>
          <div className="card-actions">
            <a href="#" className="btn btn-apply" data-card="Bank of America Travel Rewards" title="From card issuer's secure site">Apply Now</a>
            <a href="#" className="btn btn-learn-more" data-card="Bank of America Travel Rewards">Learn More</a>
            <a
              href="https://www.bankofamerica.com/credit-cards/terms-and-conditions/?campaignid=4071156&productoffercode=MG&locale=en_US"
              target="_blank"
              className="btn btn-rates-fees"
              data-card="Bank of America Travel Rewards"
            >
              See Rates &amp; Fees
            </a>
          </div>
        </div>

        {/* 5. Discover it® Miles */}
        <div className="card" id="discover-it-miles">
          <div className="card-image">
            <img src="cardart-travel-beachcard-620-382.webp" alt="Discover it® Miles" />
          </div>
          <div className="card-content">
            <h2 className="card-title">Discover it® Miles</h2>
            <div className="rating">
              <a href="javascript:void(0);" className="info-icon" title="Our TCI rating info">
                <svg fill="#000000" width="20px" height="20px" viewBox="0 0 416.979 416.979">
                  <g>
                    <path d="M356.004,61.156c-81.37-81.47-213.377-81.551-294.848-0.182
                      c-81.47,81.371-81.552,213.379-0.181,294.85
                      c81.369,81.47,213.378,81.551,294.849,0.181
                      C437.293,274.636,437.375,142.626,356.004,61.156z M208.554,334.794
                      c-11.028,0-19.968-8.939-19.968-19.968s8.939-19.969,19.968-19.969
                      c11.028,0,19.968,8.939,19.968,19.969
                      C228.521,325.854,219.582,334.794,208.554,334.794z
                      M241.018,214.566c-11.406,6.668-12.381,14.871-12.43,38.508
                      c-0.003,1.563-0.008,3.14-0.017,4.726
                      c-0.071,11.172-9.147,20.18-20.304,20.18
                      c-0.044,0-0.088,0-0.131,0
                      c-11.215-0.071-20.248-9.22-20.178-20.436
                      c0.01-1.528,0.013-3.047,0.016-4.552
                      c0.05-24.293,0.111-54.524,32.547-73.484
                      c26.026-15.214,29.306-25.208,26.254-38.322
                      c-3.586-15.404-17.653-19.396-28.63-18.141
                      c-3.686,0.423-22.069,3.456-22.069,21.642" />
                  </g>
                </svg>
              </a>
              TCI Rating: <span id="rating-value">7.0</span>/10
            </div>
            <p className="card-bonus">
              <strong>Welcome Bonus:</strong> Discover will automatically match all the miles you’ve earned at the end of your first year.
              <br /><em>(For example, if you earn 35,000 miles, you’ll get 70,000 miles total).</em>
            </p>
            <div className="card-earning">
              <strong>Earning Rates:</strong>
              <ul>
                <li>1.5 miles per dollar on every purchase, with no limit on how much you can earn.</li>
                <li>Bonus miles matched at the end of the first year, effectively doubling your earnings.</li>
              </ul>
            </div>
            <div className="card-luxury-features">
              <strong>Key Features:</strong>
              <ul>
                <li>No annual fee, making it a cost-effective travel card.</li>
                <li>0% intro APR on purchases for the first 15 months (variable APR applies thereafter).</li>
                <li>No foreign transaction fees, perfect for international travel.</li>
              </ul>
            </div>
            <div className="card-perks">
              <strong>Additional Perks:</strong>
              <ul>
                <li>Redeem miles for travel expenses like flights, hotels, rideshares, and more.</li>
                <li>Flexible redemption: $1 in travel credit = 100 miles.</li>
                <li>Free access to your FICO® Credit Score online.</li>
                <li>Identity Theft Protection alerts and Freeze It® feature to instantly stop new account activity.</li>
              </ul>
            </div>
            <div className="card-best-for">
              <strong>Best For:</strong>
              <p>Travelers who value simplicity, no annual fees, and flexible mile redemption options with a first-year earning boost.</p>
            </div>
          </div>
          <div className="card-actions">
            <a href="#" className="btn btn-apply" data-card="Discover it Miles" title="From card issuer's secure site">Apply Now</a>
            <a href="#" className="btn btn-learn-more" data-card="Discover it Miles">Learn More</a>
            <a
              href="https://www.discovercard.com/application/website/ratesrewards?srcCde=GJX4&amp;adobe_mc=TS%3D1740315096%7CMCMID%3D39379935660807998981588704922154453327%7CMCORGID%3D0D6C4673527839230A490D45%2540AdobeOrg&amp;sv_session_undefined=true&amp;_gl=1*p1s8lx*_gcl_au*MTYyMTU5ODAxMS4xNzQwMzE1MDcw*_ga*MTk0MTA3MDUwOC4xNzQwMzE1MDcx*_ga_3MJNPV4VSE*MTc0MDMxNTA3MC4xLjEuMTc0MDMxNTA5NC4zNi4wLjA."
              target="_blank"
              className="btn btn-rates-fees"
              data-card="Discover it Miles"
            >
              See Rates &amp; Fees
            </a>
          </div>
        </div>

        {/* 6. Wells Fargo Active Cash® Card */}
        <div className="card" id="wells-fargo-active-cash">
          <div className="card-image">
            <img src="WF_ActiveCash_VS_Collateral_Front_RGB.png" alt="Wells Fargo Active Cash® Card" />
          </div>
          <div className="card-content">
            <h2 className="card-title">Wells Fargo Active Cash® Card</h2>
            <div className="rating">
              <a href="javascript:void(0);" className="info-icon" title="Our TCI rating info">
                <svg fill="#000000" width="20px" height="20px" viewBox="0 0 416.979 416.979">
                  <g>
                    <path d="M356.004,61.156c-81.37-81.47-213.377-81.551-294.848-0.182
                      c-81.47,81.371-81.552,213.379-0.181,294.85
                      c81.369,81.47,213.378,81.551,294.849,0.181
                      C437.293,274.636,437.375,142.626,356.004,61.156z M208.554,334.794
                      c-11.028,0-19.968-8.939-19.968-19.968s8.939-19.969,19.968-19.969
                      c11.028,0,19.968,8.939,19.968,19.969
                      C228.521,325.854,219.582,334.794,208.554,334.794z
                      M241.018,214.566c-11.406,6.668-12.381,14.871-12.43,38.508
                      c-0.003,1.563-0.008,3.14-0.017,4.726
                      c-0.071,11.172-9.147,20.18-20.304,20.18
                      c-0.044,0-0.088,0-0.131,0
                      c-11.215-0.071-20.248-9.22-20.178-20.436
                      c0.01-1.528,0.013-3.047,0.016-4.552
                      c0.05-24.293,0.111-54.524,32.547-73.484
                      c26.026-15.214,29.306-25.208,26.254-38.322
                      c-3.586-15.404-17.653-19.396-28.63-18.141
                      c-3.686,0.423-22.069,3.456-22.069,21.642" />
                  </g>
                </svg>
              </a>
              TCI Rating: <span id="rating-value">7.8</span>/10
            </div>
            <p className="card-bonus">
              <strong>Welcome Bonus:</strong> Earn a $200 cash rewards bonus after spending $1,000 in purchases in the first 3 months.
            </p>
            <div className="card-earning">
              <strong>Earning Rates:</strong>
              <ul>
                <li>Unlimited 2% cash rewards on all purchases.</li>
                <li>No categories or caps to worry about – consistent earnings across all spending.</li>
              </ul>
            </div>
            <div className="card-luxury-features">
              <strong>Key Features:</strong>
              <ul>
                <li>0% intro APR for 15 months from account opening on purchases and qualifying balance transfers (3% intro balance transfer fee, then up to 5%).</li>
                <li>Variable APR applies after the intro period (currently 20.24%, 25.24%, or 29.99%).</li>
                <li>No annual fee, offering excellent value for everyday spenders.</li>
                <li>Cell phone protection: Get up to $600 in coverage against damage or theft (subject to a $25 deductible) when you pay your monthly cell phone bill with the card.</li>
              </ul>
            </div>
            <div className="card-perks">
              <strong>Additional Perks:</strong>
              <ul>
                <li>Access to Wells Fargo’s Rewards platform for redeeming cash rewards.</li>
                <li>Enjoy a seamless and secure digital wallet experience with tap-to-pay technology.</li>
                <li>No foreign transaction fees.</li>
                <li>Zero Liability Protection for unauthorized transactions.</li>
              </ul>
            </div>
            <div className="card-best-for">
              <strong>Best For:</strong>
              <p>Consumers looking for a simple, no-hassle card with unlimited cash rewards and added benefits like cell phone protection.</p>
            </div>
          </div>
          <div className="card-actions">
            <a href="#" className="btn btn-apply" data-card="Wells Fargo Active Cash" title="From card issuer's secure site">Apply Now</a>
            <a href="#" className="btn btn-learn-more" data-card="Wells Fargo Active Cash">Learn More</a>
            <a
              href="https://www.wellsfargo.com/credit-cards/active-cash/terms/?FPID=0126D7I6F40000&amp;product_code=CC&amp;subproduct_code=AC&amp;cx_nm=CXNAME_CSMPD&amp;sub_channel=SEO&amp;vendor_code=G&amp;refdmn=www.google.com&amp;_gl=1*1isihgp*_gcl_au*OTk5NTUyMzU3LjE3NDAzMTU0NDM.*_ga*NjU1MzIyNC4xNzQwMzE1NDQz*_ga_7JXJJ2JF12*MTc0MDMxNTQ0My4xLjAuMTc0MDMxNTQ0My42MC4wLjA="
              className="btn btn-rates-fees"
            >
              See Rates &amp; Fees
            </a>
          </div>
        </div>

        {/* 7. Blue Cash Everyday® Card from American Express */}
        <div className="card" id="blue-cash-everyday">
          <div className="card-image">
            <img src="NUS000000305_480x304_straight_withname.avif" alt="Blue Cash Everyday® Card from American Express" />
          </div>
          <div className="card-content">
            <h2 className="card-title">Blue Cash Everyday® Card from American Express</h2>
            <div className="rating">
              <a href="javascript:void(0);" className="info-icon" title="Our TCI rating info">
                <svg fill="#000000" width="20px" height="20px" viewBox="0 0 416.979 416.979">
                  <g>
                    <path d="M356.004,61.156c-81.37-81.47-213.377-81.551-294.848-0.182
                      c-81.47,81.371-81.552,213.379-0.181,294.85
                      c81.369,81.47,213.378,81.551,294.849,0.181
                      C437.293,274.636,437.375,142.626,356.004,61.156z M208.554,334.794
                      c-11.028,0-19.968-8.939-19.968-19.968s8.939-19.969,19.968-19.969
                      c11.028,0,19.968,8.939,19.968,19.969
                      C228.521,325.854,219.582,334.794,208.554,334.794z
                      M241.018,214.566c-11.406,6.668-12.381,14.871-12.43,38.508
                      c-0.003,1.563-0.008,3.14-0.017,4.726
                      c-0.071,11.172-9.147,20.18-20.304,20.18
                      c-0.044,0-0.088,0-0.131,0
                      c-11.215-0.071-20.248-9.22-20.178-20.436
                      c0.01-1.528,0.013-3.047,0.016-4.552
                      c0.05-24.293,0.111-54.524,32.547-73.484
                      c26.026-15.214,29.306-25.208,26.254-38.322
                      c-3.586-15.404-17.653-19.396-28.63-18.141
                      c-3.686,0.423-22.069,3.456-22.069,21.642" />
                  </g>
                </svg>
              </a>
              TCI Rating: <span id="rating-value">7.7</span>/10
            </div>
            <p className="card-bonus">
              <strong>Welcome Bonus:</strong> Earn a $200 statement credit after spending $2,000 in purchases in the first 6 months.
            </p>
            <div className="card-earning">
              <strong>Earning Rates:</strong>
              <ul>
                <li>3% cash back at U.S. supermarkets (up to $6,000 per year in purchases, then 1%).</li>
                <li>3% cash back at U.S. gas stations (up to $6,000 per year in purchases, then 1%).</li>
                <li>3% cash back on U.S. online retail purchases (up to $6,000 per year in purchases, then 1%).</li>
                <li>1% cash back on other purchases.</li>
              </ul>
            </div>
            <div className="card-luxury-features">
              <strong>Key Features:</strong>
              <ul>
                <li>0% intro APR on purchases and balance transfers for 15 months (variable APR applies thereafter: 19.24% - 29.99%).</li>
                <li>No annual fee, making it a cost-effective rewards card.</li>
                <li>Earn cash back in the form of Reward Dollars that can be redeemed as a statement credit.</li>
              </ul>
            </div>
            <div className="card-perks">
              <strong>Additional Perks:</strong>
              <ul>
                <li>Purchase protection for eligible items purchased with the card.</li>
                <li>Car rental loss and damage insurance for eligible rentals.</li>
                <li>Plan It®: Pay for large purchases over time with no interest, only a fixed fee.</li>
                <li>Access to exclusive American Express Experiences and events.</li>
              </ul>
            </div>
            <div className="card-best-for">
              <strong>Best For:</strong>
              <p>Individuals seeking a no-annual-fee card with competitive cash back rewards on groceries, gas, and online shopping.</p>
            </div>
          </div>
          <div className="card-actions">
            <a href="#" className="btn btn-apply" data-card="Blue Cash Everyday" title="From card issuer's secure site">Apply Now</a>
            <a href="#" className="btn btn-learn-more" data-card="Blue Cash Everyday">Learn More</a>
            <a
              href="https://www.americanexpress.com/us/credit-cards/card-application/apply/prospect/terms/blue-cash-everyday-credit-card/25330-10-0#FeeTable"
              target="_blank"
              className="btn btn-rates-fees"
              data-card="Blue Cash Everyday"
            >
              See Rates &amp; Fees
            </a>
          </div>
        </div>

        {/* 8. Citi® Diamond Preferred® Card */}
        <div className="card" id="citi-diamond-preferred">
          <div className="card-image">
            <img src="download (1).png" alt="Citi® Diamond Preferred® Card" />
          </div>
          <div className="card-content">
            <h2 className="card-title">Citi® Diamond Preferred® Card</h2>
            <div className="rating">
              <a href="javascript:void(0);" className="info-icon" title="Our TCI rating info">
                <svg fill="#000000" width="20px" height="20px" viewBox="0 0 416.979 416.979">
                  <g>
                    <path d="M356.004,61.156c-81.37-81.47-213.377-81.551-294.848-0.182
                      c-81.47,81.371-81.552,213.379-0.181,294.85
                      c81.369,81.47,213.378,81.551,294.849,0.181
                      C437.293,274.636,437.375,142.626,356.004,61.156z M208.554,334.794
                      c-11.028,0-19.968-8.939-19.968-19.968s8.939-19.969,19.968-19.969
                      c11.028,0,19.968,8.939,19.968,19.969
                      C228.521,325.854,219.582,334.794,208.554,334.794z
                      M241.018,214.566c-11.406,6.668-12.381,14.871-12.43,38.508
                      c-0.003,1.563-0.008,3.14-0.017,4.726
                      c-0.071,11.172-9.147,20.18-20.304,20.18
                      c-0.044,0-0.088,0-0.131,0
                      c-11.215-0.071-20.248-9.22-20.178-20.436
                      c0.01-1.528,0.013-3.047,0.016-4.552
                      c0.05-24.293,0.111-54.524,32.547-73.484
                      c26.026-15.214,29.306-25.208,26.254-38.322
                      c-3.586-15.404-17.653-19.396-28.63-18.141
                      c-3.686,0.423-22.069,3.456-22.069,21.642" />
                  </g>
                </svg>
              </a>
              TCI Rating: <span id="rating-value">6.5</span>/10
            </div>
            <div>
              <a href="#" className="apply-btn">Apply Now</a>
              <p className="APly">From card issuer's secure site</p>
            </div>
            <a href="#" className="learn-more-btn">Learn More</a>
            <a
              href="https://online.citi.com/US/ag/cards/displayterms?app=UNSOL&HKOP=608d295cca6a832d9455f97709fe858e684350d1359860de82b2b8a07336a954"
              target="_blank"
              className="btn btn-rates-fees"
              data-card="Citi Diamond Preferred"
            >
              See Rates &amp; Fees
            </a>
          </div>
          <div className="card-actions">
            <a href="#" className="btn btn-apply" data-card="Citi Diamond Preferred" title="From card issuer's secure site">Apply Now</a>
            <a href="#" className="btn btn-learn-more" data-card="Citi Diamond Preferred">Learn More</a>
            <a
              href="https://online.citi.com/US/ag/cards/displayterms?app=UNSOL&HKOP=608d295cca6a832d9455f97709fe858e684350d1359860de82b2b8a07336a954"
              target="_blank"
              className="btn btn-rates-fees"
              data-card="Citi Diamond Preferred"
            >
              See Rates &amp; Fees
            </a>
          </div>
        </div>

        {/* 9. Wells Fargo Reflect® Card */}
        <div className="card" id="wells-fargo-reflect">
          <div className="card-image">
            <img src="Reflect_homepage_m.png" alt="Wells Fargo Reflect® Card" />
          </div>
          <div className="card-content">
            <h2 className="card-title">Wells Fargo Reflect® Card</h2>
            <div className="rating">
              <a href="javascript:void(0);" className="info-icon" title="Our TCI rating info">
                <svg fill="#000000" width="20px" height="20px" viewBox="0 0 416.979 416.979">
                  <g>
                    <path d="M356.004,61.156c-81.37-81.47-213.377-81.551-294.848-0.182
                      c-81.47,81.371-81.552,213.379-0.181,294.85
                      c81.369,81.47,213.378,81.551,294.849,0.181
                      C437.293,274.636,437.375,142.626,356.004,61.156z M208.554,334.794
                      c-11.028,0-19.968-8.939-19.968-19.968s8.939-19.969,19.968-19.969
                      c11.028,0,19.968,8.939,19.968,19.969
                      C228.521,325.854,219.582,334.794,208.554,334.794z
                      M241.018,214.566c-11.406,6.668-12.381,14.871-12.43,38.508
                      c-0.003,1.563-0.008,3.14-0.017,4.726
                      c-0.071,11.172-9.147,20.18-20.304,20.18
                      c-0.044,0-0.088,0-0.131,0
                      c-11.215-0.071-20.248-9.22-20.178-20.436
                      c0.01-1.528,0.013-3.047,0.016-4.552
                      c0.05-24.293,0.111-54.524,32.547-73.484
                      c26.026-15.214,29.306-25.208,26.254-38.322
                      c-3.586-15.404-17.653-19.396-28.63-18.141
                      c-3.686,0.423-22.069,3.456-22.069,21.642" />
                  </g>
                </svg>
              </a>
              TCI Rating: <span id="rating-value">6.6</span>/10
            </div>
            <div>
              <a href="#" className="apply-btn">Apply Now</a>
              <p className="APly">From card issuer's secure site</p>
            </div>
            <a href="#" className="learn-more-btn">Learn More</a>
            <a
              href="https://www.wellsfargo.com/credit-cards/reflect-visa/terms/?FPID=013000IGF80000&amp;product_code=CC&amp;subproduct_code=VV&amp;cx_nm=CXNAME_CSMPD&amp;sub_channel=SEO&amp;vendor_code=G&amp;refdmn=www.google.com&amp;_gl=1*z7r3eu*_gcl_au*OTk5NTUyMzU3LjE3NDAzMTU0NDM.*_ga*NjU1MzIyNC4xNzQwMzE1NDQz*_ga_7JXJJ2JF12*MTc0MDMxNTQ0My4xLjEuMTc0MDMxNTgwNS42MC4wLjA="
              className="btn btn-rates-fees"
              data-card="Wells Fargo Reflect"
            >
              See Rates &amp; Fees
            </a>
          </div>
        </div>

        {/* 10. U.S. Bank Cash+® Visa Signature® Card */}
        <div className="card" id="us-bank-cash-plus">
          <div className="card-image">
            <img src="Cash+_Front_Angle_Reflection.png" alt="U.S. Bank Cash+® Visa Signature® Card" />
          </div>
          <div className="card-content">
            <h2 className="card-title">U.S. Bank Cash+® Visa Signature® Card</h2>
            <div className="rating">
              <a href="javascript:void(0);" className="info-icon" title="Our TCI rating info">
                <svg fill="#000000" width="20px" height="20px" viewBox="0 0 416.979 416.979">
                  <g>
                    <path d="M356.004,61.156c-81.37-81.47-213.377-81.551-294.848-0.182
                      c-81.47,81.371-81.552,213.379-0.181,294.85
                      c81.369,81.47,213.378,81.551,294.849,0.181
                      C437.293,274.636,437.375,142.626,356.004,61.156z M208.554,334.794
                      c-11.028,0-19.968-8.939-19.968-19.968s8.939-19.969,19.968-19.969
                      c11.028,0,19.968,8.939,19.968,19.969
                      C228.521,325.854,219.582,334.794,208.554,334.794z
                      M241.018,214.566c-11.406,6.668-12.381,14.871-12.43,38.508
                      c-0.003,1.563-0.008,3.14-0.017,4.726
                      c-0.071,11.172-9.147,20.18-20.304,20.18
                      c-0.044,0-0.088,0-0.131,0
                      c-11.215-0.071-20.248-9.22-20.178-20.436
                      c0.01-1.528,0.013-3.047,0.016-4.552
                      c0.05-24.293,0.111-54.524,32.547-73.484
                      c26.026-15.214,29.306-25.208,26.254-38.322
                      c-3.586-15.404-17.653-19.396-28.63-18.141
                      c-3.686,0.423-22.069,3.456-22.069,21.642" />
                  </g>
                </svg>
              </a>
              TCI Rating: <span id="rating-value">7.4</span>/10
            </div>
            <p className="card-bonus">
              <strong>Welcome Bonus:</strong> Earn $200 after spending $1,000 in eligible purchases within the first 120 days of account opening.
            </p>
            <div className="card-earning">
              <strong>Earning Rates:</strong>
              <ul>
                <li>5% cash back on your first $2,000 in combined eligible purchases each quarter in two categories you choose.</li>
                <li>2% cash back on one everyday category, like gas stations, grocery stores, or restaurants.</li>
                <li>1% unlimited cash back on all other purchases.</li>
              </ul>
            </div>
            <div className="card-luxury-features">
              <strong>Key Features:</strong>
              <ul>
                <li>No annual fee, making it a cost-effective option for maximizing rewards.</li>
                <li>0% introductory APR for 15 months on purchases and balance transfers, followed by a variable APR of 19.24% - 29.24%.</li>
                <li>Customizable cash-back categories for maximum flexibility.</li>
              </ul>
            </div>
            <div className="card-perks">
              <strong>Additional Perks:</strong>
              <ul>
                <li>Zero fraud liability for unauthorized transactions.</li>
                <li>Roadside assistance and travel accident insurance.</li>
                <li>Extended warranty protection and purchase security.</li>
                <li>Access to the U.S. Bank Mobile App for account management and rewards tracking.</li>
              </ul>
            </div>
            <div className="card-best-for">
              <strong>Best For:</strong>
              <p>Customers who want to customize their cash-back rewards and maximize savings on categories that matter most to them.</p>
            </div>
          </div>
          <div className="card-actions">
            <a href="#" className="btn btn-apply" data-card="U.S. Bank Cash+" title="From card issuer's secure site">Apply Now</a>
            <a href="#" className="btn btn-learn-more" data-card="U.S. Bank Cash+">Learn More</a>
            <a
              href="https://onboarding.usbank.com/consumer/cards/WRH8D23H2R/8069/86937/start"
              target="_blank"
              className="btn btn-rates-fees"
              data-card="U.S. Bank Cash+"
            >
              See Rates &amp; Fees
            </a>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
