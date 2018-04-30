import React from 'react';
import faPhone from '@fortawesome/fontawesome-free-solid/faPhone';
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope';
import InfoBlock from '../InfoBlock';
import styles from './styles.module.scss';

const ContactInfoBlocks = () => (
  <div className="section services">
    <div className="container">
      <div className="row">
        <div className="col col-12 col-md-6">
          <InfoBlock
            className={styles.services__service}
            icon={faPhone}
            title="Звоните"
            description="+7 000 00 00"
          />
        </div>
        <div className="col col-12 col-md-6">
          <InfoBlock
            className={styles.services__service}
            icon={faEnvelope}
            title="Пишите"
            description="info@220plus.ru"
          />
        </div>
      </div>
    </div>
  </div>
);

export default ContactInfoBlocks;
