import React, { Component, PropTypes } from 'react';

export default class LandingPage extends Component {
  componentWillMount() {
    console.log('loading');
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
      </div>
    );
  }
}
