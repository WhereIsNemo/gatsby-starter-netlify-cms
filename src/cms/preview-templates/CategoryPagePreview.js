import React from 'react'
import { CategoryPageTemplate } from '../../templates/category-page'

const CategoryPagePreview = ({ entry }) => (
  <CategoryPageTemplate
    title={entry.getIn(['data', 'title'])}
    image={entry.getIn(['data', 'image'])}
    description={entry.getIn(['data', 'text'])}
  />
)

export default CategoryPagePreview
