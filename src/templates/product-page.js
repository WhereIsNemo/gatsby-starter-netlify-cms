import React from 'react';
import { HTMLContent } from '../components/Content';
import DefaultLayout from '../components/Layout';
import Img from "gatsby-image";
import OrderCallbackButton from '../components/OrderCallbackButton';
import styles from './product-page.module.scss';

export const ProductPageTemplate = ({
  title,
  childrenImageSharp,
  category,
  body,
  asideCategories,
  price,
  data,
}) => {
  return (
    <DefaultLayout data={data}>
      <React.Fragment key="mainContent">
        <div className={styles.productPage}>
          <div className={styles.mainInfo}>
            <div className="row">
              <div className="col col-12 col-md-6">
                <Img resolutions={childrenImageSharp[0].resolutions} />
              </div>
              <div className="col col-12 col-md-6">
                <h1 className={styles.title}>{title}</h1>
                <div><b>Категория</b>: {category}</div>
                <div className={styles.priceField}>
                  <b>Цена:</b> <span className={styles.price}>{price}₽</span>
                </div>
                <div><OrderCallbackButton btnClasses="btn--filled" additionalText={title} /></div>
              </div>
            </div>
          </div>
          <div>
            <h2>Описание</h2>
            <HTMLContent content={body} />
          </div>
        </div>
      </React.Fragment>
    </DefaultLayout>
  );
};

const ProductPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <ProductPageTemplate
      title={post.frontmatter.title}
      childrenImageSharp={post.childrenImageSharp}
      category={post.frontmatter.categories}
      body={post.html}
      price={post.frontmatter.price}
      asideCategories={data.asideCategories.edges}
      data={data}
    />
  );
};

export default ProductPage;

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      childrenImageSharp {
        resolutions(width: 400, quality: 85) {
          ...GatsbyImageSharpResolutions_withWebp_noBase64
        }
      }
      html
      frontmatter {
        title
        categories
        image
        price
      }
    }
    ...defaultLayout
  }
`;
