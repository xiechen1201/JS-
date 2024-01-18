<template>
  <div class="tab">
    <div class="tab-item" v-for="(item, index) of tabData" :key="index">
      <TabIcon :iconText="item.iconText" :path="item.path">
        {{ item.tabText }}
      </TabIcon>
    </div>
  </div>
</template>

<script>
import TabIcon from "./Icon.vue";
import { reactive } from "vue";
import tabData from "@/data/tab";

export default {
  name: "Tab",
  components: {
    TabIcon,
  },
  setup() {
    const state = reactive({
      tabData,
    });

    return {
      ...state,
    };
  },
};
</script>

<style lang="scss" scoped>
.tab {
  display: flex;
  flex-direction: row;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 0.44rem;
  border-top: 1px solid #ddd;
  background-color: #fff;

  .tab-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 33.33%;
    height: 100%;
  }
}
</style>
