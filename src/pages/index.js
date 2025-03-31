import Head from 'next/head';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/scripts/tools.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <Head>
        <title>TravelCardInsider - Best Travel Credit Cards 2024</title>
        <link rel="stylesheet" href="/styles/main.css" />
      </Head>
      <header className="site-header">
        <div id="menuBackdrop" className="menu-backdrop"></div>
        <div className="header-inner">
          <div className="logo-toggle-container">
            <button id="hamburgerBtn" className="menu-toggle" aria-label="Toggle Menu">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>
            <a href="index.html" className="site-logo">
              <img src="/6.jpg" alt="TravelCardInsider Logo" />
            </a>
          </div>
          <nav id="mobileNav" className="main-nav">
            <ul className="nav-list">
              <li className="header-actions">
                <div className="search-container">
                  <input type="search" placeholder="Search..." />
                </div>
              </li>
              <li className="has-dropdown">
                <a href="javascript:void(0);" className="dropdown-toggle">Featured Cards</a>
                <ul className="dropdown-menu">
                  <li><a href="#Best_Travel_Credit_Cards">Best Travel Credit Cards</a></li>
                  <li><a href="#Luxury_TravelCredit_Cards">Luxury Travel Credit Cards</a></li>
                  <li><a href="#Airline_Credit_Cards">Airline Credit Cards</a></li>
                  <li><a href="#Hotel_Credit_Cards">Hotel Credit Cards</a></li>
                  <li><a href="#No_Annual_Fee_Credit_Cards">No Annual Fee Credit Cards</a></li>
                  <li><a href="#Business_Credit_Cards">Business Credit Cards</a></li>
                  <li><a href="#Balance_Transfer_Credit_Cards">0% APR & Balance Transfer</a></li>
                  <li><a href="#Cards_With_Lounge_Access">Cards With Lounge Access</a></li>
                  <li><a href="#No_Foreign_Trans_Fees">No Foreign Transaction Fee Cards</a></li>
                  <li><a href="#Beginners_Travel_Credit_Cards">Beginners Travel Cards</a></li>
                </ul>
              </li>
              <li className="has-dropdown">
                <a href="javascript:void(0);" className="dropdown-toggle">Tools</a>
                <ul className="dropdown-menu">
                  <li><a href="#compare">Compare Travel Credit Cards</a></li>
                  <li><a href="#personalized_recs">Personalized Recommendations</a></li>
                </ul>
              </li>
              <li className="has-dropdown">
                <a href="javascript:void(0);" className="dropdown-toggle">Blog</a>
                <ul className="dropdown-menu Blog">
                  <li><a href="#Credit_Card_Guids">Guides</a></li>
                  <li><a href="#Credit_Card_News">News</a></li>
                </ul>
              </li>
              <li className="has-dropdown">
                <a href="javascript:void(0);" className="dropdown-toggle">Learn</a>
                <ul className="dropdown-menu">
                  <li><a href="#Credit_Card_Basics">Travel Credit Card Basics</a></li>
                  <li><a href="#Credit_Card_Rewards">Rewards & Perks</a></li>
                  <li><a href="#Credit_Management">Credit Management</a></li>
                  <li><a href="#Advanced_Strategies">Advanced Strategies</a></li>
                  <li><a href="#FAQs_and_Guides">FAQs & Guides</a></li>
                </ul>
              </li>
              <li className="has-dropdown">
                <a href="javascript:void(0);" className="dropdown-toggle">About</a>
                <ul className="dropdown-menu">
                  <li><a href="#Credit_Card_Who We Are">Who We Are</a></li>
                  <li><a href="#Credit_Card_Our Mission">Our Mission</a></li>
                  <li><a href="#Credit_Card_How We Rate Credit Cards">How We Rate Credit Cards</a></li>
                  <li><a href="#Credit_Card_Affiliate Disclosure">Affiliate Disclosure</a></li>
                  <li><a href="#Credit_Card_Contact Us">Contact Us</a></li>
                </ul>
              </li>
              <li><a href="#subscribe">Subscribe</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <section id="product-overview">
          <div className="img"></div>
        </section>
        <section className="hero">
          <div className="container">
            <h1>Unlock the Best Travel Credit Cards for 2025</h1>
            <p>Compare top travel credit cards and start earning rewards for your next adventure.</p>
            <a href="#compare" className="cta-button">Compare Now</a>
          </div>
          <div className="container">
            <h1>Calculate Your Travel Rewards</h1>
            <p>Enter your monthly spending to see how many points you can earn with top travel credit cards.</p>
            <a href="#Calculate" className="cta-button">Calculate</a>
          </div>
          <div className="container">
            <h1>Find Best Travel Credit Cards for You</h1>
            <p>Find the perfect travel credit card tailored to your spending habits and travel goals.</p>
            <a href="#Find" className="cta-button">Find</a>
          </div>
        </section>
        <section id="featured-cards" className="featured-cards_3">
          <div className="container">
            <h1 className="H2_featured-cards">Top Travel Credit Cards</h1>
            <div className="card-grid">
              <div className="card card1">
                <img className="img1" src="/sapphire_preferred_card.png" alt="Chase Sapphire Preferred Card" />
                <div className="Crad_discription1">
                  <h3>Chase Sapphire Preferred</h3>
                  <p>Earn 60,000 points after spending $4,000 in the first 3 months.</p>
                  <a href="#" className="cta-button">Learn More</a>
                  <a href="#" className="Apply-button">Apply Now</a>
                </div>
              </div>
              <div className="card card2">
                <img className="img2" src="/ntb-amex-platinum-card.png" alt="Amex Platinum Card" />
                <div className="Crad_discription2">
                  <h3>Amex Platinum</h3>
                  <p>Enjoy 5x points on flights and luxury lounge access worldwide.</p>
                  <a href="#" className="cta-button">Learn More</a>
                  <a href="#" className="Apply-button">Apply Now</a>
                </div>
              </div>
              <div className="card card3">
                <img className="img3" src="/venturex-cg-static-card-1000x630-2.avif" alt="Capital One Venture X" />
                <div className="Crad_discription3">
                  <h3>Capital One Venture X</h3>
                  <p>Earn unlimited 2x miles and receive a $300 travel credit annually.</p>
                  <a href="#" className="cta-button">Learn More</a>
                  <a href="#" className="Apply-button">Apply Now</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="compare" className="comparison">
          <div className="container">
            <h2 className="H2_comparison">Compare Travel Credit Cards</h2>
            <form onSubmit={(e) => { e.preventDefault(); /* Add comparison logic here */ }}>
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
              <button className="submit" type="submit">Compare</button>
            </form>
            <div id="comparison-result" className="comparison-result">
              <h3>Comparison Result</h3>
              <p id="result-text">Select two cards to compare.</p>
            </div>
          </div>
        </section>
        <section className="reviews-container">
          <h2>Top Credit Card Reviews</h2>
          <div className="reviews-grid">
            <div className="card">
              <img className="review_img" src="/AdobeStock_560041735_result.webp" alt="Breaking: Top New Travel Credit Card Offers of 2025—Which One Is Best" />
              <h3>Top New Travel Credit Card Offers of 2025</h3>
              <a href="#">Read Review</a>
            </div>
            <div className="card">
              <img className="review_img" src="/AdobeStock_758160258_result.webp" alt="The Ultimate Guide to Lounge Access in 2025: How to Get VIP Treatment at Airports" />
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="footer-inner">
        </div>
      </footer>
    </div>
  );
}