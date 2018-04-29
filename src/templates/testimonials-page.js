import React from 'react';
import $script from 'scriptjs';
import { HTMLContent } from '../components/Content';

export class TestimonialsPageTemplate extends React.Component {
  render() {
    const { title, body } = this.props;

    return (
      <div className="container">
        <div className="testimonials-section">
          <h1>{title}</h1>
          <HTMLContent content={body} />
        </div>
        <div className="comments-section">
          <div id="vk_comments"></div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    $script('//vk.com/js/api/openapi.js?154', 'vkComments');

    $script.ready('vkComments', () => {
      VK.init({apiId: 6464457, onlyWidgets: true});
      VK.Widgets.Comments("vk_comments", { limit: 10, attach: "photo" })
    });
  }
}

export default ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <TestimonialsPageTemplate
      title={post.frontmatter.title}
      body={post.html}
    />
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
