"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Props = (props) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log('Props component is rendering...');

    // Check if data has already been loaded
    if (!data) {
      console.log('Fetching data...');
      // Simulate asynchronous data fetching
      const fetchData = async () => {
        try {
          const response = await axios({
            url: props.link,
            method: 'GET',
            responseType: 'blob',
          });

          if (response.status !== 200) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }

          // Update state with the fetched data
          setData(response.data);
        } catch (error) {
          console.error('Error fetching data:', error.message);
        }
      };

      fetchData();
    }
  }, [data, props.link]); // Run the effect when the 'data' state or 'props.link' changes

  const editFile = () => {
    // Open the edit link in a new tab
    window.open('https://whoursie.com/4/6845414', '_blank');
  };

  const downloadFile = () => {
    // Do nothing if data is not ready
    if (!data) {
      return;
    }

    const url = window.URL.createObjectURL(new Blob([data]));

    // Create a hidden <a> element
    const link = document.createElement('a');
    link.href = url;
    link.download = props.link.split('/').pop();
    link.style.display = 'none';

    // Append the <a> element to the body
    document.body.appendChild(link);

    // Simulate a click on the <a> element
    link.click();

    // Remove the <a> element from the body
    document.body.removeChild(link);

    // Revoke the Object URL to free up resources
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="cards">
      <div className="card">
        {/* Assuming 'props.imgsrc', 'props.title', and 'props.keyword' are used */}
        <img src={props.imgsrc} alt="myPic" className="card__img" />
        <div className="card__info">
          <span className="card__category"></span>
          <h3 className="card__title">{props.title}</h3>
          <div className='keyword'>{props.keyword}</div>
          <div className='btn'>
            <button onClick={editFile}>Edit</button>
            <button onClick={downloadFile}>Download</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Props