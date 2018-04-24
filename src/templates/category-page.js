import React from 'react'
import CatalogAside from '../components/CatalogAside'

export const CategoryPageTemplate = ({ title, asideCategories }) => {
  return (
    <div className="container">
      <div className="container">
        <div className="row">
          <div className="col col-12 col-md-3">
            <CatalogAside categories={asideCategories.edges} />
          </div>
          <div className="col col-12 col-md-9">
            <h1>{title}</h1>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

const CategoryPage = ({ data }, props) => {
  console.log(props);
  const { markdownRemark: post } = data
  const { asideCategories } = data;

  return <CategoryPageTemplate 
    title={post.frontmatter.title} 
    asideCategories={asideCategories}
  />
}

export default CategoryPage

export const categoryPageQuery = graphql`
  query CategoryPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
    ...asideCategories
  }
`
