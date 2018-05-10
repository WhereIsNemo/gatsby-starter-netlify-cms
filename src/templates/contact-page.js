import React from 'react';
import { HTMLContent } from '../components/Content';
import ContactInfoBlocks from '../components/ContactInfoBlocks';

export const ContactPageTemplate = ({ title, body }) => {
  return (
    <div className="container-fluid">
      <ContactInfoBlocks />
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
    <ContactPageTemplate title={post.frontmatter.title} body={post.html} />
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
