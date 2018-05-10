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
  <header>
    <div className={styles.top}>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col col-12 col-md">
            <div className={styles.headerLogo}>
              <Logo />
            </div>
          </div>
          <div className="col col-12 col-md-4 col-xl-3">
            <div className={styles.headerDelivery}>
              <IconWithText
                icon={faTruck}
                text="Доставка: Омск, Калачинск"
              />
            </div>
          </div>
          <div className="col col-12 col-md-5 col-lg-4 col-xl-3">
            <div className={styles.headerCallInfo}>
              <div className={styles.headerBackCall}>
                <a href="tel:+7-929-364-46-00">
                  <IconWithText
                    icon={faPhone}
                    text="+7-929-364-46-00"
                  />
                </a>
              </div>
              <OrderCallbackButton btnClasses="btn--filled" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.bottom}>
      <div className="container-fluid">
        <Navbar />
      </div>
    </div>
  </header>
);

export default Header;
