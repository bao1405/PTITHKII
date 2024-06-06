interface ReturnSameValue<T> {
    (arg: T): T;
}

function returnSameValue<T>(arg: T): T {
    return arg;
}

let result1: number = returnSameValue(10);
let result2: string = returnSameValue("Hello");
let result3: boolean = returnSameValue(true);

console.log(result1); 
console.log(result2);
console.log(result3);