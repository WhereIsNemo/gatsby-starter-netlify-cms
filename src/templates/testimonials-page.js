import React from 'react';
import { HTMLContent } from '../components/Content';
import VkComments from '../components/VkComments';

export const TestimonialsPageTemplate = ({ title, body }) => (
  <div className="container-fluid">
    <div className="section">
      <h1 className="section__title">{title}</h1>
      <HTMLContent content={body} />
    </div>
    <div className="comments-section">
      <VkComments />
    </div>
  </div>
);

export default ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <TestimonialsPageTemplate title={post.frontmatter.title} body={post.html} />
  );
};

export const testimonialsPageQuery = graphql`
  query TestimonialsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
