class Vehicle {
    protected name: string;
    protected speed: number;
    protected id: number;

    constructor(name: string, speed: number, id: number) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }

    slowDown(amount: number): void {
        this.speed -= amount;
        console.log("Chậm lại...");
    }

    speedUp(amount: number): void {
        this.speed += amount;
        console.log("Tăng tốc lên...");
    }

    showSpeed(): void {
        console.log("Tốc độ hiện tại:", this.speed);
    }
}

class Bicycle extends Vehicle {
    private gear: number;

    constructor(name: string, speed: number, id: number, gear: number) {
        super(name, speed, id);
        this.gear = gear;
    }

    showGear(): void {
        console.log("Gear:", this.gear);
    }
}

let bicycle: Bicycle = new Bicycle("Mountain Bike", 20, 123456, 3);
console.log("Thông tin xe đạp:");
bicycle.showSpeed(); 
bicycle.showGear(); 
bicycle.speedUp(10); 
bicycle.slowDown(5); 
console.log("Thông tin xe đạp được cập nhật:");
bicycle.showSpeed(); 
bicycle.showGear();
