import React from 'react';

import { Book } from '../api/book';

export interface Props {
  book: Book;
  onShowList: () => void;
}

export default class BookDetailsComponent extends React.Component<Props> {

  render() {
    const book = this.props.book;
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
            {this.getRating(book.rating ? book.rating : 0)
              .map((value, index) => <i className="yellow star icon" key={index} />)}
          </div>
        </div >
        <h4>Beschreibung</h4>
        <p>{book.description}</p>
        <div className="ui small images">
          {(book.thumbnails ? book.thumbnails : []).map((thumbnail, index) => <img src={thumbnail.url} key={index} />)}
        </div>
        <button className="ui red button" onClick={this.props.onShowList}>Zurück zur Buchliste</button>
      </React.Fragment>
    );
  }

  private getRating(num: number) {
    return new Array(num);
  }

}
