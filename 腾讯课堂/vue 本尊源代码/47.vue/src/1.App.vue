<template lang="">
  <div>
    <!-- <h1 ref="titleRef">Hello Vue!!!!</h1>
    <child ref="childRef"></child> -->
    <h1 ref="titleRef">{{ state.title }}</h1>
    <button @click="setTitle">SET TITLE</button>
  </div>
</template>
<script>
const { ref, onMounted, reactive, nextTick } = Vue;
import Child from './components/Child';

function myNextTick (callback) {
  return Promise.resolve().then(callback);
}

export default {
  components: {
    Child
  },
  setup () {
    const titleRef = ref(null);
    // const childRef = ref(null);

    // console.log(titleRef);  // value null

    // onMounted(() => {
    //   console.log(titleRef); // 元素对象
    //   console.log(childRef); // 组件的实例
    // });

    // reactive -> JavaScript Proxy API
    const state = reactive({
      title: 'This is TITLE'
    });

    const setTitle = async () => {
      state.title = '这是标题';
      /**
       * DOM更新和状态的改变是非同步，把DOM更新的任务缓存到一个队列当中，
       * 等待状态全部改变完成以后一次性更新DOM
       */
      // console.log(titleRef.value.innerText);
      
      // nextTick在状态更改完成以后立即执行，等待DOM更新完毕后，执行回调函数
      
      // const p = nextTick(() => {
      //   console.log(titleRef.value.innerText);
      // });

      // await nextTick();
      // console.log(titleRef.value.innerText);
    }
    
    /**
     * template上所需要的变量
     * JSX
     * h函数执行 -> 虚拟节点对象
     */
    return {
      state,
      setTitle,
      titleRef,
      // childRef
    }
  }
}

function test () {}
function test1 () {}

test() // test先执行完成后 -> test1()  同步
test1(); // test先执行，不管test执行没执行完成 -> 立马执行test1 -> 异步
</script>
<style lang="">
  
</style>