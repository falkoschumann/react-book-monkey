import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Book } from '../api/Book';
import BookStore from '../flux/BookStore';

interface UrlParams {
  isbn: string;
}

interface Props extends RouteComponentProps<UrlParams> {
  book: Book;
}

export default class BookDetailsComponent extends React.Component<Props> {

  render() {
    const isbn = this.props.match.params.isbn;
    if (!isbn) {
      return null;
    }
    const book = BookStore.getSingle(isbn);
    if (!book) {
      return null;
    }
    return (
      <React.Fragment>
        <h1>{book.title}</h1>
        {book.subtitle ? <h3>{book.subtitle}</h3> : null}
        <div className="ui divider" />
        <div className="ui grid">
          <div className="four wide column">
            <h4>Autoren</h4>
            {book.authors.map(author => <React.Fragment key={author}>{author}<br /></React.Fragment>)}
          </div>
          <div className="four wide column">
            <h4>ISBN</h4>
            {book.isbn}
          </div>
          <div className="four wide column">
            <h4>Erschienen</h4>
            {book.published.toString()}
          </div>
          <div className="four wide column">
            <h4>Rating</h4>
            {this.getRating(book.rating)}
          </div>
        </div >
        <h4>Beschreibung</h4>
        <p>{book.description}</p>
        <div className="ui small images">
          {(book.thumbnails ? book.thumbnails : []).map((thumbnail, index) => <img src={thumbnail.url} key={index} />)}
        </div>
      </React.Fragment>
    );
  }

  private getRating(num: number = 0) {
    const rating = [];
    for (let i = 0; i < num; i++) {
      rating.push(<i className="yellow star icon" key={i} />);
    }
    return rating;
  }

}
