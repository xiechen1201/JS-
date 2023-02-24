<template>
  <div>
    <div>
      <h1>I am grand father!!!</h1>
      <p>age: {{ age }}</p>
    </div>
    <father></father>
  </div>
</template>

<script>

import Father from './Father';
import { provide, reactive, readonly, onMounted, toRefs } from 'vue';

export default {
  name: 'GrandFather',
  components: {
    Father
  },
  setup () {
    // const ageRef = ref(83);

    // const changeAge = (num) => {
    //   ageRef.value += num;
    // }

    // return {
    //   ageRef,
    //   changeAge
    // }
    
    const grandFatherInfo = reactive({
      age: 83,
      height: 175,
      weight: 70
    });
    
    const setGrandFatherAge = (num) => {
      grandFatherInfo.age = num;
    }

    provide('grandFatherInfo', readonly(grandFatherInfo));
    provide('updateGrandFatherAge', setGrandFatherAge);

    return {
      ...toRefs(grandFatherInfo)
    }
  }
}

</script>

<style lang="scss" scoped>

</style>