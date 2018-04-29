import React from 'react';
import CatalogAside from '../CatalogAside';

const MainContent = ({ children, data }) => (
  <div className="container">
    <div className="row">
      <div className="col col-12 col-md-3">
        <CatalogAside categories={data.asideCategories.edges} />
      </div>
      <div className="col col-12 col-md-9">{children}</div>
    </div>
  </div>
);

const UnderMainContent = ({ children }) => (
  <React.Fragment>{children}</React.Fragment>
);

export default props => {
  const { children, data } = props;
  const content = [];

  const defineLayout = child => {
    switch (child.key) {
      case 'mainContent':
        content.push(
          <MainContent key="mainContent" data={data}>
            {child}
          </MainContent>
        );
        break;
      case 'underMainContent':
        content.push(
          <UnderMainContent key="underMainContent">{child}</UnderMainContent>
        );
        break;
    }
  };

  if (Array.isArray(children)) {
    children.forEach(child => {
      defineLayout(child);
    });
  } else {
    defineLayout(children);
  }

  return <React.Fragment>{content}</React.Fragment>;
};

export const defaultLayoutQuery = graphql`
  fragment defaultLayout on RootQueryType {
    asideCategories: allMarkdownRemark(
      filter: { frontmatter: { contentType: { eq: "category" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
