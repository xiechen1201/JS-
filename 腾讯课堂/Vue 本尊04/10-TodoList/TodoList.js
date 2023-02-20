const TodoList = {
  template: `
  <div>
    <div>
        <input v-model="inputValue" type="text" placeholder="请输入" />
        <button @click="addTodo">Add</button>
    </div>
    <div>
        <ul>
            <template v-if="todoList.length > 0">
                <li v-for="item of todoList" :key="item.id">
                    <input 
                        type="checkbox" 
                        :checked="item.completed" 
                        @click="toggleTodo(item.id)"
                     />
                    <span :style="{ textDecoration: item.completed ? 'line-through' : '' }">
                        {{ item.content }}
                    </span>
                    <button @click="delTodo(item.id)">Del</button>
                </li>
            </template>
            <template v-else>
                <li>No Data!</li>
            </template>
        </ul>
    </div>
  </div>`,
  data() {
    return {
      inputValue: "",
      todoList: []
    };
  },
  methods: {
    addTodo() {
      const _inputValue = this.inputValue.trim();
      if (_inputValue.length <= 0) {
        return false;
      }

      const hasThisContent = this.todoList.some((el) => el.content === _inputValue);
      if (hasThisContent) {
        return alert("This content in TodoList");
      }

      this.todoList.push({
        id: new Date().getTime(),
        content: _inputValue,
        completed: false
      });

      this.inputValue = "";
    },
    delTodo(id) {
      const index = this.todoList.findIndex((el) => el.id === id);
      this.todoList.splice(index, 1);
    },
    toggleTodo(id) {
      this.todoList.forEach((el) => {
        if (el.id === id) {
          el.completed = !el.completed;
        }
      });
    }
  }
};

export default TodoList;
