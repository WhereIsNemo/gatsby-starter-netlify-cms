import React from 'react';
import Link from 'gatsby-link';
import Img from "gatsby-image";

const ProductPreview = ({ node }) => {
  return (
    <div className="productPreview">
      <div>
        <Link to={node.fields.slug}>
          <Img resolutions={node.childrenImageSharp[0].resolutions} />
        </Link>
      </div>
      <h3>
        <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
      </h3>
    </div>
  );
};

export default ProductPreview;
