init();

function init() {
  initTodoList;
}

var initTodoList = (function () {
  var showInput = document.getElementsByClassName("j-show-input")[0];
  var inputWrapper = document.getElementsByClassName("input-wrapper")[0];
  var textInput = document.getElementById("textInput");
  var addItem = document.getElementsByClassName("j-add-item")[0];
  var list = document.getElementsByClassName("list")[0];
  var inputShow = false;

  addEvent(showInput, "click", function () {
    if (!inputShow) {
      inputWrapper.style.display = "block";
      inputShow = true;
    } else {
      inputWrapper.style.display = "none";
      inputShow = false;
    }
  });

  addEvent(addItem, "click", function () {
    var val = textInput.value;
    var len = val.length;

    if (len === 0) {
      return;
    } else {
      var oLi = document.createElement("li");
      oLi.className = "item";
      oLi.innerText = val;
      list.appendChild(oLi);
      textInput.value = "";
    }
  });
})();

// var tpl = document.getElementById("listTpl");
// console.log(tpl.innerHTML);