import React, { useContext, useRef } from 'react';

import styles from './Search.module.scss';
import { CiSearch } from 'react-icons/ci';
import { IoCloseOutline } from 'react-icons/io5';
import { AppContext } from '../../App';

const Search = () => {
  const { searchValue, setSearchValue } = useContext(AppContext);

  const inputRef = useRef();

  const onClickClear = () => {
    setSearchValue('');
    inputRef.current.focus();
  };
  return (
    <div className={styles.root}>
      <CiSearch size="32" className={styles.icon} />

      <input
        ref={inputRef}
        value={searchValue}
        onChange={event => setSearchValue(event.target.value)}
        className={styles.input}
        placeholder="Знайти..."
      />

      {searchValue && (
        <IoCloseOutline
          size="32"
          className={styles.closeIcon}
          onClick={onClickClear}
        />
      )}
    </div>
  );
};

export default Search;
