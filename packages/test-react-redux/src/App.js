import React, { Component } from 'react';
import { Provider, createStore } from 'redux-clone';
import reducer from './store/reducer';
import TestScreen from './components/TestScreen';

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        Let's Test it Here
        <TestScreen />
      </Provider>
    );
  }
}

export default App;
