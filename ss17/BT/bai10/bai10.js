"use strict";
// Hàm thực hiện phép cộng
const add = (a, b) => {
    if (typeof a === 'string' && isNaN(Number(a))) {
        return "Giá trị của tham số a không hợp lệ.";
    }
    if (typeof b === 'string' && isNaN(Number(b))) {
        return "Giá trị của tham số b không hợp lệ.";
    }
    return Number(a) + Number(b);
};
// Hàm thực hiện phép trừ
const subtract = (a, b) => {
    if (typeof a === 'string' && isNaN(Number(a))) {
        return "Giá trị của tham số a không hợp lệ.";
    }
    if (typeof b === 'string' && isNaN(Number(b))) {
        return "Giá trị của tham số b không hợp lệ.";
    }
    return Number(a) - Number(b);
};
// Hàm thực hiện phép nhân
const multiply = (a, b) => {
    if (typeof a === 'string' && isNaN(Number(a))) {
        return "Giá trị của tham số a không hợp lệ.";
    }
    if (typeof b === 'string' && isNaN(Number(b))) {
        return "Giá trị của tham số b không hợp lệ.";
    }
    return Number(a) * Number(b);
};
// Hàm thực hiện phép chia
const divide = (a, b) => {
    if (typeof a === 'string' && isNaN(Number(a))) {
        return "Giá trị của tham số a không hợp lệ.";
    }
    if (typeof b === 'string' && isNaN(Number(b))) {
        return "Giá trị của tham số b không hợp lệ.";
    }
    if (Number(b) === 0) {
        return "Không thể chia cho số 0.";
    }
    return Number(a) / Number(b);
};
// Sử dụng các hàm và in kết quả
console.log("Cộng:", add(10, 5));
// Kết quả: 15
console.log("Cộng:", add("10", 5));
// Kết quả: 15
console.log("Cộng:", add("abc", 5));
// Kết quả: Giá trị của tham số a không hợp lệ.
console.log("Trừ:", subtract(10, 5));
// Kết quả: 5
console.log("Trừ:", subtract("10", 5));
// Kết quả: 5
console.log("Trừ:", subtract("abc", 5));
// Kết quả: Giá trị của tham số a không hợp lệ.
console.log("Nhân:", multiply(10, 5));
// Kết quả: 50
console.log("Nhân:", multiply("10", 5));
// Kết quả: 50
console.log("Nhân:", multiply("abc", 5));
// Kết quả: Giá trị của tham số a không hợp lệ.
console.log("Chia:", divide(10, 5));
// Kết quả: 2
console.log("Chia:", divide("10", 5));
// Kết quả: 2
console.log("Chia:", divide("abc", 5));
// Kết quả: Giá trị của tham số a không hợp lệ.
console.log("Chia:", divide(10, 0));
// Kết quả: Không thể chia cho số 0.
