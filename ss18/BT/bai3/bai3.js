"use strict";
function memoize(func) {
    const cache = new Map();
    return function (...args) {
        const key = JSON.stringify(args);
        if (!cache.has(key)) {
            cache.set(key, func(...args));
        }
        return cache.get(key);
    };
}
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
const memoizedFibonacci = memoize(fibonacci);
console.log(memoizedFibonacci(10));
console.log(memoizedFibonacci(10));
