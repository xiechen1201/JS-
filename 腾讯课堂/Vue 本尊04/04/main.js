const { createApp, mount } = window.Vue;

const app = {
  data() {
    return {
      list: [
        {
          id: 1,
          name: "Mike"
        },
        {
          id: 2,
          name: "Tom"
        }
      ],
      privateInfo: {
        name: "Crystal",
        age: 18,
        hobbies: ["Travel", "Piano"]
      }
    };
  },
  template: `
    <ul>
        <li v-for="(item, index) of list" :key="item.id">{{ item.name }}</li>
    </ul>
    <ul>
        <li v-for="(value, key, index) in privateInfo">
            {{ key }}: {{ value }}
            <template v-if="key === 'hobbies'">
                <span v-for="(item, index) of value">
                    {{ item }}、
                </span>
            </template>
        </li>
    </ul>
  `
};

createApp(app).mount("#app");
