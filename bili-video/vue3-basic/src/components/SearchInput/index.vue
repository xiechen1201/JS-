<template>
  <div class="search-wrap">
    <input
      type="text"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :value="inputValue"
      @input="searchData($event)"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  placeholder: String,
  maxlength: Number,
});
const inputValue = ref("")

const searchData = (e) => {};
</script>

<style lang="scss" scoped>
.search-wrap {
  position: fixed;
  top: 0.44rem;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 0.38rem;
  padding: 0.03rem 0.1rem;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;
  background-color: #fff;

  input {
    width: 100%;
    height: 100%;
    font-size: 0.14rem;
    border: 1px solid #ddd;
    text-indent: 0.1rem;
    border-radius: 0.03rem;

    &:focus {
      border-color: #ed4040;
      box-shadow: 0 0 0.02rem #ed4040;
      transition: all 0.3s;
    }
  }
}
</style>
