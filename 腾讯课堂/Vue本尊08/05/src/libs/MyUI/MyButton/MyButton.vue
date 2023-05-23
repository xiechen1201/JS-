<template>
  <button :class="['my-btn', type]">
    <slot />
  </button>
</template>

<script>
export default {
  name: "MyButton",
  props: {
    type: {
      type: String,
      default: "primary",
      validator(value) {
        return ["primary", "success", "warn", "danger"].includes(value);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/types.scss";

.my-btn {
  border: none;
  outline: none;
  height: 38px;
  padding: 0 10px;

  &.primary {
    background-color: map-get($bg-colors, primary);
    color: map-get($colors, light);
  }

  &.success {
    background-color: map-get($bg-colors, success);
    color: map-get($colors, light);
  }

  &.warn {
    background-color: map-get($bg-colors, warn);
    color: map-get($colors, light);
  }

  &.danger {
    background-color: map-get($bg-colors, danger);
    color: map-get($colors, light);
  }
}
</style>
