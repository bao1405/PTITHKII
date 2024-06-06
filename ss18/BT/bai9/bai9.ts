function throttleDecorator(interval: number) {
    let lastCalled = 0;

    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function(...args: any[]) {
            const now = Date.now();
            if (now - lastCalled >= interval) {
                lastCalled = now;
                return originalMethod.apply(this, args);
            } else {
                console.log(`Throttling: ${propertyKey} is called too frequently.`);
            }
        };

        return descriptor;
    };
}

class Example {
    @throttleDecorator(1000) 
    print(message: string) {
        console.log(message);
    }
}

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
