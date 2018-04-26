import React from 'react';
import Link from 'gatsby-link';

const CategoryPreview = ({ node }) => (
  <div className="catalog-preview">
    <img src={node.frontmatter.image} />
    <h3 className="catalog-preview__title">
      <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
    </h3>
  </div>
);

export default CategoryPreview;
