// # Pinia的实现思想与数据结构分析（1）

/* 
    为什么出现 Pinia？
    1、打破了 Flux 的思想，直接通过 Mutations 来操作异步数据。
    2、打破了 Vuex 的树形结构。
*/

/* 
    createPinia() 创建一个统一管理用户定义的 store 的容器
    defineStore() 帮助你创建拥有 state、getters、actions 的 store 生成器
*/

/* 
    createPinia() 返回一个对象
    {
        install()
        _s:{
            todolist1: Store
        }
    }

    defineStore()
*/

// ## 实现 Pinia（详见 src/pinia/index.js）