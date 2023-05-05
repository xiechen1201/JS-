<template>
  <button @click="removeAll">全部删除</button>
</template>

<script>
export default {
  methods: {
    removeAll() {
        this.$emit("removeAll")
    }
  }
};
</script>
