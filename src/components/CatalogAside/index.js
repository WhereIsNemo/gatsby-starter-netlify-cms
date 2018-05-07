import React from 'react';
import Link from 'gatsby-link';
import styles from './styles.module.scss';

export default ({ categories }) => {
  const links = categories.map(({ node }, index) => (
    <li key={index} className={styles.menuItem}>
      <Link
        className={styles.link}
        to={node.fields.slug}
      >
        {node.frontmatter.title}
      </Link>
    </li>
  ));

  return (
    <div className={styles.catalogAside}>
      <h2 className={styles.title}>Категории</h2>
      <ul className={styles.menu}>
        {links}
      </ul>
    </div>
  );
};
