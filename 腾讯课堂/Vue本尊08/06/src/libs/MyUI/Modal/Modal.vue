<template>
  <teleport to="body" :disabled="false">
    <div :class="['modal', type]" v-show="isShow">
      <div class="inner">
        <header class="hd">
          <h1>
            {{ title }}
          </h1>
          <span @click="isShow = false">x</span>
        </header>
        <section class="wrap">
          <p>
            {{ content }}
          </p>
        </section>
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  name: "Modal",
  data() {
    return {
      isShow: false,
      type: "primary",
      title: "My title",
      content: "This is my default content."
    };
  },
  methods: {
    init({ isShow, type, title, content }) {
      this.isShow = isShow;
      this.setOption({ type, title, content });
    },
    open({ type, title, content }) {
      this.isShow = true;
      this.setOption({ type, title, content });
    },
    primary({ title, content }) {
      this.isShow = true;
      this.setOption({
        type: "primary",
        title,
        content
      });
    },
    success({ title, content }) {
      this.isShow = true;
      this.setOption({
        type: "success",
        title,
        content
      });
    },
    warn({ title, content }) {
      this.isShow = true;
      this.setOption({
        type: "warn",
        title,
        content
      });
    },
    danger({ title, content }) {
      this.isShow = true;
      this.setOption({
        type: "danger",
        title,
        content
      });
    },
    setOption({ type, title, content }) {
      this.type = ["primary", "success", "warn", "danger"].includes(type)
        ? type
        : this.type;
      this.title = title;
      this.content = content;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/types.scss";

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  &.primary {
    .hd {
      background-color: map-get($bg-colors, primary);
      color: map-get($colors, light);
    }
  }

  &.success {
    .hd {
      background-color: map-get($bg-colors, success);
      color: map-get($colors, light);
    }
  }

  &.warn {
    .hd {
      background-color: map-get($bg-colors, warn);
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
    left: 50px;
    width: 500px;
    height: 300px;
    margin-left: 250px;
    border-radius: 10px;
    overflow: hidden;
    background-color: map-get($colors, light);

    .hd {
      height: 44px;
      padding: 0 15px;
      line-height: 44px;
      box-sizing: border-box;

      h1 {
        margin: 0;
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
