import React from 'react';
import Link from 'gatsby-link';
import styles from './styles.module.scss';

export default ({ route, currentPage, pagesCount }) => {
  const firstPage = 1;
  const previousPage = currentPage - 1;
  const nextPage = currentPage + 1;
  const lastPage = pagesCount;
  const firstPageEl = currentPage > 1 && (
    <li className={styles.pageItem}>
      <Link className={styles.pageLink} to={`${route}`}>
        1
      </Link>
    </li>
  );
  const previousDotsEl = previousPage - firstPage > 1 && (
    <li className={styles.pageItem}>
      <button className={styles.pageLink} tabIndex="-1">…</button>
    </li>
  );
  const previousPageEl = previousPage > 1 && (
    <li className={styles.pageItem}>
      <Link
        className={styles.pageLink}
        to={`${route}${previousPage === 1 ? `` : previousPage}`}
      >
        {previousPage}
      </Link>
    </li>
  );
  const nextPageEl = nextPage < lastPage && (
    <li className={styles.pageItem}>
      <Link
        className={styles.pageLink}
        to={`${route}${nextPage === 1 ? `` : nextPage}`}
      >
        {nextPage}
      </Link>
    </li>
  );
  const nextDotsEl = lastPage - nextPage > 1 && (
    <li className={styles.pageItem}>
      <button className={styles.pageLink} tabIndex="-1">…</button>
    </li>
  );
  const lastPageEl = currentPage < lastPage && (
    <li className={styles.pageItem}>
      <Link className={styles.pageLink} to={`${route}${lastPage}`}>
        {lastPage}
      </Link>
    </li>
  );

  const paginationEl = pagesCount > 1 && (
    <ul className={styles.pagination}>
      {firstPageEl}
      {previousDotsEl}
      {previousPageEl}
      <li className={styles.pageItem}>
        <button className={`${styles.pageLink} ${styles.pageLinkActive}`} tabIndex="-1">{currentPage}</button>
      </li>
      {nextPageEl}
      {nextDotsEl}
      {lastPageEl}
    </ul>
  );

  return paginationEl;
};
