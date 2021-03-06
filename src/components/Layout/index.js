import React from 'react';
import Helmet from 'react-helmet';
import CatalogAside from '../CatalogAside';

const MainContent = ({ children, data }) => (
  <div className="container-fluid">
    <div className="row">
      <div className="col col-12 col-md-4 col-lg-3">
        <CatalogAside categories={data.asideCategories.edges} />
      </div>
      <div className="col col-12 col-md-8 col-lg-9">{children}</div>
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

  return (
    <React.Fragment>
      <Helmet>
        <script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=default,IntersectionObserver,IntersectionObserverEntry,NodeList.prototype.@@iterator,Element.prototype.closest&flags=gated" />
      </Helmet>
      {content}
    </React.Fragment>
  );
};

export const defaultLayoutQuery = graphql`
  fragment defaultLayout on RootQueryType {
    asideCategories: allMarkdownRemark(
      filter: { frontmatter: { contentType: { eq: "category" } } }
      sort: { fields: [frontmatter___title], order: ASC }
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
