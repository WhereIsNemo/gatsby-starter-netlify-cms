import React from 'react';
import ContentGrid from '../ContentGrid';
import SimplePreview from '../SimplePreview';

export default ({ categories }) => (
  <ContentGrid content={categories} Preview={SimplePreview} />
);

export const CatalogGridQuery = graphql`
  fragment catalogGridCategories on RootQueryType {
    catalogGridCategories: allMarkdownRemark(
      filter: { frontmatter: { contentType: { eq: "category" } } }
      sort: { fields: [frontmatter___title], order: ASC }
    ) {
      edges {
        node {
          childrenImageSharp {
            resolutions(width: 255, quality: 85, toFormat: JPG) {
              ...GatsbyImageSharpResolutions_withWebp_noBase64
            }
          }
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
