"use strict";

var createStore = require('./createStore');

var combineReducer = require('./combineReducer');

module.exports = {
  createStore: createStore,
  combineReducer: combineReducer
};