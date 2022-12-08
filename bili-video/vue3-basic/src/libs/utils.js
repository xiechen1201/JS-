function _addZero(value) {
  return value < 10 ? "0" + value : value;
}

function getIconDate(type) {
  const date = new Date();

  switch (type) {
    case "day":
      return _addZero(date.getDate().toString());
    case "month":
      return _addZero((date.getMonth() + 1).toString());
    case "year":
      return _addZero(String(date.getFullYear()).substring(2));
  }
}

function formatChsDdate(date, type) {
  const _arr = date.split("-");

  switch (type) {
    case "day":
      return `${_arr[0]}年${_arr[1]}月${_arr[2]}日`;
    case "month":
      return `${_arr[0]}年${_arr[1]}月`;
    case "year":
      return `${_arr[0]}年`;
    default:
      return `${_arr[0]}年${_arr[1]}月${_arr[2]}日`;
  }
}

function mapForChsDate(date, key) {
  return date.map((el) => {
    el[key] = formatChsDdate(el[key]);
    return el;
  });
}

function getNowDate(field) {
  const date = new Date();

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  switch (field) {
    case "day":
      return `${year}-${month}-${day}`;
    case "month":
      return `${year}-${month}`;
    case "year":
      return `${year}`;
    default:
      return `${year}-${month}-${day}`;
  }
}

export { getIconDate, formatChsDdate, mapForChsDate, getNowDate };
