/*

  We need to implement a router and a layout template to keep the page working properly

  router should be in the format,
    => <div>
          <Nav />
          <Content />
       </div>

*/

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory, Router, Route, IndexRoute } from 'react-router'

import { initEnvironment } from '../actions/environment/Dispatchers';

import Body from '../components/Body/Component';
import BaseLayout from '../components/Layouts/Base/Component';
import BodyLayout from '../components/Layouts/Body/Component';
// import Nav from '../components/Nav/Component';
// import Footer from '../components/Footer/Component';
import Home from '../components/Home/Component';

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
    // const { width, initialWidth, height } = this.props;
    return(
      <Router history={browserHistory}>
        <Route { ...this.props } path="/" component={BaseLayout}>
          <IndexRoute component={Home} />
          <Route path="*" component={BodyLayout}>
              <Route path="/Wall" component={Body}/>
          </Route>
        </Route>
      </Router>
    );
  }
};

App.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  initialWidth: PropTypes.number
};

export default connect(mapStateToProps)(App);
