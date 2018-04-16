import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col col-12 col-md-3">
            <div className="section">
            <div className="list-group">
              <div className="list-group-item">Категории</div>
              <Link className="list-group-item list-group-item-action" to="/catalog/first-category">Первая категория</Link>
              <Link className="list-group-item list-group-item-action" to="/catalog/second-category">Вторая категория</Link>
              <Link className="list-group-item list-group-item-action" to="/catalog/third-category">Третья категория</Link>
            </div>
            </div>
          </div>
          <div className="col col-12 col-md-9"></div>
        </div>
      </div>
    )
  }
}
