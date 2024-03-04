import React from 'react';

import { Helmet } from 'react-helmet';

import ContactComponent from '../components/Contact';

const Contact = () => {
  return (
    <section className='contact-page-container'>
      <Helmet>
        <title>Contact Me</title>
        <meta name='Contact me' content='My contacts page' />
        <meta name='keywords' content='contact, email, portfolio' />
        <meta property='og:title' content='Contact Me' />
        <meta
          property='og:description'
          content='My contacts page for portfolio'
        />
        <meta property='og:image' content='url-to-your-thumbnail-image' />
        <meta property='og:url' content='https://lbweb.eu/contact' />
        <meta name='twitter:title' content='Contact Me' />
        <meta
          name='twitter:description'
          content='My contacts page for portfolio'
        />
        <meta name='twitter:image' content='url-to-your-thumbnail-image' />
        <meta name='twitter:card' content='summary_large_image' />
      </Helmet>
      <ContactComponent />
    </section>
  );
};

export default Contact;
