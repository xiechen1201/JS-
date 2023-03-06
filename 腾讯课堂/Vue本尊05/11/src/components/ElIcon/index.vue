<template>
  <img class="icon-loading" :src="icon" alt="" />
</template>

<script>
import icon from "../../icons/loading.svg";

export default {
  data() {
    return {
      icon
    };
  }
};
</script>

<style lang="scss" scoped>
@keyframes choice {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.icon-loading {
  width: 15px;
  animation: choice 1s linear infinite;
}
</style>
