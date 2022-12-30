<template>
  <div class>
    <input type="text" v-model="inputValue" />
    <button @click="addTodo(inputValue)">AddTodo</button>
    <ul>
      <li v-for="item in todoList" :key="item.id">
        <input type="checkbox" :value="item.completed" @change="changeCompleted(item.id)" />
        <span :class="{ completed: item.completed }">{{ item.content }}</span>
        <button @click="removTodo(item.id)">RemoveTodo</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: "",
      todoList: [
        {
          id: 1,
          content: "123",
          completed: false,
        },
        {
          id: 2,
          content: "456",
          completed: false,
        },
        {
          id: 3,
          content: "789",
          completed: false,
        },
      ],
    };
  },
  methods: {
    removTodo(id) {
      this.todoList = this.todoList.filter((el) => el.id !== id);
    },
    addTodo(val) {
      this.todoList.push({
        id: new Date().getTime(),
        content: val,
        completed: false,
      });
    },
    changeCompleted(id) {
      this.todoList.map((el) => {
        if (el.id === id) {
          el.completed = !el.completed;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
li {
  margin: 10px 0;
  .completed {
    text-decoration: line-through;
  }
  button {
    margin-left: 10px;
  }
}
</style>
