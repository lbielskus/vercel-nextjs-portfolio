import React from 'react';
import { Helmet } from 'react-helmet';

import Header from '../components/Header';
import About from '../components/About';
import Education from '../components/Education';
import Projects from '../components/Projects';
import LogoProjects from '../components/Logoprojects';
import Contact from '../components/Contact';

import CVdownload from '../components/CVdownload';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name='Home' content='Welcome to L. Bielskus developer website' />
        <meta
          name='keywords'
          content='developer, portfolio, projects, education, experience, cv, websites'
        />
        <meta property='og:title' content='LB Developer - Portfolio Home' />
        <meta
          property='og:description'
          content='Welcome to LB developer website'
        />
        <meta property='og:image' content='url-to-your-thumbnail-image' />
        <meta property='og:url' content='https://www.lbweb.eu/' />
        <meta name='twitter:title' content='LB Developer - Portfolio Home' />
        <meta
          name='twitter:description'
          content='Welcome to LB developer website'
        />
        <meta name='twitter:image' content='url-to-your-thumbnail-image' />
        <meta name='twitter:card' content='summary_large_image' />
      </Helmet>
      <Header />
      <About />
      <Education />
      <Projects />
      <LogoProjects />
      <Contact />
      <CVdownload />
    </>
  );
};

export default Home;
