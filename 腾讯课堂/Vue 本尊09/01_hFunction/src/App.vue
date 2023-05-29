<!-- <template>
  <div id="box">
    <div class="article-box">
      <h1 class="title">{{ title }}</h1>
      <p>
        <span>{{ author }}</span> - <span>{{ dateTime }}</span>
      </p>
      <p class="content">{{ content }}</p>
    </div>
    <component :is="currentComponent" />
  </div>
</template> -->

<script>
import { defineAsyncComponent, h } from "vue";
const List1 = defineAsyncComponent(() => import("./components/List/List1.vue"));
const List2 = defineAsyncComponent(() => import("./components/List/List2.vue"));
const List3 = defineAsyncComponent(() => import("./components/List/List3.vue"));

export default {
  components: {
    List1,
    List2,
    List3
  },
  computed: {
    currentComponent() {
      switch (this.manageNo) {
        case 1:
          return "List1";
        case 2:
          return "List2";
        case 3:
          return "List3";
      }
    }
  },
  render() {
    return h(List1);
  },
  data() {
    return {
      title: "This is title.",
      author: "Xiechen",
      dateTime: "2023/05/23",
      content: "This is content.",
      manageNo: 1
    };
  }
};
</script>
