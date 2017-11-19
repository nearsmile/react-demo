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

class Content extends Component {
  renderGoodWord (good, bad) {
    const is = 0
    return is ? good : bad
  }

  render () {
    const className = 'content';
    const isGood = true;
    const goodWord = <strong>is Good</strong>
    const badWord = <strong>is Bad</strong>
    return (
      <div>
        <h1 className={className}>
          Content title
        </h1>
        <p>
          {(function () { return 'test function' })()}
        </p>
        <button>chang good/bad</button>
        <p>
          { isGood ? 'good' : 'bad' }
          <i>
            { !isGood ? ' now' : null }
          </i>
        </p>
        <p>
          { isGood ? goodWord : badWord }
        </p>
        <p>
          {
            this.renderGoodWord(
              goodWord,
              badWord
            )
          }
        </p>
      </div>
    )
  }
}

ReactDOM.render(
  // <Header/>,
  <Content/>,
  document.getElementById('root')
);
