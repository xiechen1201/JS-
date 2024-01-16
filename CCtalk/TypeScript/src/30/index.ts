// 30 静态代码和鸭子类型

/* 
    静态代码块
*/

/* class Test {
  static a = 10;
  b = 20;

  // 代码块
  static {
    console.log(Test.a); // 静态成员
    console.log(this.b); // 类成员，无法访问
  }

  static test() {
    // console.log(this.b);
    console.log(Test.a);
  } 
} */

// ===========================

/* class Test {
  static a = 10;
  b = 20;

  // 代码块
  // 静态代码块：类加载的时候就会执行
  static {
    console.log("static block");
  }

  // 构造代码块：对象实例化的时候才会执行
  constructor() {
    console.log("constructor");
  }
}

new Test();
new Test(); */

/* 
    静态代码块
    随着类加载（初始化）时，会执行一次
*/

// ==================

// 静态代码块的案例

/* class Test {
  static data: any;

  static {
    (async () => {
      const data = await import("./config");

      Test.data = data.default;
      console.log(Test);
    })();
  }

  constructor() {}
}

new Test(); */

// ==================

// 抽象类

/* 
    鸭子类型
    指像鸭子的东西都是鸭子。
    鸭子的行为：走、叫。

    只要有走和叫的行为都可以看作是一只鸭子。
    鸭子就变成了一种类型。
*/

/* 
    行为都是一只鸭子的行为

    Duck {
        walk(): void;
        shout(): void;
    }

    下面的对象的类型就是鸭子类型。
    因为有同样的行为。
*/

/* const Bird = {
  walk() {
    console.log("Bird walking.");
  },
  shout() {
    console.log("Bird shouting.");
  }
};

const Person = {
  walk() {
    console.log("Person walking.");
  },
  shout() {
    console.log("Person shouting.");
  }
};

function doSth(Animal: any) {
  Animal.walk();
  Animal.shout();
}

doSth(Bird);
doSth(Person); */

/* 
    好处：如果想要拓展一个 Tiger 只需要实现 walk 和 shout 方法即可
    鸭子类型关注的是一个对象它的行为是什么
*/

// ======================

// 更好的演绎

// 抽象类
/* abstract class Duck {
  abstract name: string;
  // 都叫抽象方法
  abstract walk(): void;
  abstract shout(): void;
} */

/* 
    
    抽象类：是不能实例化的类，只能被继承。抽象类内部是抽象方法和属性的定义，当然抽象类也可以定义具体的方法和属性。 
    所有的抽象成员都不需要进行实现或者初始化，实现或者初始化交给子类去完成。

    抽象方法：

    抽象成员不可以被 private 所修饰
*/

// =================================

/* abstract class Duck {
  abstract name: string;
  // 都叫抽象方法
  abstract walk(): void;
  abstract shout(): void;
}

// 实现类
class Bird extends Duck {
  name: string;

  constructor(name: string) {
    super();
    this.name = name;
  }

  walk(): void {
    console.log(this.name + " is walking.");
  }
  shout(): void {
    console.log(this.name + " is shouting.");
  }
}

let bird: Duck = new Bird("百灵鸟");
bird.walk();
bird.shout(); */

/* 
    Bird 类实现了 Duck 类，则认为 Bird 就是 Duck。
*/

// =================================

/* abstract class Duck {
  abstract name: string;
  // 都叫抽象方法
  abstract walk(): void;
  abstract shout(): void;

  // 抽象的东西都是可以在具体实现的方法内访问的
  getName() {
    console.log("我是" + this.name);
  }
}

// 实现类
class Bird extends Duck {
  name: string;

  constructor(name: string) {
    super();
    this.name = name;
  }

  walk(): void {
    console.log(this.name + " is walking.");
  }
  shout(): void {
    console.log(this.name + " is shouting.");
  }
}

let bird: Duck = new Bird("百灵鸟");
bird.walk();
bird.shout();
bird.getName(); */

/* 
    总计：鸭子类型就是通过一个类型来衍生出它的子类型，让共通的实现的方法去干同一个事情。
    同一个类型都具有共同的行为。
*/