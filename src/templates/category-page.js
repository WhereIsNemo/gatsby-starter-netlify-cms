import React from 'react'
import PropTypes from 'prop-types'

export const CategoryPageTemplate = ({ title }) => {
  return (
    {title}
  )
}

CategoryPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
}

const CategoryPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <CategoryPageTemplate
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
