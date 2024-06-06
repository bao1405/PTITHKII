"use strict";
function checkNumberType(input) {
    if (typeof input === 'number') {
        if (Number.isInteger(input)) {
            console.log(`${input} là số nguyên`);
        }
        else if (!Number.isNaN(input)) {
            console.log(`${input} là số thực`);
        }
        else {
            console.log(`${input} không phải là số`);
        }
    }
    else {
        console.log(`${input} không phải là số`);
    }
}
checkNumberType(10);
checkNumberType(3.14);
checkNumberType("Hello");
