import React from 'react';
import CatalogAside from '../components/CatalogAside';
import ProductsGrid from '../components/ProductsGrid';
import Pagination from '../components/Pagination';

const CategoryPage = props => {
  const { markdownRemark: post } = props.data;
  const { asideCategories } = props.data;
  const productsGrid = props.pathContext.group;
  const productsGridEl = productsGrid && (
    <ProductsGrid
      productsGrid={productsGrid}
      category={post.frontmatter.title}
    />
  );

  return (
    <div className="container">
      <div className="row">
        <div className="col col-12 col-md-3">
          <CatalogAside categories={asideCategories.edges} />
        </div>
        <div className="col col-12 col-md-9">
          <h1>{post.frontmatter.title}</h1>
          <div>{post.frontmatter.description}</div>
          {productsGridEl}
          <Pagination 
            route={props.pathContext.route}
            currentPage={props.pathContext.index}
            pagesCount={props.pathContext.pagesCount}
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;

export const categoryPageQuery = graphql`
  query CategoryPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
      }
    }
    ...asideCategories
  }
`;
