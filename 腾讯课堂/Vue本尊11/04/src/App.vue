<template>
  <h1>{{ name }}</h1>
  <h2>{{ age }}</h2>
  <button @click="setAge(45)">Change age</button>
</template>

<script>
import { ref, reactive, toRefs, watch, computed } from "vue";
import { useState, useReactive } from "./hooks";

export default {
  /* setup() {
    const [state, refState] = useReactive({ name: "张三", age: 20 });

    // watch(state.age, (newVal) => {
    //   console.log(newVal);
    // });

    watch(()=> state.age, (newVal) => {
      console.log(newVal);
    });

    watch(state, (newVal) => {
      console.log(newVal);
    });

    return {
      ...refState
    };
  } */

  /* setup() {
    const [state, refState] = useReactive({
      name: "张三",
      age: 20
    });

    return {
      ...refState
    };
  } */

  /* setup() {
    const [title] = useState("This is title.");
    const [state] = useReactive({ name: "张三", age: 20 });

    watch([title, () => state.name], (newVal, oldVal) => {
      console.log(newVal, oldVal);
    });

    setTimeout(() => {
      title.value = "这是标题。";
      state.name = "李四";
    }, 1000);
  } */

  /* setup() {
    const [title] = useState("This is title.");
    const [state] = useReactive({ name: "张三", age: 20 });

    watch([title, () => state.name], (newVal, oldVal) => {
      console.log(newVal, oldVal);
    });

    setTimeout(() => {
      title.value = "这是标题。";
      state.name = "李四";
    }, 1000);
  } */

  setup() {
    const [title] = useState("This is title.");

    watch(
      title,
      (newVal, oldVal) => {
        console.log(newVal, oldVal);
      },
      {
        onTrack: (e) => {
          console.log(e);
        },
        onTrigger: (e) => {
          console.log(e);
        }
      }
    );

    setTimeout(() => {
      title.value = "这是标题。";
    }, 1000);
  }
};
</script>

<style lang="scss" scoped></style>
