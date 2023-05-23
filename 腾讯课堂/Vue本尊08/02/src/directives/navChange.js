export default function (el, { value }) {
  const { activeClass, tabClass, currentIndex } = value;
  const oDomList = el.getElementsByClassName(tabClass);

  for (let i = 0; i < oDomList.length; i++) {
    oDomList[i].className = tabClass;
  }

  oDomList[currentIndex].className = `${tabClass} ${activeClass}`;
}
