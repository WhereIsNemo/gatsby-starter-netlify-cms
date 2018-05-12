import React from 'react';
import Helmet from 'react-helmet';
import { HTMLContent } from '../components/Content';
import VkComments from '../components/VkComments';

export const TestimonialsPageTemplate = ({ title, body }) => (
  <div className="container-fluid">
    <Helmet>
      <title>220 Plus - Отзывы</title>
      <meta
        name="description"
        content={`220Plus - электроинструменты в Омске и Омской области. Отзывы.`}
      />
      <meta name="keywords" content={`отзывы`} />
    </Helmet>
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
