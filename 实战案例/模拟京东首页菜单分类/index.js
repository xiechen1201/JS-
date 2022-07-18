// 企业开发都是模块化、插件化

// 统一管理所有的要执行模块
init();
function init() {
  //   initMenu();
}

var initMenu = (function () {
  var oMenu = document.getElementsByClassName("menu-wrap")[0],
    oMenuItems = oMenu.getElementsByClassName("main-item"),
    menuLen = oMenuItems.length,
    menuItem,
    oSub = oMenu.getElementsByClassName("sub")[0],
    oSubItems = oSub.getElementsByClassName("sub-item"),
    subLen = oSubItems.length,
    subItem,
    isInSub = false,
    t = null,
    mousePoses = [];

  for (let i = 0; i < menuLen; i++) {
    menuItem = oMenuItems[i];
    addEvent(menuItem, "mouseenter", menuItemMouseEnter);
  }

  function menuItemMouseEnter(event) {
    var e = event || window.event,
      tar = e.target || e.srcElement,
      thisIdx = Array.prototype.indexOf.call(oMenuItems, tar),
      lastPos = mousePoses[mousePoses.length - 2] || { x: 0, y: 0 },
      curPos = mousePoses[mousePoses.length - 1] || { x: 0, y: 0 },
      toDelay = doTimeout(lastPos, curPos);

    oSub.className = "sub";
    if (t) {
      clearTimeout(t);
    }

    if (toDelay) {
      t = setTimeout(function () {
        if (isInSub) {
          return;
        } else {
          addActive(thisIdx);
        }
      }, 300);
    } else {
      addActive(thisIdx);
    }
  }

  addEvent(oMenu, "mouseenter", function () {
    addEvent(document, "mousemove", mouseMove);
  });
  addEvent(oMenu, "mouseleave", menuMouseOut);

  addEvent(oSub, "mouseenter", function () {
    isInSub = true;
  });
  addEvent(oSub, "mouseleave", function () {
    isInSub = false;
  });
  function addActive(index) {
    removeAllActive();
    oMenuItems[index].className += " active";
    oSubItems[index].className += " active";
  }

  function removeAllActive() {
    for (let i = 0; i < menuLen; i++) {
      menuItem = oMenuItems[i];
      menuItem.className = "main-item";
    }
    for (let i = 0; i < subLen; i++) {
      subItem = oSubItems[i];
      subItem.className = "sub-item";
    }
  }

  function menuMouseOut() {
    oSub.className += "hide";
    removeAllActive();
    removeEvent(document, "mousemove", mouseMove);
  }

  function mouseMove(event) {
    var e = event || window.event;

    mousePoses.push({
      x: e.pageX,
      y: e.pageY,
    });
    if (mousePoses.length > 3) {
      mousePoses.shift();
    }
  }

  function doTimeout(lastPos, curPos) {
    var topLeft = {
      x:
        parseInt(window.getComputedStyle(oMenu, null).width) +
        parseInt(window.getComputedStyle(oMenu, null).marginLeft),
      y: parseInt(window.getComputedStyle(oMenu, null).marginTop),
    };
    var bottomLeft = {
      x:
        parseInt(window.getComputedStyle(oMenu, null).width) +
        parseInt(window.getComputedStyle(oMenu, null).marginLeft),
      y:
        parseInt(window.getComputedStyle(oMenu, null).marginTop) +
        parseInt(window.getComputedStyle(oSub, null).height),
    };

    return pointInTrianle(curPos, lastPos, topLeft, bottomLeft);
  }
})();
