<template>
  <div class="my-form-box">
    <div class="input-box">
      <input v-model="username" placeholder="UserName" type="text" />
    </div>
    <div class="input-box">
      <input v-model="password" placeholder="PassWord" type="password" />
    </div>
  </div>
</template>

<script>
export default {
  name: "my-form",
  props: ["myUsername", "myPassword"],
  /* data() {
    return {
      username: "",
      password: ""
    };
  }, */
  computed: {
    username: {
      get() {
        return this.myUserName;
      },
      set(newValue) {
        this.$emit("update:myUsername", newValue);
      }
    },
    password: {
      get() {
        return this.myPassword;
      },
      set(newValue) {
        this.$emit("update:myPassword", newValue);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.my-form-box {
  .input-box {
    height: 34px;
    margin-top: 20px;

    input {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      padding: 0 15px;
      border-radius: 3px;
    }
  }
}
</style>
