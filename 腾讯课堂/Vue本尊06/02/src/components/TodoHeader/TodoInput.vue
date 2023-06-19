<template>
  <input type="text" v-model="content" :placeholder="placeholder" />
</template>

<script>
export default {
  inject: ["placeholder", "TodoListIns"],
  data() {
    return {
      content: ""
    };
  },
  watch: {
    content() {
      if (this.content.length > 0) {
        this.$emit("changeContent", this.content);
      }
    }
  },
  methods: {
    reset() {
      this.content = "";
    }
  },
  mounted() {
    // console.log(this.placeholder)
    // console.log(this.TodoListIns);
  }
};
</script>

<style></style>
