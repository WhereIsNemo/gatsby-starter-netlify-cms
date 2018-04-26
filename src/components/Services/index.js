import React from 'react';
import faTruck from '@fortawesome/fontawesome-free-solid/faTruck';
import faThumbsUp from '@fortawesome/fontawesome-free-solid/faThumbsUp';
import faComments from '@fortawesome/fontawesome-free-solid/faComments';
import Service from '../Service';
import styles from './styles.module.scss';

const Services = () => (
  <div className="section services">
    <div className="container">
      <div className="row">
        <div className="col col-12 col-md-4">
          <Service
            className={styles.services__service}
            icon={faTruck}
            title="Доставка в течении суток"
            description="Омск, Калачинск"
          />
        </div>
        <div className="col col-12 col-md-4">
          <Service
            className={styles.services__service}
            icon={faThumbsUp}
            title="Гарантия на всё"
            description="1-3 года"
          />
        </div>
        <div className="col col-12 col-md-4">
          <Service
            className={styles.services__service}
            icon={faComments}
            title="Консультация"
            description="с 9:00 до 22:00"
          />
        </div>
      </div>
    </div>
  </div>
);

export default Services;
