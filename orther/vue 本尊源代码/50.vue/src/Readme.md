# SFC
  Single File Component  单文件组件   .vue  -> .js 
  
  Vue SFC -> 在Options API的基础上扩展Composition API
  <script> 
    export default {
      components,
      props,
      directives: {
        myTest
      },
      setup () { // 作为选项存在在 Options Object
        const a = ref(0);

        return {
          a
        }
      }
    }
  </script>

  编写的代码：
  <script setup>
    const a = ref(0);
  </script>
  编译后的代码：
  <script> 
    export default {
      setup (props, ctx) {
        ctx.emit()

        ctx.slots
        ctx.attrs
      }
    }
  </script>
  一次性编译为 render函数

  web component

# Composition API    解包
  Vue整个包 -> @vue/reactivitity -> reactive ref  watch watchEffect