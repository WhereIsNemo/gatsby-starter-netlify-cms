import React from 'react'
import PropTypes from 'prop-types'
import { CategoryPageTemplate } from '../../templates/category-page'

const CategoryPagePreview = ({ entry, widgetFor }) => (
  <CategoryPageTemplate
    title={entry.getIn(['data', 'title'])}
    image={entry.getIn(['data', 'image'])}
  />
)

CategoryPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AboutPagePreview
