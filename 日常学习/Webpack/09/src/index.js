// import "@babel/polyfill"

const promiseArray = [new Promise(() => {}), new Promise(() => {})];

promiseArray.map((el) => {
  console.log("Promise", el);
});
