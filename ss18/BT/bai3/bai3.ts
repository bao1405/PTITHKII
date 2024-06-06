function memoize<T extends (...args: any[]) => any>(func: T): T {
    const cache: Map<string, ReturnType<T>> = new Map();

    return function(...args: Parameters<T>): ReturnType<T> {
        const key = JSON.stringify(args);
        if (!cache.has(key)) {
            cache.set(key, func(...args));
        }
        return cache.get(key)!;
    } as T;
}

function fibonacci(n: number): number {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

const memoizedFibonacci = memoize(fibonacci);

console.log(memoizedFibonacci(10));  
console.log(memoizedFibonacci(10)); 
