import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faTruck from '@fortawesome/fontawesome-free-solid/faTruck';
import faPhone from '@fortawesome/fontawesome-free-solid/faPhone';
import Link from 'gatsby-link';
import Navbar from '../Navbar';
import styles from './Header.module.scss';

const Header = () => (
    <header class="header">
        <div className="container">
            <div className={styles.top}>
                <div className="row align-items-center">
                    <div className="col col-12 col-md">
                        <div className="logo">
                            <Link to="/">
                                <img src="http://via.placeholder.com/140x48" />
                            </Link>
                        </div>
                    </div>
                    <div className="col col-12 col-md-3">
                        <div className="header__delivery">
                            <FontAwesomeIcon icon={faTruck} /> Доставка: Омск, Калачинск
                        </div>
                    </div>
                    <div className="col col-12 col-md-3">
                        <div className="header__back-call">
                            <FontAwesomeIcon icon={faPhone} /> Заказать обратный звонок
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.top}>
                <Navbar />
            </div>
        </div>
    </header>
);

export default Header;
