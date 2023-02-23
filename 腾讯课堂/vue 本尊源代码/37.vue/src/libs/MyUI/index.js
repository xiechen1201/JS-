import MyBadge from './MyBadge/MyBadge';
import MyButton from './MyButton/MyButton';

const myUIComponents = [
  MyBadge,
  MyButton
]

const myUIDirectives = []

export default {
  install (app, options) {
    myUIComponents.forEach(c => app.component(c.name, c));

    app.config.globalProperties.$MyUI = {
      test () {
        console.log(123);
      }
    }
  }
}

// export default {
//   install (Vue, options) {
//     myUIComponents.forEach(c => Vue.component(c.name, c));

//     Vue.prototype.myUI.$MyBadge = {
//       add () {}
//     }

//     this.myUI.$MyBadge.add()
//   }
// }