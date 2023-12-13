// components/HeroPage.js
import React from 'react';
import styles from '../styles/Home.module.css';

const HeroPage = () => {
  return (
    <div id="top" className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle} data-testid="heroTitle">
          Where Flavor Meets Tranquility
        </h1>
        <p className={styles.heroSubtitle} data-testid="heroSubtitle">
          Sign up for 10% off your next cup
        </p>
        {/* Button removed from here */}
      </div>
    </div>
  );
};

export default HeroPage;
