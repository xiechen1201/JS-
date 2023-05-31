<template>
  <div>
    <counter-result :result="result" />
    <div>
      <counter-btn innerText="+" action="PLUS" @diapatch="onDiapatch" />
      <counter-btn innerText="-" action="MINUS" @diapatch="onDiapatch" />
    </div>
  </div>
</template>

<script>
import CounterResult from "../CounterResult/index.vue";
import CounterBtn from "../CounterBtn/index.vue";
import dispatch from "@/dispatchs/counter";

export default {
  name: "Counter",
  components: {
    CounterResult,
    CounterBtn
  },
  data() {
    return {
      result: 0
    };
  },
  methods: {
    onDiapatch(...args) {
      dispatch(this)(...args);
    }
    /*  onCompute(action) {
      switch (action) {
        case "PLUS":
          this.result += 1;
          break;
        case "MINUS":
          this.result -= 1;
          break;
      }
    } */
  }
};
</script>
