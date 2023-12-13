// Layout.js

import React from 'react';
import Head from 'next/head';

const Layout = ({ children }) => {
 return (
   <>
     <Head>
       {/* ... Your other meta tags, title, and other head content ... */}
       <script
         async
         src="https://www.googletagmanager.com/gtag/js?id=G-XDWMNHNFNE"
       ></script>
       <script>
         {`
           window.dataLayer = window.dataLayer || [];
           function gtag() {
             dataLayer.push(arguments);
           }
           gtag('js', new Date());

           gtag('config', 'G-XDWMNHNFNE');
         `}
       </script>
       {/* ... Additional meta tags or scripts ... */}
     </Head>
     {children}
   </>
 );
};

export default Layout;
