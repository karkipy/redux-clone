import React from 'react';
import { connect } from 'redux-clone';

const Container = () => <div>Something </div>

const mapStateToProps = state => ({
  increment : state.increment,
})
connect(mapStateToProps)

export default Container;
