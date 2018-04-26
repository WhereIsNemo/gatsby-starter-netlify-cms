import React from 'react';
import { ProductCompanyPageTemplate } from '../../templates/product-company-page';

const ProductCompanyPagePreview = ({ entry }) => (
  <ProductCompanyPageTemplate
    title={entry.getIn(['data', 'title'])}
    image={entry.getIn(['data', 'image'])}
  />
);

export default ProductCompanyPagePreview;
