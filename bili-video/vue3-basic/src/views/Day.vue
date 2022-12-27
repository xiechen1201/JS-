<template>
  <div class="container">
    <ErrorTip />
    <template v-if="!errorCode">
      <DayCard :data="dayData" />
      <List :data="dayData" />
    </template>
  </div>
</template>

<script>
export default {
  name: "DayPage",
};
</script>

<script setup>
import DayCard from "@/components/DayPage/Card.vue";
import List from "@/components/DayPage/List/index.vue";
import ErrorTip from "@/components/ErrorTip/index.vue";
import { onMounted, computed, watch } from "vue";
import { useStore } from "vuex";
import getData from "@/services/index";
import { getNowDate } from "@/libs/utils";
const store = useStore();
const state = store.state;
const dayData = computed(() => state.dayData);
const errorCode = computed(() => state.errorCode);

watch(dayData, () => {
  store.commit("setErrorCode", 0);
});

onMounted(() => {
  getData(store, "day", getNowDate("day"));
});
</script>
