import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import './App.css';
import HomeComponent from './components/Home';
import BookListComponent from './components/BookList';
import BookDetailsComponent from './components/BookDetails';

function App() {
  return (
    <Router>
      <ul className="ui menu">
        <NavLink to="/home" className="item" activeClassName="active">Home</NavLink>
        <NavLink to="/books" className="item" activeClassName="active">Bücher</NavLink>
      </ul>

      <Route path="/" exact={true} component={HomeComponent} />
      <Route path="/home" component={HomeComponent} />
      <Route path="/books" exact={true} component={BookListComponent} />
      <Route path="/books/:isbn" component={BookDetailsComponent} />
    </Router>
  );
}

export default App;
