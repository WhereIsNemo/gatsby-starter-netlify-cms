import React from 'react';
import PropTypes from 'prop-types';

export const ProductCompanyPageTemplate = ({ title }) => {
  return <div>{title}</div>;
};

ProductCompanyPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
};

const ProductCompanyPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return <ProductCompanyPageTemplate title={post.frontmatter.title} />;
};

ProductCompanyPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ProductCompanyPage;

export const productCompanyPageQuery = graphql`
  query ProductCompanyPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`;
