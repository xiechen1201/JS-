import "./index.scss"
import NavItem from "./NavItem.js"

const MyNav = {
  template: `
    <ul class="my-nav">
      <nav-item v-for="item in navData" :key="item.id" :item="item" />
    </ul>`,
  props: ["navData"],
  components: {
    NavItem
  }
};

export default MyNav;
