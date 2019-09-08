import React from 'react';

import { Book } from '../api/Book';
import BookStore from '../flux/BookStore';
import BookListItemComponent from './BookListItem';

interface State {
  books: Book[];
}

export default class BookListComponent extends React.Component<{}, State> {

  constructor(props = {}) {
    super(props);
    this.state = {
      books: BookStore.getAll()
    };
  }

  render() {
    return (
      <div className="ui middle aligned selection divided list">
        {this.state.books.map(book => {
          return <BookListItemComponent key={book.isbn} book={book} />;
        })}
      </div >
    );
  }

}
