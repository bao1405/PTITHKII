"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    displayInfo() {
        console.log("Name:", this.name);
    }
}
class Student extends Person {
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    displayInfo() {
        super.displayInfo();
        console.log("ID:", this.id);
    }
}
let student = new Student("John Doe", 123456);
console.log("Student Info:");
student.displayInfo();
