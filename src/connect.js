import React from 'react';

const { Consumer } = require('./Content');

export const connect = (stateToProps, stateToDispatch = null) => (AppComponent) => {
  return class extends React.Component {
    render() {
      return (
        <Consumer>
          {value => {
            const store  = value.store; // getting the value from the provider
            const propsToReturn = stateToProps(store); // call back to the props function to get the said props as for mentioned
            return (<AppComponent {...this.props} {...propsToReturn} />); // return the unmutated component with new props
          }}
        </Consumer>
      )
    }
  }
}