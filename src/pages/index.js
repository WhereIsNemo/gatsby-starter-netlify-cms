import React from 'react';
import Helmet from 'react-helmet';
import SpecialOffersSlider from '../components/SpecialOffersSlider';
import ProductCompanies from '../components/ProductCompanies';
import CatalogSlider from '../components/CatalogSlider';
import CatalogAside from '../components/CatalogAside';
import AboutCompany from '../components/AboutCompany';
import DefaultLayout from '../components/Layout';

export default props => {
  const categoriesString = props.data.sliderCategories.edges.reduce(
    (accumulator, currentValue, currentIndex, array) => {
      if (currentIndex === 0) {
        return `${currentValue.node.frontmatter.title}`;
      } else {
        return `${accumulator}, ${currentValue.node.frontmatter.title}`;
      }
    },
    ''
  );

  return (
    <DefaultLayout data={props.data}>
      <React.Fragment key="mainContent">
        <Helmet>
          <html lang="ru" />
          <title>220 Plus</title>
          <meta
            name="description"
            content={`220Plus - электроинструменты в Омске и Омской области: ${categoriesString}.`}
          />
          <meta
            name="keywords"
            content={`Омск, Омская область, электроинструменты, ${categoriesString}, доставка`}
          />
        </Helmet>
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
};

export const IndexPageQuery = graphql`
  query IndexPageQuery {
    ...defaultLayout
    ...specialOffersSlider
    ...productCompanies
    ...sliderCategories
    ...aboutSection
    metaCategories: allMarkdownRemark(
      filter: { frontmatter: { contentType: { eq: "category" } } }
      sort: { fields: [frontmatter___title], order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
