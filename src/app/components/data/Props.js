import styles from "@/app/styles/milan.module.css";
import React from 'react';
import axios from 'axios';

const Props = (props) => {
  const downloadFile = async () => {
    try {
      const response = await axios({
        url: props.link,
        method: 'GET',
        responseType: 'blob',
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', props.link.split('/').pop());
      document.body.appendChild(link);

      link.click();

      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  };

  return (
    <div className={styles.cards}>
      <div className={styles.card}>
        <img src={props.imgsrc} alt="myPic" className={styles.card__img} />
        <div className={styles.card__info}>
          <span className={styles.card__category}></span>
          <h3 className={styles.card__title}>{props.title}</h3>
          <div className={styles.keyword}>{props.keyword}</div>
          <div className={styles.button}>
            <button onClick={downloadFile}>Download</button>
            {/* Remove the Edit button */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Props;
