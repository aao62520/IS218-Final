// components/NavigationBar.js
import React from 'react';
import styles from '../styles/NavigationBar.module.css';
import { Navbar, Link } from '@nextui-org/react';

const NavigationBar = () => {
  return (
    <Navbar className={styles.navbar}>
      <span className={styles.brand}>Blend-brew Tea</span>
      <nav>
        <ul className={styles.menu}>
          <li><Link href="#top" className={styles.menuItem}>Home</Link></li> {/* Link to the top of the page */}
          <li><Link href="#footer" className={styles.menuItem}>About Us</Link></li> {/* Link to the footer section */}
          <li><Link href="#SignUpSection" className={styles.menuItem}>Sign Up</Link></li> {/* Link to the sign-up section */}
        </ul>
      </nav>
    </Navbar>
  );
};

export default NavigationBar;
