// var sliderItem = document.getElementsByClassName("slider-item");
// var thumItem = document.getElementsByClassName("thumb-item");

// for (var i = 0; i < thumItem.length; i++) {
//   (function (j) {
//     thumItem[j].onclick = function () {
//       removeClass(j);
//     };
//   })(i);
// }

// function removeClass(changeIndex) {
//   for (let i = 0; i < thumItem.length; i++) {
//     thumItem[i].className = "thumb-item";
//     sliderItem[i].className = "slider-item";
//   }
//   thumItem[changeIndex].className = "thumb-item cur";
//   sliderItem[changeIndex].className = "slider-item active";
// }

(function () {
  var Slider = function (opt) {
    this.sliderItem = document.getElementsByClassName(opt.sliderItem);
    this.thumbItem = document.getElementsByClassName(opt.thumbItem);

    this.bindClick();
  };

  Slider.prototype = {
    bindClick: function () {
      var slider = this.sliderItem;
      var thumbs = this.thumbItem;

      for (var i = 0; i < thumbs.length; i++) {
        (function (j) {
          thumbs[j].onclick = function () {
            for (var z = 0; z < thumbs.length; z++) {
              slider[z].className = "slider-item";
              thumbs[z].className = "thumb-item";
            }
            slider[j].className += " active";
            thumbs[j].className += " cur";
          };
        })(i);
      }
    },
  };
  
  window.Slider = Slider;
})();
