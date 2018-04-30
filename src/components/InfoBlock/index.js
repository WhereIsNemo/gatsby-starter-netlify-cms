import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import styles from './styles.module.scss';

const InfoBlock = ({ icon, title, description, className }) => (
  <div className={`${styles.infoBlock} ${className}`}>
    <div className={styles.infoBlock__iconWrapper}>
      <FontAwesomeIcon className={styles.infoBlock__icon} icon={icon} />
    </div>
    <h3 className={styles.infoBlock__title}>{title}</h3>
    <div className={styles.description}>{description}</div>
  </div>
);

export default InfoBlock;
