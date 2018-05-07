import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import styles from './styles.module.scss';

const IconWithText = ({ icon, text, className }) => (
  <div className={`${styles.iconWithText} ${className}`}>
    <FontAwesomeIcon icon={icon} className={styles.icon} />
    <div>
      <div className={styles.text}>{text}</div>
    </div>
  </div>
);

export default IconWithText;
