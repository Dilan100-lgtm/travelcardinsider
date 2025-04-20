// File: pages/_app.js
import '../styles/globals.css';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Google Analytics Tracking */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-CSVYMXNCV3"
      />
      <Script
        id="ga-script"
        strategy="afterInteractive"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-CSVYMXNCV3', {
            page_path: window.location.pathname,
          });
        `}
      </Script>

      {/* Render all pages */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
