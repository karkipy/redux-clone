import React from 'react';
import { connect } from 'redux-clone';

const TestScreen = ({ increment }) => <div> Increment Value :{increment} </div>;

const mapStateToProps = ({ increment }) => ({
  increment
});

export default connect(mapStateToProps)(TestScreen);
