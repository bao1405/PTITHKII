"use strict";
function swapArrayElements(arr, index1, index2) {
    if (index1 < 0 || index1 >= arr.length || index2 < 0 || index2 >= arr.length) {
        throw new Error("Các chỉ số được cung cấp không hợp lệ");
    }
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
}
let myArray = [1, 2, 3, 4, 5];
console.log("Mảng gốc:", myArray);
let swappedArray = swapArrayElements(myArray, 1, 3);
console.log("Mảng hoán đổi:", swappedArray);
