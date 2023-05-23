<template>
  <div :class="['message-box', type]">
    <div class="inner">
      <header class="header">
        <h1 class="title">{{ title }}</h1>
        <span class="icon" @click="$messagebox.hide()">x</span>
      </header>
      <div class="content">{{ content }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MessageBox",
  props: {
    title: {
      type: String,
      default: "This is title"
    },
    content: {
      type: String,
      default: "This is content."
    },
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
body {
  margin: 0;
}
h1 {
  margin: 0;
  font-weight: normal;
}
.message-box {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  &.primary {
    .header {
      background-color: blue;
      color: #fff;
    }
  }
  &.success {
    .header {
      background-color: green;
      color: #fff;
    }
  }
  &.warn {
    .header {
      background-color: orange;
      color: #fff;
    }
  }
  &.danger {
    .header {
      background-color: red;
      color: #fff;
    }
  }

  .inner {
    position: absolute;
    top: 10px;
    left: 50%;
    width: 500px;
    margin-left: -250px;
    background-color: #fff;
    box-shadow: 1px 3px 5px #ededed;
    overflow: hidden;

    .header {
      height: 44px;
      padding: 0 10px;
      line-height: 44px;
      box-sizing: border-box;

      .title {
        float: left;
        font-size: 16px;
      }

      .icon {
        float: right;
        cursor: pointer;
      }
    }

    .content {
      padding: 20px;
      box-sizing: border-box;
    }
  }
}
</style>
