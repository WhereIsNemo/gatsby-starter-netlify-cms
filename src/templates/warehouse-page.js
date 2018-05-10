import React from 'react';
import { HTMLContent } from '../components/Content';

export const WarehousePageTemplate = ({ title, body }) => {
  return (
    <div className="container-fluid">
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
