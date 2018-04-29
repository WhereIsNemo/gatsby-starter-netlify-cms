import React from 'react';
import { HTMLContent } from '../components/Content';

export const DeliveryPageTemplate = ({ title, body }) => {
  return (
    <div className="container">
      <div className="delivery-section">
        <h1>{title}</h1>
        <HTMLContent content={body} />
      </div>
    </div>
  );
};

export default ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <DeliveryPageTemplate title={post.frontmatter.title} body={post.html} />
  );
};

export const deliveryPageQuery = graphql`
  query DeliveryPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
