import MyBadge from './MyBadge';

export default {
  install (app) {
    app.component(MyBadge.name, MyBadge);
  }
}