import React from 'react';
import CatalogAside from '../components/CatalogAside';

export const ProductPageTemplate = ({ 
  title, 
  image, 
  category, 
  description, 
  asideCategories,
  price,
}) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col col-12 col-md-3">
          <CatalogAside categories={asideCategories} />
        </div>
        <div className="col col-12 col-md-9">
          <div className="row">
            <div className="col col-12 col-md-6"><img src={image} /></div>
            <div className="col col-12 col-md-6">
              <h1>{title}</h1>
              <div>{price}</div>
              <div>{category}</div>
              <div>{description}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <ProductPageTemplate 
      title={post.frontmatter.title}
      image={post.frontmatter.image}
      category={post.frontmatter.categories}
      description={post.frontmatter.description}
      price={post.frontmatter.price}
      asideCategories={data.asideCategories.edges}
    />
  );
};

export default ProductPage;

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        categories
        image
        description
        price
      }
    }
    ...asideCategories
  }
`;
