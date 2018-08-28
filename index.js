const createStore = require('./src/createStore');
const combineReducer = require('./src/combineReducer');
const { Provider } = require('./src/Provider');

module.exports = {
  createStore,
  combineReducer,
  Provider,
};
