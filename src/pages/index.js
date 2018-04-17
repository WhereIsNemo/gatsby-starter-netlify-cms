import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Slider from '../components/Slider';
import ProductsCompanies from '../components/ProductsCompanies';
import CatalogSlider from '../components/CatalogSlider';
import Services from '../components/Services';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col col-12 col-md-3">
            <div className="catalog--aside">
              <div className="list-group">
                <div className="list-group-item">Категории</div>
                <Link className="list-group-item list-group-item-action" to="/catalog/first-category">Первая категория</Link>
                <Link className="list-group-item list-group-item-action" to="/catalog/second-category">Вторая категория</Link>
                <Link className="list-group-item list-group-item-action" to="/catalog/third-category">Третья категория</Link>
              </div>
            </div>
          </div>
          <div className="col col-12 col-md-9">
            <Slider />
          </div>
        </div>
        <ProductsCompanies />
        <CatalogSlider />
        <div className="section about-company">
          <h1 className="section__title">220Plus - электротехника</h1>
          <div className="section__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        </div>
        <Services />
      </div>
    )
  }
}
