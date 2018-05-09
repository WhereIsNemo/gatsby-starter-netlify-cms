import React from 'react';
import ContentGrid from '../ContentGrid';

export default ({ categories }) => (
  <ContentGrid content={categories} />
);

export const CatalogGridQuery = graphql`
  fragment catalogGridCategories on RootQueryType {
    catalogGridCategories: allMarkdownRemark(
      filter: { frontmatter: { contentType: { eq: "category" } } }
    ) {
      edges {
        node {
          childrenImageSharp {
            resolutions(width: 255, quality: 85) {
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
