"use strict";

var createStore = function createStore(reducer) {
  var state;
  var listeners = []; // get the current state of the reducer itself

  var getState = function getState() {
    return state;
  }; // dispatch a function so as to update the state of the reducer


  var dispatch = function dispatch(action) {
    state = reducer(state, action); // notify all the listener about the changes made in the state

    listeners.forEach(function (listener) {
      return listener();
    });
  }; // subscribe to see the changes in the particular channel


  var subscribe = function subscribe(listener) {
    listeners.push(listener); // unsubscribe method to remove this particular listener

    return function () {
      listeners = listeners.filter(function (l) {
        return l != listener;
      });
    };
  }; // return the initial value


  dispatch({});
  return {
    getState: getState,
    dispatch: dispatch,
    subscribe: subscribe
  };
}; // export the function itself


module.exports = createStore;