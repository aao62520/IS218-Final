// components/HeroPage.js
import React from 'react';
import { Button } from '@nextui-org/react'; // Import only the components you need from Next UI
import styles from '../styles/Home.module.css'; // Import your home styles

const HeroPage = () => {
  return (
    <div className={styles.hero}> {/* Use styles.hero for your hero section styles */}
      <div className={styles.heroContent}> {/* Wrapper for the text content */}
        <h1 className={styles.heroTitle}>
          Where Flavor Meets Tranquility
        </h1>
        <p className={styles.heroSubtitle}>
          Shop for our quality products
        </p>
        <Button auto ghost className={styles.heroButton}>
          Shop Now
        </Button>
      </div>
    </div>
  );
};

export default HeroPage;
