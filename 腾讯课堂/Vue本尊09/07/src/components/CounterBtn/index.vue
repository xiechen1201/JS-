<template>
  <button :action="action" @click="compute">
    {{ innerText }}
  </button>
</template>

<script>
export default {
  props: {
    action: String,
    innerText: String
  },
  methods: {
    compute() {
      this.$emit("diapatch", this.action);
    }
  }
};
</script>

<style></style>
