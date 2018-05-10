import React from 'react';
import CatalogAside from '../components/CatalogAside';
import CatalogGrid from '../components/CatalogGrid';
import DefaultLayout from '../components/Layout';
import styles from './catalog.module.scss';

export default ({ data }) => (
  <DefaultLayout data={data}>
    <React.Fragment key="mainContent">
      <div className={styles.catalogSection}>
        <CatalogGrid categories={data.catalogGridCategories.edges} />
      </div>
    </React.Fragment>
  </DefaultLayout>
);

export const CatalogPageQuery = graphql`
  query CatalogPageQuery {
    ...defaultLayout
    ...catalogGridCategories
  }
`;
