import React from 'react';
import CatalogAside from '../components/CatalogAside';
import CatalogGrid from '../components/CatalogGrid';
import DefaultLayout from '../components/Layout';

export default (props) => (
  <DefaultLayout data={props.data}>
    <React.Fragment key="mainContent">
      <CatalogGrid
        categories={props.data.catalogGridCategories.edges}
      />
    </React.Fragment>
  </DefaultLayout>
);

export const CatalogPageQuery = graphql`
  query CatalogPageQuery {
    ...defaultLayout
    ...catalogGridCategories
  }
`;
