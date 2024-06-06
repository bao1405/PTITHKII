"use strict";
function square(input) {
    if (typeof input === "number") {
        return input * input;
    }
    else if (Array.isArray(input)) {
        return input.map((num) => num * num);
    }
    else {
        throw new Error("Invalid input type");
    }
}
console.log(square(5));
console.log(square([1, 2, 3, 4, 5]));
