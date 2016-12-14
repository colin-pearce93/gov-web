import React, { Component } from 'react';
import { styles } from './styles.js';
import { Link } from 'react-router';

class Filler extends Component {
  render() {
    return(
      <div style={styles.bodyContainer}>
        <p style={styles.bodyText}><Link to={"/body"}>{this.props.text}</Link></p>
      </div>
    );
  }
}

export default Filler;
