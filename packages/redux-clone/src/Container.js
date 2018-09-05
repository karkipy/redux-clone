import React, { Component } from 'react';

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
      <div value={{ store: this.state }}>
        {this.props.children}
      </div>
    );
  }
}
