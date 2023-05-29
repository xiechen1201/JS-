import { createApp, h } from "vue";
import App from "./App.vue";

createApp(App).mount("#app");

// console.log(h(App)); // 返回 vNode

/* createApp({
  data() {
    return {
      title: "This is title.",
      author: "Xiechen",
      dateTime: "2023/05/23",
      content: "This is content."
    };
  },
  render() {
    return h(
      "div",
      {
        id: "box"
      },
      h(
        "div",
        {
          class: "article-box"
        },
        [
          h(
            "h1",
            {
              class: "title"
            },
            this.title
          ),
          h("p", null, [
            this.author + "-",
            h("span", { class: "date-time" }, this.dateTime)
          ]),
          h("p", { class: "content" }, this.content)
        ]
      )
    );
  }
}).mount("#app"); */
