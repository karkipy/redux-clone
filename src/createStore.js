const createStore = (reducer) => {
  let state;
  let listeners = [];

  // get the current state of the reducer itself
  const getState = () => state;

  // dispatch a function so as to update the state of the reducer
  const dispatch = (action) => {
    state = reducer(state, action);
    // notify all the listener about the changes made in the state
    listeners.forEach(listener => listener());
  };

  // subscribe to see the changes in the particular channel
  const subscribe = (listener) => {
    listeners.push(listener);
    // unsubscribe method to remove this particular listener
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  };
  // return the initial value
  dispatch({});
  return { getState, dispatch, subscribe };
};
// export the function itself
module.exports = createStore;
