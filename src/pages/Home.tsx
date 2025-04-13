/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from 'react';

import qs from 'qs';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Categories from '../components/Categories';

import Sort, { list } from '../components/Sort';

import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import { Placeholder } from '../components/PizzaBlock/Placeholder';
import Pagination from '../components/Pagination/Pagination';
// import { AppContext } from '../App';
import {
  selectFilter,
  setCategoryId,
  setCurrentPage,
  setFilters,
} from '../redux/slices/filterSlice';
import { fetchPizzas, selectPizza } from '../redux/slices/pizzasSlice';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isSearch = useRef(false);
  const isMounted = useRef(false);
  const { categoryId, sort, currentPage, searchValue } =
    useSelector(selectFilter);
  // const currentPage = useSelector(state => state.filter.categoryId);

  // const sortType = useSelector(state => state.filter.sort.sortProperty);
  const { items, status } = useSelector(selectPizza);

  // const { searchValue } = useContext(AppContext);
  // const [items, setItems] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [categoryId, setCategoryId] = useState(0);
  // const [currentPage, setCurrentPage] = useState(1);

  // const [sortType, setSortType] = useState({
  //   name: 'популярністю',
  //   sortProperty: 'rating',
  // });

  const onClickCategory = (idx: number) => {
    dispatch(setCategoryId(idx));
  };
  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));

      const sort = list.find(obj => obj.sortProperty === params.sortProperty);

      dispatch(
        setFilters({
          ...params,
          sort,
        })
      );
      isSearch.current = true;
    }
  }, []);

  const getPizzas = async () => {
    // setIsLoading(true);

    const sortBy = sort.sortProperty.replace('-', '');
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `search=${searchValue}` : '';

    dispatch(
      //@ts-ignore
      fetchPizzas({
        sortBy,
        order,
        category,
        search,
        currentPage,
      })
    );

    window.scrollTo(0, 0);
  };

  useEffect(() => {
    // if (!isSearch.current) {
    getPizzas();
    // }
    isSearch.current = false;
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sort.sortProperty,
        categoryId,
        currentPage,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoryId, sort.sortProperty, currentPage]);

  const pizzaList = items.map((obj: any) => (
    // <Link key={obj.id} to={`/pizza/${obj.id}`}>
    <PizzaBlock key={obj.id} {...obj} />
    // </Link>
  ));

  const sceletons = [...new Array(8)].map((_, index) => (
    <Placeholder key={index} />
  ));

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={onClickCategory} />
        <Sort />
      </div>

      <h2 className="content__title">Всі піци</h2>
      {status === 'error' ? (
        <div className="content__error">
          <h2>Виникла помилка 😕</h2>
          <p>Скоріш завсе , Ви не зробили замовлення.</p>
        </div>
      ) : (
        <div className="content__items">
          {status === 'loading' ? sceletons : pizzaList}
        </div>
      )}

      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
};

export default Home;
