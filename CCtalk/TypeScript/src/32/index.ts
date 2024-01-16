// 32 extends 的系统学习

/* 
    extends 在面向对象中就是继承关系
    在 TS 中还有另外的意思
    1、继承（或者拓展）
    2、条件约束
    3、类型分配
*/

// ===========================

/* 
    类继承

    abstract 抽象类的作用：
    1、阻止该类实例化，不能 new，只能被继承
    2、规范子类的属性的注入和方法实现
    3、抽象类可以定义自己的方法，被子类继承
*/

/* abstract class User {
  private username: string;
  private password: string;
  private userLevel: number;
  private isVaild: boolean;

  constructor(username: string, password: string, userLevel: number, isVaild: boolean) {
    this.username = username;
    this.password = password;
    this.userLevel = userLevel;
    this.isVaild = isVaild;
  }

  abstract checkUser(): boolean;
  abstract checkPassword(): boolean;

  test() {}
}

class Admin extends User {
  private passCode: number;

  constructor(username: string, password: string, puserLevel: number, isVaild: boolean, passCode: number) {
    super(username, password, puserLevel, isVaild);
    this.passCode = passCode;
  }

  checkUser(): boolean {
    throw new Error("Method not implemented.");
  }
  checkPassword(): boolean {
    throw new Error("Method not implemented.");
  }
} */

// ===========================

/* 
    接口继承

    interface 核心的并不是针对对象，更对的是规范我们的类如何实现
*/

/* interface User {
  userName: string;
  passWord: string;
  userLevel: number;
  isVaild: boolean;
  checkUser(): boolean;
  checkPassword(): boolean;
}

interface IAdmin extends User {
  passCode: number;
}

class Admin implements IAdmin {
  constructor(
    public passCode: number,
    public userName: string,
    public passWord: string,
    public userLevel: number,
    public isVaild: boolean
  ) {}

  checkUser(): boolean {
    throw new Error("Method not implemented.");
  }
  checkPassword(): boolean {
    throw new Error("Method not implemented.");
  }
} */

// ===========================

/* 
    条件约束
*/

/* 
    {
        1: {
            id: 1,
            name: '张三'
        }
    }

    数组的项必须要具有一个 id，否则无法提取出来
*/

/* const data = [
  {
    id: 1,
    name: "张三"
  },
  {
    id: 2,
    name: "李四"
  },
  {
    id: 3,
    name: "王五"
  }
];

// 继承的对象含不含这个 id
// T 被「约束」为一个带有 id 类型为 number 的属性的一个对象
function formatStrategicData<T extends { id: number }>(data: T[]) {
  return data.reduce((prev, curr) => {
    prev[curr.id] = curr;
    return prev;
  }, <{ [key: string]: any }>{}); // 类型断言
}

const res = formatStrategicData(data);
console.log(res); */

// ===========================

/* type Dispath<T extends { type: string }> = (action: T) => void;

const dispath: Dispath<{ type: string; paylaod: any }> = ({ type, payload }) => {}; */
