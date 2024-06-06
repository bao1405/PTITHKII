"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function combineFunctions(...funcs) {
    return function (...args) {
        let result;
        funcs.forEach(func => {
            result = func.apply(this, args);
            args = [result];
        });
        return result;
    };
}
function combinedFunctionsDecorator(...funcs) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = combineFunctions.apply(this, funcs.map(func => func.bind(target), originalMethod));
        return descriptor;
    };
}
class Example {
    calculate(value) {
        return value;
    }
}
__decorate([
    combinedFunctionsDecorator((a) => a + 1, (b) => b * 2, (c) => c - 3)
], Example.prototype, "calculate", null);
const example = new Example();
console.log(example.calculate(5));
