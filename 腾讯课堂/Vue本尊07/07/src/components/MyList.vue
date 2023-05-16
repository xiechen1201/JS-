<template>
  <template v-for="item of myList">
    <li v-if="item.isSubscribable" v-bind="$attrs">
      <span>{{ item.title }}</span>
      <button :data-id="item.id">
        {{ item.scribabled ? "已订阅" : "订阅" }}
      </button>
    </li>
    <li v-else>
      <span>{{ item.title }}</span>
      <button disabled>不可订阅</button>
    </li>
  </template>
</template>

<script>
export default {
  name: "MyList",
  props: {
    myList: {
      type: Array
    }
  }
};
</script>
