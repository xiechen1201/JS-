<template>
  <h1>SetupDemo.vue</h1>
  <!-- <div>{{ count }}</div> -->
  <button @click="plus">增加</button>
</template>

<script>
import { reactive, ref, h, watchEffect } from "vue";

export default {
  /**
   * setup OptionsAPI 一个新的选项，作为 CompositionAPI 程序的入口
   * 当组件的实例被创建且属性的初始化之后，setup 函数是自动执行的。
   * 相当于 beforeCreate 和 created 执行时期之间进行调用
   *
   *
   * setup 函数返回值会合并到组件实例的执行上下文中，所以 template 才能使用 setup 的数据
   *
   *
   * 什么时候使用响应式函数呢？数据更改页面也需要更改时使用，否则没必要
   *
   *
   * ref() 返回一个对象，需要使用 .value 属性读取设置值
   * 在 template 中使用数据不需要使用 .values
   *
   *
   * setup(props)
   * props 是接收到的参数，props 已经是响应式的
   * 不要去解构 props 的属性，这样会丢失响应式
   * setup({ name }){}
   * setup(props){
   *    const { name } = props;
   * }
   *
   *
   * 不要在 setup 中去更改父组件传递来的 props，
   *
   *
   * setup(props, context) 的第二个参数 context 是一个选项列表，里面有属性 attrs、slots、emit
   * attrs、slots 都是代理后的结果，所以可以进行解构，不用担心丢失响应式
   * setup(props, { attrs, slots }){}
   * context.emit(event, data) 向上传递事件
   * 
   * 
   * props 为什么要单独存在？
   * 1、props 比其他属性使用的更加频繁
   * 2、
   *
   * 
   * setup 函数内部无法使用 this 对象，这是因为 setup 函数在 options 生命周期之前调用的，如果 setup 内部 this 可用，可能会在 options 模式开发时混乱。
   *
   *  */
  emits: ["plus"],
  setup(props, context) {
    watchEffect(() => {
      console.log(props);
    });
    console.log(context);

    const count = ref(0);
    const plus = () => {
      context.emit("plus", 123);
    };

    return {
      count,
      plus,
    };

    // setup 可以返回一个 render 函数
    // return () => h("h1", [count.value]);
  },
};
</script>

<style scoped></style>
