<template>
  <div>
    <modal 
      ref="myModal1"
      type="success"
    >
      <template #default>This is HEADER 1</template>
      <template #content>This is CONTENT 1</template>
    </modal>
    <modal 
      ref="myModal2"
      type="warn"
    >
      <template #default>This is HEADER 2</template>
      <template #content>This is CONTENT 2</template>
    </modal>
    <button @click="openModal1">Open Modal 1</button>
    <button @click="openModal2">Open Modal 2</button>
  </div>
</template>

<script>

import Modal from './components/Modal';

export default {
  name: 'App',
  components: {
    Modal
  },
  methods: {
    openModal1 () {
      this.$refs.myModal1.openModal();
    },
    openModal2 () {
      this.$refs.myModal2.openModal();
    }
  }
}
</script>

<style lang="scss" scoped>
 
</style>