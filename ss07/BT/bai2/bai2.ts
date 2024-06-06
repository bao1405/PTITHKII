let arrayVariable: string[] = ["a", "b", "c"];
let tupleVariable: [number, string, boolean] = [1, "Hello", true];
console.log("Array variable:", arrayVariable);
arrayVariable.push("d");
console.log("Array variable after push:", arrayVariable);
console.log("Tuple variable:", tupleVariable);
tupleVariable[0] = 2;
tupleVariable[1] = "World";
console.log("Tuple variable after modification:", tupleVariable);