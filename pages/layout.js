//pages/layout.js
import React from 'react';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        {/* Your other meta tags, title, and head content here */}
        {/* Removed Google Analytics script for consent compliance */}
        {/* ... Additional meta tags or scripts ... */}
      </Head>
      {children}
    </>
  );
};

export default Layout;
