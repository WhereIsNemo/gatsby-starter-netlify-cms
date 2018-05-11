import React from 'react';
import Helmet from 'react-helmet';
import { HTMLContent } from '../components/Content';

export const WarehousePageTemplate = ({ title, body }) => {
  return (
    <div className="container-fluid">
      <Helmet>
        <title>220 Plus - Склад самовывоза</title>
        <meta name="description" content={`220Plus - электроинструменты в Омске и Омской области. Склад самовывоза.`} />
        <meta name="keywords" content={`склад, самовывоз, склад самовывоза`} />
      </Helmet>
      <div className="section">
        <h1 className="section__title">{title}</h1>
        <HTMLContent content={body} />
      </div>
    </div>
  );
};

export default ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <WarehousePageTemplate title={post.frontmatter.title} body={post.html} />
  );
};

export const warehousePageQuery = graphql`
  query WarehousePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
