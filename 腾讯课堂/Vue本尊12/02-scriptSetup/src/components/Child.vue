<template>
  <h2>
    {{ content }}
  </h2>
  <button @click="onChangeContent">Change content</button>
</template>

<script setup>
import { ref, toRefs } from "vue";

const props = defineProps({
  content: {
    type: String,
    default: ""
  }
});
const emit = defineEmits(["changeContent"]);

const { content } = toRefs(props);
const onChangeContent = () => {
  emit("changeContent");
};

const a = 1;
const b = ref(2);
defineExpose({
  a,
  b
});
</script>

<style lang="scss" scoped></style>
