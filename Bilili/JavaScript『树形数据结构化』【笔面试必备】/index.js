/**
 * 方法一
 * 先分离出第一层数据和非第一层数据
 * 封装方法进行递归
 *  */
console.log(formatData1(list));
function formatData1(list) {
  const parents = list.filter((el) => el.pid === 0);
  const children = list.filter((el) => el.pid !== 0);

  // parents 和 children 都是一个数组
  treeData(parents, children);
  function treeData(parents, children) {
    parents.map((p) => {
      children.map((c) => {
        if (c.pid === p.id) {
          let _children = JSON.parse(JSON.stringify(children));
          // 递归给匹配到的子级去找子级
          treeData([c], _children);
          if (p.children) {
            p.children.push(c);
          } else {
            p.children = [c];
          }
        }
      });
    });
  }

  return parents;
}

/**
 * 方法二
 * 每次遍历数组的时候就去匹配子级
 * */
console.log(formatData2(list));
function formatData2(list) {
  let _data = JSON.parse(JSON.stringify(list));

  // 每项都是父元素
  return _data.filter((p) => {
    // 给没项去匹配子级
    const _arr = _data.filter((c) => c.pid === p.id);
    _arr.length && (p.children = _arr);

    return p.pid === 0;
  });
}