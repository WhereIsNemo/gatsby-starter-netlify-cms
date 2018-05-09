import React from 'react';
import { HTMLContent } from '../components/Content';
import DefaultLayout from '../components/Layout';
import Img from "gatsby-image";

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
        <div className="row">
          <div className="col col-12 col-md-6">
          <Img resolutions={childrenImageSharp[0].resolutions} />
          </div>
          <div className="col col-12 col-md-6">
            <h2>{category}</h2>
            <h1>{title}</h1>
            <div>{price}</div>
          </div>
        </div>
        <HTMLContent content={body} />
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
