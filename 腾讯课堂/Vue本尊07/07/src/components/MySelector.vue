<template>
  <select>
    <option value="1">选项1</option>
    <option value="2">选项2</option>
    <option value="3">选项3</option>
  </select>
</template>

<script>
export default {
  name: "MySelector",
  /* props: {
    value: {
      type: String,
      default: "1"
    }
  }, */
  inheritAttrs: false,
  created(){
    console.log(this.$attrs)
  }
  /* data() {
    return {
      selectorValue: this.value
    };
  }, */
  /*methods: {
     v-model="selectorValue" @change="onChangeOption"
    onChangeOption() {
      this.$emit("changeOption", this.selectorValue);
    } 
  }*/
};
</script>
