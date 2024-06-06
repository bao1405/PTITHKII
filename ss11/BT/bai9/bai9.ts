class Shape {
    calculateArea(): number; 
    calculateArea(width: number, height: number): number; 
    calculateArea(radius: number): number; 

    calculateArea(arg1?: number, arg2?: number): number { 
        if (typeof arg1 === "number" && typeof arg2 === "number") {
            return arg1 * arg2; 
        } else if (typeof arg1 === "number") {
            return Math.PI * arg1 * arg1; 
        } else {
            return 0; 
        }
    }
}

class Rectangle extends Shape {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }
}

class Circle extends Shape {
    private radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }
}

let circle: Circle = new Circle(5);
console.log("Circle area:", circle.calculateArea());

let rectangle: Rectangle = new Rectangle(4, 6);
console.log("Rectangle area:", rectangle.calculateArea());
