<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ author }}</p>
    <p>{{ content }}</p>
  </div>
</template>

<script>
import mixinTest from "../mixins/test";

export default {
  name: "Test2",
  // mixins: [mixinTest],
  data() {
    return {
      title: "This is test 2.",
      content: "This is content 2."
    };
  }
};
</script>
