import React, { useEffect, useState } from 'react';

import Categories from '../components/Categories';

import Sort from '../components/Sort';

import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import { Placeholder } from '../components/PizzaBlock/Placeholder';
import Pagination from '../components/Pagination/Pagination';

const Home = ({ searchValue }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [sort, setSort] = useState({
    name: 'популярністю',
    sort: 'rating',
  });

  useEffect(() => {
    setIsLoading(true);

    const sortBy = sort.sort.replace('-', '');
    const order = sort.sort.includes('-') ? 'asc' : 'desc';
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `search=${searchValue}` : '';

    fetch(
      `https://657e1dcb3e3f5b18946387a8.mockapi.io/advert?page=${currentPage}&limit=4${category}${search}&sortBy=${sortBy}&order=${order}`
    )
      .then(res => {
        return res.json();
      })
      .then(arr => {
        setItems(arr);
        setIsLoading(false);
      });
  }, [categoryId, sort, searchValue, currentPage]);

  const pizzaList = items.map(obj => <PizzaBlock key={obj.id} {...obj} />);

  const sceletons = [...new Array(8)].map((_, index) => (
    <Placeholder key={index} />
  ));

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categoryId}
          onClickCategory={i => setCategoryId(i)}
        />
        <Sort value={sort} onClickSort={i => setSort(i)} />
      </div>

      <h2 className="content__title">Всі піци</h2>
      <div className="content__items">{isLoading ? sceletons : pizzaList}</div>
      <Pagination onChengePage={number => setCurrentPage(number)} />
    </div>
  );
};

export default Home;

// ↓↑
