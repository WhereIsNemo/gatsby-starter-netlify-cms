import React from 'react';
import Img from "gatsby-image";
import styles from './styles.module.scss';

const ProductCompanies = ({ productCompanies }) => {
  const previews = productCompanies.map(({ node }, index) => (
    <div
      key={index}
      className={`${styles.productsCompanies__col} col col-12 col-sm-6 col-md-3`}
    >
      <div className={styles.productsCompany}>
        <div className={styles.productsCompanyImgWrapper}>
          <Img resolutions={node.childrenImageSharp[0].resolutions} />
        </div>
      </div>
    </div>
  ));

  return (
    <div className="section">
      <h2 className="section__title">Компании, продукцию которых мы сбываем</h2>
      <div className={`${styles.productsCompanies__row} row`}>{previews}</div>
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
              ...GatsbyImageSharpResolutions_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`;
