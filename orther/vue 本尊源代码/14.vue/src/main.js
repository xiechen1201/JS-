/**
 * v-for  列表渲染
 * 
 * v-for=""
 * 指令表达式 -> (item, index) in/of list
 * index 可选项 -> item in/of list
 * 
 * in/of 都可以使用  数组|对象
 * 
 * 在Vue中两者都是一套定义方法
 * JavaScript枚举对象或者遍历概念里 -> 语义化
 *   for in  -> 对象属性的枚举
 *   for of  -> 可迭代对象的遍历
 * 
 * 遍历可迭代对象 -> for of   (item, index)
 * 枚举对象属性   -> for in   (value, key, index)
 */

// [1, 2, 3].forEach((item, index, list) => {
//   // 名称任意取，符合变量命名规范，具备语义化表达
//   console.log('数组元素别名：', item);
//   // 名称任意取，符合变量命名规范，具备语义化表达
//   console.log('元素在数组中对应的下标：', index);
//   // 名称是对应data里数组数据的属性名
//   console.log('需要遍历的数组', list);
// });

var ListItem = {
  props: {
    item: Object
  },
  template: `
  <li>
    <span>No.{{ item.id }}: </span>
    <span>Name: {{ item.name }} - </span>
    <span>Score: {{ item.score }}</span>
  </li>
  `
}

var App = {
  data () {
    return {
      list: [
        {
          id: 1,
          name: 'Mike',
          score: 89
        },
        {
          id: 2,
          name: 'Tom',
          score: 59
        },
        {
          id: 3,
          name: 'Jack',
          score: 66
        }
      ],
      privateInfo: {
        name: 'Crystal',
        age: 18,
        height: 166,
        weight: 110,
        hobbies: ['Travel', 'Piano', 'Swimming']
      },
      myArray: [[1, 2, 3], [4, 5, 6], [7, 8, 9, 10]],
      starNum: 3
    }
  },
  template: `
    <!--
      v-for 建议搭配key
      key属性必须是唯一的值
      方便vue的就地更新策略的实施
    -->
    <ul>
      <li v-for="(item, index) of list" :key="item.id">
        <span>No.{{ item.id }}: </span>
        <span>Name: {{ item.name }} - </span>
        <span>Score: {{ item.score }}</span>
      </li>
    </ul>

    <!-- 遍历对象 -->
    <!--
      遍历对象的顺序，会按照Object.keys()的结果进行遍历
    -->
    <ul>
      <li v-for="(value, key, index) of privateInfo" :key="index">
        <span>Order {{ index }} -> </span>
        <span>{{ key }}: </span>
        <template v-if="key === 'hobbies'">
          <ul>
            <li v-for="(item, index) of value" :key="index">
              <span>No.{{ index + 1 }}: </span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </template>
        <template v-else>
          <span>{{ value }}</span>
        </template>
      </li>
    </ul>

    <!-- 计算属性与v-for -->
    <ul>
      <li v-for="item of computedList" :key="item.id">
        <span>No.{{ item.id }}: </span>
        <span>{{ item.name }}</span>
        <span
          :style="{ color: item.pass ? 'green' : 'red' }"
        >
          - {{ item.pass ? 'Pass' : 'Failed' }}
        </span>
      </li>
    </ul>

    <!-- method与v-for -->
    <ul v-for="numbers of myArray">
      <li v-for="number of even(numbers)">{{ number }}</li>
    </ul>

    <!-- 值范围 -->
    <div>
      <span 
        v-for="s in 5"
        :key="s"
        :style="{ color: s <= starNum ? 'orange' : 'grey' }"
        @click="setStarNum(s)"
      >★</span>
    </div>

    <!-- template与v-for -->
    <ul>
      <template v-for="item of list" :key="item.id">
        <li>Name: {{ item.name }}</li>
        <li>Score: {{ item.score }}</li>
        <hr />
      </template>
    </ul>

    <!-- 组件与v-for -->
    <!--
      item是不会自动传入组件的
      避免v-for与组件功能与数据耦合，
      保证组件有合理的配置性
      达到最好的复用效果
    -->
    <ul>
      <list-item
        v-for="item of list"
        :key="item.id"
        :item="item"
      ></list-item>
    </ul>
  `,
  components: {
    ListItem
  },
  computed: {
    computedList () {
      return this.list.map(item => {
        item.pass = item.score >= 60;
        return item;
      })
    }
  },
  methods: {
    even (numbers) {
      return numbers.filter(number => number % 2 === 0);
    },
    setStarNum (num) {
      this.starNum = num;
    }
  }
}

Vue.createApp(App).mount('#app');

var keys = Object.keys({
  name: 'Crystal',
  age: 18,
  height: 166,
  weight: 110,
  hobbies: ['Travel', 'Piano', 'Swimming']
});

console.log(keys);

