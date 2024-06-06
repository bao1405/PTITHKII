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
function decoratorProperty<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        address = "Hà Nội"; 
    };
}

@decoratorProperty
class Student {
    usedName: string;
    constructor(name: string) {
        this.usedName = name; 
    }
}

const student = new Student("John");
console.log(student.usedName); 


// để dùng decorator phải dùng @ phải đặt trước tên phương thức

