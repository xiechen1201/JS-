const button = document.createElement("button");
button.innerText = "按钮";

button.addEventListener(
  "click",
  function () {
    const div = document.createElement("div");
    div.innerText = "item";
    document.body.appendChild(div);
  },
  false
);

document.body.appendChild(button);
