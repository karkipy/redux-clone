import React, { Component } from 'react';

import { Provider } from './Content';

export default class Container extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { store } = this.props;
    return (
      <Provider value={{ store: store.getState() }}>
        {this.props.children}
      </Provider>
    );
  }
}
