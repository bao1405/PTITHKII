"use strict";
let fName;
let lName;
let fullName;
fName = "Nguyễn";
lName = "Sơn";
if (fName[0].toUpperCase() && lName[0].toUpperCase()) {
    fullName = fName + " " + lName;
}
else {
    fName[0].toUpperCase();
    lName[0].toUpperCase();
    fullName = lName + " " + fName;
}
console.log(fullName);
