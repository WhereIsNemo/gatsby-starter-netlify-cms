import React from 'react';
import { ProductPageTemplate } from '../../templates/product-page';

const ProductPagePreview = ({ entry }) => (
  <ProductPageTemplate
    title={entry.getIn(['data', 'title'])}
    image={entry.getIn(['data', 'image'])}
    categories={entry.getIn(['data', 'categories'])}
    description={entry.getIn(['data', 'description'])}
    price={entry.getIn(['data', 'price'])}
  />
);

export default ProductPagePreview;
