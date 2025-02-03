import React from 'react';

import styles from './Search.module.scss';
import { CiSearch } from 'react-icons/ci';
import { IoCloseOutline } from 'react-icons/io5';

const Search = ({ searchValue, setSearchValue }) => {
  return (
    <div className={styles.root}>
      <CiSearch size="32" className={styles.icon} />
      <input
        value={searchValue}
        onChange={event => setSearchValue(event.target.value)}
        className={styles.input}
        placeholder="Знайти..."
      />
      {searchValue && (
        <IoCloseOutline
          size="32"
          className={styles.closeIcon}
          onClick={() => setSearchValue('')}
        />
      )}
    </div>
  );
};

export default Search;
