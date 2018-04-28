import React from 'react';
import CatalogAside from '../components/CatalogAside';
import { HTMLContent } from '../components/Content';
import DefaultLayout from '../components/Layout';

export const DeliveryPageTemplate = ({
  title,
  body,
}) => {
  return (
    <DefaultLayout data={data}>
      <React.Fragment key="mainContent">
        <h1>{title}</h1>
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
      body={post.html}
      data={data}
    />
  );
};

export default ProductPage;

export const deliveryPageQuery = graphql`
  query DeliveryPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
    ...defaultLayout
  }
`;
