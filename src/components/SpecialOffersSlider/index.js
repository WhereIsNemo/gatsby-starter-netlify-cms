import React from 'react';
import Img from "gatsby-image";
import Glide from '@glidejs/glide'
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";
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
        <button key={index} className="glide__bullet" data-glide-dir={`=${index}`}></button>
      );
    });

    return (
      <div className="glide" ref="slider">
        <div data-glide-el="track" className="glide__track">
          <div className="glide__slides">{slides}</div>
        </div>

        <div className="glide__arrows" data-glide-el="controls">
          <button className={`glide__arrow glide__arrow--prev`} data-glide-dir="<">prev</button>
          <button className={`glide__arrow glide__arrow--next ${styles.sliderArrowNext}`} data-glide-dir=">">next</button>
        </div>
        <div className="glide__bullets" data-glide-el="controls[nav]">
          {bullets}
        </div>
      </div>
    );
  }
  componentDidMount() {
    new Glide(this.refs.slider, {
      autoplay: 7000,
      animationDuration: 2000,
    }).mount();
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
            sizes(maxWidth: 880, quality: 85) {
              ...GatsbyImageSharpSizes_withWebp
            }
          }
        }
      }
    }
  }
`;
