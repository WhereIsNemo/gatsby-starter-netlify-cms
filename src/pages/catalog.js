import React from 'react';
import CatalogAside from '../components/CatalogAside';
import CatalogGrid from '../components/CatalogGrid';

export default class CatalogPage extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col col-12 col-md-3">
            <CatalogAside categories={this.props.data.asideCategories.edges} />
          </div>
          <div className="col col-12 col-md-9">
            <CatalogGrid
              categories={this.props.data.catalogGridCategories.edges}
            />
          </div>
        </div>
      </div>
    );
  }
}

export const CatalogPageQuery = graphql`
  query CatalogPageQuery {
    ...catalogGridCategories
  }
`;
