var dragClick = function (el) {
  var bTime = 0,
    eTime = 0;

  elDrag();
  function elDrag() {
    var offsetPos = null;
    el.addEventListener(
      "mousedown",
      function (event) {
        bTime = new Date().getTime();

        offsetPos = {
          X: event.offsetX,
          Y: event.offsetY,
        };

        document.addEventListener("mousemove", mousemove, false);
        document.addEventListener("mouseup", mouseup, false);
      },
      false
    );

    function mousemove(event) {
      var pagePos = {
        X: event.pageX,
        Y: event.pageY,
      };
      el.style.left = pagePos.X - offsetPos.X + "px";
      el.style.top = pagePos.Y - offsetPos.Y + "px";
    }
    function mouseup() {
      eTime = new Date().getTime();
      if (eTime - bTime < 100) {
        console.log(1);
      }
      document.removeEventListener("mousemove", mousemove, false);
      document.removeEventListener("mouseup", mouseup, false);
    }
  }
};
