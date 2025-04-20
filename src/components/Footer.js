// File: components/Footer.js
import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-columns">
          <div className="footer-col">
            <h3>About Us</h3>
            <p>
              We specialize in in-depth travel credit card reviews, helping you
              find the best rewards and perks for your next adventure.
            </p>
          </div>

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
                  <Image
                    className="imgf"
                    src="/icons8-facebook-24.png"
                    alt="Facebook"
                    width={24}
                    height={24}
                    loading="lazy"
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
                  <Image
                    className="imgf"
                    src="/icons8-instagram-24.png"
                    alt="Instagram"
                    width={24}
                    height={24}
                    loading="lazy"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-disclaimer">
          <p>
            Disclaimer: This site is for informational purposes only. We may
            receive compensation when you click links to partner sites, but our
            editorial opinions remain our own. All offers are subject to change
            or withdrawal at any time. We strive to keep information accurate
            but cannot guarantee completeness or timeliness.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 TravelCardInsider. All rights reserved.</p>
      </div>
    </footer>
  );
}
