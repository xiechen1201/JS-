<template>
  <div class="el-button-container">
    <button>
      <ElIcon />
      <span>加载中</span>
    </button>
  </div>
</template>

<script>
import ElIcon from "../ElIcon/index.vue";

export default {
  components: {
    ElIcon
  }
};
</script>

<style lang="scss" scoped>
.el-button-container {
  margin: 50px 0;
  button {
    position: relative;
    left: 50%;
    transform: translate(-50%);
    padding: 5px 10px;
    display: flex;
    align-items: center;

    span{
      margin-left: 5px;
    }
  }
}
</style>
