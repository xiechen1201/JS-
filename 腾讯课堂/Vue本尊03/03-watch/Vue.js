import { reactive } from "./reactive.js";
import Watcher from "./watcher.js";

class Vue {
  constructor(options) {
    // 我们在实例 Vue 的时候，传递进来一个对象，所以我们可以进行解构
    const { data, watch } = options;

    // 因为 data 中的数据是可以直接被访问到的，就像这样 vm.result
    // 所以我们需要把 data 中的数据挂在到 Vue 实例上面
    this.$data = data();
    this.init(this, watch);
  }

  init(vm, watch) {
    // 调用初始化 data
    this.initData(vm);

    // 初始化 watch，且传入实例对象和 watch 对象（也就是 { watch: { result:xxx }}）
    // 然后我们就能得到一个 watcher 的实例，并把它保存到实例对象上面，方面后面直接调用执行
    const watcherIns = this.initWatcher(vm, watch);
    this.$watch = watcherIns.invoke.bind(watcherIns);
  }

  initData(vm) {
    // 我们把处理 data 这部分的代码，抽离出去为一个 reactive.js 文件
    // reactive 方法介绍 3 个参数：当前实例、当 get data 中数据的回调、当 set data 中数据的回调
    reactive(vm, (key, value) => {}, (key, newVal, oldVal) => {
      // 当设置 vm.result 的时候我们就去执行 watch 的 invoke 方法
      this.$watch(key, newVal, oldVal);
    });
  }

  initWatcher(vm, watch) {
    // 枚举 watch 然后新增监听器
    // 返回实例，实例有调用 watch 的方法，执行监听器
    const watcherIns = new Watcher();

    for (const key in watch) {
      // 实例、watch 对象、result
      watcherIns.addWatcher(vm, watch, key);
    }

    return watcherIns;
  }
}

export default Vue;