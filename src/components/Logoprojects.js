import React from 'react';
import styles from '../assets/styles/logoprojects.module.scss';

const Logoprojects = () => {
  const tilesData = [
    { id: 1, color: '#3498db', logo: '/images/logo1.png' },
    { id: 2, color: '#2ecc71', logo: '/images/logo2.png' },
    { id: 3, color: '#e74c3c', logo: '/images/logo3.png' },
    { id: 4, color: '#f39c12', logo: '/images/logo4.png' },
    { id: 5, color: '#9b59b6', logo: '/images/logo5.png' },
    { id: 6, color: '#34495e', logo: '/images/logo6.png' },
  ];

  return (
    <section>
      <div className={styles.logoprojectsContainer}>
        <h1 className={styles.logoprojectsTitle}>Logos and illustrations</h1>
        <div className={styles.logoprojectsTilesContainer}>
          {tilesData.map((tile) => (
            <div
              key={tile.id}
              className={styles.logoprojectsTile}
              style={{
                background: `linear-gradient(to bottom, ${tile.color}, #784BA0)`,
              }}
            >
              <img
                className={styles.logoprojectsLogo}
                src={tile.logo}
                alt={`logo${tile.id}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Logoprojects;
