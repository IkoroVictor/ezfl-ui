import React, {Component} from 'react';
import SearchComponent from './SearchComponent';

const Jumbotron = ({ forStyle, manager }) => {
  if (manager) {

  }

  return (
    <div className={forStyle}>
      <div className="hero-search-box">
        {!manager && <SearchComponent />}
        {manager && <h2>Manage Flights</h2>}
      </div>
    </div>
  )
};

export default Jumbotron;
