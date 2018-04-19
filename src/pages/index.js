import React from 'react'
import Slider from '../components/Slider'
import ProductsCompanies from '../components/ProductsCompanies'
import CatalogSlider from '../components/CatalogSlider'
import CatalogAside from '../components/CatalogAside'
import AboutCompany from '../components/AboutCompany'

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col col-12 col-md-3">
            <CatalogAside />
          </div>
          <div className="col col-12 col-md-9">
            <Slider />
          </div>
        </div>
        <ProductsCompanies />
        <CatalogSlider />
        <AboutCompany />
      </div>
    )
  }
}
