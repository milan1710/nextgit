"use client"
import React, { useState } from 'react';
import styles from '@/app/styles/file.module.css';
import Props from '@/app/components/Props';
import Aidata from '@/app/components/data/Aidata';
import Pagination from '@/app/components/Pagination';
import Head from 'next/head';


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
        <meta property="og:image" content="https://ezygraphic.online/aifile" />
        <meta property="og:url" content="https://ezygraphic.online/aifile" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yourtwitterhandle" />
        <meta name="twitter:title" content="Illustrator File Download" />
        <meta name="twitter:description" content="Download high-quality Illustrator vector files from our collection." />
        <meta name="twitter:image" content="https://ezygraphic.online/aifile" />
      </Head>




const ITEMS_PER_PAGE = 24;

function gcard(val, index) {
  return (
    <Props
      key={index}
      imgsrc={val.imgsrc}
      title={val.title}
      link={val.link}
    />
  );
}

const Aifile = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = Aidata.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(Aidata.length / ITEMS_PER_PAGE);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <h2 className={styles.titel}>Illustrator File</h2>
      {currentItems.map((val, index) => gcard(val, index))}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </>
  );
};

export default Aifile;