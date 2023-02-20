const { createApp, mount } = window.Vue;

const app = {
  data() {
    return {
      todoList: [
        {
          id: 1,
          content: "conetnt 1",
          completed: false
        },
        {
          id: 2,
          content: "conetnt 2",
          completed: true
        },
        {
          id: 3,
          content: "conetnt 3",
          completed: false
        }
      ]
    };
  },
  computed: {
    notCompletedTodoList() {
      return this.todoList.filter((el) => el.completed);
    }
  },
  /* template: `
    <ul>
        <li 
          v-for="(item, index) of todoList" 
          v-if="!item.completed" 
          :key="item.id">
          {{ item.content }}
        </li>
    </ul>` */
  /* template: `
    <ul>
      <template v-for="(item, index) of todoList" >
        <li v-if="!item.completed" :key="item.id">
          {{ item.content }}
        </li>
      </template>
    </ul>` */
  template: `
    <ul>
      <li v-for="(item, index) of notCompletedTodoList" :key="item.id">
        {{ item.content }}
      </li>
    </ul>
    `
};

createApp(app).mount("#app");