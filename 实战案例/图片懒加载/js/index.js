(function () {
  var oImgList = document.getElementsByClassName("J_imgList")[0];
  var data = JSON.parse(document.getElementById("J_data").innerHTML);
  var imgTpl = document.getElementById("J_imgTpl").innerHTML;
  var oImg = document.getElementsByClassName("list-img");

  var init = function () {
    oImgList.innerHTML = renderList(data);
    bindEvent();
    setTimeout(function () {
      window.scrollTo(0, 0);
    }, 150);
  };
  function bindEvent() {
    window.onload = window.onscroll = throttle(imgLazyLoad(oImg), 500);
  }

  function renderList(data) {
    var list = "";
    data.forEach((element) => {
      list += imgTpl.replace(/{{(.*?)}}/g, function (node, key) {
        return {
          img: element.img,
          name: element.name,
        }[key];
      });
    });

    return list;
  }

  init();
})();

function imgLazyLoad(image) {
  var imgLen = image.length;
  var n = 0;

  return function () {
    var cHeight = document.documentElement.clientHeight;
    var sTop = document.documentElement.scrollTop;

    var imgItem;

    for (let i = n; i < imgLen; i++) {
      imgItem = image[i];

      if (imgItem.offsetTop < cHeight + sTop) {
        imgItem.src = imgItem.getAttribute("data-src");
        imgItem.removeAttribute("data-src");
        n++;
      }
    }
  };
}
