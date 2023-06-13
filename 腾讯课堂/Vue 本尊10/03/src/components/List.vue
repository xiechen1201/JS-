<template>
  <div>
    <h1>List</h1>
    <ul>
      <li v-for="n in 10" :key="n">This is a list item #{{ n }} of my list.</li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted, onActivated } from "vue";

export default {
  name: "List",
  setup() {
    onMounted(() => {
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "http://localhost:3000/get_news", true);
      xhr.send(null);

      xhr.onreadystatechange = function () {
        if(xhr.readyState === 4 && xhr.status === 200){
          console.log(JSON.parse(xhr.responseText))
        }
      };
    });
  }
};
</script>

<style></style>
