import Vue from "./Vue.js";

const vm = new Vue({
  el: "#app",
  data() {
    return {
      isShow: true,
      hasError: true,
      titleStyle: {
        color: "#fff",
        fontSize: "20px"
      },
      titleShow: true,
      isContentBig: true,
      subTitleColor: "orange"
    };
  },
  template: `
    <div :class="['box', isShow ? 'show' : '', hasError ? 'danger' : '']">
        <h1 :style="[titleStyle, { display: titleShow ? 'block' : 'none' }]">
            This is Title
        </h1>
        <h2 :style="{ display: titleShow ? 'block' : 'none', color: subTitleColor, fontSize: '20px' }">
            This is SUB_TITLE
        </h2>
        <p :class="{ danger: hasError, big: isContentBig  }">
            This is Content.
        </p>
    </div>
  `
});

console.log(vm);

// vm.titleShow = false
