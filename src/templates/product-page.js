import React from 'react';
import PropTypes from 'prop-types';

export const ProductPageTemplate = ({ title }) => {
  return <div>{title}</div>;
};

ProductPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
};

const ProductPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return <ProductPageTemplate title={post.frontmatter.title} />;
};

ProductPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ProductPage;

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`;
