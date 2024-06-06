function printVariable<T extends undefined | number>(variable: T): void {
    console.log(variable);
}

const undefinedVar: undefined = undefined;

const numberVar: number = 42;

const anyVar:any= "Hello";

printVariable(undefinedVar); 
printVariable(numberVar);
printVariable(anyVar);