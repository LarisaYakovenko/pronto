import React, { useEffect, useState } from 'react';

import Categories from '../components/Categories';

import Sort from '../components/Sort';

import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import { Placeholder } from '../components/PizzaBlock/Placeholder';

const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://657e1dcb3e3f5b18946387a8.mockapi.io/advert')
      .then(res => {
        return res.json();
      })
      .then(arr => {
        setItems(arr);
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>

      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(8)].map((_, index) => <Placeholder key={index} />)
          : items.map(obj => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </>
  );
};

export default Home;
