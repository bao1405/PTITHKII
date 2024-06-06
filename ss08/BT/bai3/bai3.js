"use strict";
function isSquare(shape) {
    return shape.kind === 'square';
}
function isCircle(shape) {
    return shape.kind === 'circle';
}
function calculateArea(shape) {
    if (isSquare(shape)) {
        return shape.sideLength ** 2;
    }
    else if (isCircle(shape)) {
        return Math.PI * shape.radius ** 2;
    }
    else {
        throw new Error("Invalid shape");
    }
}
const square = { kind: 'square', sideLength: 5 };
const circle = { kind: 'circle', radius: 3 };
console.log(calculateArea(square));
console.log(calculateArea(circle));
