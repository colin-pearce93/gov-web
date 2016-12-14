/*
  Will just be a fixed height div that spans the width of the page
  No props required
*/
import React, { Component, PropTypes } from 'react';

// import Filler from '../Filler/Component';

const propTypes = {
  width: PropTypes.number
}

class Nav extends Component {
  render() {
    const { width } = this.props;
    console.log(width);
    return(
      <div style={{ width: width, height: 90, backgroundColor: "grey" }}>
      </div>
    );
  }
}

Nav.propTypes = propTypes;

export default Nav;
