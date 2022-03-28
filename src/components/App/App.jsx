import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CartPage from '../pages/CartPage';
import HomePage from '../pages/HomePage';
import ShopHeader from '../ShopHeader/ShopHeader';
import './App.css';

const App = () => {
  return (
    <main role="main" className="container">
      <ShopHeader numItems={5} total={210} />
      
      <Routes>

        <Route
          path="/"
          element={<HomePage />}
          exact />

        <Route
          path="/cart"
          element={<CartPage />}
          exact />

      </Routes>
    </main>
  );
};

export default App;