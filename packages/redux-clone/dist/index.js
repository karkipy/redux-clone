"use strict";

var createStore = require('./createStore');

var combineReducer = require('./combineReducer');

var _require = require('./Connect'),
    connect = _require.connect;

var Provider = require('./Container').default;

var testComponent = require('./testComponent');

module.exports = {
  connect: connect,
  Provider: Provider,
  createStore: createStore,
  combineReducer: combineReducer,
  testComponent: testComponent
};