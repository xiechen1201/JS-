<template>
  <my-selector :value="selectorValue" mode="123" />
  <my-list-container :list-title="listTitle">
    <my-list :my-list="myList" @click="bookSubscribe" />
  </my-list-container>
</template>

<script>
import MySelector from "./components/MySelector.vue";
import MyListContainer from "./components/MyListContainer.vue";
import MyList from "./components/MyList.vue";

export default {
  name: "App",
  components: {
    MySelector,
    MyListContainer,
    MyList
  },
  data() {
    return {
      selectorValue: "3",
      listTitle: "小说订阅列表",
      myList: [
        {
          id: 1,
          title: "悲催世界",
          isSubscribable: true,
          scribabled: false
        },
        {
          id: 2,
          title: "傲慢与偏见",
          isSubscribable: false,
          scribabled: false
        },
        {
          id: 3,
          title: "呼啸山庄",
          isSubscribable: true,
          scribabled: false
        }
      ]
    };
  },
  methods: {
    /* @change-option="onChangeOption"
    onChangeOption(val) {
      console.log(val);
    } */
    bookSubscribe(e) {
      const id = e.target.dataset.id;

      this.myList = this.myList.map((el) => {
        if (el.id === Number(id)) {
          console.log(el);
          el.scribabled = !el.scribabled;
        }
        return el;
      });
    }
  }
};
</script>
