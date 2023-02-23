<template>
  <button :class="['my-btn', `btn-${ type }`]">
    <slot></slot>
  </button>
</template>

<script>

import typesMixin from '../mixins/types';

export default {
  name: 'MyButton',
  mixins: [
    typesMixin
  ]
}
</script>

<style lang="scss" scoped>
  @import '../assets/types.scss';
 
  .my-btn {
    border: none;
    outline: none;
    height: 38px;
    padding: 0 10px;

    &.btn-primary {
      background-color: map-get($bg-colors, primary);
      color: map-get($colors, light);
    }

    &.btn-success {
      background-color: map-get($bg-colors, success);
      color: map-get($colors, light);
    }

    &.btn-warn {
      background-color: map-get($bg-colors, warn);
      color: map-get($colors, dark);
    }

    &.danger {
      background-color: map-get($bg-colors, danger);
      color: map-get($colors, light);
    }
  }
</style>