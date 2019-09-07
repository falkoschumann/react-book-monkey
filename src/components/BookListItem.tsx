import React from 'react';

import { Book } from '../api/Book';

export interface Props {
  book: Book;
  onShowDetails: (book: Book) => void;
}

export default class BookListItemComponent extends React.Component<Props> {

  showDetails = () => this.props.onShowDetails(this.props.book);

  render() {
    const book = this.props.book;
    return (
      <div className="item" onClick={this.showDetails}>
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
