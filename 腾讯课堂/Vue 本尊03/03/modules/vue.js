import { reactive } from "./reactive.js";
import Computed from "./computed.js";
import Watcher from "./watcher.js";

class Vue {
  constructor(options) {
    const { data, computed, watch } = options;

    this.$data = data();
    this.init(this, computed, watch);
  }

  init(vm, computed, watch) {
    this.initData(vm);
    const computedIns = this.initComputed(vm, computed);
    const watcherIns = this.initWatcher(vm, watch);

    this.$computed = computedIns.update.bind(computedIns);
    this.$watch = watcherIns.invoke.bind(watcherIns);
  }

  initData(vm) {
    // 响应式数据
    reactive(
      vm,
      (key, value) => {},
      (key, newVal, oldVal) => {
        if (newVal === oldVal) {
          return false;
        }

        this.$computed(key, this.$watch);
        this.$watch(key, newVal, oldVal);
      }
    );
  }

  initComputed(vm, computed) {
    /**
     * 接收到的 computed 为
     *
     * computed:{
     *  total: xxx
     * }
     *
     *  */
    // 枚举 Computed 然后新增 ComputedData
    // 返回实例 =》 实例里有 updata 方法，可以更新 ComputedData 的 value
    const computedIns = new Computed();
    for (const key in computed) {
      computedIns.addComputed(vm, computed, key);
    }

    return computedIns;
  }

  initWatcher(vm, watch) {
    // 枚举 Watcher 然后新增监听器
    // 返回实例，实例有调用 watch 的方法，执行监听器
    const watcherIns = new Watcher();

    for (const key in watch) {
      watcherIns.addWatcher(vm, watch, key);
    }

    return watcherIns;
  }
}

export default Vue;
