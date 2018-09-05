import React, { Component } from 'react';

import { Provider } from './Provider';

export default class Container extends Component {
  constructor() {
    super();
    this.state = {};
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(nextProps," next");
  }

  render() {
    const { store } = this.props;
    return (
      <Provider value={{ store: this.state }}>
        {this.props.children}
      </Provider>
    );
  }
}
