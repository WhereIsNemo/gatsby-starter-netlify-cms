import React from 'react';
import CatalogAside from '../components/CatalogAside';
import { HTMLContent } from '../components/Content';

export const ProductPageTemplate = ({ 
  title, 
  image, 
  category, 
  body, 
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
              <HTMLContent content={body} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductPage = ({ data }) => {
  const { markdownRemark: post } = data;
  console.log(data);

  return (
    <ProductPageTemplate 
      title={post.frontmatter.title}
      image={post.frontmatter.image}
      category={post.frontmatter.categories}
      body={post.html}
      price={post.frontmatter.price}
      asideCategories={data.asideCategories.edges}
    />
  );
};

export default ProductPage;

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        categories
        image
        price
      }
    }
    ...asideCategories
  }
`;
