"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function middleware(target, key, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        const middlewareFunctions = target.middlewares[key] || [];
        middlewareFunctions.forEach(middleware => {
            middleware(args);
        });
        originalMethod.apply(this, args);
    };
    return descriptor;
}
class MyClass {
    constructor() {
        this.middlewares = {};
    }
    useMiddleware(key, middleware) {
        if (!this.middlewares[key]) {
            this.middlewares[key] = [];
        }
        this.middlewares[key].push(middleware);
    }
    myMethod(param) {
        console.log(`Phương thức ban đầu được gọi với tham số ${param}`);
    }
}
__decorate([
    middleware
], MyClass.prototype, "myMethod", null);
// Example usage:
const instance = new MyClass();
instance.useMiddleware('myMethod', (param) => {
    console.log(`Middleware 1 được gọi với tham số: ${param}`);
});
instance.useMiddleware('myMethod', (param) => {
    console.log(`Middleware 2 được gọi với tham số: ${param}`);
});
instance.myMethod('thông số kiểm tra');
