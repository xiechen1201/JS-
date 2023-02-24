<template lang="">
  <div>
    <h2>This is CONTENT2</h2>
    <p>{{ b }}</p>
    <button @click="giveMore">ADD B</button>
  </div>
</template>
<script setup>
  const props = defineProps({
    b: {
      type: Number,
      default: 0
    }
  });

  // interface IProps {
  //   b: number;
  // }

  // const props = withDefaults(defineProps<IProps>(), {
  //   b: 0
  // })

  /**
   * export default {
   *   emits: ['addB']
   * }
   * 
   */

  const emit = defineEmits(['giveMore']);

  // const emit = defineEmits<{
  //   (a: number, b: string): void
  // }>

  const giveMore = () => {
    emit('giveMore', 100);
  }
</script>
<style lang="">
  
</style>