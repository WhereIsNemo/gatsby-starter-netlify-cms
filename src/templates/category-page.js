import React from 'react'
import PropTypes from 'prop-types'

export const CategoryPageTemplate = ({ title }) => {
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

CategoryPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
}

const CategoryPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <CategoryPagePageTemplate
      title={post.frontmatter.title}
    />
  )
}

CategoryPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default CategoryPage

export const categoryPageQuery = graphql`
  query CategoryPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`
