import React, { Component } from 'react';

export const { Provider, Consumer } = React.createContext();

export default class Container extends Component {
  constructor() {
    super();
    this.state = {};
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(nextProps);
    this.setState(nextProps);
  }

  render() {
    console.log(this.props);
    return (
      <Provider value={{ store: this.state }}>
        {this.props.children}
      </Provider>
    );
  }
}
