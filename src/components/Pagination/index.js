import React from 'react';
import Link from 'gatsby-link';

export default ({ route, currentPage, pagesCount }) => {
  const firstPage = 1;
  const previousPage = currentPage - 1;
  const nextPage = currentPage + 1;
  const lastPage = pagesCount;
  const firstPageEl = currentPage > 1 && (
    <li className="page-item">
      <Link className="page-link" to={`/${route}/`}>
        1
      </Link>
    </li>
  );
  const previousDotsEl = previousPage - firstPage > 1 && (
    <li className="page-item">
      <button className="page-link">…</button>
    </li>
  );
  const previousPageEl = previousPage > 1 && (
    <li className="page-item">
      <Link
        className="page-link"
        to={`/${route}/${previousPage === 1 ? `` : previousPage}`}
      >
        {previousPage}
      </Link>
    </li>
  );
  const nextPageEl = nextPage < lastPage && (
    <li className="page-item">
      <Link
        className="page-link"
        to={`/${route}/${nextPage === 1 ? `` : nextPage}`}
      >
        {nextPage}
      </Link>
    </li>
  );
  const nextDotsEl = lastPage - nextPage > 1 && (
    <li className="page-item">
      <button className="page-link">…</button>
    </li>
  );
  const lastPageEl = currentPage < lastPage && (
    <li className="page-item">
      <Link className="page-link" to={`/${route}/${lastPage}`}>
        {lastPage}
      </Link>
    </li>
  );

  const paginationEl = pagesCount > 1 && (
    <ul className="pagination">
      {firstPageEl}
      {previousDotsEl}
      {previousPageEl}
      <li className="page-item active">
        <button className="page-link active">{currentPage}</button>
      </li>
      {nextPageEl}
      {nextDotsEl}
      {lastPageEl}
    </ul>
  );

  return paginationEl;
};
