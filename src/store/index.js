import { createStore } from 'redux';
import constants from './constants';
console.log('constants' ,constants);

const initialState = {
  inputText: '',
  items: []
};
const reducer = (state = initialState, action) => {
  console.log('reducer running', action);
  switch (action.type) {
    case constants.CHANGE_INPUT_TEXT:
    return Object.assign({}, state, {inputText: action.text });
    break;
  case  constants.ADD_ITEM:
      return Object.assign({}, state, {
        items: state.items.concat(state.inputText),
        inputText: ''
      });
    break;
    case 'DECREMENT':
    return Object.assign({}, state, { count: state.count - 1 });
    break;
  default:
  return state;
    break;
  }
}

const store = createStore(reducer);

export default store;