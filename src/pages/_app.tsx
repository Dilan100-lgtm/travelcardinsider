// File: src/pages/_app.tsx

import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import Head from 'next/head';

// --- COMPONENTS ---
import Header from '../components/Header';
import Footer from '../components/Footer';
import { AuthProvider } from '../context/AuthProvider'; // ✅ IMPORTANT: Wrap everything inside this

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-CSVYMXNCV3"
      />
      <Script id="ga-script" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-CSVYMXNCV3', {
            page_path: window.location.pathname,
          });
        `}
      </Script>

      <div className="flex flex-col min-h-screen bg-gray-50">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        {/* Header */}
        <Header />

        {/* Page Content */}
        <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Component {...pageProps} />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </AuthProvider>
  );
}
