import React from 'react';
import Link from 'gatsby-link';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faTruck from '@fortawesome/fontawesome-free-solid/faTruck';
import faPhone from '@fortawesome/fontawesome-free-solid/faPhone';
import Navbar from '../Navbar';
import Logo from '../Logo';
import IconWithText from '../IconWithText';
import OrderCallbackButton from '../OrderCallbackButton';
import styles from './styles.module.scss';

const Header = () => (
  <header className="header">
    <div className={styles.top}>
      <div className="container">
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
              className={styles.headerBackCall}
              icon={faPhone}
              topText={<a href="tel:+7-000-00-00">+7-000-00-00</a>}
              bottomText={<OrderCallbackButton />}
            />
          </div>
        </div>
      </div>
    </div>
    <div className={styles.bottom}>
      <div className="container">
        <Navbar />
      </div>
    </div>
  </header>
);

export default Header;
