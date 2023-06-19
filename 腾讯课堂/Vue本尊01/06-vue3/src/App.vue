<template>
  <span>{{ msg }}</span>
</template>

<script>
export default {
  data() {
    return {
      msg: "Hello Word",
    };
  },
  /**
   * 初始化事件、生命周期
   *
   *  */
  // 创建组件之前：
  beforeCreate() {},
  /**
   * 初始化注入、响应式
   *  */
  // 组件创建完成
  created() {},
  /**
   * 是否有 template?
   * yes：生成 AST 数据树=>生成虚拟 DOM=>编译模版到渲染函数
   * no：编译 el 的 innerHTML 到模版
   * */
  // 挂载之前
  beforeMount() {},
  /**
   * 创建 app.$el,并添加到 el
   *
   *  */
  // 挂载完成
  mounted() {},
  // 数据更新之前
  beforeUpdate() {},
  /**
   * 虚拟 DOM 重写渲染和更新
   *
   */
  // 数据已更新
  updated() {},
  // 组件销毁之前
  beforeUnmount() {},
  // 组件已销毁
  beforeMount() {},
};
</script>

<style scoped></style>
