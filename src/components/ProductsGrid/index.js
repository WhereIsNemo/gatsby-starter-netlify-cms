import React from 'react';
import Link from 'gatsby-link';
import ProductPreview from '../ProductPreview';

export default (props) => {
  const products = props.productsGrid
      .filter(({ node }) => {
        return node.frontmatter.categories === props.category;
      })
      .map(({ node }, index) => (
        <div key={index} className="col col-12 col-md-4">
          <ProductPreview node={node} />
        </div>
      ));

    return <div className="row">{products}</div>;
};
