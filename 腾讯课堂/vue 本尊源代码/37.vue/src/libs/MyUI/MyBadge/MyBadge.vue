<template>
  <span :class="[ 'my-badge', `badge-${ type }` ]">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'MyBadge',
  props: {
    type: {
      type: String,
      default: 'primary',
      validator (value) {
        return [
          'primary',
          'success',
          'warn',
          'danger'
        ].includes(value);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/types.scss';

  .my-badge {
    display: inline-block;
    height: 30px;
    padding: 0 10px;
    line-height: 30px;
    border-radius: 5px;

    &.badge-primary {
      background-color: map-get($bg-colors, primary);
      color: map-get($colors, light);
    }

    &.badge-success {
      background-color: map-get($bg-colors, success);
      color: map-get($colors, light);
    }

    &.badge-warn {
      background-color: map-get($bg-colors, warn);
      color: map-get($colors, dark);
    }

    &.badge-danger {
      background-color: map-get($bg-colors, danger);
      color: map-get($colors, light);
    }
  }
</style>