import React from 'react';
import { Helmet } from 'react-helmet';

import Projects from '../components/Projects';
import LogoProjects from '../components/Logoprojects';

import styles from '../assets/styles/examplespage.module.scss'; // Import styles object

const Experience = () => {
  return (
    <>
      <div className={styles['examples-page']}>
        <Helmet>
          <title>Experience</title>
          <meta name='Eexperience' content='My work experience examples' />
          <meta name='keywords' content='examples, projects, portfolio' />
          <meta property='og:title' content='Examples - My Portfolio' />
          <meta
            property='og:description'
            content='Explore my portfolio examples'
          />
          <meta property='og:image' content='url-to-your-thumbnail-image' />
          <meta property='og:url' content='https://lbweb.eu/experience' />
          <meta name='twitter:title' content='Examples - My Portfolio' />
          <meta
            name='twitter:description'
            content='Explore my portfolio experience'
          />
          <meta name='twitter:image' content='url-to-your-thumbnail-image' />
          <meta name='twitter:card' content='summary_large_image' />
        </Helmet>
        <Projects />
        <LogoProjects />
      </div>
    </>
  );
};

export default Experience;
