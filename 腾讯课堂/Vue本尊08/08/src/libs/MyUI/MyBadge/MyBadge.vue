<template>
  <span :class="['my-badge', type]">
    <slot />
  </span>
</template>

<script>
import typeMixin from "../mixins/type";

export default {
  name: "MyBadge",
  mixins: [typeMixin]
};
</script>

<style lang="scss" scoped>
@import "../../assets/types.scss";

.my-badge {
  display: inline-block;
  padding: 0 10px;
  height: 30px;
  line-height: 30px;
  border-radius: 5px;

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
