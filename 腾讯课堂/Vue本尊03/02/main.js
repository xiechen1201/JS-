const { createApp } = window.Vue;
const Axios = window.axios;

/**
 *
 * 考试案例
 * [
 *  {
 *      id:'1',
 *      question:'xxx',
 *      items: [2 ,3 ,4 ,5 ,6],
 *      answer: [2]
 *  }
 * ]
 *  */

const vm = createApp({
  template: `
  <div>
    <div v-if="myResults.length > 0">
      <h1>结果</h1>
      <ul>
        <li v-for="item in myResults">
          编号：{{ item.qid }}，题目：{{  item.question }}
          已选：{{ item.myAnswer }}，正确答案：{{ item.rightAnswer }}
        </li>
      </ul>
    </div>
    <div v-else>
      <h1>编号：{{ questionData.id }}</h1>
      <p>{{ questionData.question }}</p>
      <div>
        <button v-for="(item, index) in questionData.items" :key="index" @click="selectAnswer(index)">
          {{ item }}
        </button>
      </div>
    </div>
  </div>`,
  data() {
    return {
      order: 0,
      questionData: {},
      myAnswer: -1,
      myResults: []
    };
  },
  watch: {
    order(newVal, oldVal) {
      this.uploadAnswer(oldVal, this.myAnswer);
      this.getQuestion(newVal);
    }
  },
  mounted() {
    this.getQuestion(this.order);
  },
  methods: {
    getQuestion(order) {
      Axios.post("http://localhost:8888/getQuestion", "order=" + order).then((res) => {
        const result = res.data;

        if (result.errCode) {
          this.myResults = result.data;
          return;
        }

        this.questionData = result.data;
      });
    },
    uploadAnswer(order, myAnswer) {
      Axios.post("http://localhost:8888/uploadAnswer", `order=${order}&myAnswer=${myAnswer}`).then(
        (res) => {
          console.log(res);
        }
      );
    },
    selectAnswer(index) {
      this.myAnswer = index;
      this.order += 1;
    }
  }
}).mount("#app");

// console.log(vm);
