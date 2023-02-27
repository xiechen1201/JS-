<template>
  <div v-show="modalShow" :class="['modal', type ? type : '']">
    <div
      class="inner"
      :style="{
        width: (width || 300) + 'px',
        marginLeft: -(width ? width / 2 : 150) + 'px'
      }">
      <header class="header">
        <h1>{{ modalTitle }}</h1>
      </header>
      <div class="content">
        <slot></slot>
      </div>
      <div v-if="confirmBtn || cancleBtn" class="btn-group">
        <button v-if="confirmBtn" class="btn confirm-btn" @click="confirm">
          {{ confirmBtn }}
        </button>
        <button v-if="cancleBtn" class="btn cancle-btn" @click="cancle">
          {{ cancleBtn }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "modal",
  props: [
    "width",
    "confirmBtn",
    "cancleBtn",
    "modalShow",
    "modalTitle",
    "type"
  ],
  methods: {
    confirm() {
      this.$emit("modalConfirm");
    },
    cancle() {
      this.$emit("modalCancle");
    }
  }
};
</script>

<style lang="scss" scoped>
/**
 * primary blue
 * success green
 * danger red
 * warning orange
 */

@mixin color-system($color, $bgColor) {
  color: $color;
  background-color: $bgColor;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);

  .inner {
    transition: all 0.3s;
    position: absolute;
    top: 50px;
    left: 50%;
    height: 300px;
    border-radius: 5px;
    box-shadow: 1px 3px 5px #999;
    background-color: #fff;
    overflow: hidden;

    .header {
      height: 44px;
      line-height: 44px;
      padding: 0 15px;
      box-sizing: border-box;
      font-size: 16px;
      @include color-system(#fff, blue);

      h1 {
        font-weight: normal;
      }
    }

    .content {
      padding: 30px;
      box-sizing: border-box;
    }

    .btn-group {
      height: 74px;
      padding: 20px 25px;
      box-sizing: border-box;

      .btn {
        float: right;
        height: 34px;
        padding: 0 25px;
        font-size: 14px;
        margin-left: 10px;
        border-radius: 3px;

        &.cancle-btn {
          background-color: transparent;
          color: #333;
          border: 1px solid #999;
        }
      }
    }
  }

  &.primary {
    .confirm-btn,
    .header {
      @include color-system(#fff, blue);
    }
  }

  &.success {
    .confirm-btn,
    .header {
      @include color-system(#fff, green);
    }
  }

  &.danger {
    .confirm-btn,
    .header {
      @include color-system(#fff, red);
    }
  }

  &.warning {
    .confirm-btn,
    .header {
      @include color-system(#fff, orange);
    }
  }
}
</style>
