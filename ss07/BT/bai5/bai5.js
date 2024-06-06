"use strict";
let anyVariable;
anyVariable = 10;
console.log("Value of anyVariable:", anyVariable);
anyVariable = "Hello";
console.log("Value of anyVariable:", anyVariable);
let unknownVariable;
unknownVariable = 10;
console.log("Value of unknownVariable:", unknownVariable);
unknownVariable = "Hello";
console.log("Value of unknownVariable:", unknownVariable);
let result1;
result1 = unknownVariable + 5;
let result2;
if (typeof unknownVariable === "number") {
    result2 = unknownVariable + 5;
    console.log("Result of calculation:", result2);
}
