<template>
  <div>
    <input 
      type="text" 
      placeholder="Please input ...."
      v-model="todoText"
    />
    <button @click="setTodo">ADD</button>
  </div>
</template>
<script setup>
  const { ref, inject } = Vue;

  const todoText = ref('');
  const { addTodo } = inject('todoMethods');

  const setTodo = () => {
    if (todoText.value.length) {
      // addTodo
      addTodo(todoText.value);
    }

    todoText.value = '';
  }

</script>