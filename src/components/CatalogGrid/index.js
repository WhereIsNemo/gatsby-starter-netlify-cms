import React from 'react';
import Link from 'gatsby-link';
import CategoryPreview from '../CategoryPreview';
import styles from './styles.module.scss';

export default class CatalogGrid extends React.Component {
  render() {
    const categories = this.props.categories.map(({ node }, index) => (
      <div key={index} className={`col col-12 col-md-4 ${styles.col}`}>
        <CategoryPreview node={node} />
      </div>
    ));

    return (
      <div className="overflow-container">
        <div className={`row ${styles.row}`}>{categories}</div>
      </div>
    );
  }
}

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
