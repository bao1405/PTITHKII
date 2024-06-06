"use strict";
class Department {
    constructor(id, name, employees) {
        this.id = id;
        this.name = name;
        this.employees = employees;
    }
    describe() {
        console.log(`Department ID: ${this.id}`);
        console.log(`Department Name: ${this.name}`);
    }
}
let department = new Department(1, "IT Department", ["John Doe", "Jane Smith", "Michael Johnson"]);
department.describe();
