<template lang="">
  <div>
    <!-- <h1>{{ res }}</h1> -->
    <!-- <h2>{{ computedMethod() }}</h2> -->
  </div>
</template>
<script>
  const { reactive, computed, readonly, isReadonly, isProxy, isReactive, shallowReadonly, markRaw } = Vue;
  export default {
    setup () {
      const data = {
        a: 1,
        b: 2,
        c: {
          d: 4
        }
      }

      // const state = reactive(data);
      
      /**
       * computed执行 
       * 执行其回调函数
       * 返回一个结果
       * 这个结果赋值给res的value属性
       * 
       * 在模板中，与普通的ref对象一样，直接绑定，vue的系统会自动给ref解包value出来
       * 
       * 执行时机
       * 1. 创建computedRef时，执行回调
       * 2. 回调内部的依赖发生变更的时候，执行回调
       * 
       * 注意：
       * 当回调里的依赖没有被变更的情况下，直接取computedRef.value -> 计算属性值缓存机制
       */
      // const res = computed(() => state.a + state.b); // value -> 3 

      // state.a = 100;
      // console.log(res.value);

      // const computedMethod = () => { // 组件更新的时候，每次都要重新计算，重新执行这个函数
      //   return state.a + state.b;
      // }

      // res.value = 4000; // warning!!!!  computed value is readonly

      // setter函数
      // const computedRef = computed({
      //   get: () => state.a + state.b,
      //   set (newValue) { // '100 + 200'  不推荐
      //     const [ a, b ] = newValue.split('+');
      //     state.a = Number(a.trim());
      //     state.b = Number(b.trim());
      //   }
      // })

      // computedRef.value = '100 + 200';

      // console.log(state);

      
      /**
       * watch computed
       * 
       * watch -> 监听一个依赖变更，执行回调，拿到新旧值，交给开发者继续完成接下来的任务  回调
       * computed -> 监听回调中的依赖变更，执行回调，返回结果给computedRef的值  ref值
       * 
       * watch -> 完成逻辑的
       * computed -> 完成计算值变化，从而更新视图   template
       * 
       * state => {
       *   a: 1,
       *   b: 2,
       *   get res () { // computed的雏形
       *     return this.a + this.b
       *   }
       * }
       * 
       * computed(() => state.a + state.b); => template
       * 
       * 回调内操作DOM no
       * 回调内发起异步请求  no
       * 尝试更改computed值  no
       * 
       * computed -> readonly -> setter
       * computed.value = ? no
       * 非计算类的逻辑编写  no
       */

       // readonly shallowReadonly
      // const readonlyState = readonly(state); // 深度的只读的响应式API

      // readonlyState.a = 100;//  target is readonly
      // readonlyState.c.d = 400;

      // console.log(state === readonlyState);
      // console.log(readonlyState);
      
      // state.a = 100;
      // state.c.d = 400;
      // console.log(data);
      // console.log(readonlyState);

      /**
       * Proxy -> 返回一个新的引用 -> 代理引用  引用容器 -> 源对象
       * 
       * 
       * data
       * 
       * Proxy(data) -> 
       *    proxy -> 代理包装的过程 ->  data
       * 
       * isReadonly  isProxy
       */
      
      // console.log(isReadonly(readonlyState));
      // console.log(isProxy(readonlyState));
      // console.log(isReactive(readonlyState));

      /**
       * shallowReadonly
       * 
       */

      //  const shallowReadonlyState = shallowReadonly(state);

      //  shallowReadonlyState.a = 100;
      //  shallowReadonlyState.c.d = 400;

      /**
       * markRaw -> 标记原始对象
       */
      // const newData = markRaw(data);
      // console.log(newData); // __v_skip
      // console.log(reactive(newData));

      // 慎用markRaw的原因

      // const obj1 = markRaw({
      //   author: {
      //     name: '小野森森',
      //     age: 18
      //   }
      // });

      // const obj2 = reactive({
      //   author: obj1.author
      // });
      // obj2.author.age = 37;

      // console.log(obj1, obj2);
      
      // console.log(obj2.author === obj1.author);

      return {
        // res,
        // computedMethod
      }
    }
  }
</script>