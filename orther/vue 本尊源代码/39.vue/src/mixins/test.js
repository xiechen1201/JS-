/**
 * 1. 选项中有冲突的时候，组件自身的内容优先
 * 2. 钩子函数的执行，先mixin，再执行组件的
 * 
 * 3. 对象的option, methods, components, directives
 *    合并对象，同名，组件内的优先
 */

/**
 * 不足:
 * 
 * 1. 用于多个组件的时候，可能会多出很多不必要的选项或属性
 *    很可能会无限拆分mixin, 或可能会导致命名冲突
 * 
 * 2. 不是函数，没办法动态传参调整mixin的option的混入情况
 *    极大干扰了mixin的合理性复用
 * 
 * Composition API
 *    组合API，
 *       复用性，集成性的功能 
 *         -> 函数 -> 使用Vue3内置提供的 Composition API
 */

export default {
  data () {
    return {
      title: 'This is TEST',
      content: 'This is CONTENT',
      author: 'Test'
    }
  },
  mounted () {
    console.log('This is TEST MIXIN');
  },
  methods: {
    doMixin () {
      console.log('doMixin');
    },
    doComponent () {
      console.log('do Mixin Component');
    }
  }
}