/**
 * Vue2 Options API 
 * {
 *   data () {
 *     return {
 *     }
 *   },
 *   components: {},
 *   computed,
 *   methods: {
 *     
 *   }
 * }
 * 
 * Vue3 
 * options api -> 函数式API
 * {
 *   components: {},
 *   props: {},
 *   setup () {
 *     reactive ref  -> 
 *     onMounted  onUnmounted
 * 
 *     reactive({ a: 1 })   count = ref(0)
 * 
 *     onMounted(() => {
 *       // to do next
 *     })
 *   }
 * }
 */

/**
 * 响应式
 * 
 * 定义对象属性
 */

// const obj = {
//   a: 1,
//   b: 2
// }

// obj.a = 2; // update() -> change view

// data.a = 2;

// Object.defineProperty(data, 'a', {
//   get () { // getter函数
//     return data.a;
//   },
//   set (newValue) { // setter函数
//     // update()
//     data.a = newValue;
//   }
// })

// const data = {
//   a: 1,
//   b: {
//     c: 2
//   },
//   d: [1,2,3,4,5]
// }

// observe(data);

// function observe (data) {
//   for (let key in data) {
//     defineReactive(data, key, data[key]);
//   }
// }

// function defineReactive(data, key, value) {
//   if (({}).toString.call(value) === '[object Object]') {
//     observe(value);
//   }

//   Object.defineProperty(data, key, {
//     get () {
//       console.log('GET:', data, key);
//       return value;
//     },
//     set (newValue) {
//       console.log('SET:', data, key, newValue);
//       value = newValue;
//       // update()
//     }
//   }) 
// }

// console.log(data);
// // 数据劫持的过程，进行视图的更新

// // data.d.push(6); // 劫持不到

// // 赋值 -> [.....] => setter函数 => { 1. 赋值 2. update } => data -> d property
// data.d = [...data.d, 6];

// const arrayMethods = ['push']


// Array.prototype.push = function (value) {
//   this.push(value);
//   update();
// }

/**
 * Vue3  JavaScript Proxy API ES6
 * 
 * 
 * 
 */

// const data = {
//   a: 1,
//   b: {
//     c: 2
//   },
//   d: [1,2,3,4,5]
// }

// function reactive (data) {
//   // 不用逐个属性的定义getter setter函数
//   // Proxy的实例是针对原对象的一个代理对象
//   return new Proxy(data, {
//     get (target, key) {
//       // target[key]
//       //console.log('GET:', target, key);
//       const value = Reflect.get(target, key);
//       return (value !== null && typeof value === 'object') ? reactive(value) : value;
//     },
//     set (target, key, value) {
//       // target[key] = value
//       console.log('SET:', target, key, value);
         // update()
//       return Reflect.set(target, key, value);
//       
//     }
//   })
// }

// const $data = reactive(data);

// $data.b.c = 100;

// // console.log($data);

// $data.d.push(6);