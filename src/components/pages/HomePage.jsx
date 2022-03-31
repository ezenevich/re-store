import React from 'react';
import BookListContainer from '../BookListContainer/BookListContainer';
import ShoppingCartTable from '../ShoppingCartTable/ShoppingCartTable';
import ShopHeader from '../ShopHeader/ShopHeader';


const HomePage = () => {
  return (
    <div>
      <ShopHeader />
      <BookListContainer />
      <ShoppingCartTable />
    </div>

  );
};

export default HomePage;