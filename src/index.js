const createStore = require('./createStore');
const combineReducer = require('./combineReducer');
const Provider = require('./Container').default; // We can name it anything as it is being called in default
const { connect } = require('./connect');

module.exports = {
  connect,
  Provider,
  createStore,
  combineReducer,
};
