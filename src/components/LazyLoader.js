import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class LazyLoader extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
  };

  state = {
    component: null,
  };

  componentWillMount() {
    if (this.props.name) {
      this.load(this.props);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.component !== nextState.component;
  }

  async load({ name, ...props }) {
    const { default: LoadedComponent } = await import(/* webpackChunkName: "containers/[request]" */ `../containers/${name}`);
    this.setState({
      component: <LoadedComponent {...props} />,
    });
  }

  render() {
    return this.state.component;
  }
}
