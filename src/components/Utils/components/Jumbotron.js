import React, {Component} from 'react';
import SearchComponent from './SearchComponent';
import { Hidden } from 'react-grid-system';

const Jumbotron = ({ forStyle, manager, search }) => {
  return (
    <div className={forStyle}>
      <div className="hero-search-box">
        {(!manager && !search) && <SearchComponent />}
        {manager && <h2>Saved Flights</h2>}
        {search &&
          (
            <div>
              <Hidden sm xs>
                <SearchComponent/>
              </Hidden>
              <Hidden md lg xl>
                <h2>Flights</h2>
              </Hidden>
            </div>
          )
        }
      </div>
    </div>
  )
};

export default Jumbotron;
