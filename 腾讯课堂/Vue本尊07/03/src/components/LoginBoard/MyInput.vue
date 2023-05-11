<template>
  <input
    class="my-input"
    :type="type"
    :placeholder="placeholder"
    v-model="value" />
</template>

<script>
export default {
  name: "MyInput",
  props: ["type", "placeholder", "model", "name"],
  data() {
    return {
      value: this.model,
      inputName: this.name
    };
  },
  watch: {
    value() {
      this.$emit("setValue", {
        name: this.inputName,
        value: this.value
      });
    }
  }
};
</script>

<style scoped>
.my-input {
  height: 38px;
  padding: 0 10px;
  outline: none;
  border: 1px solid #ddd;
}
</style>
