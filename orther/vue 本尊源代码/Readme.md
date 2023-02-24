# 渐进式框架  -  vue对自己框架和其他框架对比后，生产的一个特定的名词
# progresive framework

1. Angular -> 综合性框架 开发平台
           -> 项目应用 / X 视图渲染/状态的管理 - 大型应用

2. React -> 用户界面 View 视图层 -> 怎么把数据渲染到视图中
         -> 一个点 视图 -> 库
         -> 状态中央管理（Redux）x
         -> 路由(react-router) x

3. Vue   -> 用户界面 View 视图层 -> 怎么把数据渲染到视图中
         -> 一个点 视图 -> 核心库
         -> Vuex o (选择集成)
         -> vue-router o(选择集成)
         Micro libs

# 数据绑定和数据流

1. 数据绑定 -> 数据与视图渲染直接的关系
           -> React: 单向数据绑定 -> event -> state更改 -> 视图变更
           -> Vue: 双向数据绑定 
                  -> event -> state/data更改 -> 视图变更
                  -> v-model -> 视图变化 -> state/data变更

2. 数据流 -> 数据流淌的方向 -> 父子组件中 数据按照什么方向流动
         -> 单向数据流
         -> React/Vue -> 父组件 -> state -> 子组件 -> props
         -> 子组件 -> props变更 -> 父组件 -> state变更 x
         -> 父组件 -> state变更 -> 子组件 -> props 变更 o
         
         props: immutable value
         state/data: mutable value

3. 22.vue  RecommendTab数据
[
  [
    {
      id: 1,
      title: '北京环球度假区将于9月20日正式向公众开放',
      author: '环球时报',
      dateTime: '08-30 15:01'
    },
    {
      id: 2,
      title: '外媒：美国驻阿使馆主要人员已离开喀布尔',
      author: '京报网',
      dateTime: '08-30 21:58' 
    },
    {
      id: 3,
      title: '“女魔头”劳荣枝案何时宣判？南昌中院回应',
      author: '安徽网',
      dateTime: '08-30 16:33'
    }
  ],
  [
    {
      id: 1,
      title: '冰箱怎么选？什么样的更好用？我家换了三台冰箱，可以说一说感受',
      author: '装修第一站',
      dateTime: '2021-07-22 16:33',
      imgUrl: 'https://p6-tt.byteimg.com/origin/pgc-image/59c4d23e8491458ab9dffbc58f2d6556?from=pc',
      status: 0,
    },
    {
      id: 2,
      title: '孩子被吼时为什么不说话，知道真相后你还敢吼孩子吗？',
      author: '男孩派',
      dateTime: '2021-08-06 09:47',
      imgUrl: 'https://p6-tt.byteimg.com/origin/pgc-image/016b07cba31b48c19f094bb0a8915099.png?from=pc',
      status: 1
    },
    {
      id: 3,
      title: '浙江千亿富豪徐文荣，40岁创业，靠卖粪起家，创立900亿横店帝国',
      author: '戍楼吹角',
      dateTime: '2021-06-24 09:42',
      imgUrl: 'https://p6-tt.byteimg.com/origin/pgc-image/d232b80bb5ab456385cbfe162af59874?from=pc',
      status: 2
    }
  ],
  [
    {
      id: 1,
      name: '36氪',
      imgUrl: 'https://user-center.cdn.bcebos.com/head/raw/uc.101.69a2cd84.PE6uURU56A_JREArUHOTMA?x-bce-process=image/resize,m_lfit,w_200,h_200&autime=60611',
      follows: 18800
    },
    {
      id: 2,
      name: '京报网',
      imgUrl: 'https://user-center.cdn.bcebos.com/head/raw/uc.101.ed185f66.Xf6-FXSHAq4IP0r9OkkLlg?x-bce-process=image/resize,m_lfit,w_200,h_200&autime=59100',
      follows: 339404
    },
    {
      id: 3,
      name: '新京报',
      imgUrl: 'https://user-center.cdn.bcebos.com/head/raw/uc.101.c74011dd.zho-8ZBOlVTWIURQsNAPBw?x-bce-process=image/resize,m_lfit,w_200,h_200&autime=41011',
      follows: 5403958
    }
  ] 
]

3. 26.vue  作用域插槽
[
  {
    id: 1,
    title: 'Nature picture 1',
    desc: 'A creek runs by moss-covered rocks not far From Sol Duc Falls in Olympic National Park. Researchers have found that listening to natural sounds like running water may benefit human health. (Naphat Photography via Getty Images)',
    url: 'https://thumbs-prod.si-cdn.com/uB-j9hC3cqjVqBC7eoYskR-UidY=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/04/8e/048ed839-a581-48af-a0ae-fac6fec00948/gettyimages-168346757_web.jpg'
  },
  {
    id: 2,
    title: 'Nature picture 2',
    desc: 'A new report has found that investing less than 1% of global GDP in nature-based solutions can help tackle climate change and halt biodiversity loss. At the moment, investments in these solutions total to US$133 billion, which is 0.10% of global GDP. And if governments and people want to meet their climate change targets, a total of US$4.1 trillion is needed to close the financing gap in nature by 2050.',
    url: 'https://3z6mv8219w2s2w196j1dkzga-wpengine.netdna-ssl.com/wp-content/uploads/2021/06/WEF-Investments-In-Nature-Based-Solutions-Have-To-Triple-By-2030-To-Address-Climate-Change-Biodiversity-Loss.jpg'
  },
  {
    id: 3,
    title: 'Nature picture 3',
    desc: 'The environment we grow up with informs how we define “nature,” UW psychology professor Peter Kahn says. Encounters with truly wild places inspire people to preserve them.University of Washington',
    url: 'https://s3-us-west-2.amazonaws.com/uw-s3-cdn/wp-content/uploads/sites/6/2017/11/04133712/waterfall-1140x760.jpg'
  }
]
