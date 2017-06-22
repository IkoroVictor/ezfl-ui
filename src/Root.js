import React from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import App from './components/App';

const Root = ({store}) => (
  <Provider store={store}>
    <BrowserRouter>
      <Route path='/' component={App}/>
    </BrowserRouter>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
