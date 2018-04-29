import React from 'react';
import { HTMLContent } from '../components/Content';

export const ContactPageTemplate = ({
  title,
  body,
}) => {
  return (
    <div className="container">
      <div className="testimonials-section">
        <h1>{title}</h1>
        <HTMLContent content={body} />
      </div>
    </div>
  );
};

export default ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <ContactPageTemplate
      title={post.frontmatter.title}
      body={post.html}
    />
  );
};

export const testimonialsPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
