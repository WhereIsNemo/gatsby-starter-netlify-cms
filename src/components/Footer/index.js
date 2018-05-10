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
import OrderCallbackButton from '../OrderCallbackButton';
import styles from './styles.module.scss';

export default () => (
  <footer className={styles.footer}>
    <div className="container-fluid">
      <div className="overflow-container">
        <div className={`row ${styles.row}`}>
          <div className={`col col-12 col-md ${styles.col}`}>
            <h3 className={styles.colTitle}>Информация</h3>
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
          <div className={`col col-12 col-md ${styles.col}`}>
            <h3 className={styles.colTitle}>Присоединяйтесь</h3>
            <ul className={styles.menu}>
              <li className={styles.menuItem}>
                <a className={styles.menuLink} href="https://vk.com/club147409633" target="_blank">
                  <IconWithText
                    icon={faVk}
                    text="Вконтакте"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className={`col col-12 col-md ${styles.col}`}>
            <h3 className={styles.colTitle}>Контакты</h3>
            <ul className={styles.menu}>
              <li className={styles.menuItem}>
                <a className={styles.menuLink} href="tel:+7-929-364-46-00">
                  <IconWithText
                    icon={faPhone}
                    text="+7-929-364-46-00"
                  />
                </a>
              </li>
              <li className={styles.menuItem}>
                <OrderCallbackButton btnClasses={styles.menuLink}>
                  <IconWithText
                    icon={faPhoneVolume}
                    text="Заказать обратный звонок"
                  />
                </OrderCallbackButton>
              </li>
              <li className={styles.menuItem}>
                <a className={styles.menuLink} href="mailto:220pluse@gmail.com">
                  <IconWithText
                    icon={faEnvelope}
                    text="220pluse@gmail.com"
                  />
                </a>
              </li>
              <li className={styles.menuItem}>
                <a className={styles.menuLink} href="https://api.whatsapp.com/send?phone=79293644600">
                  <IconWithText
                    icon={faWhatsapp}
                    text="WhatsUp: +7-929-364-46-00"
                  />
                </a>
              </li>
              <li className={styles.menuItem}>
                <a className={styles.menuLink} href="viber://chat?number=79293644600">
                  <IconWithText
                    icon={faViber}
                    text="Viber: +7-929-364-46-00"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
