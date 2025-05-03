// File: src/pages/_app.js
import '../styles/globals.css'; // Your global styles
import Script from 'next/script';
import Head from 'next/head'; // Import Head for global settings like viewport
import { useRouter } from 'next/router';

// --- COMPONENT/PROVIDER IMPORTS ---
import Header from '../components/Header'; // Assuming path is correct
import Footer from '../components/Footer'; // Assuming path is correct
import SubscribeCTA from '../components/SubscribeCTA';
import { AuthProvider } from '../context/AuthProvider'; // <-- IMPORT AuthProvider

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { pathname } = router;

  // Define pages where the global CTA should NOT be shown
  const excludeCTAFromPages = [
    '/subscribe',
    '/login',
    '/finish-signup',
    '/auth/callback',
    // Add any other paths here (e.g., '/admin')
  ];

  const showCTA = !excludeCTAFromPages.includes(pathname);

  return (
    // Wrap everything in AuthProvider FIRST
    <AuthProvider>
      {/* Fragment now inside AuthProvider */}
      <>
        {/* Google Analytics Tracking */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-CSVYMXNCV3" // Replace if needed
        />
        <Script
          id="ga-script"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CSVYMXNCV3', { // Replace if needed
              page_path: window.location.pathname,
            });
          `}
        </Script>
        {/* End Google Analytics Tracking */}

        {/* Layout Structure */}
        <div className="flex flex-col min-h-screen bg-gray-50">
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
          </Head>

          {/* Header is now a child of AuthProvider */}
          <Header />

          <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Component is now a child of AuthProvider */}
            <Component {...pageProps} />
          </main>

          {showCTA && <SubscribeCTA />}

          <Footer />
        </div>
      </>
    </AuthProvider>
  );
}

export default MyApp;