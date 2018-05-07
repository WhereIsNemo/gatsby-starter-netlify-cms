import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import styles from './styles.module.scss';

const IconWithText = ({ icon, topText, bottomText, className }) => (
  <div className={`${styles.iconWithText} ${className}`}>
    <FontAwesomeIcon icon={icon} className={styles.icon} />
    <div>
      <div className={styles.topText}>{topText}</div>
      {bottomText && (<div>{bottomText}</div>)}
    </div>
  </div>
);

export default IconWithText;
