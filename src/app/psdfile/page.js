"use client";
import styles from "@/app/styles/file.module.css";
import React, { useState } from "react";
import Props from "@/app/components/Props";
import Psddata from "@/app/components/data/Psddata";



const ITEMS_PER_PAGE = 24;

const Psdfile = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = Psddata.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(Psddata.length / ITEMS_PER_PAGE);

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
      <h2 className={styles.titel}>Photoshop File</h2>
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
};

export default Psdfile;
