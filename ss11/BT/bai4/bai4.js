"use strict";
class Vehicle {
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown(amount) {
        this.speed -= amount;
        console.log("Chậm lại...");
    }
    speedUp(amount) {
        this.speed += amount;
        console.log("Tăng tốc lên...");
    }
    showSpeed() {
        console.log("Tốc độ hiện tại:", this.speed);
    }
}
class Bicycle extends Vehicle {
    constructor(name, speed, id, gear) {
        super(name, speed, id);
        this.gear = gear;
    }
    showGear() {
        console.log("Gear:", this.gear);
    }
}
let bicycle = new Bicycle("Mountain Bike", 20, 123456, 3);
console.log("Thông tin xe đạp:");
bicycle.showSpeed();
bicycle.showGear();
bicycle.speedUp(10);
bicycle.slowDown(5);
console.log("Thông tin xe đạp được cập nhật:");
bicycle.showSpeed();
bicycle.showGear();
