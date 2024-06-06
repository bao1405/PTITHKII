"use strict";
function identity(arg) {
    return arg;
}
let output1 = identity("hello");
let output2 = identity(123);
console.log(output1);
console.log(output2);
