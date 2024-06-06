"use strict";
function complexLogic(input) {
    if (typeof input === 'number') {
        return input * input;
    }
    else if (typeof input === 'string') {
        return input.length;
    }
    else if (Array.isArray(input)) {
        return input.length;
    }
    else {
        throw new Error('Invalid input type');
    }
}
console.log(complexLogic(5));
console.log(complexLogic("Hello"));
console.log(complexLogic([1, 2, 3, 4, 5]));
