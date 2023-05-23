<template>
  <div>
    <div :class="['light', { turnedOn: isTurnedOn }]"></div>
    <my-switch v-on:switch-my-light="onSwitchMyLight" />
    <my-counter @click="getCount" />
  </div>
</template>

<script>
import MySwitch from "./components/MySwitch.vue";
import MyCounter from "./components/MyCounter.vue";

export default {
  name: "App",
  components: {
    MySwitch,
    MyCounter
  },
  data() {
    return {
      isTurnedOn: false
    };
  },
  methods: {
    onSwitchMyLight() {
      this.isTurnedOn = !this.isTurnedOn;
    },
    getCount(count) {
      console.log(count);
    }
  }
};
</script>

<style scoped>
.light {
  width: 100px;
  height: 100px;
  border: 1px solid #000;
  border-radius: 50%;
}
.turnedOn {
  border-color: #ddd;
  background-color: yellow;
  box-shadow: 0 0 15px yellow;
}
</style>
