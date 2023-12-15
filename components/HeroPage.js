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
        Discover the perfect blend for the holiday season with BlendBrew Tea Co. Customize your own tea creations and send them directly to your loved ones with our expedited shipping options. Order by Dec. 19th to ensure your personalized tea gifts arrive in time for Christmas. Conditions apply.
        </p>
        <a href="#SignUpSection" className={styles.heroButton}>
          Sign Up &amp; Save 10%
        </a> {/* CTA button added */}
      </div>
    </div>
  );
};

export default HeroPage;
