import React from 'react';
import styles from '../assets/styles/education.module.scss';

const Education = () => {
  return (
    <section className={styles['education-section']}>
      <div className={styles['comp-title']}>
        <h1>Education</h1>
      </div>
      <div className={styles['education-content']}>
        <div className={styles['education-logo']}></div>
        <div className={styles['education-details']}>
          <div className={styles['education-block']}>
            <div className={styles['education-details-in']}>
              <h1>Front-End Developer</h1>
              <h2>2021</h2>
              <p>CodeAcademy</p>
            </div>
            <div>
              <img
                src='/images/codeacademy.png'
                alt='Code Academy Logo'
                className={styles['education-logo']}
              />
            </div>
          </div>
          <div className={styles['education-block']}>
            <div className={styles['education-details-in']}>
              <h1>Multimedia Service Provider</h1>
              <h2>2017</h2>
              <p>Kaunas Information Technology School</p>
            </div>
            <div>
              <img
                src='/images/kitm.png'
                alt='KITM Logo'
                className={styles['education-logo']}
              />
            </div>
          </div>
          <div className={styles['education-block']}>
            <div className={styles['education-details-in']}>
              <h1>Secondary Education</h1>
              <h2>2016</h2>
              <p>Raudondvaris gymnasium</p>
            </div>
            <div>
              <img
                src='/images/Raud.jpg'
                alt='Raudondvario gimnazija Logo'
                className={styles['education-logo']}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
