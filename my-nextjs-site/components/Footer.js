// components/Footer.js//
import React from 'react';
import { Link } from '@nextui-org/react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerColumn}>
        <h3>About Blend-brew Tea</h3>
        <p>Discover the art of fine tea with Blend-brew Tea. Founded in 2023 with a passion for sourcing the finest ingredients, we craft blends that offer a symphony of flavors, capturing the essence of nature in every cup. Committed to sustainable practices, we bring you an authentic tea experience that celebrates tradition and innovation. Join us on a journey of taste, quality, and the pure joy of tea.</p>
      </div>
      <div className={styles.footerColumn}>
        <h3>FAQ</h3>
        <p>Ordering & Shipping</p>
        <p>Returns and Exchanges</p>
        <p>Payment Options</p>
      </div>
      <div className={styles.footerColumn}>
        <h3>Contact Us</h3>
        <Link href="https://www.google.com/maps/place/..." className={styles.customLink}>
          <span className={styles.linkLabel}>Location:</span> 918 64 street, North Bergen NJ
        </Link>
        <Link href="mailto:villagomezmike5@gmail.com" className={styles.customLink}>
          <span className={styles.linkLabel}>Email:</span> villagomezmike5@gmail.com
        </Link>
        <Link href="tel:201-878-0127" className={styles.customLink}>
          <span className={styles.linkLabel}>Phone:</span> 201-878-0127
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
