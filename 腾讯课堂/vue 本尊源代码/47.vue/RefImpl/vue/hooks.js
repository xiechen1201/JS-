import Ref from './Ref';

const reg_var = /\{\{(.+?)\}\}/

export function ref (initialValue) {
  // const _ref = {
  //   _defaultValue: initialValue,
  //   _value: initialValue,
  //   // get value () {}
  //   // set value () {},
  //   $reset () {

  //   }
  // }

  // Object.prototype.$reset();

  return new Ref(initialValue);
}

export function createRefs (refs, nodes) {

  /**
   * 'title'
   * refs  { title: {}, content: {} }
   * 
   * refs['title']
   */
  nodes.forEach(el => {
    if (reg_var.test(el.textContent)) {
      const refKey = el.textContent.match(reg_var)[1].trim();
      if (refs[refKey]) {
        refs[refKey].deps.add(el);
      }
    }
  });

  return refs;
}