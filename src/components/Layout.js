import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CookiesPopup from './Cookiespop'; // Corrected import
import TopBanner from './Topbanner'; // Corrected import

const Layout = ({ children }) => {
  const handleAccept = () => {
    // Add your logic for accepting cookies here
    // For example, you can set a cookie or perform any necessary actions
    console.log('Cookies accepted!');
  };

  return (
    <>
      <CookiesPopup onAccept={handleAccept} />
      <TopBanner />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
