import React from 'react'
import CatalogAside from '../components/CatalogAside'
import ProductsGrid from '../components/ProductsGrid'

const CategoryPage = ({ data }) => {
  const { markdownRemark: post } = data
  const { asideCategories, productsGrid } = data;

  return (
    <div className="container">
      <div className="row">
        <div className="col col-12 col-md-3">
          <CatalogAside categories={asideCategories.edges} />
        </div>
        <div className="col col-12 col-md-9">
          <h1>{post.frontmatter.title}</h1>
          <div>{post.frontmatter.description}</div>
          <ProductsGrid productsGrid={productsGrid.edges} category={post.frontmatter.title} />
        </div>
      </div>
    </div>
  );
}

export default CategoryPage

export const categoryPageQuery = graphql`
  query CategoryPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
      }
    }
    ...asideCategories
    ...productsGridCategories
  }
`
