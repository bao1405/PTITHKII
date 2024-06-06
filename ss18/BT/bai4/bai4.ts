function validateParams(validationFunc: (...args: any[]) => boolean): MethodDecorator {
    return function(target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function(...args: any[]) {
            if (validationFunc(...args)) {
                return originalMethod.apply(this, args);
            } else {
                throw new Error("Parameter validation failed");
            }
        };

        return descriptor;
    };
}

function isEven(num: number): boolean {
    return num % 2 === 0;
}

class Example {
    @validateParams(isEven)
    printEven(num: number): void {
        console.log(`${num} là số chẵn`);
    }
}

const example = new Example();

try {
    example.printEven(4);
} catch (error) {
    console.error((error as Error).message); 
}

try {
    example.printEven(5);
} catch (error) {
    console.error((error as Error).message);
}
