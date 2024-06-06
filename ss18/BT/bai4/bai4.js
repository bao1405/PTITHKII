"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function validateParams(validationFunc) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            if (validationFunc(...args)) {
                return originalMethod.apply(this, args);
            }
            else {
                throw new Error("Parameter validation failed");
            }
        };
        return descriptor;
    };
}
function isEven(num) {
    return num % 2 === 0;
}
class Example {
    printEven(num) {
        console.log(`${num} là số chẵn`);
    }
}
__decorate([
    validateParams(isEven)
], Example.prototype, "printEven", null);
const example = new Example();
try {
    example.printEven(4);
}
catch (error) {
    console.error(error.message);
}
try {
    example.printEven(5);
}
catch (error) {
    console.error(error.message);
}
