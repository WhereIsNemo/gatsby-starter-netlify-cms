import React from 'react';
import CatalogAside from '../components/CatalogAside';
import ProductsGrid from '../components/ProductsGrid';
import Pagination from '../components/Pagination';
import DefaultLayout from '../components/Layout';

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
    <DefaultLayout data={props.data}>
      <React.Fragment key="mainContent">
        <h1>{post.frontmatter.title}</h1>
        <div>{post.frontmatter.description}</div>
        {productsGridEl}
        <Pagination
          route={props.pathContext.route}
          currentPage={props.pathContext.index}
          pagesCount={props.pathContext.pagesCount}
        />
      </React.Fragment>
    </DefaultLayout>
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
    ...defaultLayout
  }
`;
