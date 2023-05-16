<template>
  <button :class="['btn', btnType]">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "MyButton",
  props: {
    btnType: {
      required: true,
      // 自定义验证函数
      validator(value) {
        // 如果不传递 btnType , validator 就不会执行
        console.log(value);
        // 如果值在数组中
        return ["primary", "danger", "warning", "success"].includes(value);
      }
    }
  }
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
