<template>
  <div class="">
    <h1>{{ title }}</h1>
    <p>{{ author }}</p>
    <p>{{ content }}</p>
    <p>{{ myContent }}</p>
    <slot></slot>
  </div>
</template>

<script>
import { computed, toRef, toRefs } from "vue";

export default {
  props: {
    title: String,
    author: String,
    content: String
  },
  setup(props, context) {
    /* console.log(props);
    console.log(context);

    const { content } = props;
    const myContent = computed(() => {
      return "Content：" + content;
    }); */

    const { content } = toRefs(props);
    const _content = toRef(props, content);

    const myContent = computed(() => {
      console.log(_content)
      return "Content：" + content.value;
    });

    console.log(context)

    return {
      myContent
    };
  }
};
</script>

<style lang="scss" scoped></style>
