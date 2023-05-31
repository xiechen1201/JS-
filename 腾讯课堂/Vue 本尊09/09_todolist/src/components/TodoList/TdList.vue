<template>
  <div>
    <ul>
      <td-list-item
        v-for="(item, index) of todoData"
        :key="index"
        :item="item"
        @handItem="handItem" />
    </ul>
  </div>
</template>

<script>
import TdListItem from "./TdListItem.vue";

export default {
  name: "TdList",
  components: {
    TdListItem
  },
  props: {
    todoData: Array
  },
  methods: {
    handItem(...args) {
      this.$emit("dispatch", ...args);
    }
  }
};
</script>

<style></style>
