<script>
import { h } from "vue";

export default {
  name: "VModel",
  props: {
    username: String,
    password: String
  },
  emits: ["update:username", "update:password", "submit"],
  render() {
    return h("div", null, [
      h("input", {
        type: "text",
        value: this.username,
        placeholder: "Username",
        onInput: ($event) => this.$emit("update:username", $event.target.value)
      }),
      h("input", {
        type: "password",
        value: this.password,
        placeholder: "Password",
        onInput: ($event) => this.$emit("update:password", $event.target.value)
      }),
      h("button", {
        onClick: () => this.$emit("submit")
      },'Submit')
    ]);
  }
};
</script>
