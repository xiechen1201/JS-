<template>
  <div>
    <form @submit="onSubmit">
      <input
        type="text"
        v-model.trim="todoText"
        placeholder="Input what you wanna add!" />
    </form>
  </div>
</template>

<script>
export default {
  name: "TdForm",
  data() {
    return {
      todoText: ""
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();

      if (this.todoText.lenght <= 0) {
        return false;
      }

      this.$emit("dispatch", "ADD", {
        id: Date.now(),
        text: this.todoText,
        completed: false
      });

      this.todoText = ""
    }
  }
};
</script>

<style></style>
