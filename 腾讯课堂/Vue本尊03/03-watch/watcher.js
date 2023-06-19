class Watcher {
    constructor() {
      this.watchers = [];
      /**
       * watchers 的数据结构：
       * 	{
       *  	key: result
       *  	fn: result(newVal, oldVal)
       * 	}
       *
       * 通过 addWatcher(vm, watcher, key) 去往 watchers 里面添加数据
       *  */
    }
  
    // 往 watchers 里面添加数据
    addWatcher(vm, watcher, key) {
      this._addWatchProp({
        key,
        fn: watcher[key].bind(vm)
      });
    }
  
    invoke(key, newVal, oldVal) {
      // 用 addWatcher 保存的值去遍历对比
      this.watchers.map((item) => {
        if (item.key === key) {
          // 调用 result() 传入新值、旧值
          item.fn(newVal, oldVal);
        }
      });
    }
  
    _addWatchProp(watchProp) {
      this.watchers.push(watchProp);
    }
  }
  
  export default Watcher;