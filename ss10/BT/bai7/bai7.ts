class Circle {
    private _radius: number;

    constructor(radius: number) {
        this._radius = radius;
    }

    get radius(): number {
        return this._radius;
    }

    set radius(value: number) {
        this._radius = value;
    }

    calculateArea(): number {
        return Math.PI * this._radius ** 2;
    }

    calculatePerimeter(): number {
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
