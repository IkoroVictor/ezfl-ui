import React from 'react';
import SearchComponent from './SearchComponent';
import { Hidden } from 'react-grid-system';

const Jumbotron = ({ forStyle, manager, search, searchHandler }) => {
  return (
    <div className={forStyle}>
      <div className="hero-search-box">
        {(!manager && !search) && <SearchComponent />}
        {manager && <h2 className="saved-flight-title">Saved Flights</h2>}
        {search &&
          (
            <div>
              <Hidden sm xs md>
                <SearchComponent searchHandler={searchHandler}/>
              </Hidden>
              <Hidden lg xl>
                <h2 className="flights-sm">Flights</h2>
              </Hidden>
            </div>
          )
        }
      </div>
    </div>
  )
};

export default Jumbotron;
