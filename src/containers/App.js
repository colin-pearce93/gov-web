import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { initEnvironment } from '../actions/environment/Dispatchers';


/*
import SomeComponent from '../components/SomeComponent/Component';
*/

function mapStateToProps(state) {
  const { initialWidth, width, height } = state;
  return {
    initialWidth,
    width,
    height
  }
};

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(initEnvironment());
  }
  render() {
    const { initialWidth, height } = this.props;
    return(
      <div style={{
        backgroundColor: "rgba(248, 248, 248, 1)",
        width: initialWidth,
        height: height,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <p style={{
          color: "rgba(0, 0, 0, 6)",
          fontSize: 16,
          fontWeight: "light"
        }}>Get ready to start building your app</p>
      </div>
    );
  }
};

App.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  initialWidth: PropTypes.number
};

export default connect(mapStateToProps)(App);
