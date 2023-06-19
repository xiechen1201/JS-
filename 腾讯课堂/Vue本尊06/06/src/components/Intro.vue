<template>
  <div>
    <h1>Intro</h1>
    <p>This is an introduction of Dynamic an Asynchronous component in Vue.</p>
  </div>
</template>

<script>
export default {
  name: "Intro",
  mounted() {
    console.log("Intro mounted!");
  },
  unmounted() {
    console.log("Intro unmounted!");
  },
  activated() {
    console.log("Intro activated!");
  },
  deactivated() {
    console.log("Intro deactivated!");
  }
};
</script>

<style></style>
