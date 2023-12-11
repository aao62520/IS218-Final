// components/NavigationBar.js
import React from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/NavigationBar.module.css';
import { Navbar, Link } from '@nextui-org/react';

const NavigationBar = () => {
  const router = useRouter();

  const handleNavigation = (e, hash) => {
    e.preventDefault();
    if (router.pathname !== '/') {
      // Navigate to the home page and then scroll to the section
      router.push('/#' + hash).then(() => window.scrollTo(0, 0));
    } else {
      // Scroll to the section on the current page
      const element = document.getElementById(hash);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Navbar className={styles.navbar}>
      <span className={styles.brand}>Blend-brew Tea</span>
      <nav>
        <ul className={styles.menu}>
          <li><a href="#top" onClick={(e) => handleNavigation(e, 'top')} className={styles.menuItem}>Home</a></li>
          <li><a href="#footer" onClick={(e) => handleNavigation(e, 'footer')} className={styles.menuItem}>About Us</a></li>
          <li><a href="#SignUpSection" onClick={(e) => handleNavigation(e, 'SignUpSection')} className={styles.menuItem}>Sign Up</a></li>
        </ul>
      </nav>
    </Navbar>
  );
};

export default NavigationBar;
