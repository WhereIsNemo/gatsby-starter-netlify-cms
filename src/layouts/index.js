import React from 'react';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Services from '../components/Services';
import './all.scss';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <title>220 Plus</title>
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans|Roboto:700&amp;subset=cyrillic"
        rel="stylesheet"
      />
    </Helmet>
    <Header />
    <div>{children()}</div>
    <Services />
    <Footer />
  </div>
);

export default TemplateWrapper;
