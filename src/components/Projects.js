import React from 'react';
import Link from 'next/link'; // Import Link from Next.js
import styles from '../assets/styles/projects.module.scss';

const Projects = () => {
  return (
    <section className={styles.projectsSection}>
      <div className={styles.titleAndTiles}>
        <div>
          <h1 className={styles.componentTitle}>Websites examples</h1>
        </div>
        <div className={styles.tiles}>
          {[
            {
              url: 'https://lbwatermelon.netlify.app/',
              image: '/images/Experience.png',
              title:
                'Simple Mobile Responsive Website with Contact map (3 pages + NotFound)',
            },
            {
              url: 'https://lbexample1.netlify.app/',
              image: '/images/Experience2.png',
              title: 'Simple Mobile Responsive Website (3 pages + NotFound)',
            },
            {
              url: 'https://lbexamplebluedia.netlify.app/',
              image: '/images/Experience3.png',
              title:
                'Simple Mobile Responsive Website with Video Hero (3 pages + NotFound)',
            },
            {
              url: 'https://magnificent-peony-d7a71a.netlify.app/',
              image: '/images/Experience4.png',
              title:
                'Dynamic Blog posts website with Wordpress CMS, Filter, Mobile responsive (6 pages + NotFound)',
            },
          ].map((item, index) => (
            <Link href={item.url} key={index} passHref>
              <div className={styles.tileLink}>
                <div className={styles.tile}>
                  <div className={styles.tileContent}>
                    <div className={styles.frame}>
                      <div className={styles.browserBar}>
                        <div className={`${styles.button} ${styles.red}`}></div>
                        <div
                          className={`${styles.button} ${styles.yellow}`}
                        ></div>
                        <div
                          className={`${styles.button} ${styles.green}`}
                        ></div>
                        <div className={styles.urlBar}>{item.url}</div>
                      </div>
                      <img
                        className={styles.picture}
                        src={item.image}
                        alt={`darbas${index + 1}`}
                      />
                    </div>
                    <h2 className={styles.title}>{item.title}</h2>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
