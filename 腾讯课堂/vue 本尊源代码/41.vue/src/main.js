import App from './App';
import VModel from './components/VModel';
import VSlot from './components/VSlot';


const { 
  createApp, 
  h, 
  resolveComponent,
  resolveDynamicComponent,
  defineAsyncComponent,
  resolveDirective,
  withDirectives
} = Vue;

const Comp1 = defineAsyncComponent(() => import('./components/Comp1'));
const Comp2 = defineAsyncComponent(() => import('./components/Comp2'));

const app = createApp({
  components: {
    App,
    VModel,
    VSlot
  },
  render () {
    // 没有props, 默认第二个参数是children
    // 如果没有Props，{}或null占用
    // return h('h1', 'This is TITLE');
    // return h('h1', {
    //   class: 'title'
    // }, 'This is TITLE');
    // return h('h1', [
    //   'This is TITLE',
    //   h('span', 'x')
    // ])
    // return h('h1', null, 'This is TITLE');

    // -----------------

    // 多个child，不用使用一个h返回的虚拟节点
    // const vNode = h('li', null, '123');

    // return h('div', null, [
    //   vNode, vNode
    // ])

    // return h('ul', null, Array.from({ length: 6 }).map((item, index) => {
    //   return ('li', null, h('h' + (index + 1), null, `This is h${ index + 1 }`))
    // }))

    // ------------
    // 全局注册的组件resolveComponent(组件名称)
    // return h(App);
    // return h(resolveComponent('App'))

    // 局部注册的App
    // return h(App); === return h(resolveComponent('App'))
    
    // ------------
    // v-if
    // if (this.isOpen) {
    //   return h('h1', null, 'This is TITLE');
    // } else {
    //   return h('p', 'This article is closed!!!');
    // }

    // ----------------

    // v-show

    // return h('img', {
    //   src: 'https://img0.baidu.com/it/u=2317681293,1458085244&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=406',
    //   style: {
    //     display: this.isShowImg ? '' : 'none'
    //   }
    // })

    // --------------------

    // v-for

    // const titles = ['编号', '姓名', '年龄'];

    // return h(
    //   'table', 
    //   {
    //     border: '1',
    //     width: 500
    //   },
    //   [
    //     h(
    //       'tr',
    //       null,
    //       titles.map(item => h('th', null, item))
    //     ),
    //     this.listData.map(item => {
    //       return h('tr', null, Object.keys(item).map(key => {
    //         return h('td', null, item[key]);
    //       }))
    //     })
    //   ]
    // )

    // -------------

    // v-model v-on

    // return h(VModel, {
    //   username: this.username,
    //   password: this.password,
    //   'onUpdate:username': value => this.username = value,
    //   'onUpdate:password': value => this.password = value,
    //   'onSubmit': () => {
    //     console.log('Username:' + this.username, 'Password:' + this.password);
    //   }
    // })

    /**
     * onClickPasssive
     * onKeyupOnce
     * onMouseoverOnceCapture
     */

    // ----------------

    // slot
    // return h(VSlot, null, {
    //   default: () => 'This is TITLE',
    //   author: () => 'Xiaoyesensen',
    //   content: (props) => h('p', null, props.content)
    // })

    // -----------------------
    // Dynamic Component
    
    // const dComponent = resolveDynamicComponent(this.currentComponent);

    // return h('div', null, [
    //   h(dComponent),
    //   h('button', {
    //     onClick: () => {
    //       this.currentComponentName = this.currentComponentName === 'Comp1'
    //                                 ? 'Comp2'
    //                                 : 'Comp1';
    //     }
    //   }, 'Switch Component')
    // ]);

    // custom directive

    // <div v-pin:top.animate="200"></div>
    // const pin = resolveDirective('pin');

    // return withDirectives(h('div'), [
    //   [pin, 200, 'top', { animate: true }]
    // ])
  },
  computed: {
    currentComponent () {
      return this.currentComponentName === 'Comp1'
             ? Comp1 : Comp2;
    }
  },
  data () {
    return {
      currentComponentName: 'Comp1',
      username: '',
      password: '',
      isOpen: true,
      isShowImg: true,
      listData: [
        {
          id: 1,
          name: '小张',
          age: 18
        },
        {
          id: 2,
          name: '小李',
          age: 22
        },
        {
          id: 3,
          name: '小王',
          age: 24
        },
      ]
    }
  }
});

app.component('App1', {
  template: `<h1>App 1</h1>`
})

app.mount('#app');

// https://github.com/vuejs/babel-plugin-jsx#installation