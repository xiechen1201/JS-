<template>
  <ul>
    <li v-for="item in picData" :key="item.key">
      <div>
        <h1>{{ item.title }}</h1>
        <slot :item="item"></slot>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      picData: [
        {
          id: 1,
          title: "标题一",
          url: "https://cdn.pixabay.com/photo/2023/01/07/10/02/leaves-7702922__340.jpg"
        },
        {
          id: 2,
          title: "标题二",
          url: "https://cdn.pixabay.com/photo/2023/02/06/00/21/scooter-7770871__340.png"
        },
        {
          id: 3,
          title: "标题三",
          url: "https://cdn.pixabay.com/photo/2023/01/27/04/53/muslim-7747745_640.png"
        }
      ]
    };
  }
};
</script>

<style></style>
