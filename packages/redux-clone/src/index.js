const createStore = require('./createStore');
const combineReducer = require('./combineReducer');
const { connect } = require('./Connect');
const Provider = require('./Container').default;
const testComponent = require('./testComponent');

module.exports = {
  connect,
  Provider,
  createStore,
  combineReducer,
  testComponent,
};
