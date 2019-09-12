import React from 'react';
import { Link } from 'react-router-dom';

import { Book } from '../api/Book';

interface Props {
  book: Book;
}

function BookListItemComponent(props: Props) {
  return (
    <Link to={'/books/' + props.book.isbn} className="item">
      {props.book.thumbnails && props.book.thumbnails[0] && props.book.thumbnails[0].url
        ? <img className="ui tiny image" src={props.book.thumbnails[0].url} />
        : null
      }
      <div className="content">
        <div className="header">{props.book.title}</div>
        {props.book.subtitle
          ? <div className="description">{props.book.subtitle}</div>
          : null
        }
        <div className="metadata">
          {props.book.authors.map((author, index, array) => {
            return (
              <span key={index}>
                {author}{index < array.length - 1 ? <span>, </span> : null}
              </span>
            );
          })}
          <br />
          ISBN {props.book.isbn}
        </div>
      </div>
    </Link>
  );
}

export default BookListItemComponent;
