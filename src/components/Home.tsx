import React from 'react';
import { Link } from 'react-router-dom';

function HomeComponent() {
  return (
    <React.Fragment>
      <h1>Home</h1>
      <p>Das ist der BookMonkey</p>
      <Link to="/books" className="ui red button">
        Buchliste ansehen <i className="right arrow icon" />
      </Link>
    </React.Fragment>
  );
}

export default HomeComponent;
