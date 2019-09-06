import React from 'react';

import { Book } from './api/book';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';
import './App.css';

type ViewState = 'list' | 'details';

interface State {
  viewState: ViewState;
  book?: Book;
}

class App extends React.Component<any, State> {

  constructor(props: any) {
    super(props);

    this.state = { viewState: 'list' };
    this.showList = this.showList.bind(this);
    this.showDetails = this.showDetails.bind(this);
  }

  render() {
    if (this.state.viewState === 'list' || this.state.book == null) {
      return (
        <BookList onShowDetails={this.showDetails} />
      );
    } else {
      return (
        <BookDetails book={this.state.book} onShowList={this.showList} />
      );
    }
  }

  showList() {
    this.setState({
      viewState: 'list',
    });
  }

  showDetails(book: Book) {
    this.setState({
      viewState: 'details',
      book,
    });
  }

}

export default App;
