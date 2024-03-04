import React from 'react';
import { Helmet } from 'react-helmet';
import styles from '../assets/styles/notfound.module.scss';

const NotFound = () => {
  return (
    <div className={styles['not-found']}>
      <Helmet>
        <title>Not found</title>
        <meta
          name='description'
          content='Page not found on LB developer website'
        />
        <meta name='Not Found' content='not found, 404 error, LB developer' />
        <meta property='og:title' content='Not Found - LB Developer' />
        <meta
          property='og:description'
          content='Page not found on LB developer website'
        />
        <meta property='og:image' content='url-to-your-thumbnail-image' />
        <meta property='og:url' content='https://lbweb.eu/*' />
        <meta name='twitter:title' content='Not Found - LB Developer' />
        <meta
          name='twitter:description'
          content='Page not found on LB developer website'
        />
        <meta name='twitter:image' content='url-to-your-thumbnail-image' />
        <meta name='twitter:card' content='summary_large_image' />
      </Helmet>
      <h1 className={styles.title}>404 - Not Found</h1>
      <p className={styles.message}>
        The page you are looking for does not exist.
      </p>
    </div>
  );
};

export default NotFound;
