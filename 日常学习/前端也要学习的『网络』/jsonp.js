var path = document.getElementById("callback").src;
var callback = path.match(/callback=(.*)/)[1];

// 进行ajax请求
window[callback]({ a: 1, b: 2 })
