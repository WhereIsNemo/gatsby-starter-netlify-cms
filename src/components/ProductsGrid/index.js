import React from 'react';
import ContentGrid from '../ContentGrid';
import ProductPreview from '../ProductPreview';

export default (props) => {
  const products = props.productsGrid
      .filter(({ node }) => {
        return node.frontmatter.categories === props.category;
      });

  return <ContentGrid content={products} Preview={ProductPreview} />;
};
