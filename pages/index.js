import React from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import HeroPage from '../components/HeroPage';
import SignUpSection from '../components/SignUpSection';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

// Dynamically import the ProductCard component with server-side rendering disabled
const DynamicProductCard = dynamic(() => import('../components/ProductCard'), {
  loading: () => <p>Loading...</p>,
  ssr: false
});

const Index = ({ products }) => {
  return (
    <>
      <Head>
        <title>Blend-brew Tea</title>
        <meta name="description" content="Discover the art of fine tea with Blend-brew Tea. Explore our crafted blends for a symphony of flavors." />
        <meta name="keywords" content="tea, blendbrew tea, organic tea, herbal tea, green tea, black tea, loose leaf tea, tea blends, specialty tea, artisan tea" />
        <meta property="og:title" content="Blend-brew Tea" />
        <meta property="og:description" content="Explore our crafted blends for a symphony of flavors." />
        <meta property="og:image" content="/teas.webp" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/happy.png" />
      </Head>
      <HeroPage />
      <div className={styles.popularFlavorText}>
        OUR MOST POPULAR
        <br />
        FLAVORS
      </div>
      <div className={styles.productGrid}>
        {products.map((product) => (
          <DynamicProductCard 
            key={product.id}
            title={product.title} 
            description={product.description} 
            imageSrc={product.imageSrc}
            calories={product.calories}
          />
        ))}
      </div>
      <div className={styles.testimonialSection}>
        <p data-testid="testimonialText" className={styles.testimonialText}>
          "Blendbrew's tea is a delightful blend of quality and flavor! Each sip feels like a journey through the finest tea leaves, offering a rich and aromatic experience that soothes the senses."
        </p>
        <p className={styles.testimonialAuthor}>- Nathan Peterman</p>
      </div>
      <SignUpSection />
      <Footer />
    </>
  );
};

export async function getStaticProps() {
  // Simulated product data
  const products = [
    { id: 1, title: "Emerald Essence Brew", description: "A rich blend of green tea with refreshing botanicals.", imageSrc: "/tea1.png", calories: 30 },
    { id: 2, title: "Midnight Majesty Blend", description: "A deep, dark twist of black teas and magical herbs.", imageSrc: "/tea2.png", calories: 50 },
    { id: 3, title: "Herbal Haven Brew", description: "A soothing concoction of herbal delights to relax the senses.", imageSrc: "/tea3.png", calories: 40 },
    // Add more products as needed
  ];

  return {
    props: {
      products,
    },
    revalidate: 3600, // Revalidate at most once per hour
  };
}

export default Index;
