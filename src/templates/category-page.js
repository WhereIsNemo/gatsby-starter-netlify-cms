import React from 'react';
import Helmet from 'react-helmet';
import CatalogAside from '../components/CatalogAside';
import ProductsGrid from '../components/ProductsGrid';
import Pagination from '../components/Pagination';
import DefaultLayout from '../components/Layout';
import styles from './category-page.module.scss';

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
    <React.Fragment>
      <Helmet>
        <title>220 Plus - {post.frontmatter.title}</title>
        <meta name="description" content={`${post.frontmatter.description}.`} />
        <meta name="keywords" content={`${post.frontmatter.title}`} />
      </Helmet>
      <DefaultLayout data={props.data}>
        <React.Fragment key="mainContent">
          <div className={styles.categorySection}>
            <h1>{post.frontmatter.title}</h1>
            <div className={styles.description}>{post.frontmatter.description}</div>
            {productsGridEl}
            <Pagination
              route={props.pathContext.route}
              currentPage={props.pathContext.index}
              pagesCount={props.pathContext.pagesCount}
            />
          </div>
        </React.Fragment>
      </DefaultLayout>
    </React.Fragment>
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
