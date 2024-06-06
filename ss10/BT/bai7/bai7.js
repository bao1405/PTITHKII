"use strict";
class Circle {
    constructor(radius) {
        this._radius = radius;
    }
    get radius() {
        return this._radius;
    }
    set radius(value) {
        this._radius = value;
    }
    calculateArea() {
        return Math.PI * this._radius ** 2;
    }
    calculatePerimeter() {
        return 2 * Math.PI * this._radius;
    }
}
let circle = new Circle(5);
console.log("Bán kính của hình tròn:", circle.radius);
console.log("Chu vi của hình tròn:", circle.calculatePerimeter());
console.log("Diện tích của hình tròn:", circle.calculateArea());
circle.radius = 7;
console.log("\nSau khi cập nhật bán kính:");
console.log("Bán kính của hình tròn:", circle.radius);
console.log("Chu vi của hình tròn:", circle.calculatePerimeter());
console.log("Diện tích của hình tròn:", circle.calculateArea());
