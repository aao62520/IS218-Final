// pages/_document.js

import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en"> {/* Assuming your content is in English */}
        <Head>
          {/* Preconnect to Google Analytics and any other external sources you use */}
          <link rel="preconnect" href="https://www.googletagmanager.com" />
          <link rel="preconnect" href="https://www.google-analytics.com" />

          {/* Add any additional links for fonts or stylesheets here */}

          {/* Optional: Add a favicon */}
          <link rel="icon" href="/Brew.png" />

        
          {/* Any other meta tags for SEO, social media etc. can be added here */}
        </Head>
        <body>
          <Main />
          <NextScript />

          {/* Add any scripts that need to be loaded at the end of your document here */}
          {/* Be cautious with scripts to avoid blocking the main thread */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
