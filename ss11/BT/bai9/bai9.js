"use strict";
class Shape {
    calculateArea(arg1, arg2) {
        if (typeof arg1 === "number" && typeof arg2 === "number") {
            return arg1 * arg2;
        }
        else if (typeof arg1 === "number") {
            return Math.PI * arg1 * arg1;
        }
        else {
            return 0;
        }
    }
}
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
}
let circle = new Circle(5);
console.log("Circle area:", circle.calculateArea());
let rectangle = new Rectangle(4, 6);
console.log("Rectangle area:", rectangle.calculateArea());
