"use client"
import React, { useState } from 'react';
import styles from '@/app/styles/file.module.css';
import Props from '@/app/components/Props';
import Pngdata from '@/app/components/data/Pngdata';
import Pagination from '@/app/components/Pagination';
import Head from 'next/head';


<Head>
        <title>Png File Download</title>
        <meta name="description" content="Download high-quality Png vector files from our collection." />
        {/* Add more meta tags for SEO optimization */}
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="Png, vector, download, graphics" />
        <meta name="author" content="Ezy Graphic" />
        {/* Other relevant meta tags */}
        <meta property="og:title" content="Png File Download" />
        <meta property="og:description" content="Download high-quality Png vector files from our collection." />
        <meta property="og:image" content="https://ezygraphic.online/pngfile" />
        <meta property="og:url" content="https://ezygraphic.online/pngfile" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yourtwitterhandle" />
        <meta name="twitter:title" content="Png File Download" />
        <meta name="twitter:description" content="Download high-quality Png vector files from our collection." />
        <meta name="twitter:image" content="https://ezygraphic.online/pngfile" />
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

const Pngfile = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = Pngdata.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(Pngdata.length / ITEMS_PER_PAGE);

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
      <h2 className={styles.titel}>Png File</h2>
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

export default Pngfile;