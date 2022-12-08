let dataArray = document.getElementById("J_data");
dataArray = dataArray.innerHTML.replace(/\s/g, "");
dataArray = JSON.parse(dataArray);

// 初始化 Tab 拦
var initCourseTab = (function (doc) {
  var cardItemTPL = doc.getElementById("J_cardItemTPL");
  var oSearchInput = doc.getElementById("js-search-input");
  var oCourseTabLks = doc.getElementsByClassName("course-tab-lk");
  var oCourseTabLksLen = oCourseTabLks.length;
  var oJsCourseCardList = doc.getElementsByClassName("js-course-card-list")[0];

  // 初始化数据
  function initCourseList() {
    var list = filterData("all", dataArray);
    renderList(list);
  }

  // Tab 点击
  function tabClick(e) {
    var e = e || window.event;
    var tar = e.target || e.srcElement;
    var { field } = tar.dataset;
    var item;

    if (tar.className === "course-tab-lk") {
      for (var i = 0; i < oCourseTabLksLen; i++) {
        item = oCourseTabLks[i];
        item.className = "course-tab-lk";
      }
      tar.className += " current";

      var list = this.filterData(field, data);
      renderList(list);
    }
  }

  // 过滤数据
  function filterData(field, data) {
    return data.filter(function (el, index, array) {
      switch (field) {
        case "all":
          return true;
          break;
        case "free":
          return el.is_free === "1";
          break;
        case "vip":
          return el.is_free === "0";
          break;
        default:
          return true;
      }
    });
  }

  // 生成 HTML 模版
  function makeList(data) {
    var list = "";
    data.forEach(function (el) {
      list += cardItemTPL.innerHTML.replace(/{{(.*?)}}/g, function ($, $1) {
        var obj = {
          img: el.img,
          courseName: el.course,
          isFree: el.is_free === "1" ? "free" : "vip",
          price: el.is_free === "1" ? "免费" : "¥999.00",
          hours: el.classes,
        };
        return obj[$1];
      });
    });

    return list;
  }

  // 渲染 HTML 模版
  function renderList(data) {
    if (data.length > 0) {
      oJsCourseCardList.innerHTML = makeList(data);
    } else {
      oJsCourseCardList.innerHTML = "暂无数据！";
    }
  }

  // 搜索课程
  function searchCourse() {
    var val = oSearchInput.value;

    if (val.length > 0) {
      renderList(searchData(dataArray, val));
    } else {
      renderList(dataArray);
    }
  }

  // 过滤数据
  function searchData(data, keyword) {
    return data.reduce(function (prev, el) {
      var res = el.course.indexOf(keyword);
      if (res !== -1) {
        prev.push(el);
      }
      return prev;
    }, []);
  }

  return {
    initCourseList,
    searchCourse,
    tabClick,
  };
})(document);

// 立即执行函数
(function (doc) {
  var oSearchInput = doc.getElementById("js-search-input");
  var oTabList = doc.getElementsByClassName("js-course-tab-list")[0];

  function init() {
    bindEvent();
    initCourseTab.initCourseList();
  }

  function bindEvent() {
    oSearchInput.addEventListener(
      "change",
      initCourseTab.searchCourse.bind(initCourseTab),
      false
    );
    oTabList.addEventListener(
      "click",
      initCourseTab.tabClick.bind(initCourseTab),
      false
    );
  }

  init();
})(document);