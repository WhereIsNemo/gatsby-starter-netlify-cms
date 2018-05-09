import React from 'react';
import Link from 'gatsby-link';
import Preview from '../Preview';
import styles from './styles.module.scss';

export default ({ content }) => {
  const contentCols = content.map(({ node }, index) => (
    <div key={index} className={`col col-12 col-md-4 ${styles.col}`}>
      <Preview node={node} />
    </div>
  ));

  return (
    <div className="overflow-container">
      <div className={`row ${styles.row}`}>{contentCols}</div>
    </div>
  );
};
