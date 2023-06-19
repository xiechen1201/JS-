const { createApp, mount } = window.Vue;

const myAlert = {
  // <div class="my-alert danger show">
  // <div class="my-alert" :class="alertClassObj">
  // <div class="my-alert" :class="{ 'show': isShow, 'danger': hasError }" >
  //  <div class="my-alert" :class="[showClass, dangerClass]" >
  template: `
    <div class="my-alert" :class="[isShow ? 'show' : '', hasError ? 'danger' : '' ]" >
        <header>{{ title }}</header>
        <div class="content">
            <p>{{ content }}</p>
        </div>
        <div class="btn-group">
            <button>Confirm</button>
        </div>
    </div>
    `,
  data() {
    return {
      title: "This is my first ALERT",
      content: "This is my content for my first ALERT",
      isShow: true,
      hasError: true,
      alertClassObj: {
        show: true,
        danger: true
      },
      showClass: "show",
      dangerClass: "danger"
    };
  },
  mounted(){
    console.log(this.$attrs)
  }
};

const App = {
  components: {
    myAlert
  },
  template: `
        <myAlert class="testName" data-id="1" />
    `
};

createApp(App).mount("#app");
