import React from 'react';
import styles from '../assets/styles/cvdownload.module.scss';

const CVdownload = () => {
  const openPdfInNewTab = () => {
    const pdfUrl = '/L.Bielskus.pdf';
    window.open(pdfUrl, '_blank');
  };

  return (
    <div className={styles.cv}>
      <h2 className={styles['cv-title']}>Are you hiring? Check my CV!</h2>
      <button onClick={openPdfInNewTab}>
        <h3>CV preview</h3>
      </button>
    </div>
  );
};

export default CVdownload;
