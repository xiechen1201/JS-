
<script>

/* 
<template>
  <div class="">
    <h1>{{ title }}</h1>
    <p>{{ author }}</p>
    <p>{{ content }}</p>
    <!-- <p>{{ myContent }}</p> -->
  </div>
</template>
*/

import { computed, toRefs, toRef, h, getCurrentInstance } from "vue";

export default {
  name: "VSetup",
  /* props: {
    title: String,
    author: String,
    content: String
  }, */

  /* setup(props, { attrs, slots, emit, expose }) {
    // const { title, author, content } = props;
    // const myContent = computed(() => "Content:" + content);

    // const { title, author, content } = toRefs(props);
    // const myContent = computed(() => "Content:" + content.value);

    const content = toRef(props, "content");
    const myContent = computed(() => "Content:" + content.value);

    return {
      myContent
    };
  } */

  /* setup(props, { attrs, slots, emit, expose }) {
    console.log(attrs);
    console.log(slots);
    console.log(emit);
    console.log(expose);
  } */

  setup(props, context) {

  /*   const instance = getCurrentInstance()
    console.log(instance) */

   /*  context.expose({
      test: () => console.log("test")
    }); */

    console.log(getCurrentInstance())

    const testStr = "This is test str."

    context.expose({
      testStr
    })

    return () =>
      h("div", null, [
        h("h1", null, context.slots.default()),
        h("p", null, context.slots.author()),
        h("p", null, context.slots.content()),
        h("p", null, testStr)
      ]);
  }
};
</script>

<style lang="scss" scoped></style>
