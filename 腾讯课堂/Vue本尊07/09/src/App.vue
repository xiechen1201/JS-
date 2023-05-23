<template>
  <div>
    <div :class="['light', { turnedOn: isTurnedOn }]"></div>
    <my-switch v-on:switch-my-light="onSwitchMyLight" />
    <my-counter @click="getCount" />
    <my-form @submit="getUserInfo" />
    <my-input v-model:my-name.prefixer="myName" />
    <input type="text" v-model="myName" />
  </div>
</template>

<script>
import MySwitch from "./components/MySwitch.vue";
import MyCounter from "./components/MyCounter.vue";
import MyForm from "./components/MyForm.vue";
import MyInput from "./components/MyInput.vue";

export default {
  name: "App",
  components: {
    MySwitch,
    MyCounter,
    MyForm,
    MyInput
  },
  data() {
    return {
      isTurnedOn: false,
      myName: "xiechen"
    };
  },
  methods: {
    onSwitchMyLight() {
      this.isTurnedOn = !this.isTurnedOn;
    },
    getCount(count) {
      console.log(count);
    },
    // getUserInfo({ username, password }) {}
    getUserInfo(...args) {
      console.log(args);
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
