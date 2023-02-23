<template lang="">
  <div>
    <h1 ref="titleRef">{{ title }}</h1>
    <h2>{{ content }}</h2>
    <button @click="setTitle('这是标题')">SET TITLE</button>
    <button @click="setContent('这是内容')">SET CONTENT</button>
    <!-- <p>{{ finalText }}</p> -->
    <button @click="setTitle('这是标题'), setContent('这是内容')">SET TITLE AND CONTENT</button>
    <!-- <h1>{{ name }}</h1>
    <h2>{{ age }}</h2>
    <button @click="setName('小野森森')">SET NAME</button>
    <button @click="setAge(37)">SET AGE</button> -->
  </div>
</template>
<script>
  const { 
    ref, 
    watch, 
    computed, 
    reactive,
    watchEffect
  } = Vue;

  import { 
    useState, 
    useReactive 
  } from './hooks';

  export default {
    setup () {
      // const title = ref('This is TITLE');

      // const setTitle = (text) => {
      //   title.value = text;
      // }

      // const [ title, setTitle ] = useState('This is TITLE'); 
      // const [ content, setContent ] = useState('This is CONTENT');
      
      // 监听title.value -> change -> callback(newValue, oldValue);
      // 接收单独的ref -> source -> 数据源
      // watch(title, (cur, prev) => {
      //   console.log(cur, prev);
      // })

      // getter函数
      // watch(() => {
      //   return `我演讲的题目是『${ title.value }』，我要讲的是"${ content.value }"`
      // }, (text) => {
      //   console.log(text);
      // });

      // const finalText = computed(() => `我演讲的题目是『${ title.value }』，我要讲的是"${ content.value }"`);
      // console.log(finalText)

      // reactive 侦听

      // const state = reactive({
      //   name: 'Xiaoyesensen',
      //   age: 18
      // })

      // const [ state, refState ] = useReactive({
      //   name: 'Xiaoyesensen',
      //   age: 18,
      //   article: {
      //     title: 'This is TITLE',
      //     content: 'This is CONTENT'
      //   }
      // })

      // const setName = (name) => {
      //  state.name = name;
      //  // todo more things
      // }
      // state.name -> 'Xiaoyesensen'
      // watch(state.name, (cur, prev) => {
      //   console.log(cur, prev);
      // })

      // watch(() => state.name, (cur, prev) => {
      //   console.log(cur, prev);
      // });
      
      // 如果直接侦听一个对象值，深度
      // watch(state.article, (cur, prev) => {
      //   console.log(cur, prev);
      // });
     
      // 侦听getter函数，不深度，要深度  deep true
      // watch(() => state.article, (cur, prev) => {
      //   console.log(cur, prev);
      //   console.log(cur === prev);
      // }, {
      //   // deep: true
      // });
      
      // // state.article.title = '这是标题';
      // // state.article.content = '这是内容';

      // state.article = { title: '这是标题', content: '这是内容' };

      // $ref -> 编译宏 -> ref -> count.value

      // watch(() => state, (cur, prev) => {
      //   /**
      //    * cur -> current
      //    * prev -> previous
      //    */

      //   console.log(cur, prev);
      // });

      // const [ title, setTitle ] = useState('This is TITLE'); 
      // const [ content, setContent ] = useState('This is CONTENT');

      // const [ state, refState ] = useReactive({
      //   name: 'Xiaoyesensen',
      //   age: 18
      // })

      // watch([ 
      //   title, 
      //   content, 
      //   () => state.name, 
      //   () => state.age ], 
      //   (cur, prev) => {
      //   /**
      //    * newValue  newVal,
      //    * oldValue  oldVal
      //    */
      //   console.log(cur, prev);

      // });

      // const [ title, setTitle ] = useState('This is TITLE'); 
      // const titleRef = ref(null);

      // const [ state, refState ] = useReactive({
      //   name: 'Xiaoyesensen',
      //   age: 18
      // })
      
      // watch(title, () => {
      //   // 默认情况下，组件更新之前被调用
      //   // 获取到的value是组件更新之前的DOM
      //   console.log(titleRef.value.innerText);
      // })
      
      // 拿到DOM更新之后的innerText  flush: 'pre | post | sync'
      // 回调是在组件更新之后执行
      // watch(title, (cur, prev) => {
      //   console.log(titleRef.value.innerText);
      // }, {
      //   flush: 'post'
      // })
      
      // 创建watch -> 立即执行
      // watch(title, (cur, prev) => {
      //   console.log(cur, prev);
      // }, {
      //   immediate: true
      // });

      // 深度遍历依赖  执行回调
      // watch(() => state, (cur, prev) => {
      //   console.log(cur, prev);
      // }, {
      //   deep: true
      // })

      // state.name = '小野森森';

      // const stop = watch(title, (cur, prev) => {
      //   console.log(cur, prev);
      // }, {
      //   // // 侦听器侦听行为被创建的时候，onTrack
      //   // onTrack (e) {
      //   //   console.log('Track:', e);
      //   // },
      //   // // 依赖被修改的时候，会触发
      //   // onTrigger (e) {
      //   //   console.log('Trigger:', e);
      //   // }
      // });
      
      // // 停止侦听
      // stop();
      
      // 侦听依赖 -> 执行回调
      /**
       * effect: 副作用  异步请求  异步任务
       * 
       * watch: 懒执行  依赖是否变化 -> 回调是否执行 -> 懒执行
       *        一定要有明确的source 数据源
       *        明确的拿到 新值和旧值
       * 
       * useEffect(() => {}, [])
       * 
       * watchEffect 侦听器被创建与依赖的数据变更的时候都会执行回调
       *             自动追踪依赖
       *             拿不到旧值  不能在回调内拿到新值引用
       * flush
       * pre: 默认配置，组件挂在  组件更新 前 执行副作用回调，缓存副作用回调，异步执行
       *      改变多个依赖，只会调用一次副作用函数
       * 
       * post: 组件挂在  组件更新之后，执行副作用回调，缓存副作用回调，异步执行
       *      改变多个依赖，只会调用一次副作用函数
       * 
       * sync: 组件挂在  组件更新 前 执行副作用回调, 不缓存副作用回调, 同步执行，
       *       同时改变多个依赖数据的值，多次调用副作用函回调
       */
      
      // const [ title, setTitle ] = useState('This is TITLE'); 
      // const [ content, setContent ] = useState('This is CONTENT');

      // const stop = watchEffect(() => {
      //   // console.log(title.value) // get title.value -> 收集这个依赖
      //   console.log(title.value, content.value);
      // }, {
      //   // flush: 'sync'
      // });
      // let t = null;
      // let count = 0;

      // function getData (title) {
      //   /**
      //    * request   cancelRequest 防抖
      //    * 
      //    */
      //   t = setTimeout(() => {
      //     console.log('网络请求成功' + count);
      //   }, 3000);
      // }

      // watchEffect(async (onCleanup) => {
      //   getData(title.value); // 网络请求
        
      //   // 清除上一次的副作用程序
      //   onCleanup(() => {
      //     // cancelRequest
      //     count ++;
      //     console.log('onCleanup');
      //     clearTimeout(t);
      //   })
      // })

      /**
       * useEffect
       * 
       * 
       */

      // useEffect(() => { // return Promise
      //   // console.log(title.value);

      //   // async function getData () {
      //   //   await ...xxx
      //   // }

      //   // getData().then()
        
      //   // return () => {

      //   // }
      // }, [title]);
      
      // stop();

      /**
       * title.value -> get value () {
       *   title: [ cb, cb ]
       * }
       * 
       * title.value = xxx ->  set value () {
       *   title -> deps -> forEach cb();
       * }
       * 
       */
      
      return {
        title,
        setTitle,
        // titleRef
        content,
        setContent,
        // finalText
        // ...refState
      }
    }
  }
  /**
   * 侦听器  
   * 
   * 监听依赖 -> 响应式数据，值变更的时候，
   * 能监听到这个变化，从而提供给开发者一个API接口回调，
   * 完成接下来的自定义任务
   * 
   * watch
   * 
   */

  // function test (a, b, callback) {
  //   /***
  //    * 完成test相关的任务  a + b这个任务 -> res, 接口回调
  //    */
  //   const res = a + b;

  //   typeof callback === 'function' && callback(res);
  // }
  
  // // 函数接口
  // test(1, 2, function (res) {
  //   console.log(res);
  // })
</script>