import React, { Component, PropTypes } from 'react';

import LandingPageContent from '../components/content';

export default class LandingPage extends Component {
  componentWillMount() {
    console.log('loading');
  }

  render() {
    return <LandingPageContent />;
  }
}
