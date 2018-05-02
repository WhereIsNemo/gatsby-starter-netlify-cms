import React from 'react';
import styles from './styles.module.scss';
import Img from "gatsby-image";

const ProductCompanies = ({ productCompanies }) => {
  const previews = productCompanies.map(({ node }, index) => (
    <div
      key={index}
      className={`${
        styles.productsCompanies__col
      } col col-12 col-sm-6 col-md-3`}
    >
      <div className="product-company">
        <Img resolutions={node.childrenImageSharp[0].resolutions} />
      </div>
    </div>
  ));

  return (
    <div className="section">
      <h2 className="section__title">Компании, продукцию которых мы сбываем</h2>
      <div className="overflow-container">
        <div className={`${styles.productsCompanies__row} row`}>{previews}</div>
      </div>
    </div>
  );
};

export default ProductCompanies;

export const productCompaniesQuery = graphql`
  fragment productCompanies on RootQueryType {
    productCompanies: allMarkdownRemark(
      filter: { frontmatter: { contentType: { eq: "productCompany" } } }
    ) {
      edges {
        node {
          childrenImageSharp {
            resolutions(width: 255, quality: 85) {
              ...GatsbyImageSharpResolutions_withWebp
            }
          }
        }
      }
    }
  }
`;
