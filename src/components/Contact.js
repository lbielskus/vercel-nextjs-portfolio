import React from 'react';
import styles from '../assets/styles/contact.module.scss';

import Link from 'next/link';

const Contact = () => {
  return (
    <section className={styles['contact-container']}>
      <h2>Contact Me</h2>
      <p>
        Welcome to my portfolio website! I'm happy to reach you out. Whether you
        have a question, need assistance in creating your personal website, or
        just want to say hello, feel free to reach out using the information
        below.
      </p>
      <div className={styles['contact-details']}>
        <p>
          Email: <Link href='mailto:info@lbweb.lt'>info@lbweb.lt</Link>
        </p>
      </div>
    </section>
  );
};

export default Contact;
