<template>
  <div>
    <!--在模版中调用组件应使用 kebab-case 的格式 -->
    <!-- <tab :tab-data="tabData"></tab> -->
    <modal
      width="500"
      confirm-btn="确认"
      cancle-btn="取消"
      :modal-show="modalShow"
      modal-title="This is my title"
      type="warning"
      @modal-confirm="modalConfirm"
      @modal-cancle="modalCancle">
      <my-form
        :my-username="myUsername"
        :my-password="myPassword"
        @update:my-username="updateMyUsername"
        @update:my-password="updateMyPassword"></my-form>
    </modal>
  </div>
</template>

<script>
import Tab from "./components/Tab/index.vue";
import Modal from "./components/Modal/index.vue";
import MyForm from "./components/MyForm/index.vue";

export default {
  components: {
    Tab,
    Modal,
    MyForm
  },
  data() {
    return {
      modalShow: true,
      myUsername: "",
      myPassword: "",
      tabData: {
        intialIndex: 1,
        searchValue: "",
        data: [
          {
            id: 1,
            itemTitle: "Nav-1",
            title: "Title-1",
            content: "Nav-content-1"
          },
          {
            id: 2,
            itemTitle: "Nav-2",
            title: "Title-2",
            content: "Nav-content-2"
          },
          {
            id: 3,
            itemTitle: "Nav-3",
            title: "Title-3",
            content: "Nav-content-3"
          }
        ]
      }
    };
  },
  methods: {
    modalConfirm() {
      console.log("confirm");
    },
    modalCancle() {
      this.modalShow = false;
    },
    updateMyUsername(name) {
      this.myUsername = name;
    },
    updateMyPassword(word) {
      this.myPassword = word;
    }
  }
};
</script>

<style></style>
