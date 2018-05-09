import React from 'react';
import Link from 'gatsby-link';
import Glide, { Controls, Autoplay, Breakpoints, Anchors } from '@glidejs/glide/dist/glide.modular.esm';
import "@glidejs/glide/dist/css/glide.core.min.css";
import Img from "gatsby-image";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faChevronLeft from '@fortawesome/fontawesome-free-solid/faChevronLeft';
import faChevronRight from '@fortawesome/fontawesome-free-solid/faChevronRight';
import Preview from '../Preview';

export default class CatalogSlider extends React.Component {
  render() {
    const slides = [];
    const bullets = [];

    this.props.sliderCategories.forEach((sliderCategory, index) => {
      const { node } = sliderCategory;

      slides.push(
        <div key={index} className="glide__slide">
          <Preview node={node} />
        </div>
      );
    });

    return (
      <div className="section">
        <h2 className="section__title">Смотрите каталог</h2>
        <div className="catalog-slider">
          <div className="glide" ref="slider">
            <div data-glide-el="track" className="glide__track">
              <div className="glide__slides">{slides}</div>
            </div>

            <div className="glide__arrows" data-glide-el="controls">
              <button className={`btn glide__arrow glide__arrow--prev`} data-glide-dir="<">
                <span className="sr-only">Предыдущий</span>
                <FontAwesomeIcon className={`glide__arrow-icon`} icon={faChevronLeft} />
              </button>
              <button className={`btn glide__arrow glide__arrow--next`} data-glide-dir=">">
                <span className="sr-only">Следущий</span>
                <FontAwesomeIcon className={`glide__arrow-icon`} icon={faChevronRight} />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    new Glide(this.refs.slider, {
      swipeThreshold: false,
      keyboard: false,
      perView: 4,
      gap: 30,
      focusAt: "center",
      animationDuration: 1000,
    }).mount({ Controls, Autoplay, Breakpoints });
  }
}

export const CatalogSliderQuery = graphql`
  fragment sliderCategories on RootQueryType {
    sliderCategories: allMarkdownRemark(
      filter: { frontmatter: { contentType: { eq: "category" } } }
    ) {
      edges {
        node {
          childrenImageSharp {
            resolutions(width: 255, quality: 85) {
              ...GatsbyImageSharpResolutions_withWebp_noBase64
            }
          }
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
