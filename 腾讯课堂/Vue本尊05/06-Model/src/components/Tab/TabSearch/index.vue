<template>
  <div class="tab-search">
    <input type="text" placeholder="请输入" v-model="value" />
  </div>
</template>

<script>
export default {
  prop: ["searchValue"],
  /* computed: {
    value: {
      set(newValue) {
        this.$emit("update:searchValue", newValue);
      },
      get() {
        return this.searchValue;
      }
    }
  } */
  
  data() {
    return {
      value: this.searchValue
    };
  },
  watch: {
    value() {
      this.$emit("update:searchValue", this.value);
    }
  }
};
</script>

<style lang="scss" scoped>
.tab-search {
  height: 50px;
  padding: 6px 10px;
  border-bottom: 1px solid #333;
  box-sizing: border-box;

  input {
    width: 100%;
    height: 38px;
    box-sizing: border-box;
  }
}
</style>
