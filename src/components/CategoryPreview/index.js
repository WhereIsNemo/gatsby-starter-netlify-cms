import React from 'react';
import Link from 'gatsby-link';
import Img from "gatsby-image";

const CategoryPreview = ({ node }) => (
  <div className="catalog-preview">
    <Img resolutions={node.childrenImageSharp[0].resolutions} />
    <h3 className="catalog-preview__title">
      <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
    </h3>
  </div>
);

export default CategoryPreview;
