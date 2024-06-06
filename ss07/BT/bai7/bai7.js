"use strict";
let students = [
    {
        id: 1,
        name: "Bảo",
        class: "A"
    },
    {
        id: 2,
        name: "Dũng",
        class: "B"
    },
    {
        id: 3,
        name: "Nhất",
        class: "A"
    },
    {
        id: 4,
        name: "Hoàng",
        class: "B"
    }
];
function filterStudentsByClass(studentArray, className) {
    return studentArray.filter(student => student.class === className);
}
let classAStudents = filterStudentsByClass(students, "A");
console.log("Sinh viên trong lớp A:", classAStudents);
let classBStudents = filterStudentsByClass(students, "B");
console.log("Sinh viên trong lớp B:", classBStudents);
