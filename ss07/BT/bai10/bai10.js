"use strict";
function removeFalsyProperties(obj) {
    let newObj = {};
    for (let key in obj) {
        if (obj[key] !== undefined && obj[key] !== null && obj[key] !== true && obj[key] !== '' && obj[key] !== false && obj[key] !== 0) {
            newObj[key] = obj[key];
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
    g: 'a'
};
let newObj = removeFalsyProperties(obj);
console.log("Đối tượng sau khi loại bỏ các thuộc tính falsy:", newObj);
