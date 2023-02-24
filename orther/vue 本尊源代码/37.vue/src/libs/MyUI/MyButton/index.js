import MyButton from './MyButton';

export default {
  install (app) {
    app.component(MyButton.name, MyButton);
  }
}