import React from 'react';
import faPhone from '@fortawesome/fontawesome-free-solid/faPhone';
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope';
import InfoBlock from '../InfoBlock';
import styles from './styles.module.scss';

const ContactInfoBlocks = () => (
  <div className="section services">
    <div className="container-fluid">
      <div className="row">
        <div className="col col-12 col-md-6">
          <div className={styles.service}>
            <a href="tel:+7-929-364-46-00">
              <InfoBlock
                className={styles.serviceBlock}
                icon={faPhone}
                title="Звоните"
                description="+7-929-364-46-00"
              />
            </a>
          </div>
        </div>
        <div className="col col-12 col-md-6">
          <div className={styles.service}>
            <a href="mailto:220pluse@gmail.com">
              <InfoBlock
                className={styles.serviceBlock}
                icon={faEnvelope}
                title="Пишите"
                description="220pluse@gmail.com"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ContactInfoBlocks;
