// components/HeroPage.js
import React from 'react';
import { Button } from '@nextui-org/react';
import styles from '../styles/Home.module.css';

const HeroPage = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Where Flavor Meets Tranquility
        </h1>
        <p className={styles.heroSubtitle}>
          Shop for our quality products
        </p>
        {/* Removed auto and ghost props to avoid conflicts with custom styles */}
        <Button className={`${styles.heroButton} ${styles.customButton}`}>
          Shop Now
        </Button>
      </div>
    </div>
  );
};

export default HeroPage;
