import React from 'react';
import faTruck from '@fortawesome/fontawesome-free-solid/faTruck';
import faThumbsUp from '@fortawesome/fontawesome-free-solid/faThumbsUp';
import faClock from '@fortawesome/fontawesome-free-solid/faClock';
import InfoBlock from '../InfoBlock';
import styles from './styles.module.scss';

export default () => {
  const services = [
    {
      icon: faTruck,
      title: "Доставка в течении суток",
      description: "Омск, Калачинск",
    },
    {
      icon: faThumbsUp,
      title: "Гарантия на всё",
      description: "1-3 года",
    },
    {
      icon: faClock,
      title: "Режим работы",
      description: "Ежедневно с 9:00 до 22:00",
    },
  ];

  const servicesMarkup = services.map(({ icon, title, description }) => 
    <div className={`col col-12 col-md-4 ${styles.col}`}>
      <InfoBlock
        className={styles.service}
        icon={icon}
        title={title}
        description={description}
      />
    </div>
  );

  return (
    <div className="section">
      <div className="container-fluid">
        <div className="overflow-container">
          <div className={`row ${styles.row}`}>
            {servicesMarkup}
          </div>
        </div>
      </div>
    </div>
  );
};
