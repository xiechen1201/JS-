export default [
  {
    id: 1,
    title: '菜单1'
  },
  {
    id: 2,
    title: '菜单2'
  },
  {
    id: 3,
    title: '菜单3',
    children: [
      {
        id: 31,
        title: '3-1'
      },
      {
        id: 32,
        title: '3-2',
        children: [
          {
            id: 321,
            title: '3-2-1'
          },
          {
            id: 322,
            title: '3-2-2',
            children: [
              {
                id: 3221,
                title: '3-2-2-1'
              },
              {
                id: 3222,
                title: '3-2-2-2'
              },
              {
                id: 3223,
                title: '3-2-2-3',
                children: [
                  {
                    id: 32231,
                    title: '3-2-2-3-1'
                  },
                  {
                    id: 32232,
                    title: '3-2-2-3-2'
                  },
                  {
                    id: 32233,
                    title: '3-2-2-3-3'
                  }
                ]
              }
            ]
          },
          {
            id: 323,
            title: '3-2-3'
          }
        ]
      },
      {
        id: 33,
        title: '3-3'
      }
    ]
  },
  {
    id: 4,
    title: '菜单4'
  },
  {
    id: 5,
    title: '菜单5'
  }
]
