import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import reducer from './reducer';
import './index.css';

let store = createStore(reducer);
ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
registerServiceWorker();
