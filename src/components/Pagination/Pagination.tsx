import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';

type PaginationProps = {
  currentPage: number;
  onChangePage: (page: number) => void;
};
const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  onChangePage,
}) => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={e => onChangePage(e.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      previousLabel="<"
      forcePage={currentPage - 1}
    />
    // <ReactPaginate
    //   className={styles.root}
    //   breakLabel="..."
    //   nextLabel=" >"
    //   onPageChange={event => onChangePage(event.selected + 1)}
    //   pageRangeDisplayed={4}
    //   pegeCount={3}
    //   forcePage={currentPage - 1}
    //   previousLabel="<"
    // />
  );
};

export default Pagination;
