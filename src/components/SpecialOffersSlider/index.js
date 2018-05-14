import React from 'react';
import Img from 'gatsby-image';
import Glide, {
  Controls,
  Autoplay,
} from '@glidejs/glide/dist/glide.modular.esm';
import '@glidejs/glide/dist/css/glide.core.min.css';
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
        <button
          key={index}
          className={`glide__bullet`}
          data-glide-dir={`=${index}`}
        />
      );
    });

    return (
      <div className={`glide ${styles.slider}`} ref="slider">
        <div data-glide-el="track" className="glide__track">
          <div className="glide__slides">{slides}</div>
        </div>

        <div className={`glide__arrows`} data-glide-el="controls">
          <button
            className={`btn glide__arrow glide__arrow--prev`}
            data-glide-dir="<"
          >
            <span className="sr-only">Предыдущий</span>
            <FontAwesomeIcon
              className={`glide__arrow-icon`}
              icon={faChevronLeft}
            />
          </button>
          <button
            className={`btn glide__arrow glide__arrow--next`}
            data-glide-dir=">"
          >
            <span className="sr-only">Следущий</span>
            <FontAwesomeIcon
              className={`glide__arrow-icon`}
              icon={faChevronRight}
            />
          </button>
        </div>
        <div className={`glide__bullets`} data-glide-el="controls[nav]">
          {bullets}
        </div>
      </div>
    );
  }
  componentDidMount() {
    new Glide(this.refs.slider, {
      autoplay: 7000,
      animationDuration: 1000,
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
            sizes(maxWidth: 880, maxHeight: 500, quality: 85, toFormat: JPG) {
              ...GatsbyImageSharpSizes_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`;
