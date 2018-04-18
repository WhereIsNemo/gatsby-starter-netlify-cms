import React from 'react'
import Link from 'gatsby-link'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faVk from '@fortawesome/fontawesome-free-brands/faVk'
import styles from './styles.module.scss'

const Footer = () => (
  <footer className={styles.footer}>
    <div className="container">
      <div className="row">
        <div className="col col-12 col-md">
          <div className="footer__col footer-col">
            <h3 className="footer-col__title">Информация</h3>
            <div className="footer-col__content">
              <ul className="menu">
                <li className="menu-item">
                  <Link className="nav-link" to="/delivery">
                    Доставка и оплата
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="nav-link" to="/warehouse">
                    Cамовывоз
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="nav-link" to="/testimonials">
                    Отзывы
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col col-12 col-md">
          <div className="footer__col footer-col">
            <h3 className="footer-col__title">Присоединяйтесь</h3>
            <div className="footer-col__content">
              <ul className="menu">
                <li className="menu-item">
                  <Link className="nav-link" to="/">
                    <FontAwesomeIcon icon={faVk} />
                    Вконтакте
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col col-12 col-md">
          <div className="footer__col footer-col">
            <h3 className="footer-col__title">Контакты</h3>
            <div className="footer-col__content">
              <ul className="menu">
                <li className="menu-item">г. Омск</li>
                <li className="menu-item">
                  Время работы: понедельник-воскресенье, 9-22
                </li>
                <li className="menu-item">
                  <a href="whatsapp://send?abid=[users name]&text=[message text]">
                    WhatsUp
                  </a>
                </li>
                <li className="menu-item">
                  <a href="viber://pa?chatURI=[public account URI]&text=[message text]">
                    Viber
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
