import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookListItem from '../BookListItem/BookListItem';
import WithBookStoreService from '../hoc/WithBookStoreService';
import { booksLoaded } from '../../actions';
import compose from '../../utils';

import './BookList.css';

class BookList extends Component {

  componentDidMount() {
    const { bookStoreService } = this.props;
    const data = bookStoreService.getBooks();

    this.props.booksLoaded(data)
  }

  render() {

    const { books } = this.props;
    return (
      <ul className='book-list'>
        {
          books.map((book) => {
            return (
              <li key={book.id}><BookListItem book={book} /></li>
            )
          })
        }
      </ul>
    );
  }
}


const mapStateToProps = ({ books }) => {
  return { books }
}

const mapDispatchToProps = {
  booksLoaded
}

export default compose(
  WithBookStoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);