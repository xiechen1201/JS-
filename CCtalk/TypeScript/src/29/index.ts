// 29 类的封装性、静态成员和方法重写

/* 
    面向对象的封装性

    对面向对象内部的成员进行访问限制的封装

    public 公开的，成员可以在任何位置被访问的（可以不用显式的定义）
    protected 受保护的，成员可以在父子类之间可以被访问
    private 私有的，只能在本类中进行访问

    static 静态成员，直接定义在类上的成员，不在类实例上
*/

/* class Product {
  //   protected pid: string;
  //   protected brand: string;
  //   protected price: number;
  //   constructor(pid: string, brand: string, price: number) {
  //     this.pid = pid;
  //     this.brand = brand;
  //     this.price = price;
  //   }

  // 简写，简写必须要写修饰符
  constructor(protected pid: string, protected brand: string, protected price: number) {}

  getPid() {
    return this.pid;
  }

  getBrand() {
    return this.brand;
  }

  getPrice() {
    return this.price;
  }
}

class Phone extends Product {
  constructor(pid: string, brand: string, price: number, private rom: number, private ram: number) {
    // 父类的属性必须通过 super 来实例化
    super(pid, brand, price);
  }

  getRom() {
    return this.rom;
  }

  getRam() {
    return this.ram;
  }
}

class Watch extends Product {
  constructor(pid: string, brand: string, price: number, private size: number,) {
    super(pid, brand, price);
  }

  getSize(){
    return this.size; 
  }
}

let phone = new Phone("1", "xiaomi", 1999, 128, 64);
console.log(phone);

let watch = new Watch("2", "apple", 2999, 40);
console.log(watch); */

// ============================

// 继续优化，如果手机的类型是 1T 那么价格就要+1000

/* class Product {
  constructor(protected pid: string, protected brand: string, protected price: number) {}

  getPid() {
    return this.pid;
  }

  getBrand() {
    return this.brand;
  }

  getPrice() {
    return this.price;
  }
}

class Phone extends Product {
  private static extraMoney = 1000;

  constructor(pid: string, brand: string, price: number, private rom: number, private ram: number) {
    // 父类的属性必须通过 super 来实例化
    super(pid, brand, price);
  }

  getRom() {
    return this.rom;
  }

  getRam() {
    return this.ram;
  }

  // 和父类存在同名的属性
  // ❌类型“Phone”中的属性“getPrice”不可分配给基类型“Product”中的同一属性
  // 子类重写父类的方法，这就是方法重写（多态，多种形态）
  getPrice(type?: string) {
    if (type === "1T") {
      // 使用静态属性
      return this.price + Phone.extraMoney;
    }
    return super.getPrice();
  }
}

class Watch extends Product {
  constructor(pid: string, brand: string, price: number, private size: number) {
    super(pid, brand, price);
  }

  getSize() {
    return this.size;
  }
}

let phone = new Phone("1", "xiaomi", 1999, 128, 64);
console.log(phone);
console.log(phone.getPrice("1T"));

let watch = new Watch("2", "apple", 2999, 40);
console.log(watch); */

// =================================

// 继续优化

/* class Product {
  constructor(protected pid: string, protected brand: string, protected price: number) {}

  getPid() {
    return this.pid;
  }

  getBrand() {
    return this.brand;
  }

  getPrice() {
    return this.price;
  }
}

class Phone extends Product {
  private static extraMoney = 1000;

  constructor(pid: string, brand: string, price: number, private rom: number, private ram: number) {
    // 父类的属性必须通过 super 来实例化
    super(pid, brand, price);
  }

  getRom() {
    return this.rom;
  }

  getRam() {
    return this.ram;
  }

  getPrice(type?: string) {
    if (type === "1T") {
      // 使用静态属性
      // return this.price + Phone.extraMoney;

      // 实例方法访问静态成员需要使用类进行访问
      return Phone.getNewPrice(this.price);
    }
    return super.getPrice();
  }

  private static getNewPrice(price: number) {
    // 该方法内的 this 指向的是 Phone 构造函数
    // 静态方法中无法访问实例的成员，因为实例是访问不到的
    // 静态方法是在类实例在生成之前就定义的
    return price + Phone.extraMoney;
  }
}

class Watch extends Product {
  constructor(pid: string, brand: string, price: number, private size: number) {
    super(pid, brand, price);
  }

  getSize() {
    return this.size;
  }
}

let phone = new Phone("1", "xiaomi", 1999, 128, 64);
console.log(phone);
console.log(phone.getPrice("1T"));

let watch = new Watch("2", "apple", 2999, 40);
console.log(watch); */

/* 
    什么情况要用静态成员：
        1、整个类中不变的量
        2、不需要由实例去生成，不需要实例化的时候生成
        3、一般私有成员
*/

// ==============================