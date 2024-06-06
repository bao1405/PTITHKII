"use strict";
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getDescription() {
        console.log("Name:", this.name);
        console.log("Price:", this.price);
    }
}
class Electronics extends Product {
    constructor(name, price, brand) {
        super(name, price);
        this.brand = brand;
    }
    getDescription() {
        super.getDescription();
        console.log("Brand:", this.brand);
    }
}
let laptop = new Electronics("Laptop", 1500, "Dell");
console.log("Electronics Info:");
laptop.getDescription();
