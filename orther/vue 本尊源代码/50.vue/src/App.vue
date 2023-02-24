<template>
  <div>
    <todo></todo>
  </div>
</template>
<script setup>
  import Todo from './components/Todo';

  /**
   * 操作了以后 -> service -> success -> 更改前端的数据
   * 
   * service
   * 前端数据操作
   * 
   * count -> todoList.length  completed
   * 
   * 做了操作 -> 数据变更 -> 打印日志   watch
   * 
   * getTodo -> watchEffect()
   */
</script>