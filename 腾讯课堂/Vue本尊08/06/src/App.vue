<template>
  <button @click="onClickShowModal">Show Modal</button>
  <button @click="onClickShowModalWarn">Show Modal Warn</button>
</template>

<script>
export default {
  methods: {
    onClickShowModal() {
      this.$modal.open({
        isShow: true,
        type: "success",
        title: "标题",
        content: "内容"
      });
    },
    onClickShowModalWarn() {
      this.$modal.warn({
        title: "Warn title",
        content: "Warn content"
      });
    }
  }
};
</script>
