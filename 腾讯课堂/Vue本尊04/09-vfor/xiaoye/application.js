import { compileTemplate } from "./compile";

const domNodePol = [];

export function createApp(options) {
  for (const key in options) {
    switch (key) {
      case "components":
        initComponent(options[key]);
        break;
    }
  }

  return {
    mount
  };
}

function initComponent(components) {
  for (const iterator of components) {
    const [template, state] = iterator();
    const node = compileTemplate(template, state);
    domNodePol.push(node);
  }
}

function mount(el) {
  const app = document.querySelector(el);
  const oFrag = document.createDocumentFragment();

  domNodePol.forEach((el) => {
    oFrag.appendChild(el);
  });

  app.appendChild(oFrag);
}
