import React from 'react'
import SpecialOffersSlider from '../components/SpecialOffersSlider'
import ProductCompanies from '../components/ProductCompanies'
import CatalogSlider from '../components/CatalogSlider'
import CatalogAside from '../components/CatalogAside'
import AboutCompany from '../components/AboutCompany'

export default class IndexPage extends React.Component {
  render() {
    console.log(this.props);
    
    return (
      <div className="container">
        <div className="row">
          <div className="col col-12 col-md-3">
            <CatalogAside categories={this.props.data.asideCategories.edges} />
          </div>
          <div className="col col-12 col-md-9">
            <SpecialOffersSlider specialOffers={this.props.data.specialOffersSlider.edges} />
          </div>
        </div>
        <ProductCompanies productCompanies={this.props.data.productCompanies.edges} />
        <CatalogSlider sliderCategories={this.props.data.sliderCategories.edges} />
        <AboutCompany aboutSection={this.props.data.aboutSection} />
      </div>
    )
  }
}

export const IndexPageQuery = graphql`
  query IndexPageQuery {
    ...asideCategories
    ...specialOffersSlider
    ...productCompanies
    ...sliderCategories
    ...aboutSection
  }
`
