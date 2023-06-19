<template>
  <p>I am father SFC.</p>
  <Son />
</template>

<script>
import Son from "./Son.vue"

export default {
  name: "Father",
  components:{
    Son
  },
  setup() {}
};
</script>
