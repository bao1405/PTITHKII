// Union Types
type NumberOrString = number | string;

function printNumberOrString(value: NumberOrString): void {
    console.log(value);
}

interface A {
    propA: number;
}

interface B {
    propB: string;
}

type AandB = A & B;

function printAandB(value: AandB): void {
    console.log(value);
}

const obj: AandB = { propA: 10, propB: "Hello" };
printAandB(obj); 

printNumberOrString(10);
printNumberOrString("Hello"); 