import { createStore } from 'redux';

const initialState = {
   inputValue: ''
};
const reducer = (state = initialState, action) => {
  console.log('reducer running', action);
  switch (action.type) { 
    case 'INPUT_CHANGE':
    return Object.assign({}, state, {inputValue: action.text });
    break;
  case 'INCREMENT':
    return Object.assign({}, state, { count: state.count + 1 });
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