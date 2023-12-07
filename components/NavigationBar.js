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
          <li><Link href="/home" className={styles.menuItem}>Home</Link></li>
          <li><Link href="/shop" className={styles.menuItem}>Shop</Link></li>
          <li><Link href="/about" className={styles.menuItem}>About Us</Link></li>
          <li><Link href="/signup" className={styles.menuItem}>Sign Up/Login</Link></li>
        </ul>
      </nav>
    </Navbar>
  );
};

export default NavigationBar;
