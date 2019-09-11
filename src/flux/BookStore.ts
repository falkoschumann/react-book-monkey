import { Book } from '../api/Book';

const api = 'http://localhost:3000';

const BookStore = {
  getAll(): Promise<Book[]> {
    return fetch(`${api}/books`)
      .then(response => response.json());
  },

  getSingle(isbn: string): Promise<Book> {
    return fetch(`${api}/books/${isbn}`)
      .then(response => response.json());
  },

  remove(isbn: string): Promise<any> {
    return fetch(`${api}/books/${isbn}`, { method: 'DELETE' });
  }
};

export default BookStore;
