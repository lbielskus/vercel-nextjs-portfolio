import React from 'react';
import styles from '../assets/styles/about.module.scss';

const About = () => {
  return (
    <section className={styles['about-me-comp']}>
      <div className={styles['logo-container']}>
        <img
          src='/images/html100px.png'
          alt='HTML5 Logo'
          className={styles.logo}
        />
        <img
          src='/images/CSS3px100.png'
          alt='CSS3 Logo'
          className={styles.logo}
        />
        <img
          src='/images/javascript100px.png'
          alt='JavaScript Logo'
          className={styles.logo}
        />
        <img
          src='/images/react100px.png'
          alt='React Logo'
          className={styles.logo}
        />
        <img
          src='/images/tslogo100px.png'
          alt='TypeScript Logo'
          className={styles.logo}
        />
        <img
          src='/images/nodejs100px.png'
          alt='Node.js Logo'
          className={styles.logo}
        />
        <img
          src='/images/adobe-illustrator100px.png'
          alt='Illustrator Logo'
          className={styles.logo}
        />
        <img
          src='/images/adobe100px.png'
          alt='Photoshop Logo'
          className={styles.logo}
        />
        <img
          src='/images/github-mark100px.png'
          alt='Github Logo'
          className={styles.logo}
        />
      </div>
      <div className={styles['about-me-text']}>
        <h1>About Me</h1>
        <p>
          I see the developer's work as a constant search for new information,
          therefore, I accept new challenges as a tool for personal improvement,
          which I believe is necessary to achieve yet undiscovered results. I
          believe that programming and related technologies are the future for
          all of us.
        </p>
      </div>
    </section>
  );
};

export default About;
