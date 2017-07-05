import {combineReducers} from 'redux';
import {userLoginManager} from './components/Utils/reducers/users';
import {request} from './components/Utils/reducers/searchFlight';

const easyflight = combineReducers({
  userLoginManager,
  request
});

export default easyflight;
