import React, { Component } from 'react';
import PropTypes from 'prop-types'
import ThemeSwitch from './ThemeSwitch'
// import { connect } from './react-redux'
import { connect } from 'react-redux'
class Content extends Component {
  static propTypes = {
    themeColor: PropTypes.string
  }

  render () {
    return (
      <div>
        <div style={{ color: this.props.themeColor }}>React Content</div>
        <ThemeSwitch/>
      </div>
    )
  }
}

const mapStateTopProps = (state) => {
  return {
    themeColor: state.themeColor
  }
}

Content = connect(mapStateTopProps)(Content)

export default Content
