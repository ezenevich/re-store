import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CartPage from '../pages/CartPage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import NotFoundPage from '../pages/NotFoundPage';
import './App.css';

const App = () => {
  return (
    <main role="main" className="container">
      

      <Routes>

        <Route
          path="/"
          element={<HomePage />}
          exact />

        <Route
          path="/cart"
          element={<CartPage />}
          exact />

        <Route
          path="/login"
          element={<LoginPage />}
          exact />

        <Route path="*" element={<NotFoundPage />} />

      </Routes>
    </main>
  );
};

export default App;