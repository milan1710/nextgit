"use client"
import React, { useState } from 'react';
import styles from '@/app/styles/file.module.css';
import Props from '@/app/components/Props';
import Jpgdata from '@/app/components/data/Jpgdata';
import Pagination from '@/app/components/Pagination';
import Head from 'next/head';


<Head>
        <title>Jpg File Download</title>
        <meta name="description" content="Download high-quality Jpg vector files from our collection." />
        {/* Add more meta tags for SEO optimization */}
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="Jpg, vector, download, graphics" />
        <meta name="author" content="Ezy Graphic" />
        {/* Other relevant meta tags */}
        <meta property="og:title" content="Jpg File Download" />
        <meta property="og:description" content="Download high-quality Jpg vector files from our collection." />
        <meta property="og:image" content="https://ezygraphic.online/jpg" />
        <meta property="og:url" content="https://ezygraphic.online/jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yourtwitterhandle" />
        <meta name="twitter:title" content="Jpg File Download" />
        <meta name="twitter:description" content="Download high-quality Jpg vector files from our collection." />
        <meta name="twitter:image" content="https://ezygraphic.online/jpg" />
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

const Jpgfile = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = Jpgdata.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(Jpgdata.length / ITEMS_PER_PAGE);

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
      <h2 className={styles.titel}>Jpg File</h2>
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

export default Jpgfile;