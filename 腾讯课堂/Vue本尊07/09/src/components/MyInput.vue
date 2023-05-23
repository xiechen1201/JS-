<template>
  <div>
    <h1>{{ myName }}</h1>
    <input type="text" :value="myName" @input="emitName" />
  </div>
  <!-- @input="$emit('update:myName', $event.target.value)" -->
</template>

<script>
export default {
  name: "MyInput",
  props: {
    myName: String,
    myNameModifiers: {
      default: () => ({})
    }
  },
  emits: ["update:myName"],
  created() {
    console.log(this.myNameModifiers);
  },
  methods: {
    emitName(e) {
      let inputValue = e.target.value;

      if (this.myNameModifiers.prefixer && !inputValue.match(/UP主：/)) {
        inputValue = "UP主：" + inputValue;
      }
      this.$emit("update:myName", inputValue);
    }
  }
};
</script>
