import {LOGIN, LOGOUT} from "../actions/user";


const initialState = {
  login: false
};

function userLoginManager(state=initialState, action){
  switch(action.type){
    case LOGIN:
      return Object.assign({}, state, {login:true});
      break;
    case LOGOUT:
      return Object.assign({}, state, {login:false});
      break;
    default:
      return state;
  }
}

export default userLoginManager;
