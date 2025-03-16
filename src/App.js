import React, { createContext, useState } from 'react';

import Header from './components/Header';
import Home from './pages/Home';
import './scss/app.scss';
import { Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart';
import NotFount from './pages/NotFount';

export const AppContext = createContext();

// import pizzas from './assets/pizzas.json';

function App() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="wrapper">
      <AppContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFount />} />
          </Routes>
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
