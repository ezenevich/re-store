import React from 'react';
import ShoppingCartTable from '../ShoppingCartTable/ShoppingCartTable';
import { Link } from 'react-router-dom';

const CartPage = () => {
  return (
    <div>
      <header className="shop-header row">
      <Link to="/">
        <div className="logo text-dark" >ReStore</div>
      </Link>

      <Link to="/">
        <div className="h5 btn-link mt-4" >Back to main</div>
      </Link>
    </header>

      <ShoppingCartTable />

      <div className='d-flex justify-content-end'>
        <button className='btn btn-lg btn-primary mt-4'>
          Buy
        </button>
      </div>

    </div>
  );
};

export default CartPage;