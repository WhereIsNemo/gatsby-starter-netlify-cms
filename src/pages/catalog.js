import React from 'react';
import CatalogAside from '../components/CatalogAside';
import CatalogGrid from '../components/CatalogGrid';
import DefaultLayout from '../components/Layout';

export default ({ data }) => (
  <DefaultLayout data={data}>
    <React.Fragment key="mainContent">
      <CatalogGrid
        categories={data.catalogGridCategories.edges}
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
