import {createStore} from 'redux';
import easyflight from './reducer';

export const store = createStore(easyflight,{},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
