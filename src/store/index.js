import { createStore } from 'redux';
import constants from './constants';
console.log('constants' ,constants);

const initialState = {
  inputText: '',
  items: []
};
const reducer = (state = initialState, action) => {
  //console.log('reducer running', action);
  switch (action.type) {
    case constants.CHANGE_INPUT_TEXT:
    return Object.assign({}, state, {inputText: action.text });
    //break;
  case  constants.ADD_ITEM:
      return Object.assign({}, state, {
        items: state.items.concat(state.inputText),
        inputText: ''
      });
    case constants.DELETE_ITEM:
      console.log('hitting delete reducer');
      const copyOfItems = state.items.slice();
      copyOfItems.splice(action.index, 1);
      return Object.assign({}, state, { items: copyOfItems });
    default:
  return state;

  }
}

const store = createStore(reducer);

export default store;