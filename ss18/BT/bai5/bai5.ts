function combineFunctions(...funcs: Function[]): Function {
    return function(this: any, ...args: any[]) {
        let result: any;
        funcs.forEach(func => {
            result = func.apply(this, args);
            args = [result]; 
        });
        return result;
    };
}

function combinedFunctionsDecorator(...funcs: Function[]): MethodDecorator {
    return function(this: any, target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = combineFunctions.apply(this, funcs.map(func => func.bind(target), originalMethod));

        return descriptor;
    };
}

class Example {
    @combinedFunctionsDecorator(
        (a: number) => a + 1,
        (b: number) => b * 2,
        (c: number) => c - 3
    )
    calculate(value: number): number {
        return value;
    }
}

const example = new Example();
console.log(example.calculate(5)); 
