import React from 'react';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.css';
import styles from './styles.module.scss';

export default class Slider extends React.Component {
  render() {
    return (
      <div className="swiper-container" ref="slider">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img src="http://via.placeholder.com/880x320" />
          </div>
          <div className="swiper-slide">
            <img src="http://via.placeholder.com/880x320" />
          </div>
          <div className="swiper-slide">
            <img src="http://via.placeholder.com/880x320" />
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
      loop: true,
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
