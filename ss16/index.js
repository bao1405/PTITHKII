"use strict";
function type(a) {
    if (typeof a === 'number' || typeof a === 'string')
        return typeof a;
    else
        return "không phải chữ hay số";
}
console.log(type(10));
let number = [];
let number1 = [];
function test(a) {
    if (typeof a === 'number') {
        return [a];
    }
    else if (Array.isArray(a))
        return [a[a.length - 1]];
    else
        return "không phải chữ số";
}
console.log(test(1));
console.log(test([1, 2, 3]));
let generic1 = (Array);
let generic2 = (Array);
let generic3 = (param) => {
    return param;
};
console.log(generic3(5));
console.log(generic3("number"));
console.log(generic3(null));
let test1 = (a) => {
    if (Array.isArray(a)) {
        return [a[a.length - 1]];
    }
    else {
        return [a];
    }
};
console.log(test1([3, 4, 123]));
console.log(test1(1));
