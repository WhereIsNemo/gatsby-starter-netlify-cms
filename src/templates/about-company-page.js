import React from 'react'
import PropTypes from 'prop-types'

export const AboutCompanyPageTemplate = ({ title }) => {
  return <div>{title}</div>
}

AboutCompanyPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
}

const AboutCompanyPage = ({ data }) => {
  const { markdownRemark: post } = data

  return <AboutCompanyPageTemplate title={post.frontmatter.title} />
}

AboutCompanyPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutCompanyPage

export const aboutCompanyPageQuery = graphql`
  query AboutCompanyPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`
