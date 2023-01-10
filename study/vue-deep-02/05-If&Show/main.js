const { createApp } = window.Vue;

let App = {
  template: `
  <div>
    <div>
      <img v-if="isShowImg1" src="https://cdn.pixabay.com/photo/2022/11/15/04/54/automotive-7593064__340.jpg" />
      <img v-show="isShowImg2" src="https://cdn.pixabay.com/photo/2022/12/15/18/15/christmas-7658297__340.jpg" />
    </div>
    <button v-on:click="showImg1">显示图片1</button>
    <button v-on:click="showImg2">显示图片2</button>
  </div>`,
  data() {
    return {
      isShowImg1: false,
      isShowImg2: false,
    };
  },
  methods: {
    showImg1() {
      this.isShowImg1 = !this.isShowImg1;
    },
    showImg2() {
      this.isShowImg2 = !this.isShowImg2;
    },
  },
};

const vm = createApp(App).mount("#app");
console.log(vm);
