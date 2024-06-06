"use strict";
class Vehicle {
    // protected: chỉ có thể truy cập từ bên trong lớp hoặc từ các lớp con
    constructor(speed) {
        this.speed = speed;
    }
}
class Car extends Vehicle {
    // private: chỉ có thể truy cập từ bên trong cùng một lớp
    constructor(speed, gear) {
        super(speed);
        this.gear = gear;
    }
    showInfo() {
        console.log("Speed:", this.speed);
        // Truy cập được vì speed là protected, có thể truy cập từ lớp con
        console.log("Gear:", this.gear);
        // Lỗi biên dịch vì gear là private, không thể truy cập từ lớp ngoài
    }
}
let car = new Car(60, 5);
car.showInfo();
