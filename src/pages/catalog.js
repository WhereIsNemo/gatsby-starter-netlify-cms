import React from 'react';
import Helmet from 'react-helmet';
import CatalogAside from '../components/CatalogAside';
import CatalogGrid from '../components/CatalogGrid';
import DefaultLayout from '../components/Layout';
import styles from './catalog.module.scss';

export default ({ data }) => (
  <React.Fragment>
    <Helmet>
      <title>220 Plus - Каталог</title>
      <meta
        name="description"
        content="220Plus - электроинструменты в Омске и Омской области. Каталог."
      />
      <meta
        name="keywords"
        content="электроинструменты, каталог, ассортимент"
      />
    </Helmet>
    <DefaultLayout data={data}>
      <React.Fragment key="mainContent">
        <div className={styles.catalogSection}>
          <CatalogGrid categories={data.catalogGridCategories.edges} />
        </div>
      </React.Fragment>
    </DefaultLayout>
  </React.Fragment>
);

export const CatalogPageQuery = graphql`
  query CatalogPageQuery {
    ...defaultLayout
    ...catalogGridCategories
  }
`;
