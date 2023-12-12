// components/HeroPage.js
import React from 'react';
import { Button } from '@nextui-org/react';
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
        <Button auto ghost className={styles.heroButton} data-testid="heroButton">
          Shop Now
        </Button>
      </div>
    </div>
  );
};

export default HeroPage;
