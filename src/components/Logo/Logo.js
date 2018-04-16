import React from 'react';
import Link from 'gatsby-link';
import styles from './Logo.module.scss';

const Logo = () => (
  <div className={styles.logo}>
    <Link to="/">220Plus</Link>
  </div>
);

export default Logo;