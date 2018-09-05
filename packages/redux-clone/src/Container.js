import React, { Component } from 'react';

import { Provider } from './Provider';

export default class Container extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { store } = this.props;
    console.log(store);
    return (
      <Provider value={{ store: store.getState() }}>
        {this.props.children}
      </Provider>
    );
  }
}
