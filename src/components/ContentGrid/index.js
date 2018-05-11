import React from 'react';
import Link from 'gatsby-link';
import styles from './styles.module.scss';

export default ({ content, Preview }) => {
  const contentCols = content.map(({ node }, index) => (
    <div key={index} className={`col col-12 col-md-6 col-lg-4 ${styles.col}`}>
      <Preview node={node} />
    </div>
  ));

  return (
    <div className="overflow-container">
      <div className={`row ${styles.row}`}>{contentCols}</div>
    </div>
  );
};
