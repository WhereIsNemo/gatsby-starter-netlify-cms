import React from 'react';
import PropTypes from 'prop-types';

export const SpecialOfferPageTemplate = ({ title }) => {
  return <div>{title}</div>;
};

SpecialOfferPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
};

const SpecialOfferPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return <SpecialOfferPageTemplate title={post.frontmatter.title} />;
};

SpecialOfferPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SpecialOfferPage;

export const specialOfferPageQuery = graphql`
  query SpecialOfferPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`;
