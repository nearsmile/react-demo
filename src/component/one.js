// import React from 'react';
import React, { Component, createElement } from 'react';
import { render } from 'react-dom';
// import { ul } from './component/one.js';

let list = [
  { done: false, name: 1 },
  { done: false, name: 2 },
  { done: false, name: 3 }
]
let lis = list.map((item, index) => {
  return (
    <li key={index}>
      <input type="checkbox" checked={item.done}/>
       <span>{item.name}</span>
    </li>
  );
});

let ul = (
  <ul className="list">
    {lis}
  </ul>
);
/* 
export {
  ul
} */


/* 简单 */
let a = React.createElement('a', {
  className: 'link',
  href: 'https://github.com/facebook/react'
}, 'React')

const lists = (
  <ul className="my-list">
    <li>First Text Content</li>
    <li>Second Text Content</li>
  </ul>
);

const element = <h1>hello world!</h1>
  render(
    ul,
    // list,
    // a,
    // element,
    document.getElementById('root')
  ); 


class HelloMessage extends Component {
  render() {
    return <div>Hello {this.props.name}</div>
  }
}



/* render(
  <HelloMessage name="John" />,
  window.document.getElementById('root')
); */



/* import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';

class Button extends Component {
  render() {
    return <h1>Hello,Webpack</h1>
  }
}

ReactDOM.render(<Button/>, window.document.getElementById('app')); */