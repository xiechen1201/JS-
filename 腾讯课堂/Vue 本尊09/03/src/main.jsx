/* import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
 */

import React from "react";
import ReactDOM from "react-dom/client";

class MyButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openStatus: false
    };
  }

  stausChange() {
    this.setState({
      openStatus: !this.state.openStatus
    });
  }

  render() {
    return (
      <div className="wrapper">
        <p className="text">
          {/* 插值表达式 */}
          {this.state.openStatus ? "打开状态" : "关闭状态"}
        </p>
        <button onClick={this.stausChange.bind(this)}>
          {this.state.openStatus ? "关闭" : "打开"}
        </button>
      </div>
    );
  }
}

/* const rEl = <h1 className="title">This is title part.</h1>
const rEl2 = React.createElement("h1", { className:"ttile"}, 'This is title part.')
console.log(rEl)
console.log(rEl2) */

// ==========

/* var mark = "title";

function selectText(mark) {
  switch (mark) {
    case "title":
      return "This is a title";
    default:
      return "This is a paregraph";
  }
}

function getText(mark) {
  if (mark === "title") {
    return <h1 className={mark}>{selectText(mark)}</h1>;
  }

  return <p>{selectText(mark)}</p>;
}

console.log(getText(mark)) */

// ==========

const arr = [
  {
    id: 1,
    name: "Zhangsan"
  },
  {
    id: 2,
    name: "Lisi"
  }
];

function setList() {
  return (
    <ul>
      {arr.map((el) => {
        return (
          <li key={el.id}>
            <span>{el.id}</span>
            <span>{el.name}</span>
          </li>
        );
      })}
    </ul>
  );
}

const rEL = setList();
console.log(rEL);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MyButton />
  </React.StrictMode>
);

// ReactDOM.render(React.createElement(MyButton), document.getElementById("app"));
