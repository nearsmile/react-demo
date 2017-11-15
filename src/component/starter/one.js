import React, { Component } from 'react';
import ReactDOM from 'react-dom'
class Header extends Component {
  render () {
    /* return (
      <div>
        <h1>React Demo</h1>
      </div>
    ) */
    return (
      React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          { className: 'title' },
          'React Demo'
        )
      )
    )
  }
}

ReactDOM.render(
  <Header/>,
  document.getElementById('root')
);
