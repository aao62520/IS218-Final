// pages/policy.js

import React from 'react';
import styles from '../styles/PrivacyPolicy.module.css'; // Ensure you have this CSS module

const PrivacyPolicy = () => {
  return (
    <div className={styles.privacyPolicyPage}>
      <h1>Privacy Policy for Blend-brew Tea</h1>

      {/* Introduction Section */}
      <section>
        <h2>Introduction</h2>
        <p>Welcome to Blend-brew Tea's privacy policy. Your privacy is important to us. This policy outlines the types of personal information we collect, how we use it, and the measures we take to protect it.</p>
      </section>

      {/* Information Collection Section */}
      <section>
        <h2>What Information We Collect</h2>
        <ul>
          <li><strong>Personal Identification Information</strong>: This may include your name, email address, phone number, and shipping address, which we collect when you register on our site, place an order, subscribe to our newsletter, or fill out a form.</li>
          <li><strong>Non-personal Identification Information</strong>: We may collect non-personal identification information about users whenever they interact with our site. This may include the browser name, the type of computer, and technical information about users' means of connection to our site, such as the operating system and the Internet service providers utilized, and other similar information.</li>
        </ul>
      </section>

      {/* Information Usage Section */}
      <section>
        <h2>How We Use Collected Information</h2>
        <p>Blend-brew Tea may collect and use users' personal information for the following purposes:</p>
        <ul>
          <li><strong>To Process Payments</strong>: We may use the information users provide about themselves when placing an order only to provide service to that order. We do not share this information with outside parties except to the extent necessary to provide the service.</li>
          <li><strong>To Send Periodic Emails</strong>: We may use the email address to send user information and updates pertaining to their order. It may also be used to respond to their inquiries, questions, and/or other requests.</li>
        </ul>
      </section>

      {/* Information Protection Section */}
      <section>
        <h2>How We Protect Your Information</h2>
        <p>We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information, username, password, transaction information, and data stored on our site.</p>
      </section>

      {/* Information Sharing Section */}
      <section>
        <h2>Sharing Your Personal Information</h2>
        <p>We do not sell, trade, or rent users' personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates, and advertisers for the purposes outlined above.</p>
      </section>

      {/* Policy Changes Section */}
      <section>
        <h2>Changes to This Privacy Policy</h2>
        <p>Blend-brew Tea has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the bottom of this page. We encourage users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect.</p>
      </section>

      {/* Acceptance of Terms Section */}
      <section>
        <h2>Your Acceptance of These Terms</h2>
        <p>By using this site, you signify your acceptance of this policy. If you do not agree with this policy, please do not use our website. Your continued use of the site following the posting of changes to this policy will be deemed as your acceptance of those changes.</p>
      </section>

    </div>
  );
};

export default PrivacyPolicy;
