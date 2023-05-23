<template>
  <div>
    <h1>{{ count }}</h1>
    <my-button btn-type="primary" @click="setCount">+</my-button>
  </div>
</template>

<script>
import MyButton from "./MyButton.vue";

export default {
  name: "MyCounter",
  components: {
    MyButton
  },
  emits: ["click"],
  data() {
    return {
      count: 0
    };
  },
  methods: {
    setCount() {
      this.count++;
      this.$emit("click", this.count);
    }
  }
};
</script>
