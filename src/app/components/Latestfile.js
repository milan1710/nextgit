"use client";
import styles from "@/app/styles/file.module.css";
import React, { useState } from "react";
import Props from "@/app/components/Props";
import Latestdata from './data/Latestdata';
const ITEMS_PER_PAGE = 24;

function Latestfile() {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = Latestdata.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(Latestdata.length / ITEMS_PER_PAGE);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const nextPage = (e) => {
    e.preventDefault();
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = (e) => {
    e.preventDefault();
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <h2 className={styles.titel}>Latest Resource</h2>
      {currentItems.map((val, index) => (
        <Props
          key={index}
          imgsrc={val.imgsrc}
          title={val.title}
          link={val.link}
        />
      ))}
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
    </>
  );
}

export default Latestfile;