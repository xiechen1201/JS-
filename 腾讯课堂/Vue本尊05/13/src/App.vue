<template>
  <BaseLayout>
    <template v-slot:baseHeader>
      <MainLogo />
    </template>
    <template v-slot:baseFooter>
      <FooterContent />
    </template>
    <template #baseSideBar>
      <BaseList />
    </template>
    <template #default>
      <MainBoard />
      <!-- PicBoard 内有且只有一个 slot 的时候可以简写： -->
      <!-- <PicBoard #default="props"> -->
      <PicBoard>
        <template #default="props">
          <!-- props 里面包含了 item，而不去 item 本身！ -->
          {{ props }}
        </template>
      </PicBoard>
    </template>
  </BaseLayout>
</template>

<script>
import MyButton from "./components/MyButton/index.vue";
import BaseLayout from "./components/BaseLayout/index.vue";
import MainLogo from "./components/MainLogo/index.vue";
import FooterContent from "./components/FooterContent/index.vue";
import BaseList from "./components/BaseList/index.vue";
import MainBoard from "./components/MainBoard/index.vue";
import PicBoard from "./components/PicBoard/index.vue";

export default {
  components: {
    MyButton,
    BaseLayout,
    MainLogo,
    FooterContent,
    BaseList,
    MainBoard,
    PicBoard
  }
};
</script>

<style></style>
