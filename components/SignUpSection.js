import React, { useState } from 'react';
import styles from '../styles/SignUpSection.module.css';
import { Button, Input } from '@nextui-org/react';
import axios from 'axios';

const SignUpSection = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace with your MailChimp endpoint URL
      const MAILCHIMP_URL = 'YOUR_MAILCHIMP_ENDPOINT_URL';

      const response = await axios.post(MAILCHIMP_URL, {
        email_address: email,
        status: 'subscribed', // change status if needed
      });

      if (response.status === 200) {
        // Handle success (e.g., display thank you message)
        setMessage('Thank you for subscribing!');
        setEmail('');
      } else {
        // Handle any errors
        setMessage('An error occurred. Please try again.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
      console.error('There was an error!', error);
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
      {message && <p>{message}</p>}
    </div>
  );
};

export default SignUpSection;
