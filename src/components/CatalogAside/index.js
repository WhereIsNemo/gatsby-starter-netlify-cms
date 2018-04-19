import React from 'react'
import Link from 'gatsby-link'

const CatalogAside = () => (
  <div className="catalog--aside">
    <div className="list-group">
      <div className="list-group-item">Категории</div>
      <Link
        className="list-group-item list-group-item-action"
        to="/catalog/first-category"
      >Первая категория</Link>
      <Link
        className="list-group-item list-group-item-action"
        to="/catalog/second-category"
      >Вторая категория</Link>
      <Link
        className="list-group-item list-group-item-action"
        to="/catalog/third-category"
      >Третья категория</Link>
    </div>
  </div>
)

export default CatalogAside
