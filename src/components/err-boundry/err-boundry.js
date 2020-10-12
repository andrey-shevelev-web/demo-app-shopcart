import React, { Component } from 'react';

import ErrIndicator from '../err-indicator';

export default class ErrBoundry extends Component {

  state = {
    hasError: false
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrIndicator />
    }

    return this.props.children;
  }
}