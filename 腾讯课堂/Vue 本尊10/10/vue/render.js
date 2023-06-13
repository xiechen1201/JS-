export function render(refs) {
  for (const key in refs) {
    _render(refs[key]);
  }
}

export function update(ref) {
  _render(ref);
}

function _render({ deps, value }) {
  deps.forEach((element) => {
    element.innerText = value;
  });
}
