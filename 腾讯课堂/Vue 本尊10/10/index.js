import { createApp, ref } from "./vue/index.js";

createApp("#app", {
  // 响应式数据集合
  refs: {
    title: ref("This is title."),
    content: ref("This is content.")
  },
  methods: {
    setTitle() {
      this.title.value = "这是标题。";
    },
    setContent() {
      this.content.value = "这是内容。";
    },
    reset() {
      this.title.$reset();
      this.content.$reset();
    }
  }
});

/* 
分析题目，要考的内容：
1、Options API
2、Composition API
3、this 指向
4、ref 引用
    4.1 包含 .value 属性，进行数据劫持
    4.2 收集 DOM 依赖 deps
5、refs 改变为甚么样子？
    refs: {
        title:{
            deps: [h1, h1]
            _value: initialValue 可变的值
            _defaultValue: 初始值
            value: set ==> update ==> 劫持 ==> setter/getter
            deps: DOM
            $reset: ()=>{ _value = _defaultValue } 进行 update
        }
    }

    render() 如何做呢？
    #app ==> div ==> 所有节点 ==> 分析 {{ xxx }} ==> 对应 ref ==> 遍历 deps ==> 更新节点内容

    update()
    value ==> set  ==> 对应 ref ==> 遍历 deps ==> 更新节点内容

    bindEvent()
    所以节点 ==> attribute @click ==> setTitle ==> methods['setTitle']
*/
