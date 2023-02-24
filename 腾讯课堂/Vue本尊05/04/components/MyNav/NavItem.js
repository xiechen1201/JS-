const NavItem = {
  template: `
    <li class="nav-item">
      <a :href="item.link" target="_blank">{{ item.title }}</a>
    </li>`,
  props: ["item"]
};

export default NavItem;
