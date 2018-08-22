const { createStore, combineReducer } = require('redux-clone');

const initalstateIncrement = {
  increment: 0,
};

const initalstateDecrement = {
  decrement: 0,
};

const incrementReducer = (state = initalstateIncrement, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return Object.assign({}, state, {
        increment: state.increment + 1,
      });
    default:
      return state;
  }
};

const decrementReducer = (state = initalstateDecrement, action) => {
  switch (action.type) {
    case 'DECREMENT':
      return Object.assign({}, state, {
        decrement: state.decrement - 1,
      });
    default:
      return state;
  }
};

const reducer = combineReducer({
  incrementReducer,
  decrementReducer,
});

const store = createStore(reducer);
// get state of the current reducer
console.log('Before :', store.getState());

const dispatcherActionIncrement = {
  type: 'INCREMENT',
};

const dispatcherActionDecrement = {
  type: 'DECREMENT',
};
// dispatch a simple action
// see the result
const render = () => {
  console.log('After :', store.getState());
};

store.subscribe(render);
store.dispatch(dispatcherActionIncrement);
store.dispatch(dispatcherActionDecrement);
