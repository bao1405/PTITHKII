"use strict";
function mergeObjects(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const objA = { propA: 10 };
const objB = { propB: "Hello" };
const mergedObj = mergeObjects(objA, objB);
console.log(mergedObj);
