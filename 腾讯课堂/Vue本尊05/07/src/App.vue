<template>
  <div>
    <recommend-tab :initial-index="initialIndex"></recommend-tab>
  </div>
</template>

<script>
import RecommendTab from "./components/RecommendTab/index.vue"

export default {
  components:{
    RecommendTab
  },
  data() {
    return {
      initialIndex: 1
    };
  }
};
</script>

<style></style>
