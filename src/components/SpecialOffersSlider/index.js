import React from 'react';
import Img from "gatsby-image";
import Glide, { Controls, Autoplay } from '@glidejs/glide/dist/glide.modular.esm';
import "@glidejs/glide/dist/css/glide.core.min.css";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faChevronLeft from '@fortawesome/fontawesome-free-solid/faChevronLeft';
import faChevronRight from '@fortawesome/fontawesome-free-solid/faChevronRight';
import styles from './styles.module.scss';

export default class Slider extends React.Component {
  render() {
    const { specialOffers } = this.props;

    const slides = [];
    const bullets = [];

    specialOffers.forEach((specialOffer, index) => {
      slides.push(
        <div key={index} className="glide__slide">
          <Img sizes={specialOffer.node.childrenImageSharp[0].sizes} />
        </div>
      );

      bullets.push(
        <button key={index} className={`glide__bullet ${styles.paginationDot}`} data-glide-dir={`=${index}`}></button>
      );
    });

    return (
      <div className={`glide`} ref="slider">
        <div data-glide-el="track" className="glide__track">
          <div className="glide__slides">{slides}</div>
        </div>

        <div className={`glide__arrows`} data-glide-el="controls">
          <button 
            className={`btn glide__arrow glide__arrow--prev ${styles.sliderArrow} ${styles.sliderArrowPrev}`} 
            data-glide-dir="<"
          >
            <span className="sr-only">Предыдущий</span>
            <FontAwesomeIcon className={styles.sliderArrowIcon} icon={faChevronLeft} />
          </button>
          <button 
            className={`btn glide__arrow glide__arrow--next ${styles.sliderArrow} ${styles.sliderArrowNext}`} 
            data-glide-dir=">"
          >
            <span className="sr-only">Следущий</span>
            <FontAwesomeIcon className={styles.sliderArrowIcon} icon={faChevronRight} />
          </button>
        </div>
        <div className={`glide__bullets ${styles.sliderPagination}`} data-glide-el="controls[nav]">
          {bullets}
        </div>
      </div>
    );
  }
  componentDidMount() {
    new Glide(this.refs.slider, {
      autoplay: 7000,
      animationDuration: 1500,
      swipeThreshold: false,
      keyboard: false,
    }).mount({ Controls, Autoplay });
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
            sizes(maxWidth: 880, maxHeight: 400, quality: 85) {
              ...GatsbyImageSharpSizes_withWebp
            }
          }
        }
      }
    }
  }
`;
