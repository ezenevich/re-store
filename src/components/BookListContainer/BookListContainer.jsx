import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BookListItem from '../BookListItem/BookListItem';
import Loader from '../Loader/Loader';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';
import WithBookStoreService from '../hoc/WithBookStoreService';
import { fetchBooks, bookAddedToCart } from '../../actions';
import compose from '../../utils';

import './BookListContainer.css';


const BookList = ({ books, onAddedToCart }) => {
    return (
    <ul className='book-list'>
      {
        books.map((book) => {
          return (
            <li key={book.id}>
              <BookListItem
                book={book}
                onAddedToCart={() => onAddedToCart(book.id)} />
            </li>
          )
        })
      }
    </ul>
  )
}


class BookListContainer extends Component {

  componentDidMount() {
    this.props.fetchBooks()
  }

  render() {

    const { books, loading, error, onAddedToCart } = this.props;

    if (loading) {
      return <Loader />
    }

    if (error) {
      return <ErrorIndicator />
    }

    return <BookList books={books} onAddedToCart={onAddedToCart}/>
  }
}



const mapStateToProps = ( { bookList: { books, loading, error } }) => {
  return { books, loading, error }
}

const mapDispatchToProps = (dispatch, { bookStoreService }) => {
  return bindActionCreators ({
    fetchBooks: fetchBooks(bookStoreService),
    onAddedToCart: bookAddedToCart
  }, dispatch)
}

export default compose(
  WithBookStoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);