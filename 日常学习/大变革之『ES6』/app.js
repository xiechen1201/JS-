var arr = [];

for (let i = 0; i < 10; i++) {
  arr[i] = ((i) => {
    console.log(i);
  })(i);
}
