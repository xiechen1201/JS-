<template>
  <!--  <h1>{{ title }}</h1>
  <button @click="setTitlle('这是一个标题.')">Change title</button> -->
  <h1>{{ name }}</h1>
  <h2>{{ age }}</h2>
  <button @click="setAge(45)">Change age</button>
</template>

<script>
import { ref, reactive, toRefs, watch } from "vue";
import { useState, useReactive } from "./hooks";

export default {
  /* setup() {
    const title = ref("This is title.");
    const setTitlle = () => (title.value = "这是一个标题。");

    watch(title, (newVal, oldVal) => {
      console.log(newVal, oldVal);
    });

    return {
      title,
      setTitlle
    };
  } */

  /* setup() {
    const [title, setTitlle] = useState("This is title.");

    return {
      title,
      setTitlle
    };
  } */

  /* setup() {
    const [title, setTitlle] = useState("This is title.");

    watch(
      () => {
        return title;
      },
      (newVal) => {
        console.log(newVal);
      }
    );

    return {
      title,
      setTitlle
    };
  } */

  setup() {
    const [state, refState] = useReactive({ name: "张三", age: 20 });

    return {
      ...refState
    };
  }
};
</script>

<style lang="scss" scoped></style>
