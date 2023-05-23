import _MessageBox from "./MessageBox.vue";

export default {
  install(Vue, options) {
    let messagebox = null;

    Vue.component(_MessageBox.name, _MessageBox);
    Vue.prototype.$messagebox = {
      show,
      hide,
      primary,
      success,
      warn,
      danger
    };

    function primary(props, callback) {
      this.show({ ...props, type: "primary" }, callback);
    }

    function success(props, callback) {
      this.show({ ...props, type: "success" }, callback);
    }

    function warn(props, callback) {
      this.show({ ...props, type: "warn" }, callback);
    }

    function danger(props, callback) {
        this.show({ ...props, type: "danger" }, callback);
      }

    function show(props, callback) {
      if (!messagebox) {
        const MessageBox = Vue.extend({
          render: (h) => h("message-box", { props })
        });

        messagebox = new MessageBox();
        this.vm = messagebox.$mount();
        document.body.appendChild(this.vm.$el);

        callback && callback();
      }
    }

    function hide(callback) {
      document.body.removeChild(this.vm.$el);
      messagebox.$destroy();
      messagebox = null;
      this.vm = null;

      callback && callback();
    }
  }
};
