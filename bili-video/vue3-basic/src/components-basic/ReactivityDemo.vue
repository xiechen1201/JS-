<template></template>

<script>
import { reactive, readonly, ref } from "vue";

export default {
  /**
   * reactive 利用 Proxy 包装了对象，返回一个代理后的对象
   * reactive 响应式的转换是深度的（数据拷贝的深拷贝），子数据也被被代理
        const proxyObj = reactive({
            a: 1,
            b: {
                c: 3,
                d: {
                    e: 5,
                },
            },
        });
   * reactive 返回数据后不要操作原对象，而是使用 proxyObj 对象！
   *
   *
   * readonly 方法接收一个对象，返回一个只读的对象，它也是深度的，任何一层数据都是只读的，否则会抛出警告
   * 
   * 
   * ref 函数返回一个 reactive 响应式可变的 ref 对象，该对象只有一个属性 .value
   * 可以访问到 ref 对象的值
   * 如果 ref 接收一个对象，ref 会调用 reactive 创建一个深度的响应式对象
   * 所以一般 ref 用在基本数据上，reactive 用在引用数据
   * ref 的数据被返回的时候，ref 数据会合并到当前组件的上下文中，所以 template 可以直接访问到，而不需要使用 .value
   * 
   * 
   * 如果 reactive 接收一个 ref 对象，reactive 会讲 ref 对象进行展开
   * const count = ref(0);
   * const state = reactive({ count });
   * state.count = 1;
   * console.log(count.value); // 1
   * 如果给 state.count 赋值一个新的 ref，则会替换老的 ref
   * 
   * 如果 reactive 接收一个 ref 集合，需要使用 .value
   * const list = reactive([ref(0)])
   * list[0].value; // 0
   *  */

  setup() {
    const proxyObj = reactive({
      a: 1,
      b: {
        c: 3,
        d: {
          e: 5,
        },
      },
    });

    let reactiveObj = readonly(proxyObj);
    reactiveObj.a = 10;
    reactiveObj.b.c = 30;

    console.log(proxyObj);

    const count = ref(0);
    count.value = 1;
    console.log(count);

    const refObj = ref({ a: 1, b: 2 });
    console.log(refObj, refObj.value.a);
  },
};
</script>
