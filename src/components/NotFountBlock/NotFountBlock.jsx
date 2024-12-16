import React from 'react';
import styles from './NotFountBlock.module.scss';

const NotFountBlock = () => {
  return (
    <h1 className={styles.root}>
      <span>😕</span>
      <br />
      Кошик пустий
    </h1>
  );
};

export default NotFountBlock;
