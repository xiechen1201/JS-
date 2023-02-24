<template>
  <teleport to="body" :disabled="false">
    <div :class="[ 'modal', type ]" v-show="isShow">
      <div class="inner">
        <header class="hd">
          <h1><slot></slot></h1>
          <span @click="isShow = false">x</span>
        </header>
        <section class="wrap">
          <p><slot name="content"></slot></p>
        </section>
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    show: {
      type: Boolean,
      default: false
    },
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
  },
  data () {
    return {
      isShow: this.show
    }
  },
  methods: {
    openModal () {
      this.isShow = true;
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/types.scss';

  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);

    h1 {
      margin: 0;
      font-weight: normal;
    }

    &.primary {
      .hd {
        background-color: map-get($bg-colors, primary);
        color: map-get($colors, light);
      }
    }

    &.warn {
      .hd {
        background-color: map-get($bg-colors, warn);
        color: map-get($colors, light);
      }
    }

    &.success {
      .hd {
        background-color: map-get($bg-colors, success);
        color: map-get($colors, light);
      }
    }

    &.danger {
      .hd {
        background-color: map-get($bg-colors, danger);
        color: map-get($colors, light);
      }
    }

    .inner {
      position: absolute;
      top: 50px;
      left: 50%;
      width: 500px;
      height: 300px;
      margin-left: -250px;
      border-radius: 10px;
      overflow: hidden;
      background-color: map-get($colors, light);

      .hd {
        height: 44px;
        padding: 0 15px;
        line-height: 44px;
        box-sizing: border-box;

        h1 {
          font-size: 18px;
          display: inline-block;
        }

        span {
          float: right;
        }
      }

      .wrap {
        padding: 50px;
        box-sizing: border-box;
      }
    }
  }
</style>