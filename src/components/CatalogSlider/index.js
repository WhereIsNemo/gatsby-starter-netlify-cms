import React from 'react'
import Swiper from 'swiper'
import Link from 'gatsby-link'
import 'swiper/dist/css/swiper.css'
import styles from './styles.module.scss'

export default class CatalogSlider extends React.Component {
  render() {
    const slides = this.props.sliderCategories.map(({ node }, index) =>
      <div key={index} className="swiper-slide">
        <div className="catalog-slide">
          <img src={node.frontmatter.image} />
          <h3 className="catalog-slider__title">
            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
          </h3>
        </div>
      </div>
    );

    return (
      <div className="section">
        <h2 className="section__title">Смотрите каталог</h2>
        <div className="catalog-slider">
          <div className="swiper-container" ref="slider">
            <div className="swiper-wrapper">
              {slides}
            </div>

            <div className="swiper-button-prev" />
            <div className="swiper-button-next" />
          </div>
        </div>
      </div>
    )
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
    })
  }
}

export const CatalogSliderQuery = graphql`
  fragment sliderCategories on RootQueryType {
    sliderCategories: allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "category-page"}}}) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            image
          }
        }
      }
    }
  }
`