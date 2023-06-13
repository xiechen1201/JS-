<template>
  <!-- <VSetup title="This is title." author="Xiechen" :content="content" class="test-attrs" /> -->
  <VSetup ref="VSetupRef">
    <template #default>This is title.</template>
    <template #author>Xiechen</template>
    <template #content>{{ content }}</template>
  </VSetup>
</template>

<script>
import { ref, onMounted } from "vue";

import VSetup from "./components/VSetup.vue";

export default {
  components: {
    VSetup
  },
  data() {
    return {
      content: "This is content."
    };
  },
  setup() {
    const VSetupRef = ref(null);

    onMounted(() => {
      console.log(VSetupRef.value);
      // VSetupRef.value.test();
    });

    return {
      VSetupRef
    };
  },
  /* mounted() {
    setTimeout(() => {
      this.content = "This is my content.";
    }, 1000);
  } */
};
</script>
