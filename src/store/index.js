import { createStore } from 'redux';

const initialState = {
   count: 6
};
const reducer = (state = initialState, action) => {
  console.log('reducer running', action);
switch (action.type) {
  case 'INCREMENT':
    return Object.assign({}, state, { count: state.count + 1 });
    break;
  default:
  return state;
    break;
  }
}

const store = createStore(reducer);

export default store;