export function render (refMap) {
  for (let key in refMap) {
    _render(refMap[key]);
  }
}
/**
 * ref { deps, value }
 */
export function update (ref) {
  _render(ref);
}

function _render ({ deps, value }) {
  deps.forEach(el => {
    el.textContent = value;
  })
}