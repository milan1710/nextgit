// components/Pagination.js
import Head from 'next/head';
import React from 'react';
import styles from '@/app/styles/file.module.css';

<Head>
        <title>Illustrator File Download</title>
        <meta name="description" content="Download high-quality Illustrator vector files from our collection." />
        {/* Add more meta tags for SEO optimization */}
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="Illustrator, vector, download, graphics" />
        <meta name="author" content="Ezy Graphic" />
        {/* Other relevant meta tags */}
        <meta property="og:title" content="Illustrator File Download" />
        <meta property="og:description" content="Download high-quality Illustrator vector files from our collection." />
        <meta property="og:image" content="https://example.com/illustrator-image.jpg" />
        <meta property="og:url" content="https://ezygraphic.online/aifile" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yourtwitterhandle" />
        <meta name="twitter:title" content="Illustrator File Download" />
        <meta name="twitter:description" content="Download high-quality Illustrator vector files from our collection." />
        <meta name="twitter:image" content="https://ezygraphic.online/aifile" />
      </Head>

const Pagination = ({ currentPage, totalPages, prevPage, nextPage }) => {
  return (
    <div className={styles.pagination}>
      <button
        className={`${styles.paginationButton} ${styles.customPrevButton}`}
        onClick={prevPage}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span className={styles.pageNumber}>{currentPage}</span>
      <button
        className={`${styles.paginationButton} ${styles.customNextButton}`}
        onClick={nextPage}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
