import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import styles from '../assets/styles/footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles['footer-container']}>
      <p className={styles['footer-text']}>
        Designed and built with{' '}
        <span role='img' aria-label='heart'>
          ❤️
        </span>{' '}
        by Liudvikas Bielskus
      </p>
      <p className={styles['footer-text']}>
        Connect with me on{' '}
        <Link href='https://linkedin.com/in/lbielskus' passHref>
          <span
            className={styles['footer-link']}
            target='_blank'
            rel='noopener noreferrer'
          >
            LinkedIn
          </span>
        </Link>{' '}
        <FontAwesomeIcon icon={faLinkedin} size='2x' />
      </p>
    </footer>
  );
};

export default Footer;
