<template>
  <div class="container">
    <ErrorTip />
    <template v-if="!errorCode">
      <MonthCard :data="monthData" />
    </template>
  </div>
</template>

<script>
export default {
  name: "MonthPage",
};
</script>

<script setup>
import ErrorTip from "@/components/ErrorTip/index.vue";
import MonthCard from "@/components/MonthPage/List.vue";
import { onMounted, computed, watch } from "vue";
import { useStore } from "vuex";
import { getNowDate } from "@/libs/utils";
import getData from "@/services/index";

const store = useStore();
const state = store.state;
const monthData = computed(() => state.monthData);
const errorCode = computed(() => state.errorCode);

watch(monthData, () => {
  store.commit("setErrorCode", 0);
});

onMounted(() => {
  getData(store, "month", getNowDate("month"));
});
</script>
