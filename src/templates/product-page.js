import React from 'react'
import PropTypes from 'prop-types'

export const ProductPageTemplate = ({ title }) => {
  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

ProductPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
}

const ProductPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <ProductPagePageTemplate
      title={post.frontmatter.title}
    />
  )
}

ProductPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ProductPage

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`
