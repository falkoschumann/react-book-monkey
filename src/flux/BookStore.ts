import { Observable, Observer } from 'rxjs';
import { Book } from '../api/Book';

const api = 'http://localhost:4300';

const BookStore = {
  getAll(): Observable<Book[]> {
    return Observable.create((observer: Observer<Book[]>) => {
      fetch(`${api}/books`)
        .then(response => response.json())
        .then(books => observer.next(books));
    });
  },

  getSingle(isbn: string): Observable<Book> {
    return Observable.create((observer: Observer<Book[]>) => {
      fetch(`${api}/books/${isbn}`)
        .then(response => response.json())
        .then(books => observer.next(books));
    });
  },

  remove(isbn: string): Observable<any> {
    return Observable.create((observer: Observer<any>) => {
      fetch(`${api}/books/${isbn}`, { method: 'DELETE' })
        .then(() => observer.next(null));
    });
  }
};

export default BookStore;
