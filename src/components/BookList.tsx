import React from 'react';

import { Book } from '../api/book';
import BookListItemComponent from './BookListItem';

export interface Props {
  books: Book[];
}

export default class BookListComponent extends React.Component<Props> {

  render() {
    return (
      <div className="ui middle aligned selection divided list">
        {this.props.books.map(book => {
          return <BookListItemComponent key={book.isbn} book={book} />;
        })}
      </div >
    );
  }

}
