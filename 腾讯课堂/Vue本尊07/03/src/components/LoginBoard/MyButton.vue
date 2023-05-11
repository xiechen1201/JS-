<template>
  <button :class="['btn', type]">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "MyButton",
  props: ["type"]
};
</script>

<style scoped>
.btn {
  height: 38px;
  padding: 15px;
  border: none;
  outline: none;
  color: #fff;
}

.primary {
  background-color: blue;
}
.success {
  background-color: green;
}

.waring {
  background-color: orange;
  color: #333;
}

.danger {
  background-color: red;
}
</style>
