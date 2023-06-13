<template>
  <div ref="divRef">Hello Vue3!</div>
  <Child ref="childRef" />
</template>

<script>
import { ref, onMounted } from "vue";
import Child from "./components/Child.vue";

function myNextTick(callback) {
  return Promise.resolve().then(callback);
}

export default {
  components: {
    Child
  },
  setup() {
    const divRef = ref(null);
    const childRef = ref(null);

    /* console.log(divRef.value);
    console.log(childRef.value); */

   /*  onMounted(() => {
      console.log(divRef.value); // 元素对象
      console.log(childRef.value); // 组件实例
    }); */

    return {
      divRef,
      childRef
    };
  }
};
</script>

<style lang="scss" scoped></style>
