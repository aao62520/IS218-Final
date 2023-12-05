// pages/index.js
import React from 'react';
import dynamic from 'next/dynamic';
import HeroPage from '../components/HeroPage';
import SignUpSection from '../components/SignUpSection';
import Footer from '../components/Footer'; // Import the Footer component
import styles from '../styles/Home.module.css';

// Dynamically import the ProductCard component
const DynamicProductCard = dynamic(() => import('../components/ProductCard'), {
  loading: () => <p>Loading...</p>,
  ssr: false
});

const Index = ({ products }) => {
  return (
    <>
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
            number={product.number}
          />
        ))}
      </div>
      <div className={styles.testimonialSection}>
        <p className={styles.testimonialText}>
          "Blendbrew's tea is a delightful blend of quality and flavor! Each sip feels like a journey through the finest tea leaves, offering a rich and aromatic experience that soothes the senses."
        </p>
        <p className={styles.testimonialAuthor}>- Nathan Peterman</p>
      </div>
      <SignUpSection />
      <Footer /> {/* Include the Footer component here */}
    </>
  );
};

export async function getStaticProps() {
  const products = [
    { id: 1, title: "Emerald Essence Brew", description: "A rich blend of green tea with refreshing botanicals.", imageSrc: "/tea1.png", number: 27 },
    { id: 2, title: "Midnight Majesty Blend", description: "A deep, dark twist of black teas and magical herbs.", imageSrc: "/tea2.png", number: 30 },
    { id: 3, title: "Herbal Haven Brew", description: "A soothing concoction of herbal delights to relax the senses.", imageSrc: "/tea3.png", number: 33 },
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
