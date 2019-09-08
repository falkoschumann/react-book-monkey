import React from 'react';
import { Link } from 'react-router-dom';

import { Book } from '../api/Book';

interface Props {
  book: Book;
}

export default class BookListItemComponent extends React.Component<Props> {

  render() {
    const book = this.props.book;
    return (
      <Link to={'/books/' + book.isbn} className="item">
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
          </div>
        </div>
      </Link>
    );
  }

}
