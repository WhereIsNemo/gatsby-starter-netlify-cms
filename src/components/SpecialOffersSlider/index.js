import React from 'react';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.css';
import styles from './styles.module.scss';

export default class Slider extends React.Component {
  render() {
    const { specialOffers } = this.props;

    const slides = specialOffers.map(({ node }, index) => (
      <div key={index} className="swiper-slide">
        <img src={node.frontmatter.image} />
        {console.log(node.children)}
      </div>
    ));

    return (
      <div className="swiper-container" ref="slider">
        <div className="swiper-wrapper">{slides}</div>
        <div className="swiper-pagination" />

        <div className="swiper-button-prev" />
        <div className="swiper-button-next" />
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
}

export const specialOffersSliderQuery = graphql`
  fragment specialOffersSlider on RootQueryType {
    specialOffersSlider: allMarkdownRemark(
      filter: { frontmatter: { contentType: { eq: "specialOffer" } } }
    ) {
      edges {
        node {
          childrenImageSharp {
            sizes {
              src
              srcSet
            }
          }
          frontmatter {
            image
          }
        }
      }
    }
  }
`;
