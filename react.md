# React Notes

## 概念详解

1. 状态改变 -> 构建新的 DOM 元素更新页面
- 一旦状态发生改变，就重新调用 render 方法，构建一个新的 DOM 元素
1. JSX
- JSX 是 JavaScript 语言的一种语法扩展，长得像 HTML，但并不是 HTML
- React.js 可以用 JSX 来描述你的组件长什么样的
- JSX 在编译的时候会变成相应的 JavaScript 对象描述
- react-dom 负责把这个用来描述 UI 信息的 JavaScript 对象变成 DOM 元素，并且渲染到页面上

![jsx](./img/jsx_flow.png)