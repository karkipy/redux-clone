import React from 'react';

const { Consumer } = require('./Provider');

export function connect (WrappedComponent) {
  return class extends React.Component {

    componentWillReceiveProps(nextProps) {
      console.log('Current props: ', this.props);
      console.log('Next props: ', nextProps);
    }

    render() {
      return (
        <Consumer>
          {value => <WrappedComponent {...this.props} {...value} />}
        </Consumer>
      )
    }
  }
}