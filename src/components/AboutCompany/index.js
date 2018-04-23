import React from 'react'
import Link from 'gatsby-link'

const AboutCompany = () => (
  <div className="section about-company">
    <h1 className="section__title">220Plus - электротехника</h1>
    <div className="section__text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
      ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat. Duis aute irure dolor in
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
      culpa qui officia deserunt mollit anim id est laborum.
    </div>
  </div>
)

export default AboutCompany

export const AboutSectionQuery = graphql`
  fragment aboutSection on RootQueryType {
    aboutSection: allMarkdownRemark(filter: {frontmatter: {id: {eq: "about-section"}}}) {
      edges {
        node {
          frontmatter {
            title
            body
          }
        }
      }
    }
  }
`