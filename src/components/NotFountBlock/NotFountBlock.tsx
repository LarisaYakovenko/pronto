import React from 'react';
import styles from './NotFountBlock.module.scss';

const NotFountBlock: React.FC = () => {
  return (
    <h1 className={styles.root}>
      <span>😕</span>
      <br />
      Кошик пустий
    </h1>
  );
};

export default NotFountBlock;
