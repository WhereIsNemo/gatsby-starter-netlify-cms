import React from 'react';
import Link from 'gatsby-link';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faBars from '@fortawesome/fontawesome-free-solid/faBars';
import styles from './styles.module.scss';

const Navbar = () => {
  const links = [
    {
      text: "Главная",
      to: "/",
    },
    {
      text: "Каталог",
      to: "/catalog",
    },
    {
      text: "Доставка и оплата",
      to: "/delivery",
    },
    {
      text: "Склад самовывоза",
      to: "/warehouse",
    },
    {
      text: "Отзывы",
      to: "/testimonials",
    },
    {
      text: "Контакты",
      to: "/contact",
    },
  ];

  const menuItemsMarkup = links.map(({ text, to }, index) =>
    <li key={index}>
      <Link className={styles.menuLink} to={to}>
        {text}
      </Link>
    </li>
  );

  return (
    <nav>
      <button
        className={styles.toggler}
        type="button"
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      <ul className={styles.menu}>
        {menuItemsMarkup}
      </ul>
    </nav>
  )
};;

export default Navbar;
