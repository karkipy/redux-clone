import React, { Component } from 'react';
import { createStore } from 'redux-clone';
import { Container } from 'redux-clone';
import reducer from './store/reducer';
import './App.css';

const Pro = Container.default;
const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Pro store={store}> aa </Pro>
    );
  }
}

export default App;
