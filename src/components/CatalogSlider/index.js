import React from 'react';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.css';
import styles from './styles.module.scss';

export default class CatalogSlider extends React.Component {
  render() {
    return (
      <div className="section">
        <h2 className="section__title">Смотрите каталог</h2>
        <div className="swiper-container" ref="slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img src="http://via.placeholder.com/300x300" />
            </div>
            <div className="swiper-slide">
              <img src="http://via.placeholder.com/300x300" />
            </div>
            <div className="swiper-slide">
              <img src="http://via.placeholder.com/300x300" />
            </div>
            <div className="swiper-slide">
              <img src="http://via.placeholder.com/300x300" />
            </div>
            <div className="swiper-slide">
              <img src="http://via.placeholder.com/300x300" />
            </div>
            <div className="swiper-slide">
              <img src="http://via.placeholder.com/300x300" />
            </div>
          </div>
          <div className="swiper-pagination"></div>

          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    new Swiper(this.refs.slider, {
      slidesPerView: 4,
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
};
