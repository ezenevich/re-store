import React from 'react';
import { connect } from 'react-redux';
import { bookAddedToCart, bookRemovedFromCart, allBooksRemovedFromCart } from '../../actions'

import './ShoppingCartTable.css';

const ShoppingCartTable = ({ items, total, onIncrease, onDecrease, onDelete }) => {
  const renderRow = (item, idx) => {
    const { id, title, count, total } = item;
    return (
      <tr key={id}>
        <td className='col-1'>{idx + 1}</td>
        <td className='col-3'>{title}</td>
        <td className='col-1'>{count}</td>
        <td className='col-2'>{total}</td>
        <td className='col-1'>
          <button
            className="btn btn-outline-danger btn-sm float-right"
            onClick={() => onDelete(id)}>
            <i className="fa fa-trash-o" />
          </button>
          <button
            className="btn btn-outline-success btn-sm float-right"
            onClick={() => onIncrease(id)}>
            <i className="fa fa-plus-circle" />
          </button>
          <button
            className="btn btn-outline-warning btn-sm float-right"
            onClick={() => onDecrease(id)}>
            <i className="fa fa-minus-circle" />
          </button>
        </td>
      </tr>
    )
  }


  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table mb-3">
        <thead>
          <tr>
            <th>#</th>
            <th>Book</th>
            <th>Count</th>
            <th>Total Price</th>
            <th className='text-right'>More Action</th>
          </tr>
        </thead>

        <tbody>
          {
            items.map(renderRow)
          }
        </tbody>
      </table>

      <div className="total mt-3">
        Total: ${total}
      </div>
    </div>
  );
};



const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal } }) => {
  return { 
    items: cartItems,
    total: orderTotal
  }
}

const mapDispatchToProps = {
    onIncrease: bookAddedToCart,
    onDecrease: bookRemovedFromCart,
    onDelete: allBooksRemovedFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
