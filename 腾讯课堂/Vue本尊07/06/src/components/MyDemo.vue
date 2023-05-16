<template>
  <p>{{ count }}</p>
  <p>{{ title }}</p>
  <p>{{ content }}</p>
  <div>
    <span>{{ x }}</span> + <span>{{ y }}</span> = <span>{{ x + y }}</span>
  </div>
</template>

<script>
export default {
  name: "MyDemo",
  props: {
    count: Number,
    status: [Number, String], // 或者为 Number 1
    title: String,
    content: {
      type: String,
      required: true
    },
    x: {
      type: Number,
      default: 10
    },
    y: {
      type: Number,
      default: 20
    },
    article: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>
