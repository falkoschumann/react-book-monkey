import React from 'react';
import { Subscription } from 'rxjs';

import { Book } from '../api/Book';
import BookStore from '../flux/BookStore';
import BookListItemComponent from './BookListItem';

interface State {
  books: Book[] | null;
}

export default class BookListComponent extends React.Component<{}, State> {

  private getAllSubscription: Subscription;

  constructor(props = {}) {
    super(props);
    this.state = {
      books: null
    };
    this.getAllSubscription = BookStore.getAll().subscribe(books => this.setState({ books }));
  }

  render() {
    return (
      <div className="ui middle aligned selection divided list">
        {this.state.books
          ? this.state.books.length > 0
            ? this.state.books.map(book => <BookListItemComponent key={book.isbn} book={book} />)
            : <p>Es wurden noch keine Bücher eingetragen.</p>
          : <div className="ui active dimmer"><div className="ui large text loader">Daten werden geladen...</div></div>
        }
      </div >
    );
  }

  componentWillUnmount() {
    this.getAllSubscription.unsubscribe();
  }

}
