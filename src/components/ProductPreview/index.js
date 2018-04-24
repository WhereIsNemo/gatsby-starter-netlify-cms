import React from 'react'
import Link from 'gatsby-link'

const ProductPreview = ({node}) => {
  return (
    <div className="productPreview">
      <h3>
        <Link to={node.node.fields.slug}>{node.node.frontmatter.title}</Link>
      </h3>
    </div>
  )
}

export default ProductPreview
