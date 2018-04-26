import React from 'react';
import Link from 'gatsby-link';
import ProductPreview from '../ProductPreview';

export default class ProductsGrid extends React.Component {
  render() {
    const products = this.props.productsGrid
      .filter(({ node }) => {
        return node.frontmatter.categories === this.props.category;
      })
      .map(({ node }, index) => (
        <div key={index} className="col col-12 col-md-4">
          <ProductPreview node={node} />
        </div>
      ));

    return <div className="row">{products}</div>;
  }
}
