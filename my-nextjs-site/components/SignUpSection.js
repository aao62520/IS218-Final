// components/SignUpSection.js
import React, { useState } from 'react';
import styles from '../styles/SignUpSection.module.css';
import { Button, Input } from '@nextui-org/react';

const SignUpSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Integrate with your mailing service or backend here
    console.log("Email Submitted: ", email);
    // Reset the input field after submission
    setEmail('');
  };

  return (
    <div className={styles.signupSection}>
      <form onSubmit={handleSubmit} className={styles.formWrapper}>
        <h4 className={styles.signupHeader}>Sign up for a free trial and get 10% off your next order:</h4>
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
        <Button auto color="primary" className={styles.subscribeButton} type="submit">Subscribe</Button>
      </form>
    </div>
  );
};

export default SignUpSection;
