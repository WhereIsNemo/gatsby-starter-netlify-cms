import React from 'react';
import Link from 'gatsby-link';
import Glide from '@glidejs/glide'
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";
import Img from "gatsby-image";
import styles from './styles.module.scss';

export default class CatalogSlider extends React.Component {
  render() {
    const slides = [];
    const bullets = [];

    this.props.sliderCategories.forEach((sliderCategory, index) => {
      const { node } = sliderCategory;

      slides.push(
        <div key={index} className="glide__slide">
          <div className="catalog-slide">
            <Img resolutions={node.childrenImageSharp[0].resolutions} />
            <h3 className="catalog-slider__title">
              <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
            </h3>
          </div>
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
              <button className={`glide__arrow glide__arrow--prev`} data-glide-dir="<">prev</button>
              <button className={`glide__arrow glide__arrow--next ${styles.sliderArrowNext}`} data-glide-dir=">">next</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    new Glide(this.refs.slider, {
      perView: 4,
      gap: 30,
      focusAt: "center",
      autoplay: 4500,
      animationDuration: 1000,
    }).mount();
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
              ...GatsbyImageSharpResolutions_withWebp
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
