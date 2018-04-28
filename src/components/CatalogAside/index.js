import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

export default ({ categories }) => {
  const links = categories.map(({ node }, index) => (
    <Link
      key={index}
      className="list-group-item list-group-item-action"
      to={node.fields.slug}
    >
      {node.frontmatter.title}
    </Link>
  ));

  return (
    <div className="catalog--aside">
      <div className="list-group">
        <div className="list-group-item">Категории</div>
        {links}
      </div>
    </div>
  );
};
