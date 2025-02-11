import React, { useState } from 'react';

import Header from './components/Header';
import Home from './pages/Home';
import './scss/app.scss';
import { Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart';
import NotFount from './pages/NotFount';

// import pizzas from './assets/pizzas.json';

function App() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="wrapper">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home searchValue={searchValue} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFount />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
