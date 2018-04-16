import React from 'react';
import styles from './styles.module.scss';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.css';

export default class Slider extends React.Component {
  render() {
    return (
      <div className="swiper-container" ref="slider">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img className={styles.img} src="http://via.placeholder.com/1400x600" />
          </div>
          <div className="swiper-slide">
            <img className={styles.img} src="http://via.placeholder.com/1500x500" />
          </div>
          <div className="swiper-slide">
            <img className={styles.img} src="http://via.placeholder.com/1300x700" />
          </div>
        </div>
        <div className="swiper-pagination"></div>

        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    );
  }
  componentDidMount() {
    new Swiper(this.refs.slider, {
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
};
