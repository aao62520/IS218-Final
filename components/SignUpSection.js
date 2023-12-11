// components/SignUp.Section.js

import React, { useState } from 'react';
import styles from '../styles/SignUpSection.module.css';
import { Button, Input } from '@nextui-org/react';
import axios from 'axios';

const SignUpSection = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage(''); // Clear previous messages

    try {
      const response = await axios.post('/api/subscribe', { email });

      if (response.status === 200) {
        setMessage('Thank you for subscribing!');
        setEmail(''); // Clear the input field
      } else {
        setMessage('An error occurred. Please try again.');
      }
    } catch (error) {
      console.error('There was an error!', error);

      // Improved error handling
      let errorMessage = 'An error occurred. Please try again.';
      if (error.response && error.response.data) {
        if (typeof error.response.data === 'string') {
          errorMessage = error.response.data;
        } else if (typeof error.response.data.error === 'string') {
          errorMessage = error.response.data.error;
        }
      }
      setMessage(errorMessage);
    }
  };

  return (
    <div className={styles.signupSection}>
      <form onSubmit={handleSubmit} className={styles.formWrapper}>
        <h4 className={styles.signupHeader}>
          Sign up for a free trial and get 10% off your next order:
        </h4>
        <div className={styles.inputWrapper}>
          <Input
            clearable
            bordered
            placeholder="Enter email here"
            color="primary"
            className={styles.inputEmail}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <Button auto color="primary" className={styles.subscribeButton} type="submit">
          Subscribe
        </Button>
      </form>
      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
};

export default SignUpSection;
