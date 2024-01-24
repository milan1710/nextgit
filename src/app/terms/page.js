// pages/terms.js

import React from 'react';
import Head from 'next/head';
import styles from '../styles/Terms.module.css';

const Terms = () => {
  return (
    <div className={styles.termsContainer}>
      <Head>
        <title>Terms and Conditions - Ezy Graphic</title>
        <meta name="description" content="Terms and conditions for Ezy Graphic" />
      </Head>

      <main className={styles.termsMain}>
        <h1 className={styles.termsTitle}>Terms and Conditions</h1>
        
        <section>
          <h2 className={styles.termsHeading}>1. Acceptance of Terms</h2>
          <p>By accessing or using our website, you agree to comply with and be bound by these terms and conditions.</p>
        </section>

        <section>
          <h2 className={styles.termsHeading}>2. User Conduct</h2>
          <p>... (Include details about user conduct)</p>
        </section>

        {/* Add more sections based on your specific terms and conditions */}
        
        <section>
          <h2 className={styles.termsHeading}>8. Changes to Terms and Conditions</h2>
          <p>We reserve the right to update or change these terms and conditions at any time. Any changes will be effective immediately upon posting.</p>
        </section>

        <section>
          <h2 className={styles.termsHeading}>9. Contact Us</h2>
          <p>If you have any questions or concerns regarding these terms and conditions, please contact us at our contact page.</p>
        </section>
      </main>
    </div>
  );
};

export default Terms;
