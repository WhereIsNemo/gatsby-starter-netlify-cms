import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import OrderCallbackButton from '../OrderCallbackButton';
import styles from './styles.module.scss';

const Preview = ({ node }) => (
  <div className={styles.preview}>
    <div className={styles.imgWrapper}>
      <Img resolutions={node.childrenImageSharp[0].resolutions} />
    </div>
    <h3 className={styles.title}>
      <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
    </h3>
    <div className={styles.price}>{node.frontmatter.price}₽</div>
    <div className={styles.orderCallbackField}>
      <OrderCallbackButton additionalText={node.frontmatter.title} />
    </div>
  </div>
);

export default Preview;
