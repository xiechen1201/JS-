<template>
  <h1>{{ recomText }}{{ title }}{{ statusText }}</h1>
  <p>
    Author name: <a :href="author.website">{{ author.name }}</a>
  </p>
  <p>
    <span>Author follows: {{ authorFollows }}</span>
    <button @click="addFollow">
      {{ isFollowed ? "Followed" : "Add Follow" }}
    </button>
  </p>
  <p>{{ content }}</p>
  <p>评论列表（{{ commentCount }}）</p>
  <ul>
    <li v-for="item in comments" :key="item.id">
        <span>{{ item.content }}</span>
        <span>{{ item.dateTime }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: "MyArtcle",
  props: {
    title: String,
    isRecom: Boolean,
    status: [String, Number],
    author: Object,
    content: String,
    commentCount: Number,
    comments: Array
  },
  data() {
    return {
      authorFollows: this.author.follows,
      isFollowed: false
    };
  },
  computed: {
    recomText() {
      return this.isRecom ? "【推荐】" : "";
    },
    statusText() {
      switch (this.status) {
        case 0:
          return "【最新】";
        case 1:
          return "【热门】";
      }
    }
  },
  methods: {
    addFollow() {
      this.isFollowed ? this.authorFollows-- : this.authorFollows++;
      this.isFollowed = !this.isFollowed;
    }
  }
};
</script>
