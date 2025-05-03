// File: pages/_app.js
import '../styles/globals.css'; // Your global styles
import Script from 'next/script'; // Keep existing GA script import

// --- NEW IMPORTS ---
import Header from '../components/Header'; // Assuming path is correct
import Footer from '../components/Footer'; // Assuming path is correct
import SubscribeCTA from '../components/SubscribeCTA'; // Import the new CTA component
import { useRouter } from 'next/router';
import Head from 'next/head'; // Import Head for global settings like viewport
// --- END NEW IMPORTS ---

function MyApp({ Component, pageProps }) {
  // --- NEW HOOKS and LOGIC ---
  const router = useRouter();
  const { pathname } = router;

  // Define pages where the global CTA should NOT be shown
  const excludeCTAFromPages = [
    '/subscribe',       // Don't show on the subscribe page itself
    '/login',           // Don't show on login
    '/finish-signup',   // Don't show on signup steps
    '/auth/callback',   // Don't show on the auth callback
    // Add any other paths here (e.g., '/admin')
  ];

  const showCTA = !excludeCTAFromPages.includes(pathname);
  // --- END NEW HOOKS and LOGIC ---

  return (
    // Wrap everything in a fragment
    <>
      {/* Keep Existing Google Analytics Tracking */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-CSVYMXNCV3" // Replace with your actual GA ID if different
      />
      <Script
        id="ga-script"
        strategy="afterInteractive"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-CSVYMXNCV3', { // Replace with your actual GA ID if different
            page_path: window.location.pathname,
          });
        `}
      </Script>
      {/* End Google Analytics Tracking */}


      {/* --- NEW LAYOUT STRUCTURE --- */}
      {/* Basic structure for flex layout to push footer down */}
      <div className="flex flex-col min-h-screen bg-gray-50"> {/* Added bg-gray-50 for consistency */}
        <Head>
          {/* Ensure proper viewport settings */}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {/* You can add other global Head elements here, like default title, favicons etc. */}
        </Head>

        <Header /> {/* Render Header on all pages */}

        {/* flex-grow allows main content to expand and push footer */}
        {/* Adjusted padding/container based on common layouts, modify if needed */}
        <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Render all pages (Original Content) */}
          <Component {...pageProps} />
        </main>

        {/* Conditionally render the Subscribe CTA before the footer */}
        {showCTA && <SubscribeCTA />}

        <Footer /> {/* Render Footer on all pages */}
      </div>
      {/* --- END NEW LAYOUT STRUCTURE --- */}
    </>
  );
}

export default MyApp;