<template>
  <button @click="handleLog">点击</button>
  <ul>
    <li v-for="item in 10" ref="items">
      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      count: 0
    };
  },
  methods: {
    handleLog() {
      this.addCount();
    },
    addCount() {
      this.count++;
      console.log(this.count)
    }
  },
  mounted(){
    console.log(this.$refs)
  }
};
</script>
