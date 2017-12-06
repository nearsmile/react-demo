import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Content from './Content'
// import { Provider, createStore, themeReducer } from './react-redux.2';
import { themeReducer } from './react-redux.2';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(themeReducer)

class Index extends Component {
  render () {
    return (
      <div>
        <Header/>
        <Content/>
      </div>
    )
  }
}

class Demo extends Component {
  render () {
    return (
      <div>
        <Provider store={ store }>
          <Index/>
        </Provider>
      </div>
    )
  }
}

export default Demo