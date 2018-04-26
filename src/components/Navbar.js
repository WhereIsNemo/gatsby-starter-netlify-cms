import React from 'react';
import Link from 'gatsby-link';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Главная
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/catalog">
            Каталог
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/delivery">
            Доставка и оплата
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/warehouse">
            Склад самовывоза
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/testimonials">
            Отзывы
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">
            Контакты
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
