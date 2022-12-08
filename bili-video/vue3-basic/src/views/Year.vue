<template>
  <div class="container">Year page</div>
</template>

<script>
export default {
  name: "YearPage",
};
</script>

<script setup>
import { onMounted } from "vue";
import getData from "@/services/index";

onMounted(() => {
  return;
  getData("year", "2019");
});
</script>
