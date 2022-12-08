<template>
  <MyHeader>{{ headerTitle }}</MyHeader>
  <SearchInput :placeholder="placeholder" :maxlength="Number(maxlength)" />
  <RouterView />
  <Tab />
</template>

<script setup>
import MyHeader from "@/components/Header/index.vue";
import Tab from "@/components/Tab/index.vue";
import SearchInput from "@/components/SearchInput/index.vue";
import { useStore } from "vuex";
import { computed, watch } from "vue";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();
const headerTitle = computed(() => store.state.headerTitle);
const placeholder = computed(() => store.state.placeholder);
const maxlength = computed(() => store.state.maxlength);

router.push("/");

watch(router.currentRoute, (newVal) => {
  store.commit("setHeaderTitle", newVal.name);
  store.commit("setPlaceholder", newVal.name);
  store.commit("setMaxLength", newVal.name);
});
</script>
