<template>
  <div>
    <td-title :title="title" />
    <td-from @dispatch="dispatch" />
    <td-list :todoData="todoData" @dispatch="dispatch" />
  </div>
</template>

<script>
import TdTitle from "./TdTitle.vue";
import TdFrom from "./TdForm.vue";
import TdList from "./TdList.vue";

import dispatch from "@/dispatchers/todoList";

export default {
  name: "TodoList",
  components: {
    TdTitle,
    TdFrom,
    TdList
  },
  data() {
    return {
      title: "Todi List",
      todoData: []
    };
  },
  methods: {
    dispatch(...args) {
      dispatch(this)(...args);
    }
  }
};
</script>

<style></style>
