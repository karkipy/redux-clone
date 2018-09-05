import React, { Component } from 'react';
import { createStore } from 'redux-clone';
import { Container, testComponent } from 'redux-clone';
import reducer from './store/reducer';
import TestScreen from './components/TestScreen';

const Pro = Container.default;
const Test = testComponent.default;
const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Pro store={store}> aa <Test />
        <TestScreen />
      </Pro>
    );
  }
}

export default App;
