import React from 'react';
import Link from 'gatsby-link';
import CategoryPreview from '../CategoryPreview';
import styles from './styles.module.scss';

export default class CatalogGrid extends React.Component {
  render() {
    const categories = this.props.categories.map(({ node }, index) => (
      <div key={index} className="col col-12 col-md-4">
        <CategoryPreview node={node} />
      </div>
    ));

    return <div className="row">{categories}</div>;
  }
}

export const CatalogGridQuery = graphql`
  fragment catalogGridCategories on RootQueryType {
    catalogGridCategories: allMarkdownRemark(
      filter: { frontmatter: { contentType: { eq: "category" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            image
          }
        }
      }
    }
  }
`;
