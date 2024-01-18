<template>
  <div class="error-tip" v-if="errorCode">
    <img src="@/assets/img/error.png" />
    <p>{{ errorData[errorCode] }}</p>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import errorData from "@/data/error";

export default {
  name: "ErrorTip",
  setup() {
    const store = useStore();

    return {
      errorCode: computed(() => store.state.errorCode),
      errorData,
    };
  },
};
</script>

<style lang="scss" scoped>
.error-tip {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  img {
    width: 0.5rem;
  }
  p {
    margin-top: 0.15rem;
    font-size: 0.14rem;
    color: #999;
  }
}
</style>
