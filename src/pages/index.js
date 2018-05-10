import React from 'react';
import SpecialOffersSlider from '../components/SpecialOffersSlider';
import ProductCompanies from '../components/ProductCompanies';
import CatalogSlider from '../components/CatalogSlider';
import CatalogAside from '../components/CatalogAside';
import AboutCompany from '../components/AboutCompany';
import DefaultLayout from '../components/Layout';

export default props => (
  <DefaultLayout data={props.data}>
    <React.Fragment key="mainContent">
      <SpecialOffersSlider
        specialOffers={props.data.specialOffersSlider.edges}
      />
    </React.Fragment>
    <React.Fragment key="underMainContent">
      <div className="container-fluid">
        <AboutCompany aboutSection={props.data.aboutSection} />
        <ProductCompanies
          productCompanies={props.data.productCompanies.edges}
        />
        <CatalogSlider sliderCategories={props.data.sliderCategories.edges} />
      </div>
    </React.Fragment>
  </DefaultLayout>
);

export const IndexPageQuery = graphql`
  query IndexPageQuery {
    ...defaultLayout
    ...specialOffersSlider
    ...productCompanies
    ...sliderCategories
    ...aboutSection
  }
`;
