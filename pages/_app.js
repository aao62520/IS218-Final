import React, { useEffect, useState } from 'react';
import '../styles/globals.css';
import Head from 'next/head';
import NavigationBar from '../components/NavigationBar';
import CookieConsent from 'react-cookie-consent';
import { Link } from '@nextui-org/react';

function MyApp({ Component, pageProps }) {
  const [cookieConsent, setCookieConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieName') === 'true';
    setCookieConsent(consent);
    if (consent) {
      loadGoogleAnalytics();
    }
  }, []);

  const loadGoogleAnalytics = () => {
    const script = document.createElement('script');
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-XDWMNHNFNE";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', 'G-XDWMNHNFNE');
    };
  };

  const handleAcceptCookie = () => {
    setCookieConsent(true);
    localStorage.setItem('cookieName', 'true');
    loadGoogleAnalytics();
  };

  const handleDeclineCookie = () => {
    setCookieConsent(false);
    localStorage.setItem('cookieName', 'false');
    window['ga-disable-G-XDWMNHNFNE'] = true; // Disable Google Analytics
  };

  return (
    <>
      <Head>
        <title>Blend-brew Tea</title>
        <meta name="description" content="Discover the art of fine tea with Blend-brew Tea. Explore our crafted blends for a symphony of flavors." />
        <meta name="keywords" content="tea, blendbrew tea, organic tea, herbal tea, green tea, black tea, loose leaf tea, tea blends, specialty tea, artisan tea" />
        <meta property="og:title" content="Blend-brew Tea" />
        <meta property="og:description" content="Explore our crafted blends for a symphony of flavors." />
        <meta property="og:image" content="/happy1.jpg" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/Brew.png" />
      </Head>
      <NavigationBar />
      <Component {...pageProps} />
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        cookieName="cookieName"
        enableDeclineButton
        declineButtonText="Decline"
        declineCookieValue={false}
        style={{ background: "#2B373B" }}
        buttonStyle={{ background:"#007BFF", color: "white", fontSize:"15px"}}
        declineButtonStyle={{ background:"#cfcfcf", color: "black", fontSize: "15px"}}
        expires={150}
        onAccept={handleAcceptCookie}
        onDecline={handleDeclineCookie}
      >
        This website uses cookies to improve your experience.
        <div style={{ marginTop: '10px' }}>
          <button onClick={handleAcceptCookie} data-testid="accept-cookies">
            Accept
          </button>
          <button onClick={handleDeclineCookie} data-testid="decline-cookies">
            Decline
          </button>
        </div>
        By using our website, you agree to our 
        <Link href="/policy" style={{ color: "#F1D00A" }}>Privacy Policy</Link>.
      </CookieConsent>
    </>
  );
}

export default MyApp;
