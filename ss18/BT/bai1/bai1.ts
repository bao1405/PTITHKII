// Định nghĩa decorator
function logFunctionInfo(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
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
    @logFunctionInfo
    add(x: number, y: number): number {
        return x + y;
    }
}

const example = new Example();
example.add(3, 5);
