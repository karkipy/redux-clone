import React, { Component } from 'react';
import { Provider } from 'redux-clone';
import { createStore } from 'redux-clone';
import reducer from './store/reducer';
import Container from './components/Container';
import './App.css';

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <Container />
        </Provider>
    );
  }
}

export default App;
