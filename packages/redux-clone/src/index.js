const createStore = require('./createStore');
const combineReducer = require('./combineReducer');
const { Provider, Consumer } = require('./Container');
const { connect } = require('./Connect');
const Container = require('./Container');
const testComponent = require('./testComponent');

module.exports = {
  connect,
  Provider,
  Consumer,
  Container,
  createStore,
  combineReducer,
  testComponent,
};
