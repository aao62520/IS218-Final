// components/HeroPage.js
import React from 'react';
import { Button } from '@nextui-org/react';
import styles from '../styles/Home.module.css';

const HeroPage = () => {
  return (
    <div id="top" className={styles.hero}> {/* Added ID for smooth scroll targeting */}
      <div className={styles.heroContent}>
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
