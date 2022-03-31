import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userLogOut } from '../../actions'

import './ShopHeader.css';

const ShopHeader = ({ items, total, isLogged, onLogOut }) => {
  const itemsCount = items.reduce((sum, item) => sum += item.count, 0);

  const panel = isLogged ? <Panel itemsCount={itemsCount} total={total} onLogOut={onLogOut} /> : <Login />;

  return (
    <header className="shop-header row">
      <Link to="/">
        <div className="logo text-dark" >ReStore</div>
      </Link>

      {panel}

    </header>
  );
};

const Panel = ({ itemsCount, total, onLogOut }) => {
  return (
    <div className='d-flex '>
      <Link to="/cart">
        <div className="shopping-cart">
          <i className="cart-icon fa fa-shopping-cart" />
          {itemsCount} books (${total})
        </div>
      </Link>

      <button
        className='btn btn-primary btn-log-out'
        onClick={() => onLogOut()}>
        Log out
      </button>
    </div>
  )
}

const Login = () => {
  return (
    <Link to="/login">
      <div className="shopping-cart">
        Log in
      </div>
    </Link>
  )
}



const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal }, user: { isLogged } }) => {
  return {
    items: cartItems,
    total: orderTotal,
    isLogged: isLogged
  }
}

const mapDispatchToProps = {
  onLogOut: userLogOut
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopHeader);
