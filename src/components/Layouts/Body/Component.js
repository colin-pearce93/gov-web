import React, { Component } from 'react';
import { Link } from 'react-router';

class Layout extends Component {
  render() {
    return(
      <Link to="/">
        <div style={{ height: 300, padding: 90, backgroundColor: "rgba(240, 240, 240, 1)" }}>
          { this.props.children }
        </div>
      </Link>
    );
  }
}

export default Layout;
