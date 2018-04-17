import React from 'react';
import styles from './styles.module.scss';

const ProductsCompanies = () => (
  <div className="section">
    <h2 className="section__title">Компании, продукцию которых мы сбываем</h2>
    <div className={styles.productsCompanies__container}>
      <div className={`${styles.productsCompanies__row} row`}>
        <div className={`${styles.productsCompanies__col} col col-12 col-sm-6 col-md-3`}>
          <div className="product-company">
            <img src="http://via.placeholder.com/300x300" />
          </div>
        </div>
        <div className={`${styles.productsCompanies__col} col col-12 col-sm-6 col-md-3`}>
          <div className="product-company">
            <img src="http://via.placeholder.com/300x300" />
          </div>
        </div>
        <div className={`${styles.productsCompanies__col} col col-12 col-sm-6 col-md-3`}>
          <div className="product-company">
            <img src="http://via.placeholder.com/300x300" />
          </div>
        </div>
        <div className={`${styles.productsCompanies__col} col col-12 col-sm-6 col-md-3`}>
          <div className="product-company">
            <img src="http://via.placeholder.com/300x300" />
          </div>
        </div>
        <div className={`${styles.productsCompanies__col} col col-12 col-sm-6 col-md-3`}>
          <div className="product-company">
            <img src="http://via.placeholder.com/300x300" />
          </div>
        </div>
        <div className={`${styles.productsCompanies__col} col col-12 col-sm-6 col-md-3`}>
          <div className="product-company">
            <img src="http://via.placeholder.com/300x300" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ProductsCompanies;