<script>
import { h } from "vue";

export default {
  name: "VSlot",
  render() {
    return h("div", null, [
      h("h1", { class: "title" }, this.$slots.default()),
      h("p", { class: "author" }, this.$slots.author()),
      h(
        "p",
        { class: "content" },
        this.$slots.content({
          content: "This is content"
        })
      )
    ]);
  }
};
</script>
