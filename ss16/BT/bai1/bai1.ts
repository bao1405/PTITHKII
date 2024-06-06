function identity<T>(arg: T): T {
    return arg;
}

let output1 = identity<string>("hello");  
let output2 = identity<number>(123);     

console.log(output1);
console.log(output2); 
