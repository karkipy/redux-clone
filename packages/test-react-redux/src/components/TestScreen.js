import React from 'react';
import { connect } from 'redux-clone';

class TestScreen extends React.Component {
  constructor(){
    super();
  }

  render() {
    console.log(this.props);
    return(
      <div>
        test
        </div>
    )
  }
}

export default connect(TestScreen);