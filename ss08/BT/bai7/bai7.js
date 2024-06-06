"use strict";
function checkType(data) {
    if (typeof data === 'number') {
        console.log('This is a number');
    }
    else if (Array.isArray(data)) {
        console.log('This is an array');
    }
    else if (typeof data === 'object') {
        console.log('This is an object');
    }
    else {
        console.log('Unknown type');
    }
}
checkType(42);
checkType([1, 2, 3]);
checkType({ name: 'John', age: 30 });
checkType("Hello");
