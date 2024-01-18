<template>
  <h1>RefsDemo2.vue</h1>
  <p ref="dom">这是一个 p 标签</p>

  <ul>
    <li v-for="item in students" :key="item.id" ref="studentItem">
      {{ item }}
    </li>
  </ul>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
/* 
1、ref 元素引用
注意只能在模版挂载之后使用
*/

onMounted(() => {
  console.log(dom.value);
  console.log(studentItem.value);
  console.log(studentItem.value[0]);
});

// 必须设置为null
const dom = ref(null);

// 设置为空数组
const studentItem = ref([]);
const students = reactive([
  {
    id: 1,
    name: "张三",
  },
  {
    id: 2,
    name: "李四",
  },
  {
    id: 3,
    name: "王五",
  },
]);
</script>
