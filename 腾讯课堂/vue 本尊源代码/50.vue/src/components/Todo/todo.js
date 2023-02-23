import {
  addTodoService,
  toggleTodoService,
  removeTodoService,
  getTodoService
} from '../../service/todo';

const { 
  ref, 
  watch,
  watchEffect,
  computed,
  effectScope,
  onScopeDispose,
  getCurrentScope
} = Vue;

export function useTodoList () {
  const todoData = ref([]);
  const type = ref('');
  let todoCount = null;
  

  const getTodo = () => {
    getTodoService().then(todos => todoData.value = todos);
  }

  const addTodo = async (todoText) => {
    type.value = 'addTodo';
    const todo = {
      id: new Date().getTime(),
      content: todoText,
      completed: false
    }

    try {
      await addTodoService(todo);
      todoData.value.push(todo);
    } catch (e) {}
  }

  const toggleTodo = async (id) => {
    type.value = 'toggleTodo';
    try {
      await toggleTodoService(id);

      todoData.value = todoData.value.map(item => {
        if (item.id === id) {
          item.completed = !item.completed;
        }

        return item;
      })
    } catch (e) {}
  }

  const removeTodo = async (id) => {
    type.value = 'removeTodo';
    try {
      await removeTodoService(id);

      todoData.value = todoData.value.filter(item => item.id !== id);
    } catch (e) {}
  }

  const scope = effectScope();

  const myScope = getCurrentScope();

  console.log(myScope);

  scope.run(() => {
    todoCount = computed(() => todoData.value.length);

    watchEffect(getTodo);

    watch(type, () => {
      switch (type.value) {
        case 'addTodo':
          console.log('增加项目');
          break;
        case 'toggleTodo':
          console.log('项目完成与否');
          break;
        case 'removeTodo':
          console.log('删除项目');
          break;
        default:
          break;
      }
    })

    onScopeDispose(() => {
      console.log('clear');
    })
  });

  // scope.stop();

  // const stopArr = [];

  // todoCount = computed(() => todoData.value.length);

  // const stopComputed = () => {
  //   todoCount = null;
  // }

  // const effectStop = watchEffect(getTodo);

  // const watchStop = watch(type, () => {
  //   switch (type.value) {
  //     case 'addTodo':
  //       console.log('增加项目');
  //       break;
  //     case 'toggleTodo':
  //       console.log('项目完成与否');
  //       break;
  //     case 'removeTodo':
  //       console.log('删除项目');
  //       break;
  //     default:
  //       break;
  //   }
  // });

  // stopArr = [ stopComputed, effectStop, watchStop ];

  // stopArr.forEach(stop => stop());

  return {
    todoData,
    todoCount,
    addTodo,
    toggleTodo,
    removeTodo
  }
}