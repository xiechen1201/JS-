<template>
  <form @submit="submitMyForm">
    <input
      type="text"
      name="username"
      placeholder="Username"
      v-model="username" />
    <input
      type="password"
      name="password"
      placeholder="Password"
      v-model="password" />
    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  name: "MyForm",
  //  emits: ["submit"],
  emits: {
    submit: ({ username, password }) => {
      if (username && password) {
        console.log("Emit successfully!!!");
        return true;
      }
      console.log("Faild to emit!!!")
      return false;
    }
  },
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    submitMyForm(e) {
      e.preventDefault();

      this.$emit("submit", {
        username: this.username,
        password: this.password
      });

      // 可以传递多个参数
      /* this.$emit("submit", this.username, this.password, 10, 20, 30, 40, 50); */
    }
  }
};
</script>
