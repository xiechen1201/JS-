import { reactive, watch, watchEffect,computed } from "./mine/index.js";

const oABtn1 = document.querySelector("#aBtn1");
const oCBtn1 = document.querySelector("#cBtn1");
const oABtn2 = document.querySelector("#aBtn2");
const oCBtn2 = document.querySelector("#cBtn2");

const state1 = reactive({
  a: 1,
  b: {
    c: 2
  }
});

const state2 = reactive({
  a: 1000,
  b: {
    c: 2000
  }
});

const res1 = computed(() => state1.a + state1.b.c);
const res2 = computed(() => state2.a + state2.b.c);

oABtn1.addEventListener(
  "click",
  function () {
    state1.a = "一";
    console.log(res1.value);
  },
  false
);

oCBtn1.addEventListener(
  "click",
  function () {
    state1.b.a = "二";
    console.log(res1.value);
  },
  false
);

oABtn2.addEventListener(
  "click",
  function () {
    state2.a = "一千";
    console.log(res2.value);
  },
  false
);

oCBtn2.addEventListener(
  "click",
  function () {
    state1.a = "二千";
    console.log(res2.value);
  },
  false
);

watchEffect(() => {
  console.log("watchEffect => state1.a", state1.a);
});

/* watchEffect(() => {
  console.log("watchEffect => state1.b.c", state1.b.c);
});

watchEffect(() => {
  console.log("watchEffect => state2.a", state2.a);
});

watchEffect(() => {
  console.log("watchEffect => state2.b.c", state2.b.c);
}); */

watch(
  () => state1.a,
  (cur) => {
    console.log("watch => state1.a", state1.a);
  }
);

/* watch(
  () => state1.b.c,
  (cur) => {
    console.log("watch => state1.b.c", state1.b.c);
  }
);

watch(
  () => state2.a,
  (cur) => {
    console.log("watch => state1.a", state2.a);
  }
);

watch(
  () => state2.b.c,
  (cur) => {
    console.log("watch => state2.b.c", state2.b.c);
  }
); */
