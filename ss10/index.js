"use strict";
/*
    1 đối tượng gồm 2 thành phần chính gồm thuộc tính và
*/
class Person {
    constructor(name, age, fname, lastName, address) {
        this.name = name;
        this.age = age;
        this.fname = fname;
        this.lastName = lastName;
        this.address = address;
    }
    showInfo() {
        console.log("xin chào", this.fname + "" + this.lastName);
    }
    showName() {
        console.log("xin chào", this.name);
    }
    showAge() {
        console.log("tuổi", this.age);
    }
    getAge() {
        return this.age;
    }
    setAge(age) {
        this.age = age;
    }
    setAddress(address) {
        this.address = address;
    }
    get Address() {
        return this.address;
    }
}
let str1 = new Person("hoang", 12, "nguyen", "hoa", "hà nội");
// str1 được gọi là instant của của class Preson
console.log(str1);
// cách để gọi phương thức ra
str1.showInfo();
// assess modifier : phạm vi truy cập
/*
1.Public
2.private
3.Protected:kế thừa
khi class con kế thừa class cha thì class con sẽ có các thuộc tính và phương thức của class cha
khi phạm vi truy cập của protected thì class con không truy cập được class cha
*/
str1.name = "Ez";
str1.showName();
str1.age = 40;
str1.showAge();
str1.setAge(30);
console.log(str1.getAge());
str1.setAddress("sài gòn");
console.log(str1.Address);
