"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function throttleDecorator(interval) {
    let lastCalled = 0;
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            const now = Date.now();
            if (now - lastCalled >= interval) {
                lastCalled = now;
                return originalMethod.apply(this, args);
            }
            else {
                console.log(`Throttling: ${propertyKey} is called too frequently.`);
            }
        };
        return descriptor;
    };
}
class Example {
    print(message) {
        console.log(message);
    }
}
__decorate([
    throttleDecorator(1000)
], Example.prototype, "print", null);
const example = new Example();
example.print("First call");
setTimeout(() => {
    example.print("Second call");
}, 500);
setTimeout(() => {
    example.print("Third call");
}, 1000);
setTimeout(() => {
    example.print("Fourth call");
}, 1500);
