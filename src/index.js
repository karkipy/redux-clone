const createStore = require('./createStore');
const combineReducer = require('./combineReducer');
const { Provider, Consumer } = require('./Provider');

module.exports = {
  createStore,
  combineReducer,
  Provider,
  Consumer,
};
