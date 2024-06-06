"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function validateInput(target, propertyName, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (a, b) {
        if (typeof a === 'string' && isNaN(Number(a))) {
            throw new Error(`Invalid input for parameter 'a' in method '${propertyName}'`);
        }
        if (typeof b === 'string' && isNaN(Number(b))) {
            throw new Error(`Invalid input for parameter 'b' in method '${propertyName}'`);
        }
        return originalMethod.apply(this, [a, b]);
    };
    return descriptor;
}
class Calculator {
    add(a, b) {
        const numA = typeof a === 'string' ? Number(a) : a;
        const numB = typeof b === 'string' ? Number(b) : b;
        return numA + numB;
    }
    subtract(a, b) {
        const numA = typeof a === 'string' ? Number(a) : a;
        const numB = typeof b === 'string' ? Number(b) : b;
        return numA - numB;
    }
    multiply(a, b) {
        const numA = typeof a === 'string' ? Number(a) : a;
        const numB = typeof b === 'string' ? Number(b) : b;
        return numA * numB;
    }
    divide(a, b) {
        const numA = typeof a === 'string' ? Number(a) : a;
        const numB = typeof b === 'string' ? Number(b) : b;
        if (numB === 0) {
            throw new Error("Division by zero");
        }
        return numA / numB;
    }
}
__decorate([
    validateInput
], Calculator.prototype, "add", null);
__decorate([
    validateInput
], Calculator.prototype, "subtract", null);
__decorate([
    validateInput
], Calculator.prototype, "multiply", null);
__decorate([
    validateInput
], Calculator.prototype, "divide", null);
// Test the Calculator class with decorator
const calculator = new Calculator();
console.log(calculator.add(5, 10)); // Output: 15
console.log(calculator.subtract(10, 5)); // Output: 5
console.log(calculator.multiply(5, 10)); // Output: 50
console.log(calculator.divide(10, 5)); // Output: 2
console.log(calculator.add('5', '10')); // Output: 15
console.log(calculator.subtract('10', '5')); // Output: 5
console.log(calculator.multiply('5', '10')); // Output: 50
console.log(calculator.divide('10', '5')); // Output: 2
console.log(calculator.divide(10, 0)); // Error: Division by zero
