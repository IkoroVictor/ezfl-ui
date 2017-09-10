const initialState = {
  modalVisible: false
};

function modalVisible(state=initialState, action){
  switch(action.type){
    case "SHOW":
      return Object.assign({}, state, {modalVisible:true});
    case "HIDE":
      return Object.assign({}, state, {modalVisible:false});
    default:
      return state;
  }
}

export default modalVisible;
