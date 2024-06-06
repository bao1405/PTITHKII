"use strict";
class Student {
    constructor(id, age, email) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
}
let studentArray = [];
let student1 = new Student(1, 20, "student1@example.com");
let student2 = new Student(2, 21, "student2@example.com");
let student3 = new Student(3, 22, "student3@example.com");
studentArray.push(student1, student2, student3);
console.log("Danh sách sinh viên:");
studentArray.forEach(student => {
    console.log("ID:", student.id);
    console.log("Tuổi:", student.age);
    console.log("Email:", student.email);
    console.log();
});
