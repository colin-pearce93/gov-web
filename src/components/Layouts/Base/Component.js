import React, { Component } from 'react';
import Nav from '../../Nav/Component';
import Footer from '../../Footer/Component';

class Base extends Component {
  render() {
    return(
      <div>
        <Nav { ...this.props.route }/>
        {this.props.children}
        <Footer { ...this.props.route } />
      </div>
    );
  }
}

export default Base;
