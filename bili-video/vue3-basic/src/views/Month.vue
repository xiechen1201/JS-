<template>
  <div class="container">Month page</div>
</template>

<script>
export default {
  name: "MonthPage",
};
</script>

<script setup>
import { onMounted } from "vue";
import getData from "@/services/index";

onMounted(() => {
  return;
  getData("month", "2020-7");
});
</script>
