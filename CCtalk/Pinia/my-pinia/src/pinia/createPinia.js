import { ref, effectScope } from 'vue';
import { piniaSymbol } from './global';

function install(app) {
  // this 指向 createPinia 中返回的 {}
  app.provide(piniaSymbol, this);
}

export default function createPinia() {
  const scope = effectScope(true);
  const state = scope.run(() => ref({}));
  const store = new Map();

  return { scope, state, store, install };
}
