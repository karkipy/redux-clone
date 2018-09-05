import React from 'react';

const { Consumer } = require('./Provider');

export const connect = (stateToProps, stateToDispatch = null) => (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return (
        <Consumer>
          {value => {
            const store  = value.store;
            const propsToReturn = stateToProps(store);
            return (<WrappedComponent {...this.props} {...propsToReturn} />);
          }}
        </Consumer>
      )
    }
  }
}

// export function connect (stateToProps, stateToDispatch)(WrappedComponent) {
//   return class extends React.Component {
//     render() {
//       return (
//         <Consumer>
//           {value => <WrappedComponent {...this.props} {...value} />}
//         </Consumer>
//       )
//     }
//   }
// }