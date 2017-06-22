import {LOGIN, LOGOUT, SIGNUP} from './user';

//Action Creators
export function userLogin(data){
  return {
    type:LOGIN,
    data
  };
}

export function userLogOut(){
  return {
    type:LOGOUT,
  };
}

export function userSignUp(data){
  return {
    type:SIGNUP,
    data
  };
}
