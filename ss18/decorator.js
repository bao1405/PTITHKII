"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
    là những hàm bổ sung cho các class,pomety
    b1:trong filetsconfig
    decorator trong typescript chia làm 5 loại
    1:class
    2.method
    3.property
    4.param
    5.acces

    ==> dùng để bổ sung thay đổi thuộc tính, phương thức cho đối tượng

    cú pháp @
*/
function decoratorProperty(constructor) {
    return class extends constructor {
        constructor() {
            super(...arguments);
            this.address = "Hà Nội";
        }
    };
}
let Student = class Student {
    constructor(name) {
        this.usedName = name;
    }
};
Student = __decorate([
    decoratorProperty
], Student);
const student = new Student("John");
console.log(student.usedName);
// để dùng decorator phải dùng @ phải đặt trước tên phương thức
