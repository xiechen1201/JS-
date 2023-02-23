import {
  ref,
  createRefs
} from './hooks';

import {
  render
} from './render';

import {
  bindEvent
} from './event';

export function createApp (el, {
  refs,
  methods
}) {
  const $el = document.querySelector(el);
  const allNodes = $el.querySelectorAll('*');
  const refMap = createRefs(refs, allNodes);

  render(refMap);
  bindEvent.apply(refMap, [ methods, allNodes ]);
}

export {
  ref,
  createRefs
}

