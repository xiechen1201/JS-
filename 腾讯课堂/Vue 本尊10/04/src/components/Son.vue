<template>
  <p>I am son SFC. My grand fathor's age is {{ age }}. Info: {{ info }}</p>
</template>

<script>
import { inject, toRefs } from "vue";

export default {
  name: "Son",
  setup() {
    /*  const age = inject("grandFatherAge");
    const info = inject("grandFatherBodyInfo");

    return { age, info }; */

    const info = inject("grandFatherInfo");
    info.age = 20
    return {
      ...toRefs(info)
    };
  }
};
</script>
