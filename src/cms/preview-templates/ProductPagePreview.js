import React from 'react';
import { ProductPageTemplate } from '../../templates/product-page';

const ProductPagePreview = ({ entry }) => (
  <ProductPageTemplate
    title={entry.getIn(['data', 'title'])}
    image={entry.getIn(['data', 'image'])}
    categories={entry.getIn(['data', 'categories'])}
  />
);

export default ProductPagePreview;
