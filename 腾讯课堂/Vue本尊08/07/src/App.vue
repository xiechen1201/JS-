<template>
  <div>
    <button @click="openMessageBox">Show</button>
    <button @click="openMessageBoxSuccess">Show primary</button>
    <button @click="openMessageBoxDanger">Show danger</button>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    openMessageBox() {
      this.$messagebox.show(
        {
          title: "App",
          content: "This is App content."
        },
        () => {
          console.log("MessageBox is opened!");
        }
      );
    },
    openMessageBoxSuccess() {
      this.$messagebox.success(
        {
          title: "App",
          content: "This is App content."
        },
        () => {
          console.log("MessageBox is opened!");
        }
      );
    },
    openMessageBoxDanger() {
      this.$messagebox.danger(
        {
          title: "App",
          content: "This is App content."
        },
        () => {
          console.log("MessageBox is opened!");
        }
      );
    }
  }
};
</script>
