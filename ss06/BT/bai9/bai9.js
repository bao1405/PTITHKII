"use strict";
const removeDuplicates = (str) => {
    const charMap = {};
    let result = '';
    for (const char of str) {
        if (!charMap[char]) {
            result += char;
            charMap[char] = true;
        }
    }
    return result;
};
// Example usage:
const input1 = "banana";
const input2 = "hello world";
const filtered1 = removeDuplicates(input1);
const filtered2 = removeDuplicates(input2);
console.log(filtered1); // Output: "ban"
console.log(filtered2);
