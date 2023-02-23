<template lang="">
  <div>
    <!-- <h1>{{ state.a }} {{ a }}</h1> -->
    <!-- <h2>{{ a }} {{ b }}</h2> -->
    <!-- <h1>{{ count1 }} {{ state[0] }}</h1> -->
    <!-- <h1>{{ objRef.b.c }}</h1> -->
    <input type="text" v-model="formData.username" />
    <input type="password" v-model="formData.password" />
    <button @click="submitForm">Submit</button>
  </div>
</template>
<script>

const { ref, reactive, isRef, toRef, toRefs, shallowRef, unref, toRaw } = Vue;

export default {
  setup () {
    // ref -> reference 引用 -> 针对所有值的定制化的引用包装，保证响应式的同时，还可以进行响应的操作和传递
    // const count = ref(0);

    // console.log(count); // RefImpl -> reference implement
    // console.log(count.value);

    // count.value = 1;

    // console.log(count.value);
    // console.log(isRef(count));

    // const state = reactive({
    //   a: 1,
    //   b: 2
    // });

    // const a = toRef(state, 'a');
    // 1 -> ref -> { value: 1 } -> { value: 1, state } -> state.a = 3, value = 3
    // const refState = toRefs(state);

    // setTimeout(() => {
    //   refState.a.value = 100;
    //   refState.b.value = 200;
    // }, 1000);

    // console.log(refState);

    // setTimeout(() => {
    //   state.a = 2;
    // }, 1000);

    // setTimeout(() => {
    //   a.value = 3;
    // }, 2000);
  
    const count1 = ref(0);
    
    // 自动解包
    // const state = reactive({ 
    //   count: count1 
    // }); // 自动解包
    // // reactive响应式数据的属性是ref -> state.count -> state.count.value

    // setTimeout(() => {
    //   // count1.value = 3;
    //   state.count = 3;
    // }, 1000);

    // const state = reactive([ count1 ]);
    // console.log(state[0].value);

    // const obj = {
    //   count: ref(0)
    // }

    // const { count } = obj;

    // const objRef = ref({
    //   a: 1,
    //   b: {
    //     c: 2
    //   }
    // });

    // const objRef = shallowRef({
    //   a: 1,
    //   b: {
    //     c: 2
    //   }
    // });
    
    // setTimeout(() => {
    //   objRef.value.b.c = 100;
    // }, 1000);

    const formData = ref({
      username: '',
      password: ''
    });
    
    // { username: '', password: '' } _rawValue
    const submitForm = () => {
      console.log(toRaw(unref(formData)));
      // console.log(JSON.parse(JSON.stringify(formData.value)));
    }

    // ref reactive { a: 1, b: 2, c: 3 }
    // const a = ref(1);
 
    return {
      // ...toRefs(state),
      //state, 
      formData,
      submitForm
      // count1
      // ...refState
      // ...toRefs(state), // a, b
      // a: toRef(state, 'a')
      // obj
    }
  }
}
</script>
<style lang="">
  
</style>