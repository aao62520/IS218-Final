import React, { useEffect } from 'react';
import '../styles/globals.css';
import Head from 'next/head';
import Script from 'next/script'; // Import the Script component
import NavigationBar from '../components/NavigationBar';
import CookieConsent from "react-cookie-consent";
import ReactGA from 'react-ga';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Initialize Google Analytics
    ReactGA.initialize('G-XDWMNHNFNE'); // Replace with your Google Analytics tracking ID
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <>
      <Head>
        <title>Blend-brew Tea</title>
        <meta name="description" content="Discover the art of fine tea with Blend-brew Tea. Explore our crafted blends for a symphony of flavors." />
        <meta name="keywords" content="tea, blendbrew tea, organic tea, herbal tea, green tea, black tea, loose leaf tea, tea blends, specialty tea, artisan tea" />
        <meta property="og:title" content="Blend-brew Tea" />
        <meta property="og:description" content="Explore our crafted blends for a symphony of flavors." />
        <meta property="og:image" content="/teas.webp" /> {/* Replace with your image path */}
        <meta property="og:type" content="website" />
        <link rel="icon" href="/teas.webp" /> {/* Replace with your favicon path */}
        {/* Add additional meta tags as needed */}
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-XDWMNHNFNE"
        strategy="afterInteractive"
        async
      ></Script>
      <Script
        id="google-analytics"
        strategy="afterInteractive"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XDWMNHNFNE');
        `}
      </Script>
      <NavigationBar />
      <Component {...pageProps} />
      <CookieConsent
        location="bottom"
        buttonText="I understand"
        cookieName="blendbrewTeaCookieConsent"
        style={{ background: "#2B373B", fontSize: "16px" }} // Increased font size
        buttonStyle={{ color: "#4e503b", fontSize: "16px" }} // Increased button font size
        expires={150}
      >
        This website uses cookies to improve your experience. By using our website, you agree to our 
        <a href="/privacy-policy" style={{ color: "#F1D00A" }}>Privacy Policy</a>. {/* Link to your privacy policy */}
      </CookieConsent>
    </>
  );
}

export default MyApp;
