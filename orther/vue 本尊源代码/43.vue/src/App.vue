<template>
  <!-- <v-setup
    title="This is TITLE"
    author="Xiaoyesensen"
    :content="content"
    :data-id="123"
  ></v-setup> -->
  <v-setup ref="vSetupRef">
    <template #default>This is TITLE</template>
    <template #author>Xiaoyesensen</template>
    <template #content>This is CONTENT</template>
  </v-setup>
</template>

<script>

import VSetup from './components/VSetup';
import { ref, onMounted } from 'vue';

export default {
  name: 'App',
  components: {
    VSetup
  },
  // data () {
  //   return {
  //     content: 'This is CONTENT'
  //   }
  // },
  // mounted () {
  //   setTimeout(() => {
  //     this.content = 'This is my CONTENT'
  //   }, 1000);
  // }
  setup () {
    const vSetupRef = ref(null);

    onMounted(() => {
      console.log(vSetupRef.value);
    })

    return {
      vSetupRef
    }
  }
}
</script>
