// pages/privacy.js

import React from 'react';
import Head from 'next/head';
import styles from "@/app/styles/privacy.module.css";

const Privacy = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Privacy Policy - Ezy Graphic</title>
        <meta name="description" content="Privacy policy for Ezy Graphic" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Privacy Policy</h1>

        <section>
          <h2>1. Introduction</h2>
          <p>Welcome to Ezy Graphic. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.</p>
        </section>

        <section>
          <h2>2. Information We Collect</h2>
          <h3>2.1 Personal Information</h3>
          <p>We may collect personally identifiable information, such as names, email addresses, and other contact details when voluntarily submitted by our visitors.</p>

          <h3>2.2 Non-Personal Information</h3>
          <p>We may collect non-personal information about you, such as browser type, language preference, referring site, and the date and time of each visit.</p>
        </section>

        {/* Include other sections based on the template provided in the previous response */}

        <section>
          <h2>8. Changes to This Privacy Policy</h2>
          <p>We reserve the right to update or change our Privacy Policy at any time. Any changes will be posted on this page.</p>
        </section>

        <section>
          <h2>9. Contact Us</h2>
          <p>If you have any questions or concerns regarding this Privacy Policy, please contact us at out Cantact page.</p>
        </section>
      </main>
    </div>
  );
};

export default Privacy;
