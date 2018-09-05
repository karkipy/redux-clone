import React from 'react';

const { Consumer } = require('./Container');

export const connect = () => { return (
  <Consumer>
    { value => console.log(value)}
    </Consumer>
)};
