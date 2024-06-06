"use strict";
class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }
    get width() {
        return this._width;
    }
    set width(value) {
        this._width = value;
    }
    get height() {
        return this._height;
    }
    set height(value) {
        this._height = value;
    }
    calculateArea() {
        return this._width * this._height;
    }
    calculatePerimeter() {
        return 2 * (this._width + this._height);
    }
}
let rectangle = new Rectangle(5, 3);
console.log("Chiều dài của hình chữ nhật:", rectangle.width);
console.log("Chiều rộng của hình chữ nhật:", rectangle.height);
console.log("Chu vi của hình chữ nhật:", rectangle.calculatePerimeter());
console.log("Diện tích của hình chữ nhật:", rectangle.calculateArea());
rectangle.width = 7;
rectangle.height = 4;
console.log("\nSau khi cập nhật kích cỡ:");
console.log("Chiều dài của hình chữ nhật:", rectangle.width);
console.log("Chiều rộng của hình chữ nhật:", rectangle.height);
console.log("Chu vi của hình chữ nhật:", rectangle.calculatePerimeter());
console.log("Diện tích của hình chữ nhật:", rectangle.calculateArea());
