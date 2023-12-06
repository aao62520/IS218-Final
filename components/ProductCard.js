// components/ProductCard.js

import React from 'react';
import Image from 'next/image';
import { Button } from '@nextui-org/react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ title, description, imageSrc, number }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardBody}>
        <Image
          src={imageSrc}
          alt={title}
          width={500}
          height={300}
          layout='responsive'
          loading="lazy"
          className={styles.cardImage}
        />
        <div className={styles.cardContent}>
          <h3 className={styles.cardTitle}>{title}</h3>
          {number !== undefined && (
            <div className={styles.cardNumber}>{`${number} left`}</div>
          )}
          <p className={styles.cardDescription}>{description}</p>
        </div>
        <Button className={styles.cardButton}>
          Buy Now
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
