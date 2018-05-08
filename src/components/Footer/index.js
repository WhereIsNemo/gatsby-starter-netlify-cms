import React from 'react';
import Link from 'gatsby-link';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faVk from '@fortawesome/fontawesome-free-brands/faVk';
import faWhatsapp from '@fortawesome/fontawesome-free-brands/faWhatsapp';
import faViber from '@fortawesome/fontawesome-free-brands/faViber';
import faLocationArrow from '@fortawesome/fontawesome-free-solid/faLocationArrow';
import faClock from '@fortawesome/fontawesome-free-solid/faClock';
import faPhone from '@fortawesome/fontawesome-free-solid/faPhone';
import faPhoneVolume from '@fortawesome/fontawesome-free-solid/faPhoneVolume';
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope';
import IconWithText from '../IconWithText';
import styles from './styles.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <div className="container">
      <div className="row">
        <div className="col col-12 col-md">
          <div>
            <h3 className={styles.colTitle}>Информация</h3>
            <div>
              <ul className={styles.menu}>
                <li className={styles.menuItem}>
                  <Link className={styles.menuLink} to="/delivery">
                    Доставка и оплата
                  </Link>
                </li>
                <li className={styles.menuItem}>
                  <Link className={styles.menuLink} to="/warehouse">
                    Cамовывоз
                  </Link>
                </li>
                <li className={styles.menuItem}>
                  <Link className={styles.menuLink} to="/testimonials">
                    Отзывы
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col col-12 col-md">
          <div>
            <h3 className={styles.colTitle}>Присоединяйтесь</h3>
            <div>
              <ul className={styles.menu}>
                <li className={styles.menuItem}>
                  <Link className={styles.menuLink} to="/">
                    <IconWithText
                      icon={faVk}
                      text="Вконтакте"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col col-12 col-md">
          <div>
            <h3 className={styles.colTitle}>Контакты</h3>
            <div>
              <ul className={styles.menu}>
                <li className={styles.menuItem}>
                  <FontAwesomeIcon icon={faLocationArrow} />
                  г. Омск
                </li>
                <li className={styles.menuItem}>
                  <FontAwesomeIcon icon={faClock} />
                  Время работы: понедельник-воскресенье, 9-22
                </li>
                <li className={styles.menuItem}>
                  <FontAwesomeIcon icon={faPhone} />
                  <a href="viber://pa?chatURI=[public account URI]&text=[message text]">
                    Tелефон
                  </a>
                </li>
                <li className={styles.menuItem}>
                  <FontAwesomeIcon icon={faPhoneVolume} />
                  <a href="viber://pa?chatURI=[public account URI]&text=[message text]">
                    Заказать обратный звонок
                  </a>
                </li>
                <li className={styles.menuItem}>
                  <FontAwesomeIcon icon={faWhatsapp} />
                  <a href="whatsapp://send?abid=[users name]&text=[message text]">
                    WhatsUp
                  </a>
                </li>
                <li className={styles.menuItem}>
                  <FontAwesomeIcon icon={faViber} />
                  <a href="viber://pa?chatURI=[public account URI]&text=[message text]">
                    Viber
                  </a>
                </li>
                <li className={styles.menuItem}>
                  <FontAwesomeIcon icon={faEnvelope} />
                  <a href="viber://pa?chatURI=[public account URI]&text=[message text]">
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
