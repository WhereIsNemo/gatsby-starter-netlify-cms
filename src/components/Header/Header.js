import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faTruck from '@fortawesome/fontawesome-free-solid/faTruck';
import faPhone from '@fortawesome/fontawesome-free-solid/faPhone';
import Link from 'gatsby-link';
import Navbar from '../Navbar';
import Logo from '../Logo/Logo';
import IconWithText from '../IconWithText/IconWithText';
import styles from './Header.module.scss';

const Header = () => (
  <header className="header">
    <div className="container">
      <div className={styles.top}>
        <div className="row align-items-center">
          <div className="col col-12 col-md">
            <Logo />
          </div>
          <div className="col col-12 col-md-3">
            <IconWithText
              className="header__delivery"
              icon={faTruck}
              topText="Доставка: Омск, Калачинск"
            />
          </div>
          <div className="col col-12 col-md-3">
            <IconWithText
              className="header__back-call"
              icon={faPhone}
              topText={
                <a href="tel:+7-000-00-00">+7-000-00-00</a>
              }
              bottomText="Заказать обратный звонок"
            />
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <Navbar />
      </div>
    </div>
  </header>
);

export default Header;
