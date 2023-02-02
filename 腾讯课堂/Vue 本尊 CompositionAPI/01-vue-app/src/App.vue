<template>
  <div class="">
    <VSetup title="标题" author="作者" :content="content">
      <template v-slot:default>
        <div >111</div>
      </template>
    </VSetup>
  </div>
</template>

<script>
import VSetup from "./components/Setup.vue";

export default {
  components: {
    VSetup
  },
  data() {
    return {
      content: "这是标题"
    };
  },
  mounted() {
    setTimeout(() => {
      this.content = "这是新的标题";
    }, 2000);
  }
};
</script>

<style lang="scss" scoped></style>
