const list = [
    {
      id: 1,
      pid: 0,
      path: '/home',
      title: '首页',
      name: 'Home'
    },
    {
      id: 2,
      pid: 0,
      path: '/student',
      name: 'Student',
      title: '招生管理'
    },
    {
      id: 100,
      pid: 2,
      path: 'plan',
      link: '/student/plan',
      title: '开班计划',
      name: 'StudentPlan'
    },
    {
      id: 101,
      pid: 2,
      path: 'customer',
      link: '/student/customer',
      title: '意向客户',
      name: 'StudentCustomer'
    },
    {
      id: 102,
      pid: 2,
      path: 'list',
      link: '/student/list',
      title: '客户列表',
      name: 'StudentList'
    },
    {
      id: 3,
      pid: 0,
      path: '/system',
      title: '系统管理',
      name: 'System'
    },
    {
      id: 103,
      pid: 3,
      path: 'user',
      link: '/system/user',
      title: '用户管理',
      name: 'SystemUser'
    },
    {
      id: 104,
      pid: 3,
      path: 'department',
      link: '/system/department',
      title: '部门管理',
      name: 'SystemDepartment'
    },
    {
      id: 105,
      pid: 3,
      path: 'anth',
      link: '/system/anth',
      title: '部门管理',
      name: 'SystemAnth'
    },
    {
      id: 4,
      pid: 0,
      path: '/info',
      title: '信息管理',
      name: 'Info'
    },
    {
      id: 106,
      pid: 4,
      path: 'anth',
      link: '/info/type',
      title: '信息类型',
      name: 'InfoType'
    },
    {
      id: 1001,
      pid: 106,
      path: 'publish',
      link: '/info/type/publish',
      title: '发布信息',
      name: 'InfoTypePublish'
    }
  ];