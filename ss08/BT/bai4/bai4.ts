function square(input: number | number[]): number | number[] {
    if (typeof input === "number") {
        return input * input;
    } else if (Array.isArray(input)) {
        return input.map((num) => num * num);
    } else {
        throw Error("Invalid input type");
    }
}

console.log(square(5)); 
console.log(square([1, 2, 3, 4, 5])); 
