"use strict";
function flattenArray(arr) {
    const flattenedArray = [];
    arr.forEach(item => {
        if (Array.isArray(item)) {
            flattenedArray.push(...flattenArray(item));
        }
        else {
            flattenedArray.push(item);
        }
    });
    return flattenedArray;
}
const nestedArray = [1, [2, [3, 4], 5], 6];
const flattenedArray = flattenArray(nestedArray);
console.log(flattenedArray);
