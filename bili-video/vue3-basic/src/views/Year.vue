<template>
  <div class="container">
    <ErrorTip />
    <template v-if="!errorCode">
      <ListCard :data="yearData" />
    </template>
  </div>
</template>

<script>
export default {
  name: "YearPage",
};
</script>

<script setup>
import ErrorTip from "@/components/ErrorTip/index.vue";
import ListCard from "@/components/YearPage/List.vue";
import { onMounted, computed, watch } from "vue";
import { useStore } from "vuex";
import { getNowDate } from "@/libs/utils";
import getData from "@/services/index";

const store = useStore();
const state = store.state;
const yearData = computed(() => state.yearData);
const errorCode = computed(() => state.errorCode);

watch(yearData, () => {
  store.commit("setErrorCode", 0);
});

onMounted(() => {
  getData(store, "year", getNowDate("year"));
});
</script>
