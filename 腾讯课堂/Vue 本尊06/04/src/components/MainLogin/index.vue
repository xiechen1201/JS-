<template>
  <div class="login-tab">
    <div class="login-nav">
      <div
        v-for="item of tabData"
        :key="item"
        :class="['nav-item', { acvive: item === currentTab }]"
        @click="onClickTab(item)">
        {{ item }}
      </div>
    </div>
    <div class="login-component">
      <keep-alive>
        <component :is="currentTabComponent"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import AccountLogin from "./AccountLogin.vue";

export default {
  name: "MainLogin",
  components: {
    AccountLogin,
    QrcodeLogin: () => import("./QrcodeLogin.vue"),
    MobileLogin: () => import("./MobileLogin.vue")
  },
  data() {
    return {
      currentTab: "Account",
      tabData: ["Account", "Qrcode", "Mobile"]
    };
  },
  computed:{
    currentTabComponent(){
      return this.currentTab + "Login"
    }
  },
  methods: {
    onClickTab(name) {
      this.currentTab = name;
    }
  }
};
</script>

<style scoped>
.login-tab {
  width: 500px;
  margin: 50px auto;
  border: 1px solid #000;
}

.login-nav {
  height: 50px;
  border-bottom: 1px solid #000;
}

.nav-item {
  float: left;
  width: 33.33%;
  text-align: center;
  line-height: 50px;
}

.acvive {
  background-color: #000;
  color: #fff;
}
</style>
