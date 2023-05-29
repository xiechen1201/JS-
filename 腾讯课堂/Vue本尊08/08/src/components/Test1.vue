<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ author }}</p>
    <p>{{ content }}</p>
    <button @click="doComponent">btn</button>
  </div>
</template>

<script>
import mixinTest from "../mixins/test";

export default {
  name: "Test1",
  mixins: [mixinTest],
  data() {
    return {
      title: "This is test 1.",
      content: "This is content 1."
    };
  },
  mounted() {
    console.log("This is test1 mounted calling.");
    console.log(this);
  },
  methods: {
    doComponent() {
      console.log("doComponent");
    }
  }
};
</script>
