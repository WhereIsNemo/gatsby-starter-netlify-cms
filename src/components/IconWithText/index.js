import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import styles from './styles.module.scss';

const IconWithText = ({ icon, topText, bottomText }) => (
  <div className={`${styles.iconWithText} icon-with-text`}>
    <FontAwesomeIcon icon={icon} className={styles.icon} />
    <div className="icon-with-text__text">
      <div className="icon-with-text__top-text">{topText}</div>
      <div className="icon-with-text__bottom-text">{bottomText}</div>
    </div>
  </div>
);

export default IconWithText;
