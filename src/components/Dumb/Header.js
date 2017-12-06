import React, { Component } from 'react';
import PropTypes from 'prop-types';

// 除了 props 什么也不依赖，它是一个 Pure Component，然后通过 connect 取得数据。
export default class Header extends Component {
  static propTypes = {
    themeColor: PropTypes.string
  }

  render () {
    return (
      <h1 style={{ color: this.props.themeColor }}>React Demo</h1>
    )
  }
}
