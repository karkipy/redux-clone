import React, { Component } from 'react';
import { createStore } from 'redux-clone';
import reducer from './store/reducer';
import { Container } from 'redux-clone';
import './App.css';

const store = createStore(reducer);


class App extends Component {
  render() {
    return (
      <Container store={store}>
        <div> aa </div>
      </Container>
    );
  }
}

export default App;
