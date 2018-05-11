import React from 'react';
import Link from 'gatsby-link';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faBars from '@fortawesome/fontawesome-free-solid/faBars';
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes';
import styles from './styles.module.scss';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMenuOpen: false,
    };
  }

  handleMenuToggle = () => {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen,
    })
  }

  handleLinkClick = () => {
    this.setState({
      isMenuOpen: false,
    })
  }

  render() {
    const { isMenuOpen } = this.state;

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
        <Link className={styles.menuLink} to={to} onClick={this.handleLinkClick}>
          {text}
        </Link>
      </li>
    );

    return (
      <nav>
        <button
          className={styles.toggler}
          type="button"
          onClick={this.handleMenuToggle}
        >
          {isMenuOpen && <FontAwesomeIcon icon={faTimes} />}
          {!isMenuOpen && <FontAwesomeIcon icon={faBars} />}
        </button>

        <ul className={`${ isMenuOpen && 'isVisible'} ${styles.menu}`}>
          {menuItemsMarkup}
        </ul>
      </nav>
    );
  }
}
