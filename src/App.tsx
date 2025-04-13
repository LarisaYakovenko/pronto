import React from 'react';

import Home from './pages/Home';
import './scss/app.scss';
import { Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart';
import NotFount from './pages/NotFount';
import Layout from './layouts/Layout';
// import FullPizza from './pages/FullPizza';

// export const AppContext = createContext();

// import pizzas from './assets/pizzas.json';

function App() {
  // const [searchValue, setSearchValue] = useState('');

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="/pizza/:id" element={<FullPizza />} /> */}
        <Route path="*" element={<NotFount />} />
      </Route>
    </Routes>
  );
}

export default App;
