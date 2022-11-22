// 存放一些工具方法

/**
 * @description 给元素绑定事件
 *  */
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

/**
 * @description 给元移除事件
 *  */
function removeEvent(el, type, fn) {
  if (el.addEventListener) {
    el.removeEventListener(type, fn, false);
  } else if (el.attachEvent) {
    el.detachEvent("on" + type, fn);
  } else {
    el["on" + type] = null;
  }
}

/**
 * @description 判断点是不是在三角形内
 * */
function vec(a, b) {
  return {
    x: b.x - a.x,
    y: b.y - a.y,
  };
}
function vecOroduct(v1, v2) {
  return v1.x * v2.y - v2.x * v1.y;
}
function sameSymols(a, b) {
  return (a ^ b) >= 0;
}
function pointInTrianle(p, a, b, c) {
  var PA = vec(p, a),
    PB = vec(p, b),
    PC = vec(p, c),
    R1 = vecOroduct(PA, PB),
    R2 = vecOroduct(PB, PC),
    R3 = vecOroduct(PC, PA);

  return sameSymols(R1, R2) && sameSymols(R2, R3);
}
