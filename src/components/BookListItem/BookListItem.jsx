import React from 'react';
import './BookListItem.css';

const BookListItem = ({ book, onAddedToCart }) => {
  const { title, author, price, coverImage } = book;

  return (
    <div className="book-list-item">

      <div className="book-cover">
        <img src={coverImage} alt="cover" />
      </div>

      <div className="book-details">
        <span className="book-title"><strong>{title}</strong></span>
        <div className="book-author">{author}</div>
        <div className="book-price">${price}</div>
        <button
          className="btn btn-primary add-to-cart"
          onClick={onAddedToCart}
        >Add to cart
        </button>
      </div>

    </div>
  );
};

export default BookListItem;