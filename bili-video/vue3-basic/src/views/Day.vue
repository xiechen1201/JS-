<template>
  <div class="container">
    <DayPage :data="dayData" />
    <List :data="{}" />
  </div>
</template>

<script>
export default {
  name: "DayPage",
};
</script>

<script setup>
import DayPage from "@/components/DayPage/Card.vue";
import List from "@/components/DayPage/List/index.vue"
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import getData from "@/services/index";
import { getNowDate } from "@/libs/utils";

const store = useStore();
const state = store.state;
const dayData = computed(() => state.dayData);

onMounted(() => {
  return;
  getData(store, "day", getNowDate("day"));
});
</script>
