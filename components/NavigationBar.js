// components/NavigationBar.js
import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '../styles/NavigationBar.module.css';
import { Navbar, Link } from '@nextui-org/react';

const NavigationBar = () => {
  const router = useRouter();

  const handleNavigation = (e, hash) => {
    e.preventDefault();
    if (router.pathname !== '/') {
      router.push('/#' + hash).then(() => window.scrollTo(0, 0));
    } else {
      const element = document.getElementById(hash);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Navbar className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Image
          src="/Brew.png" // Replace with the actual path to your logo
          alt="BlendBrew Tea Co. Logo"
          width={50} // Adjust the size as needed
          height={46}
          style={{ objectFit: 'contain' }} // Apply objectFit using style prop
        />
      </div>
      <nav>
        <ul className={styles.menu}>
          <li>
            <a href="#top" onClick={(e) => handleNavigation(e, 'top')} className={styles.menuItem} data-testid="nav-home">Home</a>
          </li>
          <li>
            <a href="#footer" onClick={(e) => handleNavigation(e, 'footer')} className={styles.menuItem} data-testid="nav-about-us">About Us</a>
          </li>
          <li>
            <a href="#SignUpSection" onClick={(e) => handleNavigation(e, 'SignUpSection')} className={styles.menuItem} data-testid="nav-sign-up">Subscribe</a>
          </li>
        </ul>
      </nav>
    </Navbar>
  );
};

export default NavigationBar;

