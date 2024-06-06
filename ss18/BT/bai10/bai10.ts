function validateInput(target: any, propertyName: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function(a: number | string, b: number | string) {
        if (typeof a === 'string' && isNaN(Number(a))) {
            throw new Error(`Invalid input for parameter 'a' in method '${propertyName}'`);
        }
        if (typeof b === 'string' && isNaN(Number(b))) {
            throw new Error(`Invalid input for parameter 'b' in method '${propertyName}'`);
        }
        
        return originalMethod.apply(this, [a, b]);
    };

    return descriptor;
}

class Calculator {
    @validateInput
    add(a: number | string, b: number | string): number | string {
        const numA = typeof a === 'string' ? Number(a) : a;
        const numB = typeof b === 'string' ? Number(b) : b;
        return numA + numB;
    }

    @validateInput
    subtract(a: number | string, b: number | string): number | string {
        const numA = typeof a === 'string' ? Number(a) : a;
        const numB = typeof b === 'string' ? Number(b) : b;
        return numA - numB;
    }

    @validateInput
    multiply(a: number | string, b: number | string): number | string {
        const numA = typeof a === 'string' ? Number(a) : a;
        const numB = typeof b === 'string' ? Number(b) : b;
        return numA * numB;
    }

    @validateInput
    divide(a: number | string, b: number | string): number | string {
        const numA = typeof a === 'string' ? Number(a) : a;
        const numB = typeof b === 'string' ? Number(b) : b;

        if (numB === 0) {
            throw new Error("Division by zero");
        }

        return numA / numB;
    }
}

// Test the Calculator class with decorator
const calculator = new Calculator();

console.log(calculator.add(5, 10)); // Output: 15
console.log(calculator.subtract(10, 5)); // Output: 5
console.log(calculator.multiply(5, 10)); // Output: 50
console.log(calculator.divide(10, 5)); // Output: 2

console.log(calculator.add('5', '10')); // Output: 15
console.log(calculator.subtract('10', '5')); // Output: 5
console.log(calculator.multiply('5', '10')); // Output: 50
console.log(calculator.divide('10', '5')); // Output: 2

console.log(calculator.divide(10, 0)); // Error: Division by zero
