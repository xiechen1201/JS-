<template>
  <div class="list">
    <h1>推荐新闻</h1>
    <ul>
      <li
        v-for="item of newsData"
        :key="item.id"
      >
        <h3>
          <a :href="item.link" target="_blank">
            {{ item.title }}
          </a>
        </h3>
        <p>{{ item.author }} - {{ item.publish_time }}</p>
      </li>
    </ul>
  </div>
</template>

<script>

import { ref, onMounted, onActivated, onDeactivated } from 'vue';
import qs from 'qs';

export default {
  name: 'List',
  setup () {
    const newsData = ref([]);

    onMounted(async () => {
      console.log('mounted');
      const { data } = await axios.post('http://localhost:3000/get_news');
      
      if (data.error_no === 0) {
        newsData.value = data.data;
      }
    });

    onActivated(async () => {
      console.log('activated');
      const { data } = await axios.post('http://localhost:3000/get_news', qs.stringify({
        nid: newsData.value[newsData.value.length - 1].id
      }));

      if (data.data) {
        newsData.value = [...newsData.value, ...data.data];
      }
    }),
    onDeactivated (() => {
      console.log('List deactivated');
    })

    return {
      newsData
    }
  }
}
</script>

<style>
  .list {
    height: 400px;
    overflow: auto;
  }
</style>