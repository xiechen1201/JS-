<template lang="">
  <div>
    <h2>This is CONTENT1</h2>
    <p>{{ a }}</p>
  </div>
</template>
<script setup>
  const {
    useSlots,
    useAttrs,
    getCurrentInstance
  } = Vue;

  const slots = useSlots();
  const attrs = useAttrs();

  const instance = getCurrentInstance();

  console.log(instance);
  /**
   * export default {
   *   props: {
   *     a: {
   *       type: number,
   *       default: 0
   *     }
   *   }
   * }
   */
  const props = defineProps({
    a: {
      type: Number,
      default: 0
    }
  })
</script>
<style lang="">
  
</style>