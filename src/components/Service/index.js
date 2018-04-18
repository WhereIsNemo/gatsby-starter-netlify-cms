import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import styles from './styles.module.scss'

const Service = ({ icon, title, description, className }) => (
  <div className={`${styles.service} ${className}`}>
    <div className={styles.service__iconWrapper}>
      <FontAwesomeIcon className={styles.service__icon} icon={icon} />
    </div>
    <h3 className={styles.service__title}>{title}</h3>
    <div className={styles.description}>{description}</div>
  </div>
)

export default Service
