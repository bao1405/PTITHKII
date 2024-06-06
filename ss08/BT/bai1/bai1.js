"use strict";
function parseInput(input) {
    if (input === "number") {
        return 42;
    }
    else if (input === "boolean") {
        return true;
    }
    else if (input === "string") {
        return "Hello, world!";
    }
    else if (input === "null") {
        return null;
    }
    else if (input === "undefined") {
        return undefined;
    }
    else {
        throw new Error("Invalid input type");
    }
}
console.log(parseInput("number"));
console.log(parseInput("boolean"));
console.log(parseInput("string"));
console.log(parseInput("null"));
console.log(parseInput("undefined"));
