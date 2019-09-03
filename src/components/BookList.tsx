import React from 'react';

import { Book } from '../api/book';

export interface Props {
  books: Book[];
}

export default class BookListComponent extends React.Component<Props> {

  render() {
    return (
      <div className="ui middle aligned selection divided list">
        {this.props.books.map(book => {
          return (
            <a className="item" key={book.isbn}>
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
                </div >
              </div >
            </a >
          );
        })}
      </div >
    );
  }

}
