import React from 'react';

const { Consumer } = require('./Provider');

export const connect = () => { return (
  <Consumer>
    { value => console.log(value)}
    </Consumer>
)};
