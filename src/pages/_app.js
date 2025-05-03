// File: src/pages/_app.js
import '../styles/globals.css'; // Your global styles
import Script from 'next/script';
import Head from 'next/head';

// --- COMPONENT IMPORTS ---
import Header from '../components/Header'; // Assuming path is correct (using Header.tsx or Header.jsx)
import Footer from '../components/Footer'; // Assuming path is correct
// AuthProvider import is removed

function MyApp({ Component, pageProps }) {
  return (
    // No AuthProvider wrapper needed
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

        {/* Render Header */}
        <Header />

        <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Render Page Component */}
          <Component {...pageProps} />
        </main>

        {/* Render Footer */}
        <Footer />
      </div>
    </>
  );
}

export default MyApp;