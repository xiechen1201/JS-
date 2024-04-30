import React from 'react';
import ReactDOM from 'react-dom/client';

// ## JSX

// 这就是一段 JSX
/* const rEl = <h1>This is my first experience.</h1> */

/**
 * JSX 是什么？
 * 1、一种标签语法，在 JS 的基础上进行了语法拓展（既有 HTML 的表象，又有 JS 的逻辑）
 * 2、不是字符串，不是 HTML 标签
 * 3、是描述 UI 呈现和交互的直观的表现形式（像 HTML 但是又不是，又可以添加事件等）
 * 4、会生成 React 的元素
 */

/**
 * createElement 和 JSX 的对比
 *
 */

/* const rElJSX = <h1>This is my first experience.</h1>;
const rElCE = React.createElement('h1', null, 'This is my first experience.');
// ReactDOM.render(rElJSX, document.getElementById('root')); // 17 版本
// 18 版本
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(rElCE); */

// ============================================================

// ## JSX 语法

/**
 * JSX 是遵循 JS 的命名规范的，一般使用 camelCase 小驼峰命名
 *
 * class==>className
 * tabindex==>tabIndex
 */

/* class MyButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openState: false
    };
  }

  statusChange() {
    this.setState({
      openState: !this.state.openState
    });
  }

  render() {
    return (
      <div className='wrapper'>
        <p className='text'>
          // 插值表达式
          {this.state.openState ? 'Open' : 'Close'}
        </p>
        // 必须更改 this 的指向
        <button onClick={this.statusChange.bind(this)}>Toggle</button>
      </div>
    );
  }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(MyButton)); */

// ============================================================

// ##

/**
 * React 为什么不把视图和逻辑分离？
 * 1、渲染和 UI 标记是有逻辑耦合的，可以直观的看到数据和 UI 之间的关联
 * 2、即使是这样的耦合也能实现关注点分离，因为在单独在 render 函数返回视图
 */

// ============================================================

// ## JSX 插值表达式

/**
 * 表达式是什么？
 * 一切有效的（符合JS逻辑的）表达式，都写在 { } 内部
 * JSX 编译以后 ==> React 元素 ==> 普通的对象(见imgage.png)
 */

// 下面的两种方式打印的结果是一样的，也就是 JSX 会被转化为 React 元素，React.createElement 是直接返回一个 React 元素
/* const rEL = <h1 className='title'>This is title part.</h1>;
const rEL2 = React.createElement('h1', { className: 'title' }, 'This is title part.');
console.log(rEL);
console.log(rEL2); */

// ============================================================

// ## 

/**
 * 在 JSX 中单标签必须闭合
 */

/* // 正确
const imgEl = <img src="" alt="" />
// 错误
const imgEl2 = <img src="" alt=""> */

/**
 * 在 Render 之前的操作：
 * 1、所有输入的内容全部转为字符串
 * 2、所有插入的内容都会进行转译
 */