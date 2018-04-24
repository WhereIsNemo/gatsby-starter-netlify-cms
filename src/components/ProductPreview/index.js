import React from 'react'
import Link from 'gatsby-link'

const ProductPreview = ({node}) => {
  return (
    <div className="productPreview">
      <div>
        <Link to={node.fields.slug}><img src={node.frontmatter.image} /></Link>
      </div>
      <h3>
        <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
      </h3>

    </div>
  )
}

export default ProductPreview
