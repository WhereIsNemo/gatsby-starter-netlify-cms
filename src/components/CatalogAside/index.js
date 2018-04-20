import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

export default ({ categories }) => {
  const links = categories.map(({ node }) => 
    <Link
      className="list-group-item list-group-item-action"
      to={node.fields.slug}
    >{node.frontmatter.title}</Link>
  );

  return (
    <div className="catalog--aside">
      <div className="list-group">
        <div className="list-group-item">Категории</div>
        {links}
      </div>
    </div>
  );
};

export const CatalogAsideQuery = graphql`
  fragment asideCategories on RootQueryType {
    asideCategories: allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "category-page"}}}) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`