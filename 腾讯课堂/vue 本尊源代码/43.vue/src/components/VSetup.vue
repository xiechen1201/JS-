<template>
  <div>
    <!-- <h1>{{ title }}</h1>
    <p>{{ author }}</p>
    <p>{{ content }}</p>
    <p>{{ myContent }}</p> -->
    <h1><slot></slot></h1>
    <p><slot name="author"></slot></p>
    <p><slot name="content"></slot></p>
  </div>
</template>

<script>

import { computed, toRefs, toRef, h, getCurrentInstance } from 'vue';

export default {
  name: 'VSetup',
  props: {
    title: String,
    author: String,
    content: String
  },
  data () {
    return {
      a: 1,
      b: 2
    }
  },


  /**
   * 组合式API的入口函数，所有组合式API都可以放入到setup内部执行
   * 组件被创建之前，beforeCreate, props被解析之后，created执行
   * 使用组合式API时，没有beforeCreate与created声明周期函数
   * 
   * 在组件创建之前自动执行
   */

  /**
   * props -> 选项API中props选项的引用
   * ctx   -> 装的是一些
   *        attrs -> this.$attrs
   *        slots -> this.$slots
   *        emit -> this.$emit
   *        expose -> 暴露属性给父组件
   */
  setup (props, ctx/* context */) {
    const instance = getCurrentInstance();
    console.log(instance); 
    // console.log(props); // 响应式数据
    // const { title, content, author } = props;
    // console.log(title, content, author); // 丢失掉响应式特性
    // const myContent = computed(() => 'Content:' + content);
    // const myContent = computed(() => 'Content:' + props.content);
    
    // toRefs -> props内部的所有属性转换成响应式ref数据
    // const { title, content, author } = toRefs(props);
    
    // const _content = toRef(props, 'content');
    // console.log(_content);
    // const myContent = computed(() => 'Content:' + _content.value);

    // console.log(ctx);
    // this.$attrs  非prop的attributes  ctx.attrs
    // this.$emit   ctx.emit
    // this.$slots.default() -> 匿名slot
    // THIS.$slots.name() -> 具名slot name
    // attrs  slots属性都是非响应式

    // data computed  methods refs  -> this
    // setup组件被创建之前执行的，执行期 -> this
    
    // ex向外   pose姿势 -> 向外展示什么.......
    // ctx.expose({
    //   test () {
    //     console.log('test');
    //     return 123;
    //   }
    // })

      /*
      <template>
      <div>
        <h1>{{ title }}</h1>
        <p>{{ author }}</p>
        <p>{{ content }}</p>
        <!-- <p>{{ myContent }}</p> -->
      </div>
    </template>
  
  
    */

    // return {
    //   // myContent
    // }

    // return () => 
    //   h('div', null, [
    //     h('h1', null, ctx.slots.default()),
    //     h('p', null, ctx.slots.author()),
    //     h('p', null, ctx.slots.content())
    //   ])

    return {
      test () {
        console.log('test');
        return 123;
      }
    }
  }
}
</script>

<style>

</style>