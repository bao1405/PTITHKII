"use strict";
class Vehicle {
    constructor(name, year, company) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
}
const vehicle1 = new Vehicle("Toyota Camry", 2020, "Toyota");
const vehicle2 = new Vehicle("Honda Civic", 2019, "Honda");
console.log("Thông tin của phương tiện 1:");
console.log("Tên:", vehicle1.name);
console.log("Năm sản xuất:", vehicle1.year);
console.log("Hãng xe:", vehicle1.company);
console.log();
console.log("Thông tin của phương tiện 2:");
console.log("Tên:", vehicle2.name);
console.log("Năm sản xuất:", vehicle2.year);
console.log("Hãng xe:", vehicle2.company);
