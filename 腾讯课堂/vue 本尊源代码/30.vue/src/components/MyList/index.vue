<template>
  <div class="scroll-view" ref="scrollRef">
    <div
      v-for="item of listData"
      :key="item.id"
      class="list-item"
    >{{ item.text }}</div>
    <div
      v-if="!noData"
      class="bottom-box"
    >Loading more ...</div>
    <div
      v-if="noData"
      class="bottom-box"
    >No more Data</div>
  </div>
</template>

<script>
export default {
  name: 'MyList',
  props: ['data', 'pageCount'],
  data () {
    return {
      startIndex: 0,
      listData: [],
      noData: false
    }
  },
  mounted () {
    this.oScrollRef = this.$refs.scrollRef;

    this.oScrollRef.addEventListener('scroll', _.debounce(this.loadMore, 300), false);
    this.setListData();
  },
  methods: {
    setListData () {
      if (this.startIndex > this.data.length - 1) {
        this.noData = true;
        return;
      }

      this.listData.push(
        ...this.data.slice(
          this.startIndex, this.startIndex += this.pageCount
        )
      )
    },
    loadMore () {
      const oScroll = this.oScrollRef;

      const listHeight = oScroll.clientHeight,
            scrollHeight = oScroll.scrollHeight,
            scrollTop = oScroll.scrollTop;
      
      if (listHeight + scrollTop >= scrollHeight - 10) {
        this.setListData();
      }
    }
  }
}
</script>

<style lang="scss">
  body {
    margin: 0;
  }

  .scroll-view {
    height: 812px;
    overflow: auto;

    .list-item {
      height: 200px;
      border-bottom: 1px solid #ddd;
      text-align: center;
      line-height: 200px;
      font-size: 30px;
    }

    .bottom-box {
      height: 44px;
      border-bottom: 1px solid #ddd;
      text-align: center;
      line-height: 44px;
    }
  }
</style>