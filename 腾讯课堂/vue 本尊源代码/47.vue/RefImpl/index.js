/**
 * 1. Options API
 * 2. Composition API
 * 3. this指向
 * 4. ref引用 -> 改变了数据 -> view update
 *      { value, deps }
 *      劫持
 */

/**
 * refs: {
 *   title: {
 *     deps: [ h1, h1 ]
 *     _defaultValue: initialValue
 *     _value: initialValue (mutable value)
 *     value: -> set -> update -> 劫持 -> setter  getter
 *     $reset () => _value = _defaultValue -> update
 *   }
 * 
 * }
 * 
 * title ref -> Ref 类
 * 
 * {
 * 
 *   $reset () {} -> Ref.prototype.$reset
 * }
 * 
 * render ()
 * update();
 * #app -> div -> all nodes   {{ xxxx }} -> xxxx <=> ref -> deps -> traversal -> textContent
 * refs -> value -> set () -> update () -> ref -> deps -> traversal -> textContent
 * 
 * bindEvent ()
 * 
 * all nodes -> attribute @click -> setTitle ->  methods['setTitle']
 * 
 * el -> addEventListener -> click -> methods['setTitle'].bind(refs)
 */

/**
 * createApp
 * 
 * ref
 * 
 * 'vue' -> index.js -> createApp/ref
 */

import {
  createApp,
  ref
} from './vue';

createApp('#app', {
  refs: { // 响应式数据集合
    title: ref('This is TITLE'), // returen Ref {}
    content: ref('This is CONTENT')
  },
  methods: {
    setTitle () {
      this.title.value = '这是标题';
    },
    setContent () {
      this.content.value = '这是内容';
    },
    reset () {
      this.title.$reset();
      this.content.$reset();
    }
  }
})