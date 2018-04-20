import React from 'react'
import PropTypes from 'prop-types'
import { ProductCompanyPageTemplate } from '../../templates/product-company-page'

const ProductCompanyPagePreview = ({ entry }) => (
  <ProductCompanyPageTemplate
    title={entry.getIn(['data', 'title'])}
    image={entry.getIn(['data', 'image'])}
  />
)

ProductCompanyPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default ProductCompanyPagePreview
