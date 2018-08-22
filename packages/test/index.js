const { createStore } = require('redux-clone');

const initalstate = {
  increment: 0,
};

const reducer = (state = initalstate, action) => {
  switch (action.type) {
    case 'INCREMENT':
      console.log(state);
      return Object.assign({}, state, {
        increment: state.increment + 1,
      })
    default:
      return state
  }
}
const store = createStore(reducer);
// get state of the current reducer
console.log(store.getState());
const dispatcherAction = {
  type: 'INCREMENT',
}
// dispatch a simple action
store.dispatch(dispatcherAction);
// see the result
console.log(store.getState());