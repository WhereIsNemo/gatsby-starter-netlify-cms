import React from 'react'
import CatalogAside from '../components/CatalogAside'

export const CategoryPageTemplate = ({ title, description }) => {
  return (
    <div className="container">
      <div className="container">
        <div className="row">
          <div className="col col-12 col-md-3">
            <CatalogAside categories={this.props.data.asideCategories.edges} />
          </div>
          <div className="col col-12 col-md-9">
            <h1>{title}</h1>
            <div>{description}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

const CategoryPage = ({ data }) => {
  const { markdownRemark: post } = data

  return <CategoryPageTemplate title={post.frontmatter.title} />
}

export default CategoryPage

export const categoryPageQuery = graphql`
  query CategoryPage($id: String!) {
    ...asideCategories
    ...categoryPage
  }

  fragment categoryPage on RootQueryType {
    categoryPage: markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  } 
`
