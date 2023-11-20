"use strict";
// 14 函数签名、调用与构造签名
class Phone {
    constructor(rom, ram) {
        this.rom = rom;
        this.ram = ram;
    }
}
class Dress {
    constructor(color, size) {
        this.color = color;
        this.size = size;
    }
}
function getProduct(Product) {
    switch (Product) {
        case Phone:
            return new Product(1, 2);
        case Dress:
            return new Product("red", 1);
    }
}
const instance = getProduct(Phone);
console.log(instance);
