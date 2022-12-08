(function () {
  var wHeight = getViewportSize().height;
  var sHeight = getScrollSize().height;
  var playing = false;
  var time = null;

  var AutoReader = function (opt) {
    this.sTopBtn = opt.sTopBtn;
    this.playBtn = opt.playBtn;

    var _self = this;

    addEvent(window, "scroll", function () {
      _self.sTopBtnShow();
    });
    addEvent(this.sTopBtn, "click", function () {
      window.scrollTo(0, 0);
      _self.playBtn.style.backgroundImage = "url('./imgs/play.png')";
      playing = false;
      clearInterval(time);
    });
    addEvent(this.playBtn, "click", function () {
      _self.setAutoPlay();
    });
  };

  AutoReader.prototype = {
    sTopBtnShow: function () {
      var sTop = getScrollOffset().top;

      this.sTopBtn.style.display = sTop ? "block" : "none";
    },
    setAutoPlay: function () {
      var sTop = getScrollOffset().top;
      var _self = this;

      if (sHeight === wHeight + sTop) {
        return;
      }
      if (!playing) {
        time = setInterval(function () {
          var sTop = getScrollOffset().top;

          if (sHeight <= wHeight + sTop) {
            clearInterval(time);
            _self.playBtn.style.backgroundImage = "url('./imgs/play.png')";
            playing = false;
            return;
          } else {
            window.scrollBy(0, 1);
            _self.playBtn.style.backgroundImage = "url('./imgs/pause.png')";
          }
        }, 1);
        playing = true;
      } else {
        clearInterval(time);
        _self.playBtn.style.backgroundImage = "url('./imgs/play.png')";
        playing = false;
      }
    },
  };

  window.AutoReader = AutoReader;
})();
