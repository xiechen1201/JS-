/**
 * 条件渲染
 * v-if v-else-if v-else
 * 
 * v-show
 * 
 * 指令 -> v-if="指令表达式"
 * 指令表达式返回truthy -> 渲染
 * 
 * v-show -> style/display -> 渲染 -> none/block
 * 
 * 
 * if (表达式) {
 * } else if (表达式) {
 * } else {}
 */

var App = {
  data () {
    return {
      list: [],
      // loading -> 获取数据 -> 没有数据 -> no data
                        //  -> 有数据  -> 赋值list
      listStatus: 'loading',
      isLogin: true,
      username: 'Crystal',
      myListShow: false,
      myClickShow: true
    }
  },
  // mounted () {
  //   const random = Math.random();

  //   setTimeout(() => {
  //     if (random <= 0.5) {
  //       this.list = [
  //         {
  //           id: 1,
  //           name: 'Mike'
  //         },
  //         {
  //           id: 2,
  //           name: 'Tom'
  //         }
  //       ];
  //       this.listStatus = 'show';
  //     } else {
  //       this.listStatus = 'noData';
  //     }
  //   }, 1000);
  // },
  // template: `
  //   // <table border="1" width="300" align="center">
  //   //   <thead>
  //   //     <tr>
  //   //       <th>ID</th>
  //   //       <th>Username</th>
  //   //     </tr>
  //   //   </thead>
  //   //   <!-- v-if v-else-if v-else 在结构上必须紧挨在一起 -->
  //   //   <tbody align="center" v-if="listStatus === 'loading'">
  //   //     <tr>
  //   //       <td colspan="2">Loading ...</td>
  //   //     </tr>
  //   //   </tbody>
  //   //   <tbody align="center" v-else-if="listStatus === 'noData'">
  //   //     <tr>
  //   //       <td colspan="2">- No Data -</td>
  //   //     </tr>
  //   //   </tbody>
  //   //   <tbody align="center" v-else>
  //   //     <tr v-for="item of list" :key="item.id">
  //   //       <td>{{ item.id }}</td>
  //   //       <td>{{ item.name }}</td>
  //   //     </tr>
  //   //   </tbody>
  //   // </table>
    
  // `

  // template: `
  //   <div>
  //     <div class="user">
  //       <template v-if="isLogin">
  //         <span>Welcome, {{ username }}</span>
  //         <div>
  //           <a href="javascript:;" @click="showMyList">个人中心</a>
  //           <ul v-show="myListShow">
  //             <li>
  //               <a href="#">我的资料</a>
  //             </li>
  //             <li>
  //               <a href="#">我的账户</a>
  //             </li>
  //             <li>
  //               <a href="#">我的钱包</a>
  //             </li>
  //           </ul>
  //         </div>
  //       </template>
  //       <template v-else>
  //         <a href="#"> 登录 </a>
  //         <a href="#"> 注册 </a>
  //       </template>
  //     </div>
  //   </div>
  // `,
  template: `
    <div>
      <button v-if="myClickShow" @click="myClick">click</button>
      <button @click="showMyClick">Show myClick</button>
    </div>
  `,
  methods: {
    // showMyList () {
    //   this.myListShow = !this.myListShow
    // }
    myClick  () {
      console.log('click')
    },
    showMyClick () {
      this.myClickShow = !this.myClickShow;
    }
  }
}

Vue.createApp(App).mount('#app');

/**
 * v-if是对DOM的移除和添加，在移除的时候用注释节点占位
 *     对内部的子组件与事件监听都会销毁与重建
 * 
 * v-if 只有条件是truthy的时候，才会被渲染（惰性渲染）
 * v-show总是会被渲染，用display来控制其显示与隐藏
 * 
 * v-if在切换的时候会提高开销，如果条件为假值，初始化渲染是不会进行的
 * v-show在切换的时候开销较低，但是初始化渲染时无论显示与否都要被渲染
 * 
 * 如果切换频繁就用v-show
 * 如果切换不频繁，(加载时不需要的视图)，可以用v-if
 */

