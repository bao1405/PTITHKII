"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Định nghĩa decorator
function logFunctionInfo(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        // Log function name
        console.log(`Function name: ${propertyKey}`);
        // Log input arguments
        console.log("Input arguments:", args);
        // Call the original method
        const result = originalMethod.apply(this, args);
        // Log return value
        console.log("Return value:", result);
        return result;
    };
    return descriptor;
}
// Sử dụng decorator
class Example {
    add(x, y) {
        return x + y;
    }
}
__decorate([
    logFunctionInfo
], Example.prototype, "add", null);
const example = new Example();
example.add(3, 5);
