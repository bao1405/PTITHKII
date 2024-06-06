type Middleware<T> = (params: T) => void;

function middleware(target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]) {
        const middlewareFunctions: Middleware<any>[] = target.middlewares[key] || [];

        middlewareFunctions.forEach(middleware => {
            middleware(args);
        });

        originalMethod.apply(this, args);
    };

    return descriptor;
}

class MyClass {
    middlewares: { [key: string]: Middleware<any>[] } = {};

    useMiddleware(key: string, middleware: Middleware<any>) {
        if (!this.middlewares[key]) {
            this.middlewares[key] = [];
        }
        this.middlewares[key].push(middleware);
    }

    @middleware
    myMethod(param: string) {
        console.log(`Phương thức ban đầu được gọi với tham số ${param}`);
    }
}

// Example usage:
const instance = new MyClass();

instance.useMiddleware('myMethod', (param: string) => {
    console.log(`Middleware 1 được gọi với tham số: ${param}`);
});

instance.useMiddleware('myMethod', (param: string) => {
    console.log(`Middleware 2 được gọi với tham số: ${param}`);
});

instance.myMethod('thông số kiểm tra');
