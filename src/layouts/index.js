import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header/Header';
import './all.scss';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="220 Plus" />
    <Header />
    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
