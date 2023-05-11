<template>
  <div class="input-box">
    <label>Username:</label>
    <my-input
      type="text"
      placeholder="Username"
      name="username"
      ref="usernameRef"
      @set-value="setValue"></my-input>
  </div>
  <div class="input-box">
    <label>Password:</label>
    <my-input
      type="password"
      placeholder="Password"
      name="password"
      ref="passwordRef"
      @set-value="setValue"></my-input>
  </div>
  <div class="input-box">
    <my-button type="success" @click="loginAction">Login</my-button>
  </div>
</template>

<script>
import MyInput from "./MyInput.vue";
import MyButton from "./MyButton.vue";

export default {
  name: "LoginBoard",
  components: {
    MyInput,
    MyButton
  },
  data() {
    return {
      username: "",
      paddword: ""
    };
  },
  methods: {
    setValue({ name, value }) {
      this[name] = value;
    },
    loginAction() {
      console.log(this.$refs.usernameRef);
      console.log(this.$refs.passwordRef);
      console.log(this.username, this.password);
    }
  }
};
</script>
