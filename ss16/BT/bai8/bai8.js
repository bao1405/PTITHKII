"use strict";
function mergeObjects(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const object1 = {
    a: 1,
    b: {
        c: 2,
        d: [3, 4],
    }
};
const object2 = {
    a: 5,
    b: {
        c: 6,
        d: [7, 8],
        e: {
            f: 9,
        },
    },
    g: 10,
};
const mergedObject = mergeObjects(object1, object2);
console.log(mergedObject);
