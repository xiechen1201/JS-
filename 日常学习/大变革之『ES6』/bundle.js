"use strict";

var arr = [];

for (var i = 0; i < 10; i++) {
  arr[i] = function (i) {
    console.log(i);
  }(i);
}
