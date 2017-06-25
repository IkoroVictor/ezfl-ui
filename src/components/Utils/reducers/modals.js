const initialState = {
  modalVisible: false
};

function modalVisible(state=initialState, action){
  switch(action.type){
    case "SHOW":
      return Object.assign({}, state, {modalVisible:true});
      break;
    case "HIDE":
      return Object.assign({}, state, {modalVisible:false});
      break;
    default:
      return state;
  }
}

export default modalVisible;
