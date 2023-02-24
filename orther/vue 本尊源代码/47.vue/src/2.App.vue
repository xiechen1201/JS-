<template lang="">
  <div>
    <!-- <h1>{{ state.b.c }}</h1> -->
    <!-- <h1>{{ state.STATIC.title }}: {{ state.title }}</h1>
    <p>{{ state.STATIC.content }}: {{ state.content }}</p> -->
    <!-- <ul>
      <li
        v-for="item of list"
        :key="item.id"
      >{{ item.content }}</li>
    </ul> -->
    
    <!-- <ul>
      <li
        v-for="[key, value] of list"
        :key="key.grade"
      >
        <h1>{{ key.grade }}年级</h1>
        <h2>{{ key.teacher }}</h2>
        <ol>
          <li
            v-for="(student, index) of value"
            :key="index"
          >{{ student }}</li>
        </ol>
      </li>
    </ul>

    <button @click="listAdd">ADD</button> -->

    <h1>{{ state.a }}</h1>
  </div>
</template>
<script>
const { reactive, isReactive, shallowReactive } = Vue;

export default {
  setup () {
    // const data = {
    //   a: 1,
    //   b: {
    //     c: 2
    //   }
    // }
    
    // reactive 深层的响应式
    // const state = reactive(data);
    // // 代理对象与原对象不是同一个引用
    // console.log(state === data);
    // // reactive包装过的代理对象再次被包装，会返回第一次包装的代理对象
    // console.log(state === reactive(state));

    // console.log(isReactive(state));

    // setTimeout(() => {
    //   state.b.c = 3;
    // }, 1000);

    // shallowReactive 浅层的响应式包装
    // const state = shallowReactive({
    //   title: 'This is TITLE',
    //   content: 'This is CONTENT',
    //   STATIC: {
    //     title: 'TITLE',
    //     content: 'CONTENT'
    //   }
    // });

    // console.log(isReactive(state));
    // console.log(isReactive(state.STATIC));

    /**
     * reactive 只针对  Array  Map  Set  Object
     */
    
    // const list = reactive([]);
    // let count = 1;

    // const listAdd = () => {
    //   list.push({
    //     id: 1,
    //     content: 'This is No.' + count ++
    //   })
    // }

    // const list = reactive(new Map());
    // let count = 0;

    // const teachers = ['张老师', '王老师', '李老师'];
    // const students = [
    //   ['张三', '李四'],
    //   ['王五', '赵六'],
    //   ['小明', '小红']
    // ]

    // const listAdd = () => {
    //   list.set({
    //     grade: count ++,
    //     teacher: teachers[count - 1],
    //   }, students[count - 1]);
    // }
    

    // return {
    //   // state
    //   list,
    //   listAdd
    // }

    // let state = reactive({ a: 1 });
    // // state -> 响应式丢失了
    // setTimeout(() => {
    //   state = reactive({ a: 2 });
    // }, 1000);

    // const state = reactive({
    //   data: { a: 1 }
    // });

    // setTimeout(() => {
    //   state.data = { a: 2 }
    // }, 1000);

    const state = reactive({ a: 1 });

    function setA (a) {
      a ++;
    }
    
    setTimeout(() => {
      setA(state.a);
    }, 1000);
    // let { a } = state; // 1  

    // let a = state.a;

    // state.a => get a -> getter

    // setTimeout(() => {
    //   a = 100;
    //   state.a = 100;
    // }, 1000);

    return {
      state,
      // a
    };
  }
}
</script>
<style lang="">
  
</style>