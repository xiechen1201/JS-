const { createApp, mount } = window.Vue;

/* const app = {
  template: `
    <p>
        <p>{{ innerText }}</p>
        <input type="text" v-model="innerText" />
        <input type="text" :value="innerText" @input="e => innerText = e.target.value" />
    </p>
  `,
  data() {
    return {
      innerText: ""
    };
  }
}; */

/* const app = {
  template: `
      <p>
        {{ selectedValue }}
        <select v-model="selectedValue">
            <!-- 如果未能匹配到对应的 value，那么页面就会显示空项，IOS 中时无法厨房 change 事件的，用户时没办法选择第一项，所以需要给一个空的占位 -->
            <option disabled value="">请选择</option>
            <option value="zhangsan">张三</option>
            <option value="lisi">李四</option>
        </select>

        <!-- v-model 是一下内容的语法糖 -->
        <select :value="selectedValue" @change="e => selectedValue = e.target.value">
            <option disabled value="">请选择</option>
            <option value="zhangsan">张三</option>
            <option value="lisi">李四</option>
        </select>
      </p>
    `,
  data() {
    return {
      selectedValue: ""
    };
  }
}; */

/* const app = {
  template: `
    <p>
        {{ cbChecked }}
        <input type="checkbox" v-model="cbChecked" />

        <!-- v-model 是以下内容的语法糖 -->
        <input type="checkbox" :checked="cbChecked" @change="e => cbChecked = e.target.checked" />
    </p>`,
  data() {
    return {
      cbChecked: false
    };
  }
}; */

/* const app = {
  template: `
      <p>
        <!-- v-model 做复选框 -->
        <p>{{ selectedCountries }}</p>
        <p>中国<input type="checkbox" value="China" v-model="selectedCountries" /></p>
        <p>俄罗斯：<input type="checkbox" value="Russia" v-model="selectedCountries" /></p>
        <p>美国：<input type="checkbox" value="America" v-model="selectedCountries" /></p>
      </p>`,
  data() {
    return {
      cbChecked: false,
      selectedCountries: []
    };
  }
}; */

/* const app = {
  template: `
    <p>
        <p>{{ gender }}</p>
        <p>男<input type="radio" value="male" v-model="gender" /></p>
        <p>女<input type="radio" value="female" v-model="gender" /></p>
    </p>`,
  data() {
    return {
      cbChecked: false,
      selectedCountries: [],
      gender: ""
    };
  }
}; */

/* const app = {
  template: `
    <p>
        <p>{{ selectedValue }}</p>
        <select v-model="selectedValue" multiple>
            <option value="" disabled>请选择</option>
            <option value="China">中国</option>
            <option value="Russia">俄罗斯</option>
            <option value="America">美国</option>
        </select>
    </p>`,
  data() {
    return {
      cbChecked: false,
      selectedCountries: [],
      gender: "",
      selectedValue: []
    };
  }
}; */

/* const app = {
  template: `
    <p>
        <p>{{ toggle }}</p>
        <input type="checkbox" v-model="toggle" true-value="yes" false-value="no" />
    </p>`,
  data() {
    return {
      toggle: 'yes'
    };
  }
}; */

const app = {
  template: `
    <p>
        <p>{{ textValue }}</p>
        <input type="text" v-model.lazy="textValue" />
    </p>`,
  data() {
    return {
      textValue: ""
    };
  }
};

createApp(app).mount("#app");
