/* class MyButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openState: false
    };
  }

  render() {
    return '<div>哈哈哈哈</div>';
  }
}

ReactDOM.render(React.createElement(MyButton), app); */

// ===================

/* 
    render 会帮我们创建一个 React 元素成为虚拟节点，再把虚拟节点转化为真实的节点放在 app 下
*/
/* var span = React.createElement('span', { className: 'text', key: 1 }, 'Hello, world!');

ReactDOM.render(
  React.createElement(
    'div',
    {
      'data-tag': 'div'
    },
    ['This is my first React application', span]
  ),
  document.getElementById('app')
); */

// export default MyButton

// =======================

class MyButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openState: false
    };
  }

  render() {
    const oP = React.createElement(
      'p',
      {
        className: 'text',
        key: 1
      },
      this.state.openState ? '已打开' : '已关闭'
    );

    const oBtn = React.createElement(
      'button',
      {
        key: 2,
        onClick: () => {
          this.setState({
            openState: !this.state.openState
          });
        }
      },
      'Toggle'
    );

    const wrapper = React.createElement('div', { className: 'wrapper' }, [oP, oBtn]);
    return wrapper
  }
}

ReactDOM.render(React.createElement(MyButton), app);
