<template>
  <input
    type="checkbox"
    :checked="item.completed"
    @click="todoCheck(item.id)" />
</template>

<script>
export default {
  props: ["item"],
  methods: {
    todoCheck(id) {
      this.$emit("todoCheck", id);
    }
  }
};
</script>
