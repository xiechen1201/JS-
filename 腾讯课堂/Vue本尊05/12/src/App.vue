<template>
  <!-- <MyButton>
      <template #test>
        icon
      </template>
      <template v-slot:default>
        <span>提交</span>
      </template>
    </MyButton> -->

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
     <MainBoard />
    <!-- <template #default>
      <MainBoard />
    </template> -->
  </BaseLayout>
</template>

<script>
import MyButton from "./components/MyButton/index.vue";
import BaseLayout from "./components/BaseLayout/index.vue";
import MainLogo from "./components/MainLogo/index.vue";
import FooterContent from "./components/FooterContent/index.vue";
import BaseList from "./components/BaseList/index.vue";
import MainBoard from "./components/MainBoard/index.vue"

export default {
  components: {
    MyButton,
    BaseLayout,
    MainLogo,
    FooterContent,
    BaseList,
    MainBoard
  }
};
</script>

<style></style>
