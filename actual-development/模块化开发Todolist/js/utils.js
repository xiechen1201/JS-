function addEvent(el, type, fn) {
    if (el.addEventListener) {
      el.addEventListener(type, fn, false);
    } else if (el.attachEvent) {
      el.attachEvent("on" + type, function () {
        fn.call(el);
      });
    } else {
      el["on" + type] = fn;
    }
  }
  
  function getScrollOffset() {
    if (window.pageXOffset) {
      return {
        left: window.pageXOffset,
        top: window.pageYOffset,
      };
    } else {
      return {
        left: document.body.scrollLeft || document.documentElement.scrollLeft,
        top: document.body.scrollTop || document.documentElement.scrollTop,
      };
    }
  }
  
  function getViewportSize() {
    if (window.innerWidth) {
      return {
        width: window.innerWidth,
        height: window.innerHeight,
      };
    } else {
      return {
        width: document.body.clientWidth || document.documentElement.clientWidth,
        height:
          document.body.clientHeight || document.documentElement.clientHeight,
      };
    }
  }
  
  function getScrollSize() {
    return {
      width: document.body.scrollWidth || document.documentElement.scrollWidth,
      height: document.body.scrollHeight || document.documentElement.scrollHeight,
    };
  }
  