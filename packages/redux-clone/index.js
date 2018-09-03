const createStore = require('./src/createStore');
const combineReducer = require('./src/combineReducer');
const { Provider } = require('./src/Provider');
const { connect } = require('./src/connect');

module.exports = {
  createStore,
  combineReducer,
  Provider,
  connect,
};
