"use client";
import React, { useState } from 'react';
import Alldata from '@/app/components/data/Latestdata';
import Props from '@/app/components/Props';
import styles from "@/app/styles/search.module.css";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSearch = () => {
    // Filter the data based on the search term
    const results = Alldata.filter(item =>
      Object.values(item).some(value =>
        typeof value === 'string' && value.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );

    // Update the state with the search results and set submitted to true
    setSearchResults(results);
    setIsSubmitted(true);
  };

  const getRandomData = () => {
    // Get a random item from the Alldata array
    const randomIndex = Math.floor(Math.random() * Alldata.length);
    return [Alldata[randomIndex]];
  };

  return (
    <div className={styles.searchco}>
      <input
        className={styles.input}
        type="text"
        placeholder="Search Here..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <button className={styles.submit} onClick={handleSearch}>
        Search
      </button>

      <div className={styles.result}>
        {isSubmitted && searchResults.length > 0 ? (
          searchResults.map((data, index) => (
            <Props key={index} {...data} />
          ))
        ) : isSubmitted ? (
          <>
            <p className={styles['no-results']}>No results found</p>
            {/* Show some random data when no results are found */}
            {getRandomData().map((data, index) => (
              <Props key={index} {...data} />
            ))}
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Search;
