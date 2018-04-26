import React from 'react';
import CatalogAside from '../components/CatalogAside';
import ProductsGrid from '../components/ProductsGrid';
import ReactPaginate from 'react-paginate';

export default class CategoryPage extends React.Component {
  hrefBuilder = (pageIndex) => {
    return `/${this.props.pathContext.paginationRoute}/${pageIndex === 1 ? `` : pageIndex}`;
  }

  handlePageChange = (...args) => {
    console.log(...args);
  }

  render() {
    const { markdownRemark: post } = this.props.data;
    const { asideCategories } = this.props.data;
    const productsGrid = this.props.pathContext.group;
    const productsGridEl = productsGrid && (
      <ProductsGrid
        productsGrid={productsGrid}
        category={post.frontmatter.title}
      />
    );
    const paginationEl = this.props.pathContext.pagesCount > 1 && (
      <ReactPaginate
        previousLabel={"пред"}
        nextLabel={"след"}
        breakLabel={<a href="">...</a>}
        breakClassName={"break-me"}
        pageCount={this.props.pathContext.pagesCount}
        initialPage={this.props.pathContext.index}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
        onPageChange={this.handlePageChange}
        disableInitialCallback={true}
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
            {paginationEl}
          </div>
        </div>
      </div>
    );
  }
}

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
