import React, { Component } from 'react';
import { Consumer } from './Content';

class testComponent extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Consumer>
        {value => <div> {value.length} sdasdsdsdasd {console.log(value)}</div>}
      </Consumer>
    )
  }

}


export default testComponent;
