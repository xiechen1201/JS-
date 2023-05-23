<template>
  <modal ref="modelRef">
    <template #default> This is Header </template>
    <template #content> This is Content </template>
  </modal>
  <button @click="onOpenModal">Open Modal</button>
</template>

<script>
import Modal from "./components/Modal.vue";

export default {
  components: {
    Modal
  },
  methods: {
    onOpenModal() {
      this.$refs.modelRef.openModal();
    }
  }
};
</script>

<style scoped></style>
