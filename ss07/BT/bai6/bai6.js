"use strict";
let arrayVariable = ["apple", "banana", "orange"];
let tupleVariable = ["apple", 10, true];
arrayVariable.push("grape");
console.log("Element at index 1 in arrayVariable:", arrayVariable[1]);
console.log("Element at index 1 in tupleVariable:", tupleVariable[1]);
console.log("Elements in arrayVariable:");
arrayVariable.forEach(element => {
    console.log(element);
});
console.log("Elements in tupleVariable:");
tupleVariable.forEach(element => {
    console.log(element);
});
