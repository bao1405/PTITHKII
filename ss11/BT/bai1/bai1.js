"use strict";
class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log("Name:", this.name);
        console.log("Company:", this.company);
        console.log("Phone:", this.phone);
    }
}
class Manager extends Employee {
    constructor(name, company, phone, teamSize) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    printInfo() {
        super.printInfo();
        console.log("Team Size:", this.teamSize);
    }
}
let employee = new Employee("John Doe", "ABC Company", "123456789");
console.log("Employee Info:");
employee.printInfo();
console.log();
let manager = new Manager("Jane Smith", "XYZ Company", "987654321", 10);
console.log("Manager Info:");
manager.printInfo();
