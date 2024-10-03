import React, { useState } from 'react';
import styles from '../assets/styles/cookiespop.module.scss';

const CookiesPopup = ({ onAccept }) => {
  const [showPopup, setShowPopup] = useState(true);

  const handleAccept = () => {
    setShowPopup(false); // Close the popup
    onAccept(); // Call the onAccept function passed as prop
  };

  return (
    <div
      className={styles['cookies-popup']}
      style={{ display: showPopup ? 'block' : 'none' }}
    >
      <p>
        This website uses cookies to ensure you get the best experience on my
        website.
      </p>
      <button onClick={handleAccept}>Accept</button>
    </div>
  );
};

export default CookiesPopup;
