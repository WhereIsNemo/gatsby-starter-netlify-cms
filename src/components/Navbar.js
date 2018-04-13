import React from 'react';
import Link from 'gatsby-link';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <Link className="nav-link" to="/">
            Главная
          </Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link" to="/catalog">
            Каталог
          </Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link" to="/delivery">
            Доставка и оплата
          </Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link" to="/warehouse">
            Склад самовывоза
          </Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link" to="/testimonials">
            Отзывы
          </Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link" to="/contact">
            Контакты
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
