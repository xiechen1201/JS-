import "./index.scss";
import MyLogo from "../MyLogo/index.js";
import MyNav from "../MyNav/index.js";
import MyUser from "../MyUser/index.js";

const MyHeader = {
  template: `
    <header>
      <my-logo />
      <my-nav :nav-data="navData" />
      <my-user />
      <div style="clear: both;"></div>
    </header>`,
  // 注册数据属性
  props: ["navData"],
  components: {
    MyLogo,
    MyNav,
    MyUser
  }
};

export default MyHeader;
