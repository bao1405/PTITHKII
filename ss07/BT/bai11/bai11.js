"use strict";
function removeFalsyProperties(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }
    if (Array.isArray(obj)) {
        return obj.filter(val => val !== undefined && val !== null && val !== '' && val !== false && val !== 0).map(val => removeFalsyProperties(val));
    }
    let newObj = {};
    for (let key in obj) {
        if (obj[key] !== undefined && obj[key] !== null && obj[key] !== '' && obj[key] !== false && obj[key] !== 0) {
            newObj[key] = removeFalsyProperties(obj[key]);
        }
    }
    return newObj;
}
let obj = {
    a: null,
    b: false,
    c: true,
    d: 0,
    e: 1,
    f: '',
    g: 'a',
    h: [null, false, '', true, 1, 'a'],
    i: { j: 0, k: false, l: 'a' }
};
let newObj = removeFalsyProperties(obj);
console.log("Đối tượng sau khi loại bỏ các thuộc tính falsy:", newObj);
