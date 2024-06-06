"use strict";
const numbers = [1, 2, 3, 4, 2, 2, 4, 5, 2, 5, 2, 2,7 ,8, 5,12,11,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
function test(numbers) {
    if (numbers.length === 0) {
        return null;
    }
    let count = new Map();
    for (let i = 0; i < numbers.length; i++) {
        const num = numbers[i];
        if (count.has(num)) {
            count.set(num, count.get(num) + 1);
        } else {
            count.set(num, 1);
        }
    }
    let maxCount = 0;
    let test1 = null;
    for (let [num, test] of count) {
        if (test > maxCount) {
            maxCount = test;
            test1 = num;
        }
    }
    return test1;
}
const mostFrequent = test(numbers);
console.log("Số xuất hiện nhiều nhất trong mảng là:", mostFrequent);
