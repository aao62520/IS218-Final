import React from 'react';
import styles from '../styles/NavigationBar.module.css';
import { Navbar, Link } from '@nextui-org/react';

const NavigationBar = () => {
  return (
    <Navbar className={styles.navbar}>
      <span className={styles.brand}>Blend-brew Tea</span>
      <nav>
        <ul className={styles.menu}>
          <li><Link href="#top" className={styles.menuItem}>Home</Link></li> {/* Assuming 'Home' refers to the top of the page */}
          {/* 'Shop' link removed */}
          <li><Link href="#footer" className={styles.menuItem}>About Us</Link></li> {/* Scroll to Footer */}
          <li><Link href="#signup" className={styles.menuItem}>Sign Up</Link></li> {/* Scroll to Email Input Section */}
        </ul>
      </nav>
    </Navbar>
  );
};

export default NavigationBar;
