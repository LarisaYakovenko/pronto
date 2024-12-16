import React from 'react';
// import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import './scss/app.scss';

// import pizzas from './assets/pizzas.json';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
