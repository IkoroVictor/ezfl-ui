import {LOGIN, LOGOUT} from "../actions/user";


const initialState = {
  login: false
};

export function userLoginManager(state=initialState, action){
  switch(action.type){
    case LOGIN:
      return Object.assign({}, state, {login:true});
    case LOGOUT:
      return Object.assign({}, state, {login:false});
    default:
      return state;
  }
}
