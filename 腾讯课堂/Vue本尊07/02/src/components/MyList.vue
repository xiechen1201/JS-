<template>
  <div class="scroll-view" ref="scrollRef">
    <div v-for="item of listData" :key="item.id" class="list-item">
      {{ item }}
    </div>
    <div v-if="loadingMore && !noData" class="button-box">Login more...</div>
    <div v-if="noData" class="button-box">No more data</div>
  </div>
</template>

<script>
export default {
  name: "MyList",
  props: ["data", "pageCount"],
  data() {
    return {
      listData: [],
      startIndex: 0,
      loadingMore: true,
      noData: false
    };
  },
  mounted() {
    this.oScrollRef = this.$refs.scrollRef;
    this.oScrollRef.addEventListener("scroll", this.loadMore.bind(this), false);
    this.setListData();
  },
  methods: {
    loadMore() {
      const listHeight = this.oScrollRef.clientHeight;
      const scrollHeight = this.oScrollRef.scrollHeight;
      const scrollTop = this.oScrollRef.scrollTop;

      if (listHeight + scrollTop >= scrollHeight - 10) {
        this.setListData();
      }
    },
    setListData() {
      if (this.startIndex > this.data.length - 1) {
        this.noData = true;
        return;
      }
      // [1,2,3,4,5,6,7,8,9,10]
      // 第一次 startIndex 为0，startIndex += this.pageCount 也就是 5，得出 0,5
      // 第二次就是 5,10
      this.listData.push(
        ...this.data.slice(this.startIndex, (this.startIndex += this.pageCount))
      );
    }
  }
};
</script>

<style scoped>
.scroll-view {
  height: 300px;
  overflow-y: auto;
  border: 1px solid #000;
}

.list-item {
  height: 200px;
  border-bottom: 1px solid #ddd;
  text-align: center;
  line-height: 200px;
}

.button-box {
  height: 44px;
  text-align: center;
  border-bottom: 1px solid #ddd;
}
</style>
