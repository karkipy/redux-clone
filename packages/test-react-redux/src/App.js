import React, { Component } from 'react';
import { createStore } from 'redux-clone';
import { Something } from 'redux-react-clone';
import reducer from './store/reducer';
import Container from './components/Container';
import './App.css';

const store = createStore(reducer);


class App extends Component {
  render() {
    return (
      <Container />
    );
  }
}

export default App;
