import React from 'react';
import { HTMLContent } from '../components/Content';
import DefaultLayout from '../components/Layout';

export const ProductPageTemplate = ({
  title,
  image,
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
          <div className="col col-12 col-md-6"><img src={image} /></div>
          <div className="col col-12 col-md-6">
            <h1>{title}</h1>
            <div>{price}</div>
            <div>{category}</div>
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
      image={post.frontmatter.image}
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
