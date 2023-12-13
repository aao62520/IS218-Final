// components/ProductCard.js

import React from 'react';
import Image from 'next/image';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ title, description, imageSrc, calories }) => {
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
          {calories && (
            <div className={styles.cardCalories}>{`${calories} cal`}</div>
          )}
          <p className={styles.cardDescription}>{description}</p>
        </div>
        {/* Removed the Buy Now button */}
      </div>
    </div>
  );
};

export default ProductCard;

