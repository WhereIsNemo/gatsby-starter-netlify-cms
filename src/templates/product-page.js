import React from 'react';
import Helmet from 'react-helmet';
import { HTMLContent } from '../components/Content';
import DefaultLayout from '../components/Layout';
import Img from 'gatsby-image';
import OrderCallbackButton from '../components/OrderCallbackButton';
import styles from './product-page.module.scss';

export const ProductPageTemplate = ({
  title,
  childrenImageSharp,
  category,
  productCompany,
  body,
  asideCategories,
  price,
  discountPrice,
  data,
}) => {
  return (
    <DefaultLayout data={data}>
      <React.Fragment key="mainContent">
        <Helmet>
          <title>220 Plus - {title}</title>
          <meta
            name="description"
            content={`${category} (${productCompany}) - ${title}.`}
          />
          <meta
            name="keywords"
            content={`${title}, ${category}, ${productCompany}`}
          />
        </Helmet>
        <div className={styles.productPage}>
          <div className={styles.mainInfo}>
            <div className="row flex-column flex-lg-row align-items-center align-items-md-start">
              <div className="col col-auto col-lg-6">
                <Img resolutions={childrenImageSharp[0].resolutions} />
              </div>
              <div className="col col-auto col-lg-6">
                <h1 className={styles.title}>{title}</h1>
                <div>
                  <b>Категория</b>: {category}
                </div>
                {productCompany && (
                  <div>
                    <b>Производитель</b>: {productCompany}
                  </div>
                )}
                <div
                  className={`${styles.priceField} ${discountPrice &&
                    styles.priceWithDiscount}`}
                >
                  <b>Цена:</b>
                  <span className={styles.priceWithoutDiscrount}>
                    <span className={styles.price}>
                      {price}
                    </span>
                    <span className="ruble-sign">₽</span>
                  </span>
                  {discountPrice && (
                    <span className={styles.priceWithDiscrount}>
                      <span className={styles.discountPrice}>
                        {discountPrice}
                      </span>
                      <span className="ruble-sign">₽</span>
                    </span>
                  )}
                </div>
                <div>
                  <OrderCallbackButton
                    btnClasses="btn--filled"
                    additionalText={title}
                  />
                </div>
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
      productCompany={post.frontmatter.productCompany}
      body={post.html}
      price={post.frontmatter.price}
      discountPrice={post.frontmatter.discountPrice}
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
        resolutions(width: 400, quality: 85, toFormat: JPG) {
          ...GatsbyImageSharpResolutions_withWebp_noBase64
        }
      }
      html
      frontmatter {
        title
        categories
        image
        price
        discountPrice
        productCompany
      }
    }
    ...defaultLayout
  }
`;
