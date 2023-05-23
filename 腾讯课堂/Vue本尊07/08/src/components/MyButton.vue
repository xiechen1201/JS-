<template>
  <button :class="['btn', btnType]">
    <slot />
  </button>
</template>

<script>
export default {
  name: "MyButton",
  props: {
    btnType: {
      required: true,
      validator(value) {
        return ["primary", "danger", "warning", "success"].includes(value);
      }
    }
  },
  
};
</script>

<style scope>
.btn {
  height: 34px;
  padding: 0 15px;
  border: none;
  outline: none;
}
.primary {
  background-color: blue;
  color: #fff;
}
.success {
  background-color: green;
  color: #fff;
}
.danger {
  background-color: orange;
  color: #fff;
}
.warning {
  background-color: red;
  color: #fff;
}
</style>
