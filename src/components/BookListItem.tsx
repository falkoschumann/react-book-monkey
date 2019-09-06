import React from 'react';

import { Book } from '../api/book';

export interface Props {
  book: Book;
  onShowDetails: (book: Book) => void;
}

export default class BookListItemComponent extends React.Component<Props> {

  render() {
    const book = this.props.book;
    const showDetails = () => this.props.onShowDetails(book);
    return (
      <div className="item" onClick={showDetails}>
        {book.thumbnails && book.thumbnails[0] && book.thumbnails[0].url
          ? <img className="ui tiny image" src={book.thumbnails[0].url} />
          : null
        }
        <div className="content">
          <div className="header">{book.title}</div>
          {book.subtitle
            ? <div className="description">{book.subtitle}</div>
            : null
          }
          <div className="metadata">
            {book.authors.map((author, index, array) => {
              return (
                <span key={index}>
                  {author}{index < array.length - 1 ? <span>, </span> : null}
                </span>
              );
            })}
            <br />
            ISBN {book.isbn}
          </div >
        </div >
      </div >
    );
  }

}
