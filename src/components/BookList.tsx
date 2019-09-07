import React from 'react';

import { Book } from '../api/book';
import BookStore from '../flux/BookStore';
import BookListItemComponent from './BookListItem';

interface Props {
  onShowDetails: (book: Book) => void;
}

interface State {
  books: Book[];
}

export default class BookListComponent extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      books: BookStore.getAll()
    };
  }

  render() {
    return (
      <div className="ui middle aligned selection divided list">
        {this.state.books.map(book => {
          return <BookListItemComponent key={book.isbn} book={book} onShowDetails={this.props.onShowDetails} />;
        })}
      </div >
    );
  }

}
